"use client";

/**
 * Client JS justified: pupil tracking needs pointer position.
 * No animation library. SVG still paints looking forward before/without JS.
 * prefers-reduced-motion keeps pupils centered.
 */

import { useEffect, useRef, useState } from "react";

type Point = { x: number; y: number };

function pupilOffset(
  eyeCenter: Point,
  pointer: Point,
  max = 2.6,
): Point {
  const dx = pointer.x - eyeCenter.x;
  const dy = pointer.y - eyeCenter.y;
  const dist = Math.hypot(dx, dy) || 1;
  const scale = Math.min(max, dist * 0.03) / dist;
  return { x: dx * scale, y: dy * scale };
}

const ZERO = { x: 0, y: 0 };

export default function WatchingFace() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [left, setLeft] = useState(ZERO);
  const [right, setRight] = useState(ZERO);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const root = rootRef.current;
    if (!root) return;

    const onMove = (event: PointerEvent) => {
      if (media.matches) {
        setLeft(ZERO);
        setRight(ZERO);
        return;
      }

      const rect = root.getBoundingClientRect();
      const toScreen = (lx: number, ly: number): Point => ({
        x: rect.left + (lx / 40) * rect.width,
        y: rect.top + (ly / 40) * rect.height,
      });

      const pointer = { x: event.clientX, y: event.clientY };
      setLeft(pupilOffset(toScreen(13, 15), pointer));
      setRight(pupilOffset(toScreen(27, 15), pointer));
    };

    const onLeave = () => {
      setLeft(ZERO);
      setRight(ZERO);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="inline-flex shrink-0 select-none"
      aria-hidden="true"
      title="Hello"
    >
      <svg width="36" height="36" viewBox="0 0 40 40" className="overflow-visible">
        <rect
          x="1"
          y="1"
          width="38"
          height="38"
          rx="10"
          fill="var(--bg)"
          stroke="var(--fg)"
          strokeWidth="1.5"
        />
        <circle
          cx="13"
          cy="15"
          r="4.2"
          fill="var(--bg)"
          stroke="var(--fg)"
          strokeWidth="1.25"
        />
        <circle
          cx="27"
          cy="15"
          r="4.2"
          fill="var(--bg)"
          stroke="var(--fg)"
          strokeWidth="1.25"
        />
        <g
          style={{
            transform: `translate(${left.x}px, ${left.y}px)`,
            transition: "transform 90ms linear",
          }}
        >
          <circle cx="13" cy="15" r="1.9" fill="var(--fg)" />
        </g>
        <g
          style={{
            transform: `translate(${right.x}px, ${right.y}px)`,
            transition: "transform 90ms linear",
          }}
        >
          <circle cx="27" cy="15" r="1.9" fill="var(--fg)" />
        </g>
        <path
          d="M15 26.5c1.8 2.2 8.2 2.2 10 0"
          fill="none"
          stroke="var(--fg)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
