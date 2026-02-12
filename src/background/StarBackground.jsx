"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";

function MovingStars() {
  const ref = useRef();

  // Animate star field rotation
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.02;
      ref.current.rotation.y -= delta * 0.03;
    }
  });

  return (
    <group ref={ref}>
      <Stars
        radius={60}
        depth={20}
        count={900} // smoother
        factor={3}
        saturation={0}
        fade
        speed={1} // enable motion
      />
    </group>
  );
}

export default function StarBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -10,
        pointerEvents: "none",
      }}
      className="bg-black"
    >
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]}
        gl={{ antialias: false }}
      >
        <MovingStars />
      </Canvas>
    </div>
  );
}
