import { useState } from "react";
import { clsx } from "clsx";

import Button from "@/components/ui/button";

export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  newPrice?: number;
  colors: string[];
}

const colors: Record<string, string> = {
  brown: "#ad9f8e",
  green: "#547862",
  gray: "#afb2b7",
  white: "#ffffff",
  black: "#191919",
}

export default function ProductCard({ product }: { product: Product }) {
  const [selectColor, setSelectColor] = useState<string>(product.colors[0]);

  const handleSelectColor = (color: string) => {
    setSelectColor(color);
  }

  return (
    <div className="flex flex-col gap-6">

      <div className="w-full h-82 relative group overflow-hidden cursor-pointer">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-120 origin-top"
        />
        <Button className="max-w-60 py-3.5 px-13 absolute bottom-4 left-5 right-5 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500">Add to Cart</Button>
      </div>

      <div className="w-full flex flex-col gap-2">
        <h4 className="text-primary text-xl leading-6">{product.name}</h4>
        <div className="flex flex-row items-center gap-3">
          {product.newPrice ? (
            <>
              <p className="line-through text-accent text-base font-medium tracking-wider leading-6">{product.price} USD</p>
              <p className="text-primary text-base font-medium tracking-wider leading-6">{product.newPrice} USD</p>
            </>
          ) : (
            <p className="text-primary text-base font-medium tracking-wider leading-6">{product.price} USD</p>
          )}
        </div>

        <div className="flex flex-row gap-2">
          {product.colors.map((color, index) => {
            const isSelected = selectColor === color;
            return (
              <div
                key={index}
                onClick={() => handleSelectColor(color)}
                className={clsx("w-5 h-5 rounded-full border cursor-pointer transition-all duration-400 flex items-center justify-center",
                  selectColor === color
                    ? "border-[#ba865c]"
                    : "border-[#eeeeee]"
                )}
                style={{ backgroundColor: isSelected ? "transparent" : colors[color] }}
              >
                <span
                  className={clsx(
                    "size-3 rounded-full",
                    selectColor === color ? "block" : "hidden"
                  )}
                  style={{ backgroundColor: colors[color] }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
