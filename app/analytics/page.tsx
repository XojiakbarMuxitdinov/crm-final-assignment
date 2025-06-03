"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart3, TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart } from "lucide-react"

export default function Analytics() {
  const salesData = [
    { month: "Jan", revenue: 45000, orders: 120, customers: 89 },
    { month: "Feb", revenue: 52000, orders: 145, customers: 102 },
    { month: "Mar", revenue: 48000, orders: 132, customers: 95 },
    { month: "Apr", revenue: 61000, orders: 168, customers: 118 },
    { month: "May", revenue: 55000, orders: 155, customers: 108 },
    { month: "Jun", revenue: 67000, orders: 189, customers: 134 },
  ]

  const topProducts = [
    {
      name: "Premium Cotton T-Shirt",
      category: "T-Shirts",
      revenue: "$12,450",
      units: 415,
      growth: "+15.2%",
      trend: "up",
    },
    {
      name: "Denim Jacket Classic",
      category: "Jackets",
      revenue: "$18,900",
      units: 210,
      growth: "+8.7%",
      trend: "up",
    },
    {
      name: "Summer Dress Collection",
      category: "Dresses",
      revenue: "$15,600",
      units: 195,
      growth: "+12.1%",
      trend: "up",
    },
    {
      name: "Casual Pants",
      category: "Pants",
      revenue: "$9,800",
      units: 245,
      growth: "-2.3%",
      trend: "down",
    },
  ]

  const customerSegments = [
    {
      segment: "VIP Customers",
      count: 45,
      revenue: "$89,500",
      avgOrder: "$1,988",
      percentage: 35,
    },
    {
      segment: "Regular Customers",
      count: 156,
      revenue: "$124,300",
      avgOrder: "$797",
      percentage: 48,
    },
    {
      segment: "New Customers",
      count: 89,
      revenue: "$34,200",
      avgOrder: "$384",
      percentage: 17,
    },
  ]

  const regionalSales = [
    { region: "North America", revenue: "$156,800", orders: 445, growth: "+12.5%" },
    { region: "Europe", revenue: "$89,200", orders: 267, growth: "+8.9%" },
    { region: "Asia Pacific", revenue: "$67,500", orders: 198, growth: "+15.7%" },
    { region: "Latin America", revenue: "$34,500", orders: 123, growth: "+6.2%" },
  ]

  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Analytics</h1>
          <p className="text-sm text-muted-foreground">Comprehensive business insights and performance metrics</p>
        </div>
      </header>

      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$348,000</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                <span className="text-green-500">+12.5%</span>
                <span className="ml-1">from last period</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,009</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                <span className="text-green-500">+8.2%</span>
                <span className="ml-1">from last period</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">290</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                <span className="text-green-500">+15.1%</span>
                <span className="ml-1">from last period</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Order Value</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$345</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                <span className="text-green-500">+3.8%</span>
                <span className="ml-1">from last period</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Top Products */}
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Products</CardTitle>
              <CardDescription>Products with highest revenue and growth</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Revenue</TableHead>
                    <TableHead>Units</TableHead>
                    <TableHead>Growth</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topProducts.map((product) => (
                    <TableRow key={product.name}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{product.name}</div>
                          <div className="text-sm text-muted-foreground">{product.category}</div>
                        </div>
                      </TableCell>
                      <TableCell>{product.revenue}</TableCell>
                      <TableCell>{product.units}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          {product.trend === "up" ? (
                            <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                          ) : (
                            <TrendingDown className="mr-1 h-3 w-3 text-red-500" />
                          )}
                          <span className={product.trend === "up" ? "text-green-500" : "text-red-500"}>
                            {product.growth}
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Customer Segments */}
          <Card>
            <CardHeader>
              <CardTitle>Customer Segments</CardTitle>
              <CardDescription>Revenue breakdown by customer type</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {customerSegments.map((segment) => (
                  <div key={segment.segment} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{segment.segment}</p>
                        <Badge variant="outline">{segment.count}</Badge>
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-sm text-muted-foreground">{segment.revenue}</p>
                        <p className="text-sm text-muted-foreground">Avg: {segment.avgOrder}</p>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2 mt-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: `${segment.percentage}%` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Regional Sales */}
        <Card>
          <CardHeader>
            <CardTitle>Regional Sales Performance</CardTitle>
            <CardDescription>Sales breakdown by geographic region</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Region</TableHead>
                  <TableHead>Revenue</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead>Growth</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {regionalSales.map((region) => (
                  <TableRow key={region.region}>
                    <TableCell className="font-medium">{region.region}</TableCell>
                    <TableCell>{region.revenue}</TableCell>
                    <TableCell>{region.orders}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                        <span className="text-green-500">{region.growth}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Sales Trend Chart Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle>Sales Trend</CardTitle>
            <CardDescription>Monthly revenue, orders, and customer acquisition over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Chart visualization would be implemented here</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Integration with charting library (Chart.js, Recharts, etc.)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
