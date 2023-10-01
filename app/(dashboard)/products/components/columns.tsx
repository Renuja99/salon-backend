"use client"

import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "./cell-action"

export type ProductColumn = {
  id: string;
  name: string;
  price: number;
  description: string;
  createdAt: string;
  featured: boolean;
  quantity: number;
  available: boolean;
}

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "available",
    header: "Available",
  },
  {
    accessorKey: "featured",
    header: "Featured",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />
  },
];