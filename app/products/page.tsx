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
import { Plus, Search, Filter, Edit, Trash2, Eye } from "lucide-react"
import Image from "next/image"

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const products = [
    {
      id: "PRD-001",
      name: "Premium Cotton T-Shirt",
      description: "High-quality cotton t-shirt perfect for casual wear",
      category: "T-Shirts",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["White", "Black", "Navy", "Gray"],
      wholesalePrice: 15.99,
      retailPrice: 29.99,
      stock: 250,
      status: "Active",
      image: "/placeholder.svg?height=80&width=80&text=T-Shirt",
    },
    {
      id: "PRD-002",
      name: "Denim Jacket Classic",
      description: "Timeless denim jacket with modern fit",
      category: "Jackets",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Blue", "Black", "Light Blue"],
      wholesalePrice: 45.99,
      retailPrice: 89.99,
      stock: 120,
      status: "Active",
      image: "/placeholder.svg?height=80&width=80&text=Jacket",
    },
    {
      id: "PRD-003",
      name: "Summer Dress Collection",
      description: "Lightweight summer dress in various patterns",
      category: "Dresses",
      sizes: ["XS", "S", "M", "L"],
      colors: ["Floral", "Solid Blue", "Striped"],
      wholesalePrice: 32.99,
      retailPrice: 65.99,
      stock: 85,
      status: "Active",
      image: "/placeholder.svg?height=80&width=80&text=Dress",
    },
    {
      id: "PRD-004",
      name: "Casual Pants",
      description: "Comfortable casual pants for everyday wear",
      category: "Pants",
      sizes: ["28", "30", "32", "34", "36"],
      colors: ["Khaki", "Navy", "Black"],
      wholesalePrice: 28.99,
      retailPrice: 55.99,
      stock: 180,
      status: "Low Stock",
      image: "/placeholder.svg?height=80&width=80&text=Pants",
    },
  ]

  const categories = ["all", "T-Shirts", "Jackets", "Dresses", "Pants"]

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Products</h1>
          <p className="text-sm text-muted-foreground">Manage your product catalog and inventory</p>
        </div>
      </header>

      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        {/* Header Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 w-[300px]"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Product
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Product</DialogTitle>
                <DialogDescription>
                  Create a new product in your catalog. Fill in all the required information.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Description
                  </Label>
                  <Textarea id="description" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="category" className="text-right">
                    Category
                  </Label>
                  <Select>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="t-shirts">T-Shirts</SelectItem>
                      <SelectItem value="jackets">Jackets</SelectItem>
                      <SelectItem value="dresses">Dresses</SelectItem>
                      <SelectItem value="pants">Pants</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="wholesale-price" className="text-right">
                    Wholesale Price
                  </Label>
                  <Input id="wholesale-price" type="number" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="retail-price" className="text-right">
                    Retail Price
                  </Label>
                  <Input id="retail-price" type="number" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Create Product</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Products Table */}
        <Card>
          <CardHeader>
            <CardTitle>Product Catalog</CardTitle>
            <CardDescription>{filteredProducts.length} products found</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Sizes</TableHead>
                  <TableHead>Colors</TableHead>
                  <TableHead>Wholesale Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={40}
                          height={40}
                          className="rounded-md"
                        />
                        <div>
                          <div className="font-medium">{product.name}</div>
                          <div className="text-sm text-muted-foreground">{product.id}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {product.sizes.slice(0, 3).map((size) => (
                          <Badge key={size} variant="outline" className="text-xs">
                            {size}
                          </Badge>
                        ))}
                        {product.sizes.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{product.sizes.length - 3}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {product.colors.slice(0, 2).map((color) => (
                          <Badge key={color} variant="outline" className="text-xs">
                            {color}
                          </Badge>
                        ))}
                        {product.colors.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{product.colors.length - 2}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>${product.wholesalePrice}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          product.status === "Active"
                            ? "default"
                            : product.status === "Low Stock"
                              ? "destructive"
                              : "secondary"
                        }
                      >
                        {product.status}
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
