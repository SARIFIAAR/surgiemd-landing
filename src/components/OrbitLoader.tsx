"use client";

import dynamic from "next/dynamic";

const OrbitScene = dynamic(() => import("./OrbitScene"), { ssr: false });

export default function OrbitLoader() {
  return <OrbitScene />;
}
