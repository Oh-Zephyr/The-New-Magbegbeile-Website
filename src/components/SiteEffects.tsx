import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";

/**
 * Global site effects ported from the reference design:
 * - IntersectionObserver reveal-on-scroll for .reveal elements
 * - Subtle cursor glow
 * - Re-init reveal on each route resolution
 */
export default function SiteEffects() {
  const router = useRouter();

  useEffect(() => {
    const initReveal = () => {
      const els = document.querySelectorAll<HTMLElement>(".reveal:not(.visible)");
      if (!els.length) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -120px 0px" }
      );
      els.forEach((el) => observer.observe(el));
    };

    initReveal();
    const unsub = router.subscribe("onResolved", () => {
      // Wait a frame for the new route to mount
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0 });
        initReveal();
      });
    });
    return unsub;
  }, [router]);

  useEffect(() => {
    const glow = document.createElement("div");
    glow.style.cssText = `
      position: fixed;
      width: 320px;
      height: 320px;
      background: radial-gradient(circle, rgba(197,160,89,0.05) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9997;
      transition: transform 0.3s ease;
      transform: translate(-50%, -50%);
      top: 0; left: 0;
    `;
    document.body.appendChild(glow);
    const onMove = (e: MouseEvent) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };
    document.addEventListener("mousemove", onMove);
    return () => {
      document.removeEventListener("mousemove", onMove);
      glow.remove();
    };
  }, []);

  return null;
}
