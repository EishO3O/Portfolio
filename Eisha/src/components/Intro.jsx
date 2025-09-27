import React from "react";
import LiquidEther from "../effects/LiquidEther";

export default function Intro() {
  return (
    <section
      id="intro"
      className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* Background effect */}
      <LiquidEther colors={['#64B8B9', '#E6DBA3', '##A3F0B0']} />

      {/* Foreground content */}
      <div className="max-w-2xl px-6 z-10">
        <h1 className="text-5xl font-bold mb-4">Hi, I’m Richard Ryan</h1>
        <p className="text-lg opacity-90 mb-6">
          A passionate developer crafting modern web experiences with React and
          creative coding.
        </p>
        <a
          href="#work"
          className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
