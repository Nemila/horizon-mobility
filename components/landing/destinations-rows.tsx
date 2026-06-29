"use client";

import { useLenis } from "lenis/react";
import Image from "next/image";
import { useRef } from "react";

import { cn } from "@/lib/utils";

const imageParams = "auto=format&fit=crop&w=2400&q=100";

const destinations = [
  {
    name: "Canada",
    flag: "🇨🇦",
    image: `/countries/canada.jpeg`,
  },
  {
    name: "France",
    flag: "🇫🇷",
    image: `/countries/france.jpeg`,
  },
  {
    name: "Royaume-Uni",
    flag: "🇬🇧",
    image: `/countries/uk.jpeg`,
  },
  {
    name: "États-Unis",
    flag: "🇺🇸",
    image: `/countries/usa.jpeg`,
  },
  {
    name: "Turquie",
    flag: "🇹🇷",
    image: `/countries/turquie.jpeg`,
  },
  {
    name: "Allemagne",
    flag: "🇩🇪",
    image: `/countries/allemagne.jpeg`,
  },
  {
    name: "Espagne",
    flag: "🇪🇸",
    image: `/countries/espagne.jpeg`,
  },
  {
    name: "Belgique",
    flag: "🇧🇪",
    image: `/countries/belgium.jpeg`,
  },
];

const rows = [
  [...destinations, ...destinations.slice(0, 4)],
  [...destinations.slice(3), ...destinations, ...destinations.slice(0, 3)],
];

function getMaxShift() {
  if (typeof window === "undefined") return 100;
  if (window.innerWidth >= 1024) return 180;
  if (window.innerWidth >= 640) return 120;
  return 72;
}

function DestinationCard({
  destination,
}: {
  destination: (typeof destinations)[number];
}) {
  return (
    <article className="group relative aspect-16/10 w-72 shrink-0 transition-transform duration-300 hover:scale-[1.02] sm:w-80 lg:w-96">
      <div className="relative h-full w-full overflow-hidden rounded-[22px] border border-border">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          quality={100}
          sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute right-2 bottom-2 flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 shadow-sm">
          <span className="text-base leading-none">{destination.flag}</span>
          <span className="text-xs font-semibold whitespace-nowrap text-primary">
            {destination.name}
          </span>
        </div>
      </div>
    </article>
  );
}

export function DestinationsRows() {
  const trackRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLenis(() => {
    const track = trackRef.current;
    const row0 = rowRefs.current[0];
    const row1 = rowRefs.current[1];
    if (!track || !row0 || !row1) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      row0.style.transform = "";
      row1.style.transform = "";
      return;
    }

    const rect = track.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const progress = Math.max(
      0,
      Math.min(1, (viewportHeight - rect.top) / (viewportHeight + rect.height)),
    );
    const shift = (progress - 0.5) * 2 * getMaxShift();

    row0.style.transform = `translateX(${-shift}px)`;
    row1.style.transform = `translateX(${shift}px)`;
  });

  return (
    <div
      ref={trackRef}
      className="mt-8 w-full overflow-hidden py-10 lg:mt-10 lg:py-14"
    >
      <div className="rotate-3 flex origin-center flex-col gap-4 lg:gap-5">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={cn(
              "relative left-1/2 w-max",
              rowIndex === 0 &&
                "-translate-x-[calc(50%+5rem)] sm:-translate-x-[calc(50%+7rem)] lg:-translate-x-[calc(50%+9rem)]",
              rowIndex === 1 &&
                "-translate-x-[calc(50%-5rem)] sm:-translate-x-[calc(50%-7rem)] lg:-translate-x-[calc(50%-9rem)]",
            )}
          >
            <div
              ref={(node) => {
                rowRefs.current[rowIndex] = node;
              }}
              className="flex will-change-transform gap-3 sm:gap-4 lg:gap-5"
            >
              {row.map((destination, index) => (
                <DestinationCard
                  key={`${rowIndex}-${destination.name}-${index}`}
                  destination={destination}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
