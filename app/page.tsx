"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DollarSign, Package, Users, ShoppingCart, TrendingUp, TrendingDown, ArrowUpRight } from "lucide-react"

export default function Dashboard() {
  const kpis = [
    {
      title: "Total Revenue",
      value: "$124,500",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
    },
    {
      title: "Total Products",
      value: "1,247",
      change: "+3.2%",
      trend: "up",
      icon: Package,
    },
    {
      title: "Active Customers",
      value: "342",
      change: "+8.1%",
      trend: "up",
      icon: Users,
    },
    {
      title: "Pending Orders",
      value: "23",
      change: "-2.4%",
      trend: "down",
      icon: ShoppingCart,
    },
  ]

  const recentOrders = [
    {
      id: "ORD-001",
      customer: "Fashion Boutique Inc.",
      amount: "$2,450",
      status: "Processing",
      date: "2024-01-15",
    },
    {
      id: "ORD-002",
      customer: "Style Central",
      amount: "$1,890",
      status: "Shipped",
      date: "2024-01-14",
    },
    {
      id: "ORD-003",
      customer: "Trendy Threads",
      amount: "$3,200",
      status: "Delivered",
      date: "2024-01-13",
    },
    {
      id: "ORD-004",
      customer: "Urban Wear Co.",
      amount: "$1,650",
      status: "Processing",
      date: "2024-01-12",
    },
  ]

  const topProducts = [
    {
      name: "Premium Cotton T-Shirt",
      category: "T-Shirts",
      sold: 145,
      revenue: "$4,350",
    },
    {
      name: "Denim Jacket Classic",
      category: "Jackets",
      sold: 89,
      revenue: "$7,120",
    },
    {
      name: "Summer Dress Collection",
      category: "Dresses",
      sold: 67,
      revenue: "$5,360",
    },
    {
      name: "Casual Pants",
      category: "Pants",
      sold: 123,
      revenue: "$3,690",
    },
  ]

  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Welcome back! Here's what's happening with your business today.
          </p>
        </div>
      </header>

      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {kpis.map((kpi) => (
            <Card key={kpi.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
                <kpi.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{kpi.value}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  {kpi.trend === "up" ? (
                    <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                  ) : (
                    <TrendingDown className="mr-1 h-3 w-3 text-red-500" />
                  )}
                  <span className={kpi.trend === "up" ? "text-green-500" : "text-red-500"}>{kpi.change}</span>
                  <span className="ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          {/* Recent Orders */}
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Latest orders from your customers</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.amount}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            order.status === "Delivered"
                              ? "default"
                              : order.status === "Shipped"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{order.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Top Products */}
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Top Products</CardTitle>
              <CardDescription>Best performing products this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={product.name} className="flex items-center">
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">{product.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {product.category} • {product.sold} sold
                      </p>
                    </div>
                    <div className="text-sm font-medium">{product.revenue}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks to help you manage your business</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Button>
                <Package className="mr-2 h-4 w-4" />
                Add New Product
              </Button>
              <Button variant="outline">
                <Users className="mr-2 h-4 w-4" />
                Add Customer
              </Button>
              <Button variant="outline">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Create Order
              </Button>
              <Button variant="outline">
                <ArrowUpRight className="mr-2 h-4 w-4" />
                View Reports
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
