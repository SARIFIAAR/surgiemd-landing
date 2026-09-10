"use client";

import dynamic from "next/dynamic";

const PhoneScene = dynamic(() => import("./PhoneScene"), { ssr: false });

export default function SceneLoader() {
  return <PhoneScene />;
}
