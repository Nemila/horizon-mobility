"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Users } from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";

const clientAvatars = [
  {
    src: "/avatars/client-1.jpg",
    alt: "Cliente Horizon Mobility",
    fallback: "A",
  },
  {
    src: "/avatars/client-2.jpg",
    alt: "Client Horizon Mobility",
    fallback: "M",
  },
  {
    src: "/avatars/client-3.jpg",
    alt: "Cliente Horizon Mobility",
    fallback: "S",
  },
  {
    src: "/avatars/client-4.jpg",
    alt: "Client Horizon Mobility",
    fallback: "F",
  },
];

export function HeroStatsCard() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="rounded-[1.25rem] border border-border bg-white p-4 shadow-card"
      initial={false}
      animate={prefersReducedMotion ? { y: 0, x: 0 } : { y: -50, x: 50 }}
      transition={
        prefersReducedMotion
          ? undefined
          : {
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }
      }
      style={{ willChange: "transform" }}
    >
      <div className="mb-2 flex size-9 items-center justify-center rounded-full border border-border text-primary">
        <Users className="size-4" strokeWidth={1.5} />
      </div>
      <p className="mb-3 text-sm leading-snug text-secondary-foreground">
        Des milliers de clients accompagnés avec succès à travers le monde.
      </p>
      <div className="flex items-center gap-3">
        <AvatarGroup>
          {clientAvatars.map((client) => (
            <Avatar key={client.src} size="lg">
              <AvatarImage src={client.src} alt={client.alt} />
              <AvatarFallback>{client.fallback}</AvatarFallback>
            </Avatar>
          ))}
        </AvatarGroup>
        <span className="text-sm font-semibold text-primary">+2.5k</span>
      </div>
    </motion.div>
  );
}
