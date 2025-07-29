"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { UserProfile } from "@/components/user-profile"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const checkAuth = () => {
      const auth = localStorage.getItem("isAuthenticated")
      setIsAuthenticated(auth === "true")
    }

    checkAuth()
    // Escuchar cambios en localStorage
    window.addEventListener("storage", checkAuth)
    return () => window.removeEventListener("storage", checkAuth)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("user")
    setIsAuthenticated(false)
    router.push("/")
  }

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/dashboard", label: "Dashboard", requireAuth: true },
  ]

  const filteredNavItems = navItems.filter((item) => !item.requireAuth || (item.requireAuth && isAuthenticated))

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">A</span>
            </div>
            <span className="font-bold text-xl">AdminApp</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {filteredNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />

            {isAuthenticated ? (
              <UserProfile onLogout={handleLogout} />
            ) : (
              <div className="hidden md:flex items-center space-x-2">
                <Button variant="ghost" asChild>
                  <Link href="/login">Iniciar Sesión</Link>
                </Button>
              </div>
            )}

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              {filteredNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary px-2 py-1 ${
                    pathname === item.href ? "text-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {!isAuthenticated && (
                <Button variant="ghost" asChild className="justify-start px-2">
                  <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    Iniciar Sesión
                  </Link>
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
