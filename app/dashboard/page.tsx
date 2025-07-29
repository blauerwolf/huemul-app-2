"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Users, ShoppingCart, DollarSign, TrendingUp, Activity, Calendar, FileText, Settings } from "lucide-react"

export default function DashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = () => {
      const auth = localStorage.getItem("isAuthenticated")
      if (auth === "true") {
        setIsAuthenticated(true)
      } else {
        router.push("/login")
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [router])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Cargando dashboard...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  const stats = [
    {
      title: "Usuarios Totales",
      value: "2,543",
      change: "+12%",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Ventas del Mes",
      value: "$45,231",
      change: "+8%",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Pedidos",
      value: "1,234",
      change: "+23%",
      icon: ShoppingCart,
      color: "text-orange-600",
    },
    {
      title: "Crecimiento",
      value: "15.3%",
      change: "+5%",
      icon: TrendingUp,
      color: "text-purple-600",
    },
  ]

  const recentActivities = [
    { id: 1, action: "Nuevo usuario registrado", time: "Hace 2 minutos", status: "success" },
    { id: 2, action: "Pedido #1234 completado", time: "Hace 15 minutos", status: "success" },
    { id: 3, action: "Error en el sistema", time: "Hace 1 hora", status: "error" },
    { id: 4, action: "Backup completado", time: "Hace 2 horas", status: "info" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard Administrativo</h1>
        <p className="text-muted-foreground">Bienvenido de vuelta. Aquí tienes un resumen de tu negocio.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{stat.change}</span> desde el mes pasado
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Chart Card */}
        <Card>
          <CardHeader>
            <CardTitle>Rendimiento Mensual</CardTitle>
            <CardDescription>Progreso hacia los objetivos del mes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Ventas</span>
                <span>75%</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Usuarios Nuevos</span>
                <span>60%</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Satisfacción</span>
                <span>90%</span>
              </div>
              <Progress value={90} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Actividad Reciente
            </CardTitle>
            <CardDescription>Últimas acciones en el sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                  <Badge
                    variant={
                      activity.status === "success"
                        ? "default"
                        : activity.status === "error"
                          ? "destructive"
                          : "secondary"
                    }
                  >
                    {activity.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Acciones Rápidas</CardTitle>
          <CardDescription>Herramientas y funciones más utilizadas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
              <Users className="h-6 w-6" />
              <span className="text-sm">Usuarios</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
              <FileText className="h-6 w-6" />
              <span className="text-sm">Reportes</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
              <Calendar className="h-6 w-6" />
              <span className="text-sm">Calendario</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
              <Settings className="h-6 w-6" />
              <span className="text-sm">Configuración</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
