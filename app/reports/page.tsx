"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, FileText, Calendar, TrendingUp, Users, Package, ShoppingCart, DollarSign } from "lucide-react"

export default function Reports() {
  const reports = [
    {
      id: "RPT-001",
      name: "Monthly Sales Report",
      description: "Comprehensive sales analysis for the current month",
      type: "Sales",
      lastGenerated: "2024-01-15",
      status: "Ready",
      size: "2.4 MB",
    },
    {
      id: "RPT-002",
      name: "Customer Analysis Report",
      description: "Customer behavior and segmentation insights",
      type: "Customer",
      lastGenerated: "2024-01-14",
      status: "Ready",
      size: "1.8 MB",
    },
    {
      id: "RPT-003",
      name: "Inventory Status Report",
      description: "Current stock levels and reorder recommendations",
      type: "Inventory",
      lastGenerated: "2024-01-13",
      status: "Ready",
      size: "3.1 MB",
    },
    {
      id: "RPT-004",
      name: "Financial Summary",
      description: "Revenue, costs, and profit analysis",
      type: "Financial",
      lastGenerated: "2024-01-12",
      status: "Processing",
      size: "1.2 MB",
    },
  ]

  const quickStats = [
    {
      title: "Reports Generated",
      value: "24",
      period: "This Month",
      icon: FileText,
    },
    {
      title: "Total Downloads",
      value: "156",
      period: "This Month",
      icon: Download,
    },
    {
      title: "Automated Reports",
      value: "8",
      period: "Active",
      icon: Calendar,
    },
    {
      title: "Data Sources",
      value: "12",
      period: "Connected",
      icon: TrendingUp,
    },
  ]

  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Reports</h1>
          <p className="text-sm text-muted-foreground">Generate and manage business reports and analytics</p>
        </div>
      </header>

      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {quickStats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.period}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Report Generation */}
        <Card>
          <CardHeader>
            <CardTitle>Generate New Report</CardTitle>
            <CardDescription>Create custom reports based on your business needs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-4">
              <Button className="h-20 flex-col">
                <DollarSign className="h-6 w-6 mb-2" />
                Sales Report
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <Users className="h-6 w-6 mb-2" />
                Customer Report
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <Package className="h-6 w-6 mb-2" />
                Inventory Report
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <ShoppingCart className="h-6 w-6 mb-2" />
                Order Report
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Reports List */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Available Reports</CardTitle>
                <CardDescription>Download and manage your generated reports</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="customer">Customer</SelectItem>
                    <SelectItem value="inventory">Inventory</SelectItem>
                    <SelectItem value="financial">Financial</SelectItem>
                  </SelectContent>
                </Select>
                <Button>
                  <Download className="mr-2 h-4 w-4" />
                  Download All
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Report Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Last Generated</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reports.map((report) => (
                  <TableRow key={report.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{report.name}</div>
                        <div className="text-sm text-muted-foreground">{report.description}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{report.type}</Badge>
                    </TableCell>
                    <TableCell>{report.lastGenerated}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          report.status === "Ready"
                            ? "default"
                            : report.status === "Processing"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {report.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{report.size}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" disabled={report.status !== "Ready"}>
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <FileText className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Scheduled Reports */}
        <Card>
          <CardHeader>
            <CardTitle>Scheduled Reports</CardTitle>
            <CardDescription>Automated reports that generate on a regular schedule</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <Calendar className="h-8 w-8 text-muted-foreground" />
                  <div>
                    <h4 className="font-medium">Weekly Sales Summary</h4>
                    <p className="text-sm text-muted-foreground">Generates every Monday at 9:00 AM</p>
                  </div>
                </div>
                <Badge>Active</Badge>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <Calendar className="h-8 w-8 text-muted-foreground" />
                  <div>
                    <h4 className="font-medium">Monthly Customer Report</h4>
                    <p className="text-sm text-muted-foreground">Generates on the 1st of each month</p>
                  </div>
                </div>
                <Badge>Active</Badge>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <Calendar className="h-8 w-8 text-muted-foreground" />
                  <div>
                    <h4 className="font-medium">Quarterly Financial Summary</h4>
                    <p className="text-sm text-muted-foreground">Generates at the end of each quarter</p>
                  </div>
                </div>
                <Badge variant="secondary">Paused</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
