"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { RoundedBox, ContactShadows, Environment, Lightformer } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";

const CYAN = "#38e1d4";

/* ------------------------------ tiny screen texture ------------------------------ */

function makeMiniScreen(): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = 256;
  c.height = 512;
  const ctx = c.getContext("2d")!;
  ctx.fillStyle = "#0a0f1a";
  ctx.fillRect(0, 0, 256, 512);
  ctx.strokeStyle = CYAN;
  ctx.lineWidth = 3;
  ctx.strokeRect(24, 60, 208, 320);
  // simple face guide
  ctx.beginPath();
  ctx.ellipse(128, 210, 62, 82, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = CYAN;
  ctx.font = "600 18px monospace";
  ctx.fillText("ORBIT · AUTO", 24, 44);
  ctx.fillText("9 / 9 ANGLES", 24, 420);
  ctx.strokeStyle = "#f4f7fb";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(128, 462, 26, 0, Math.PI * 2);
  ctx.stroke();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function makeShotTexture(n: number): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = 256;
  c.height = 256;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(128, 118, 30, 128, 128, 200);
  g.addColorStop(0, "#25344f");
  g.addColorStop(1, "#0c1220");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 256, 256);
  ctx.strokeStyle = "rgba(244,247,251,0.9)";
  ctx.lineWidth = 3;
  // schematic profile per angle: rotate a simple face glyph
  ctx.save();
  ctx.translate(128, 128);
  ctx.rotate(((n % 8) / 8) * 0.6 - 0.3);
  ctx.beginPath();
  ctx.ellipse(0, 0, 58, 74, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(-20, -12, 8, 0, Math.PI, true);
  ctx.arc(20, -12, 8, 0, Math.PI, true);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 26, 20, 0.15 * Math.PI, 0.85 * Math.PI);
  ctx.stroke();
  ctx.restore();
  ctx.fillStyle = CYAN;
  ctx.font = "600 20px monospace";
  ctx.fillText(`ANGLE ${String(n + 1).padStart(2, "0")}`, 16, 238);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/* ----------------------------------- patient ----------------------------------- */

function Patient() {
  const head = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (head.current) {
      head.current.position.y = Math.sin(t * 1.1) * 0.05;
      head.current.rotation.y = Math.sin(t * 0.4) * 0.16;
      head.current.rotation.z = Math.sin(t * 0.7) * 0.03;
    }
  });

  const skin = <meshStandardMaterial color="#e8e2d9" roughness={0.55} metalness={0.02} />;
  const feature = "#1d2430";

  return (
    <group position={[0, -0.4, 0]}>
      {/* shoulders / gown */}
      <mesh position={[0, -1.35, 0]}>
        <capsuleGeometry args={[0.85, 0.5, 8, 24]} />
        <meshStandardMaterial color="#16233c" roughness={0.8} />
      </mesh>
      {/* neck */}
      <mesh position={[0, -0.72, 0]}>
        <cylinderGeometry args={[0.24, 0.3, 0.5, 24]} />
        {skin}
      </mesh>
      <group ref={head}>
        {/* head */}
        <mesh scale={[0.78, 0.95, 0.82]}>
          <sphereGeometry args={[1, 48, 48]} />
          {skin}
        </mesh>
        {/* ears */}
        <mesh position={[-0.76, -0.05, 0]} scale={[0.12, 0.22, 0.14]}>
          <sphereGeometry args={[1, 16, 16]} />
          {skin}
        </mesh>
        <mesh position={[0.76, -0.05, 0]} scale={[0.12, 0.22, 0.14]}>
          <sphereGeometry args={[1, 16, 16]} />
          {skin}
        </mesh>
        {/* nose */}
        <mesh position={[0, -0.08, 0.8]} scale={[0.1, 0.16, 0.12]}>
          <sphereGeometry args={[1, 16, 16]} />
          {skin}
        </mesh>
        {/* happy closed eyes: upward arcs */}
        {[-0.3, 0.3].map((x) => (
          <mesh key={x} position={[x, 0.18, 0.72]} rotation={[Math.PI * 0.95, 0, 0]}>
            <torusGeometry args={[0.11, 0.02, 8, 24, Math.PI]} />
            <meshBasicMaterial color={feature} />
          </mesh>
        ))}
        {/* brows */}
        {[-0.3, 0.3].map((x) => (
          <mesh key={`b${x}`} position={[x, 0.38, 0.7]} rotation={[Math.PI * 1.02, 0, 0]}>
            <torusGeometry args={[0.13, 0.016, 8, 24, Math.PI * 0.8]} />
            <meshBasicMaterial color={feature} />
          </mesh>
        ))}
        {/* smile */}
        <mesh position={[0, -0.34, 0.72]} rotation={[Math.PI * 0.06, 0, 0]}>
          <torusGeometry args={[0.2, 0.026, 8, 28, Math.PI * 0.9]} />
          <meshBasicMaterial color={feature} />
        </mesh>
        {/* blush */}
        {[-0.48, 0.48].map((x) => (
          <mesh key={`c${x}`} position={[x, -0.14, 0.62]} rotation={[0, x > 0 ? -0.5 : 0.5, 0]}>
            <circleGeometry args={[0.09, 20]} />
            <meshBasicMaterial color="#e7a08b" transparent opacity={0.55} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

/* -------------------------------- the drone phone -------------------------------- */

function DronePhone({ shots }: { shots: React.RefObject<Array<THREE.Group | null>> }) {
  const group = useRef<THREE.Group>(null);
  const flashLight = useRef<THREE.PointLight>(null);
  const flashQuad = useRef<THREE.Mesh>(null);
  const screen = useMemo(makeMiniScreen, []);
  const state = useRef({ flash: 0, lastSector: -1, taken: 0 });

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const g = group.current;
    if (!g) return;

    // drone orbit path: ellipse + altitude wave + banking
    const speed = 0.55;
    const a = t * speed;
    const r = 2.7 + Math.sin(t * 0.9) * 0.15;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    const y = 0.15 + Math.sin(a * 2.2) * 0.55;
    g.position.set(x, y, z);
    g.lookAt(0, 0, 0);
    g.rotateY(Math.PI); // back camera faces the patient
    g.rotation.z += Math.sin(a * 2.2) * 0.12; // drone banking
    // hover jitter
    g.position.y += Math.sin(t * 7) * 0.02;

    // fire the flash each time we enter a new 1/8 sector of the orbit
    const sector = Math.floor(((a % (Math.PI * 2)) / (Math.PI * 2)) * 8);
    const s = state.current;
    if (sector !== s.lastSector) {
      s.lastSector = sector;
      s.flash = 1;
      // pop the next captured-shot card
      const slot = shots.current?.[s.taken % 8];
      if (slot) {
        slot.userData.pop = 1.4;
        slot.userData.from = g.position.clone();
      }
      s.taken++;
    }
    s.flash = Math.max(0, s.flash - 0.06);
    if (flashLight.current) flashLight.current.intensity = s.flash * 60;
    if (flashQuad.current) {
      (flashQuad.current.material as THREE.MeshBasicMaterial).opacity = s.flash;
    }
  });

  return (
    <group ref={group}>
      <RoundedBox args={[0.66, 1.34, 0.07]} radius={0.09} smoothness={4}>
        <meshStandardMaterial color="#39404d" metalness={0.9} roughness={0.3} />
      </RoundedBox>
      {/* screen faces away from patient (toward viewer side) */}
      <mesh position={[0, 0, -0.045]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[0.6, 1.26]} />
        <meshBasicMaterial map={screen} toneMapped={false} />
      </mesh>
      {/* camera bump toward patient */}
      <mesh position={[-0.18, 0.48, 0.05]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.09, 0.09, 0.05, 24]} />
        <meshPhysicalMaterial color="#0a1018" metalness={0.6} roughness={0.1} clearcoat={1} />
      </mesh>
      {/* flash */}
      <mesh ref={flashQuad} position={[0.05, 0.48, 0.05]}>
        <circleGeometry args={[0.05, 16]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0} toneMapped={false} />
      </mesh>
      <pointLight ref={flashLight} position={[0, 0.4, 0.4]} intensity={0} color="#eef4ff" distance={7} decay={1.6} />
    </group>
  );
}

/* ------------------------------ captured shot cards ------------------------------ */

function ShotGallery({ shots }: { shots: React.RefObject<Array<THREE.Group | null>> }) {
  const textures = useMemo(() => Array.from({ length: 8 }, (_, i) => makeShotTexture(i)), []);

  useFrame(() => {
    shots.current?.forEach((slot, i) => {
      if (!slot) return;
      const pop = (slot.userData.pop as number) ?? 0;
      if (pop > 0) {
        slot.userData.pop = Math.max(0, pop - 0.02);
        const k = Math.min(1, 1.4 - (slot.userData.pop as number)); // 0 -> 1
        const from = (slot.userData.from as THREE.Vector3) ?? slot.position;
        const home = slot.userData.home as THREE.Vector3;
        slot.position.lerpVectors(from, home, THREE.MathUtils.smoothstep(k, 0, 1));
        const s = 0.001 + k * (1 + Math.sin(k * Math.PI) * 0.25);
        slot.scale.setScalar(s);
        slot.visible = true;
      }
    });
  });

  // arc of 8 slots floating above/behind the patient
  return (
    <group>
      {Array.from({ length: 8 }, (_, i) => {
        const spread = (i / 7 - 0.5) * Math.PI * 1.15;
        const home = new THREE.Vector3(Math.sin(spread) * 3.4, 1.9 + Math.cos(spread) * 0.35, -1.6 - Math.cos(spread) * 0.6);
        return (
          <group
            key={i}
            ref={(el) => {
              if (shots.current) shots.current[i] = el;
              if (el) {
                el.userData.home = home;
                el.position.copy(home);
              }
            }}
            position={home}
            visible={false}
            scale={0.001}
          >
            <mesh>
              <planeGeometry args={[0.78, 0.78]} />
              <meshBasicMaterial map={textures[i]} toneMapped={false} side={THREE.DoubleSide} />
            </mesh>
            <mesh position={[0, 0, -0.01]}>
              <planeGeometry args={[0.86, 0.86]} />
              <meshBasicMaterial color="#f4f7fb" side={THREE.DoubleSide} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

/* --------------------------------- theater set --------------------------------- */

function Theater() {
  return (
    <group>
      {/* surgical ring light overhead */}
      <group position={[0, 3.4, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.5, 0.12, 16, 64]} />
          <meshStandardMaterial color="#2a3342" metalness={0.8} roughness={0.35} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.5, 0.05, 12, 64]} />
          <meshBasicMaterial color="#dfe9f5" toneMapped={false} />
        </mesh>
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 1, 12]} />
          <meshStandardMaterial color="#2a3342" metalness={0.8} roughness={0.4} />
        </mesh>
      </group>
      <spotLight position={[0, 3.3, 0]} angle={0.72} penumbra={0.6} intensity={55} color="#e8f1fb" castShadow={false} />
      {/* floor disc */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.15, 0]}>
        <circleGeometry args={[5.4, 64]} />
        <meshStandardMaterial color="#0b1322" roughness={0.9} />
      </mesh>
      {/* cyan floor marking ring — the orbit path */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.14, 0]}>
        <ringGeometry args={[2.6, 2.64, 80]} />
        <meshBasicMaterial color={CYAN} transparent opacity={0.5} toneMapped={false} />
      </mesh>
    </group>
  );
}

/* ----------------------------------- rig + canvas ----------------------------------- */

function Rig() {
  const { camera, pointer } = useThree();
  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.7, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0.5 + pointer.y * 0.4, 0.04);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function OrbitScene() {
  const shots = useRef<Array<THREE.Group | null>>([]);

  return (
    <div className="fixed inset-0 z-0" aria-hidden>
      <Canvas camera={{ position: [0, 0.5, 8.4], fov: 42 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <fog attach="fog" args={["#060b14", 9, 17]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[-6, 1, 4]} intensity={12} color={CYAN} />
        <pointLight position={[6, 2, -3]} intensity={8} color="#7c6cff" />
        <Theater />
        <Patient />
        <DronePhone shots={shots} />
        <ShotGallery shots={shots} />
        <ContactShadows position={[0, -2.13, 0]} opacity={0.6} blur={2.2} far={4} scale={9} color="#000000" />
        <Environment resolution={256}>
          <Lightformer intensity={1.8} position={[0, 5, 4]} scale={[8, 3, 1]} color="#cfe4ff" />
          <Lightformer intensity={1} position={[-6, 0, 2]} rotation-y={Math.PI / 2} scale={[5, 2, 1]} color={CYAN} />
        </Environment>
        <EffectComposer>
          <Bloom intensity={0.5} luminanceThreshold={0.6} luminanceSmoothing={0.3} mipmapBlur />
          <Vignette eskil={false} offset={0.22} darkness={0.8} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
