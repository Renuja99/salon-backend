import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import { formatter } from "@/lib/utils";

import { ProductsClient } from "./components/client";
// import { ProductColumn } from "./components/columns";

const ProductsPage = async () => {
  const products = await prismadb.product.findMany({
    select: {
        id: true,
        blendName: true,
        description: true,
        price: true,
        quantity: true,
        available: true,
        createdAt: true,
        featured: true,
        productImages: {
          select: {
            imageUrl: true,
          },
        },
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  const formattedProducts: any= products.map((item) => ({
    id: item.id,
    name: item.blendName,
    description: item.description,
    price: item.price,
    available: item.available,
    featured: item.featured,
    quantity: item.quantity,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductsClient data={formattedProducts} />
      </div>
    </div>
  );
};

export default ProductsPage;