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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  ShoppingCart,
  Download,
  Package,
  Truck,
  CheckCircle,
} from "lucide-react"

export default function Orders() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const orders = [
    {
      id: "ORD-001",
      customer: "Fashion Boutique Inc.",
      customerEmail: "orders@fashionboutique.com",
      items: [
        { name: "Premium Cotton T-Shirt", quantity: 50, price: 15.99 },
        { name: "Denim Jacket Classic", quantity: 20, price: 45.99 },
      ],
      total: 1719.3,
      status: "Processing",
      orderDate: "2024-01-15",
      expectedDelivery: "2024-01-22",
      shippingAddress: "123 Fashion Ave, New York, NY 10001",
    },
    {
      id: "ORD-002",
      customer: "Style Central",
      customerEmail: "purchasing@stylecentral.com",
      items: [
        { name: "Summer Dress Collection", quantity: 30, price: 32.99 },
        { name: "Casual Pants", quantity: 25, price: 28.99 },
      ],
      total: 1714.45,
      status: "Shipped",
      orderDate: "2024-01-14",
      expectedDelivery: "2024-01-20",
      shippingAddress: "456 Style St, Los Angeles, CA 90210",
    },
    {
      id: "ORD-003",
      customer: "Trendy Threads",
      customerEmail: "info@trendythreads.com",
      items: [
        { name: "Premium Cotton T-Shirt", quantity: 100, price: 15.99 },
        { name: "Summer Dress Collection", quantity: 40, price: 32.99 },
      ],
      total: 2918.6,
      status: "Delivered",
      orderDate: "2024-01-13",
      expectedDelivery: "2024-01-19",
      shippingAddress: "789 Trend Blvd, Chicago, IL 60601",
    },
    {
      id: "ORD-004",
      customer: "Urban Wear Co.",
      customerEmail: "orders@urbanwear.com",
      items: [
        { name: "Casual Pants", quantity: 40, price: 28.99 },
        { name: "Denim Jacket Classic", quantity: 15, price: 45.99 },
      ],
      total: 1849.45,
      status: "Pending",
      orderDate: "2024-01-12",
      expectedDelivery: "2024-01-25",
      shippingAddress: "321 Urban St, Miami, FL 33101",
    },
  ]

  const statuses = ["all", "Pending", "Processing", "Shipped", "Delivered", "Cancelled"]

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === "all" || order.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Pending":
        return <Package className="h-4 w-4" />
      case "Processing":
        return <Package className="h-4 w-4" />
      case "Shipped":
        return <Truck className="h-4 w-4" />
      case "Delivered":
        return <CheckCircle className="h-4 w-4" />
      default:
        return <Package className="h-4 w-4" />
    }
  }

  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Orders</h1>
          <p className="text-sm text-muted-foreground">Manage and track all customer orders</p>
        </div>
      </header>

      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        {/* Order Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{orders.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {orders.filter((o) => o.status === "Pending" || o.status === "Processing").length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Shipped Orders</CardTitle>
              <Truck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{orders.filter((o) => o.status === "Shipped").length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${orders.reduce((sum, o) => sum + o.total, 0).toLocaleString()}</div>
            </CardContent>
          </Card>
        </div>

        {/* Header Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search orders..."
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
                Create Order
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create New Order</DialogTitle>
                <DialogDescription>
                  Create a new order for a customer. Fill in all the required information.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="order-customer" className="text-right">
                    Customer
                  </Label>
                  <Select>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select customer" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fashion-boutique">Fashion Boutique Inc.</SelectItem>
                      <SelectItem value="style-central">Style Central</SelectItem>
                      <SelectItem value="trendy-threads">Trendy Threads</SelectItem>
                      <SelectItem value="urban-wear">Urban Wear Co.</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="order-product" className="text-right">
                    Product
                  </Label>
                  <Select>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select product" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="t-shirt">Premium Cotton T-Shirt</SelectItem>
                      <SelectItem value="jacket">Denim Jacket Classic</SelectItem>
                      <SelectItem value="dress">Summer Dress Collection</SelectItem>
                      <SelectItem value="pants">Casual Pants</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="order-quantity" className="text-right">
                    Quantity
                  </Label>
                  <Input id="order-quantity" type="number" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Create Order</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Orders Table */}
        <Card>
          <CardHeader>
            <CardTitle>Order Management</CardTitle>
            <CardDescription>{filteredOrders.length} orders found</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Order Date</TableHead>
                  <TableHead>Expected Delivery</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{order.customer}</div>
                        <div className="text-sm text-muted-foreground">{order.customerEmail}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        {order.items.slice(0, 2).map((item, index) => (
                          <div key={index} className="text-sm">
                            {item.quantity}x {item.name}
                          </div>
                        ))}
                        {order.items.length > 2 && (
                          <div className="text-sm text-muted-foreground">+{order.items.length - 2} more items</div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>${order.total.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          order.status === "Delivered"
                            ? "default"
                            : order.status === "Shipped"
                              ? "secondary"
                              : order.status === "Processing"
                                ? "outline"
                                : "destructive"
                        }
                        className="flex items-center gap-1 w-fit"
                      >
                        {getStatusIcon(order.status)}
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{order.orderDate}</TableCell>
                    <TableCell>{order.expectedDelivery}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
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
