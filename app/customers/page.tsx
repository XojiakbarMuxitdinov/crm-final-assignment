"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Search, Filter, Edit, Trash2, Eye, Users, Mail, Phone } from "lucide-react"

export default function Customers() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const customers = [
    {
      id: "CUST-001",
      name: "Fashion Boutique Inc.",
      email: "orders@fashionboutique.com",
      phone: "+1 (555) 123-4567",
      address: "123 Fashion Ave, New York, NY 10001",
      totalOrders: 45,
      totalSpent: 12450.0,
      lastOrder: "2024-01-15",
      status: "Active",
      notes: "Preferred customer, bulk orders monthly",
    },
    {
      id: "CUST-002",
      name: "Style Central",
      email: "purchasing@stylecentral.com",
      phone: "+1 (555) 234-5678",
      address: "456 Style St, Los Angeles, CA 90210",
      totalOrders: 32,
      totalSpent: 8900.0,
      lastOrder: "2024-01-12",
      status: "Active",
      notes: "Seasonal buyer, focus on summer collections",
    },
    {
      id: "CUST-003",
      name: "Trendy Threads",
      email: "info@trendythreads.com",
      phone: "+1 (555) 345-6789",
      address: "789 Trend Blvd, Chicago, IL 60601",
      totalOrders: 28,
      totalSpent: 15600.0,
      lastOrder: "2024-01-10",
      status: "VIP",
      notes: "High-volume customer, exclusive designs",
    },
    {
      id: "CUST-004",
      name: "Urban Wear Co.",
      email: "orders@urbanwear.com",
      phone: "+1 (555) 456-7890",
      address: "321 Urban St, Miami, FL 33101",
      totalOrders: 18,
      totalSpent: 5200.0,
      lastOrder: "2023-12-20",
      status: "Inactive",
      notes: "Payment issues, follow up required",
    },
  ]

  const statuses = ["all", "Active", "VIP", "Inactive"]

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === "all" || customer.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Customers</h1>
          <p className="text-sm text-muted-foreground">Manage your customer relationships and profiles</p>
        </div>
      </header>

      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        {/* Customer Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{customers.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {customers.filter((c) => c.status === "Active" || c.status === "VIP").length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">VIP Customers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{customers.filter((c) => c.status === "VIP").length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${customers.reduce((sum, c) => sum + c.totalSpent, 0).toLocaleString()}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Header Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search customers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 w-[300px]"
              />
            </div>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-[180px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                {statuses.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status === "all" ? "All Statuses" : status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Customer
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Customer</DialogTitle>
                <DialogDescription>
                  Create a new customer profile. Fill in all the required information.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="customer-name" className="text-right">
                    Name
                  </Label>
                  <Input id="customer-name" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="customer-email" className="text-right">
                    Email
                  </Label>
                  <Input id="customer-email" type="email" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="customer-phone" className="text-right">
                    Phone
                  </Label>
                  <Input id="customer-phone" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="customer-address" className="text-right">
                    Address
                  </Label>
                  <Textarea id="customer-address" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="customer-notes" className="text-right">
                    Notes
                  </Label>
                  <Textarea id="customer-notes" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Create Customer</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Customers Table */}
        <Card>
          <CardHeader>
            <CardTitle>Customer Directory</CardTitle>
            <CardDescription>{filteredCustomers.length} customers found</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead>Total Spent</TableHead>
                  <TableHead>Last Order</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCustomers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{customer.name}</div>
                        <div className="text-sm text-muted-foreground">{customer.id}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center text-sm">
                          <Mail className="mr-1 h-3 w-3" />
                          {customer.email}
                        </div>
                        <div className="flex items-center text-sm">
                          <Phone className="mr-1 h-3 w-3" />
                          {customer.phone}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{customer.totalOrders}</TableCell>
                    <TableCell>${customer.totalSpent.toLocaleString()}</TableCell>
                    <TableCell>{customer.lastOrder}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          customer.status === "VIP"
                            ? "default"
                            : customer.status === "Active"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {customer.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
