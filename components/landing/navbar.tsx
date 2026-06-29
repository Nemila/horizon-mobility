import Link from "next/link"

import { Container } from "@/components/landing/container"
import { Logo } from "@/components/landing/logo"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Accueil", href: "#accueil", active: true },
  { label: "À propos", href: "#apropos" },
  { label: "Nos services", href: "#services", hasChevron: true },
  { label: "Destinations", href: "#destinations" },
  { label: "Ressources", href: "#ressources" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/70 shadow-[0_1px_0_rgba(16,40,90,0.04)] backdrop-blur-xl backdrop-saturate-150">
      <Container className="flex items-center justify-between py-6">
        <Logo priority />
        <nav className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant={item.active ? "default" : "ghost"}
              size="sm"
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>

        <Button variant="primary-outline" className="hidden sm:inline-flex">
          Demande de consultation
        </Button>
      </Container>
    </header>
  )
}
