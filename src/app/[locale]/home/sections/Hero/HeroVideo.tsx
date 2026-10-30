"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface HeroVideoProps {
  cta: { label: string; pageId: string };
}

// Edge colour of the video from a given second on, latest first. Fills the space around
// the frame on landscape screens that are narrower than 16:9.
const BACKDROP = [
  { from: 23.5, color: "var(--teal)" },
  { from: 17.6, color: "#113E43" },
  { from: 5.5, color: "var(--teal)" },
  { from: 0, color: "#fff" },
];

// Second at which "Projekt besprechen" appears in the video.
const CTA_FROM = 28;

/** Plays once without controls and stays on its last frame. */
export default function HeroVideo({ cta }: HeroVideoProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [still, setStill] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    const stage = stageRef.current;
    const video = videoRef.current;
    if (!stage || !video) return;

    let frame = 0;
    const orientation = window.matchMedia("(orientation: portrait)");

    // Rotating swaps to the other cut, which has the same timing
    const onRotate = () => {
      const time = video.currentTime;
      video.load();
      video.addEventListener("loadedmetadata", () => (video.currentTime = time), { once: true });
    };

    const stopSync = () => {
      cancelAnimationFrame(frame);
      orientation.removeEventListener("change", onRotate);
    };

    const showStill = () => {
      stopSync();
      stage.style.backgroundColor = "var(--teal)";
      setStill(true);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      showStill();
      return;
    }

    // Blocked autoplay (e.g. iOS low power mode) would leave an empty stage
    video.play().catch((error: DOMException) => error.name !== "AbortError" && showStill());
    // A failed load only fires on the last source; play() stays pending in that case
    video.querySelector("source:last-child")?.addEventListener("error", showStill);
    orientation.addEventListener("change", onRotate);

    frame = requestAnimationFrame(function sync() {
      const time = video.currentTime;
      stage.style.backgroundColor = BACKDROP.find(({ from }) => time >= from)!.color;
      if (time >= CTA_FROM) setCtaVisible(true);
      frame = requestAnimationFrame(sync);
    });

    return stopSync;
  }, []);

  return (
    <div ref={stageRef} className="hero-video-stage absolute inset-x-0 bottom-0 overflow-hidden bg-white motion-reduce:bg-(--teal)">
      <div className="hero-video-frame absolute" data-still={still || undefined}>
        {!still && (
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
            tabIndex={-1}
            aria-hidden="true"
            className="block w-full h-full pointer-events-none"
          >
            <source src="/videos/hero-desktop.mp4" type="video/mp4" media="(orientation: landscape)" />
            <source src="/videos/hero-mobile.mp4" type="video/mp4" />
          </video>
        )}

        <div className="hero-video-still absolute inset-0">
          <Image src="/videos/hero-desktop-end.webp" alt="" fill sizes="110vw" className="portrait:hidden" />
          <Image src="/videos/hero-mobile-end.webp" alt="" fill sizes="100vw" className="landscape:hidden" />
        </div>

        <a
          href={cta.pageId}
          aria-label={cta.label}
          className={`hero-video-cta absolute flex border-b-2 border-transparent transition-colors hover:border-(--lime) motion-reduce:visible ${
            still || ctaVisible ? "" : "invisible"
          }`}
        />
      </div>
    </div>
  );
}
