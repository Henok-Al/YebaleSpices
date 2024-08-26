import React from "react";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Header = ({ cartItemsCount, onOpenCart }) => {
  return (
    <header className="flex justify-between items-center mb-8 sticky top-0 bg-white z-10">
      <h1 className="text-2xl font-bold">
        <img
          src="/images/yebaleFbLogo.jpg"
          alt="Spices Menu"
          className="w-12 h-12 object-fill rounded-full border-4 border-white"
        />
      </h1>
      <button
        className="relative"
        onClick={onOpenCart}
        aria-label={`Open shopping cart with ${cartItemsCount} items`}
      >
        <ShoppingCart className="h-6 w-6" />
        {cartItemsCount > 0 && (
          <Badge variant="destructive" className="absolute -top-2 -right-2">
            {cartItemsCount}
          </Badge>
        )}
      </button>
    </header>
  );
};

export default Header;