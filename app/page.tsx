import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Bienvenido a tu
            <span className="text-primary"> Dashboard</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Una aplicación moderna y elegante para gestionar tu negocio con facilidad. Accede a todas las herramientas
            que necesitas en un solo lugar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg">
              <Link href="/login">Iniciar Sesión</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/dashboard">Ver Dashboard</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="mb-16">
        <div className="relative w-full max-w-4xl mx-auto">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Dashboard Preview"
            width={800}
            height={400}
            className="rounded-lg shadow-2xl w-full h-auto"
            priority
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Características Principales</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Dashboard Intuitivo</CardTitle>
                <CardDescription>Interfaz moderna y fácil de usar para gestionar todos tus datos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Visualiza métricas importantes, gráficos interactivos y reportes en tiempo real.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tema Personalizable</CardTitle>
                <CardDescription>Cambia entre modo claro y oscuro según tus preferencias</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Experiencia visual optimizada para cualquier momento del día.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Gestión de Usuarios</CardTitle>
                <CardDescription>Sistema completo de autenticación y perfiles de usuario</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Control total sobre accesos y permisos de usuarios.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
