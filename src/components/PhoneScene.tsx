"use client";

import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { RoundedBox, Environment, Lightformer, ContactShadows, Html } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ---------------------------------- palette ---------------------------------- */
const CYAN = "#38e1d4";
const PAPER = "#f4f7fb";
const STEEL = "#8a98ad";

/* --------------------------- canvas-drawn screen UI --------------------------- */

type CaptureStep = 0 | 1 | 2;

function drawEyelid(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  w: number,
  color: string,
  lineWidth: number,
  offsetY = 0
) {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.beginPath();
  // upper lid
  ctx.moveTo(cx - w / 2, cy + offsetY);
  ctx.bezierCurveTo(
    cx - w / 4, cy - w * 0.32 + offsetY,
    cx + w / 4, cy - w * 0.32 + offsetY,
    cx + w / 2, cy + offsetY
  );
  // lower lid
  ctx.moveTo(cx - w / 2, cy + offsetY);
  ctx.bezierCurveTo(
    cx - w / 4, cy + w * 0.22 + offsetY,
    cx + w / 4, cy + w * 0.22 + offsetY,
    cx + w / 2, cy + offsetY
  );
  ctx.stroke();
  // iris
  ctx.beginPath();
  ctx.arc(cx, cy - w * 0.02 + offsetY, w * 0.13, 0, Math.PI * 2);
  ctx.stroke();
  // brow hint
  ctx.beginPath();
  ctx.moveTo(cx - w / 2.1, cy - w * 0.42 + offsetY);
  ctx.bezierCurveTo(
    cx - w / 5, cy - w * 0.55 + offsetY,
    cx + w / 5, cy - w * 0.55 + offsetY,
    cx + w / 2.4, cy - w * 0.46 + offsetY
  );
  ctx.stroke();
}

function makeScreenTexture(step: CaptureStep): THREE.CanvasTexture {
  const W = 512;
  const H = 1024;
  const c = document.createElement("canvas");
  c.width = W;
  c.height = H;
  const ctx = c.getContext("2d")!;

  ctx.fillStyle = "#0a0f1a";
  ctx.fillRect(0, 0, W, H);

  // status bar
  ctx.fillStyle = STEEL;
  ctx.font = "600 22px system-ui";
  ctx.fillText("9:41", 44, 46);

  // header
  ctx.fillStyle = PAPER;
  ctx.font = "700 30px system-ui";
  ctx.fillText("SurgieMD", 44, 108);
  ctx.fillStyle = STEEL;
  ctx.font = "500 20px monospace";
  ctx.fillText("PATIENT #0042 · VISIT 4", 44, 142);

  // viewfinder area
  const vfY = 180;
  const vfH = 620;
  ctx.fillStyle = "#0d1422";
  ctx.fillRect(24, vfY, W - 48, vfH);

  // corner brackets
  ctx.strokeStyle = CYAN;
  ctx.lineWidth = 4;
  const b = 34;
  const corners: Array<[number, number, number, number]> = [
    [40, vfY + 16, 1, 1],
    [W - 40, vfY + 16, -1, 1],
    [40, vfY + vfH - 16, 1, -1],
    [W - 40, vfY + vfH - 16, -1, -1],
  ];
  for (const [x, y, sx, sy] of corners) {
    ctx.beginPath();
    ctx.moveTo(x + sx * b, y);
    ctx.lineTo(x, y);
    ctx.lineTo(x, y + sy * b);
    ctx.stroke();
  }

  const cx = W / 2;
  const cy = vfY + vfH / 2;

  if (step === 0) {
    // FRAME — thin-line guide only
    drawEyelid(ctx, cx, cy, 300, CYAN, 3);
    ctx.fillStyle = CYAN;
    ctx.font = "600 22px monospace";
    ctx.fillText("FRAME · CENTER THE ORBIT", 44, vfY + vfH - 40);
  } else if (step === 1) {
    // ALIGN — ghost overlay converging
    drawEyelid(ctx, cx, cy, 300, "rgba(138,152,173,0.5)", 3, 14);
    drawEyelid(ctx, cx, cy, 300, CYAN, 3);
    ctx.fillStyle = CYAN;
    ctx.font = "600 22px monospace";
    ctx.fillText("ALIGN · MATCH 98%", 44, vfY + vfH - 40);
  } else {
    // CAPTURE — locked
    drawEyelid(ctx, cx, cy, 300, "#57e6a4", 3);
    ctx.strokeStyle = "#57e6a4";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(cx, cy, 190, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = "#57e6a4";
    ctx.font = "600 22px monospace";
    ctx.fillText("CAPTURED · YAW 0.0° PITCH 0.1°", 44, vfY + vfH - 40);
  }

  // metadata row
  ctx.fillStyle = STEEL;
  ctx.font = "500 20px monospace";
  ctx.fillText("35MM · f/2.8 · 40CM · GRID LOCK", 44, 856);

  // shutter
  ctx.strokeStyle = PAPER;
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(cx, 936, 44, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = step === 2 ? "#57e6a4" : CYAN;
  ctx.beginPath();
  ctx.arc(cx, 936, 32, 0, Math.PI * 2);
  ctx.fill();

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

/* ------------------------- explode-layer textures ------------------------- */

function makeLayerTexture(
  kind: "photo" | "guide" | "meta" | "record"
): THREE.CanvasTexture {
  const W = 512;
  const H = 1024;
  const c = document.createElement("canvas");
  c.width = W;
  c.height = H;
  const ctx = c.getContext("2d")!;

  if (kind === "photo") {
    const g = ctx.createRadialGradient(256, 420, 60, 256, 480, 620);
    g.addColorStop(0, "#22314e");
    g.addColorStop(1, "#0a0f1a");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = "rgba(56,225,212,0.75)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(256, 440, 170, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = STEEL;
    ctx.font = "500 22px monospace";
    ctx.fillText("RAW CAPTURE", 40, 80);
  } else if (kind === "guide") {
    ctx.clearRect(0, 0, W, H);
    drawEyelid(ctx, 256, 440, 320, CYAN, 5);
    ctx.strokeStyle = "rgba(56,225,212,0.35)";
    ctx.lineWidth = 2;
    for (let i = 1; i < 6; i++) {
      ctx.beginPath();
      ctx.moveTo((W / 6) * i, 160);
      ctx.lineTo((W / 6) * i, 760);
      ctx.stroke();
    }
    ctx.fillStyle = CYAN;
    ctx.font = "600 22px monospace";
    ctx.fillText("SILHOUETTE GUIDE", 40, 80);
  } else if (kind === "meta") {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "rgba(14,22,38,0.72)";
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = CYAN;
    ctx.font = "600 24px monospace";
    ctx.fillText("EXIF · GEOMETRY", 40, 80);
    ctx.fillStyle = PAPER;
    ctx.font = "500 24px monospace";
    const rows = [
      "YAW        0.0°",
      "PITCH      0.1°",
      "ROLL       0.0°",
      "DISTANCE   40 CM",
      "FOCAL      35 MM",
      "APERTURE   f/2.8",
      "FLASH      OFF",
      "AMBIENT    5400 K",
    ];
    rows.forEach((r, i) => ctx.fillText(r, 60, 200 + i * 72));
  } else {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "rgba(14,22,38,0.85)";
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = CYAN;
    ctx.font = "600 24px monospace";
    ctx.fillText("PATIENT RECORD", 40, 80);
    for (let i = 0; i < 6; i++) {
      const y = 150 + i * 130;
      ctx.fillStyle = "#141e33";
      ctx.fillRect(40, y, W - 80, 100);
      ctx.fillStyle = PAPER;
      ctx.font = "600 24px system-ui";
      ctx.fillText(`Visit ${i + 1}`, 64, y + 44);
      ctx.fillStyle = STEEL;
      ctx.font = "500 20px monospace";
      ctx.fillText(i % 2 ? "POST-OP · 9 IMG" : "PRE-OP · 9 IMG", 64, y + 78);
    }
  }

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/* --------------------------------- the phone --------------------------------- */

// mutable choreography state driven by GSAP, read in useFrame
type Choreo = {
  x: number;
  y: number;
  rotY: number;
  rotX: number;
  explode: number;
  scale: number;
  orbit: number;
  step: number;
  intro: number;
};

const LAYERS: Array<{
  kind: "photo" | "guide" | "meta" | "record";
  z: number;
  label: string;
}> = [
  { kind: "photo", z: 0.55, label: "Camera layer" },
  { kind: "guide", z: 1.1, label: "Alignment guide" },
  { kind: "meta", z: 1.65, label: "Captured geometry" },
  { kind: "record", z: 2.2, label: "Patient record" },
];

function Phone({ choreo }: { choreo: Choreo }) {
  const group = useRef<THREE.Group>(null);
  const parts = {
    chassis: useRef<THREE.Group>(null),
    screen: useRef<THREE.Group>(null),
    camera: useRef<THREE.Group>(null),
    buttons: useRef<THREE.Group>(null),
  };
  const layerRefs = useRef<Array<THREE.Group | null>>([]);
  const labelRefs = useRef<Array<HTMLDivElement | null>>([]);
  const { viewport, pointer } = useThree();

  const screenTextures = useMemo(
    () => ([makeScreenTexture(0), makeScreenTexture(1), makeScreenTexture(2)]),
    []
  );
  const layerTextures = useMemo(
    () => LAYERS.map((l) => makeLayerTexture(l.kind)),
    []
  );
  const screenMat = useRef<THREE.MeshBasicMaterial>(null);

  useFrame(({ clock }) => {
    const g = group.current;
    if (!g) return;
    const t = clock.elapsedTime;
    const c = choreo;

    // responsive horizontal travel
    const spread = Math.min(1, viewport.width / 9);

    // assembly intro: parts fly in from offsets as intro goes 1 -> 0
    const i = c.intro;
    if (parts.chassis.current) {
      parts.chassis.current.position.set(-6 * i, 0, -4 * i);
      parts.chassis.current.rotation.y = -1.6 * i;
    }
    if (parts.screen.current && c.explode === 0) {
      parts.screen.current.position.set(0, 5 * i, 2.5 * i);
    }
    if (parts.camera.current) {
      parts.camera.current.position.set(4 * i, 2 * i, -2 * i);
    }
    if (parts.buttons.current) {
      parts.buttons.current.position.set(0, -5 * i, 0);
    }

    // idle float + cursor parallax
    const floatY = Math.sin(t * 0.9) * 0.07 * (1 - c.explode);
    const px = pointer.x * 0.08;
    const py = pointer.y * 0.05;

    g.position.x = c.x * spread;
    g.position.y = c.y + floatY;
    g.rotation.x = c.rotX - py;
    g.rotation.y = c.rotY + px + c.orbit * t * 0.45;
    g.scale.setScalar(c.scale);

    // explode: screen layers fan out in z
    LAYERS.forEach((l, idx) => {
      const ref = layerRefs.current[idx];
      if (ref) {
        ref.position.z = 0.16 + c.explode * l.z;
        ref.visible = c.explode > 0.02;
      }
      const el = labelRefs.current[idx];
      if (el) {
        const o = Math.max(0, c.explode * 1.4 - 0.4 - idx * 0.08);
        el.style.opacity = String(Math.min(1, o));
      }
    });

    // capture-step screen swap
    if (screenMat.current) {
      const tex = screenTextures[Math.min(2, Math.floor(c.step)) as CaptureStep];
      if (screenMat.current.map !== tex) {
        screenMat.current.map = tex;
        screenMat.current.needsUpdate = true;
      }
    }
  });

  return (
    <group ref={group}>
      {/* chassis */}
      <group ref={parts.chassis}>
        <RoundedBox args={[3.1, 6.4, 0.3]} radius={0.42} smoothness={6}>
          <meshStandardMaterial color="#39404d" metalness={0.9} roughness={0.32} />
        </RoundedBox>
      </group>

      {/* screen + front glass */}
      <group ref={parts.screen}>
        <mesh position={[0, 0, 0.16]}>
          <planeGeometry args={[2.82, 6.12]} />
          <meshBasicMaterial ref={screenMat} map={screenTextures[0]} toneMapped={false} />
        </mesh>
        <RoundedBox args={[2.96, 6.26, 0.03]} radius={0.34} smoothness={6} position={[0, 0, 0.17]}>
          <meshPhysicalMaterial
            color="#0b1220"
            metalness={0}
            roughness={0.05}
            transmission={0.55}
            thickness={0.2}
            transparent
            opacity={0.28}
          />
        </RoundedBox>
      </group>

      {/* exploded UI layers */}
      {LAYERS.map((l, idx) => (
        <group
          key={l.kind}
          ref={(el) => {
            layerRefs.current[idx] = el;
          }}
          visible={false}
        >
          <mesh>
            <planeGeometry args={[2.82, 6.12]} />
            <meshBasicMaterial
              map={layerTextures[idx]}
              transparent
              toneMapped={false}
              side={THREE.DoubleSide}
            />
          </mesh>
          <Html
            position={[1.7, 2.4 - idx * 1.5, 0]}
            style={{ pointerEvents: "none" }}
          >
            <div
              ref={(el) => {
                labelRefs.current[idx] = el;
              }}
              style={{ opacity: 0 }}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <span className="block h-px w-10 bg-cyan" />
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-cyan">
                {l.label}
              </span>
            </div>
          </Html>
        </group>
      ))}

      {/* rear camera module */}
      <group ref={parts.camera} position={[0, 0, 0]}>
        <RoundedBox args={[1.5, 1.5, 0.14]} radius={0.3} smoothness={4} position={[-0.62, 2.28, -0.2]}>
          <meshStandardMaterial color="#2c3340" metalness={0.85} roughness={0.35} />
        </RoundedBox>
        {[[-0.94, 2.6], [-0.3, 2.6], [-0.62, 1.96]].map(([x, y], i) => (
          <mesh key={i} position={[x, y, -0.28]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.22, 0.22, 0.1, 32]} />
            <meshPhysicalMaterial
              color="#0a1018"
              metalness={0.6}
              roughness={0.1}
              clearcoat={1}
            />
          </mesh>
        ))}
      </group>

      {/* side buttons */}
      <group ref={parts.buttons}>
        <mesh position={[1.58, 1.1, 0]}>
          <boxGeometry args={[0.06, 0.7, 0.12]} />
          <meshStandardMaterial color="#4a5261" metalness={0.9} roughness={0.3} />
        </mesh>
        <mesh position={[1.58, 0.2, 0]}>
          <boxGeometry args={[0.06, 0.45, 0.12]} />
          <meshStandardMaterial color="#4a5261" metalness={0.9} roughness={0.3} />
        </mesh>
      </group>
    </group>
  );
}

/* ------------------------------ scroll choreography ------------------------------ */

function Choreographer({ choreo }: { choreo: Choreo }) {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      choreo.intro = 0;
      return;
    }

    // load-in assembly
    const intro = gsap.to(choreo, {
      intro: 0,
      duration: 1.8,
      ease: "power3.out",
      delay: 0.3,
    });

    const ctx = gsap.context(() => {
      // Act II — capture flow: phone pins left, steps advance
      gsap.timeline({
        scrollTrigger: { trigger: "#capture", start: "top bottom", end: "top top", scrub: true },
      }).to(choreo, { x: -1.9, rotY: 0.12, rotX: 0.02, y: -0.1, ease: "none" });

      gsap.timeline({
        scrollTrigger: { trigger: "#capture", start: "top top", end: "bottom bottom", scrub: true },
      }).to(choreo, { step: 2.99, ease: "none" });

      // Act III — explode: phone recenters, layers fan out
      gsap.timeline({
        scrollTrigger: { trigger: "#explode", start: "top bottom", end: "top top", scrub: true },
      }).to(choreo, { x: 0.6, rotY: -0.55, rotX: 0.12, ease: "none" });

      gsap.timeline({
        scrollTrigger: { trigger: "#explode", start: "top top", end: "bottom bottom", scrub: true },
      })
        .to(choreo, { explode: 1, ease: "none", duration: 0.7 })
        .to(choreo, { explode: 1, ease: "none", duration: 0.3 });

      // Act IV — exit for showcase/security/pricing
      gsap.timeline({
        scrollTrigger: { trigger: "#showcase", start: "top bottom", end: "top 30%", scrub: true },
      }).to(choreo, { scale: 0, y: -2.5, explode: 0, ease: "none" });

      // Final CTA — phone returns, slow orbit
      gsap.timeline({
        scrollTrigger: { trigger: "#cta", start: "top bottom", end: "top 20%", scrub: true },
      }).to(choreo, { scale: 0.82, x: 0, y: -0.4, rotY: 0, rotX: 0.04, orbit: 1, step: 2, ease: "none" });
    });

    return () => {
      intro.kill();
      ctx.revert();
    };
  }, [choreo]);

  return null;
}

/* ---------------------------------- the canvas ---------------------------------- */

export default function PhoneScene() {
  const choreo = useMemo<Choreo>(
    () => ({
      x: 0, y: -0.2, rotY: -0.42, rotX: 0.05,
      explode: 0, scale: 1, orbit: 0, step: 0, intro: 1,
    }),
    []
  );

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 9], fov: 38 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Choreographer choreo={choreo} />
        <ambientLight intensity={0.25} />
        <directionalLight position={[4, 6, 6]} intensity={1.1} color="#dfeaff" />
        <pointLight position={[-6, -2, 4]} intensity={18} color={CYAN} />
        <pointLight position={[6, 3, -3]} intensity={10} color="#7c6cff" />
        <Phone choreo={choreo} />
        <ContactShadows position={[0, -3.6, 0]} opacity={0.5} blur={2.4} far={5} color="#000000" />
        <Environment resolution={256}>
          <Lightformer intensity={2.2} position={[0, 4, 6]} scale={[9, 3, 1]} color="#cfe4ff" />
          <Lightformer intensity={1.4} position={[-6, 0, 2]} rotation-y={Math.PI / 2} scale={[6, 2, 1]} color={CYAN} />
          <Lightformer intensity={1.1} position={[6, -1, 2]} rotation-y={-Math.PI / 2} scale={[6, 2, 1]} color="#7c6cff" />
        </Environment>
        <EffectComposer>
          <Bloom intensity={0.35} luminanceThreshold={0.55} luminanceSmoothing={0.3} mipmapBlur />
          <Vignette eskil={false} offset={0.25} darkness={0.75} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
