"use client";
import { useEffect, useRef } from "react";

/** Custom dot+ring cursor — disabled on touch devices via CSS. */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let raf = 0;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx, ry = my;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mx + "px";
        dotRef.current.style.top = my + "px";
      }
    };

    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.left = rx + "px";
        ringRef.current.style.top = ry + "px";
      }
      raf = requestAnimationFrame(tick);
    };

    const hoverIn = () => document.body.classList.add("cursor-hover");
    const hoverOut = () => document.body.classList.remove("cursor-hover");
    const targets = "a, button, [data-cursor='hover']";

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll(targets).forEach((el) => {
      el.addEventListener("mouseenter", hoverIn);
      el.addEventListener("mouseleave", hoverOut);
    });
    raf = requestAnimationFrame(tick);

    // Re-bind hover listeners on DOM change
    const obs = new MutationObserver(() => {
      document.querySelectorAll(targets).forEach((el) => {
        el.removeEventListener("mouseenter", hoverIn);
        el.removeEventListener("mouseleave", hoverOut);
        el.addEventListener("mouseenter", hoverIn);
        el.addEventListener("mouseleave", hoverOut);
      });
    });
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="c-dot" aria-hidden />
      <div ref={ringRef} className="c-ring" aria-hidden />
    </>
  );
}
