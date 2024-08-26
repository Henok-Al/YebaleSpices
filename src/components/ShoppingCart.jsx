import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";

const ShoppingCart = ({
  open,
  onOpenChange,
  cart,
  onAddToCart,
  onRemoveFromCart,
  cartTotal,
  onCheckout,
  spices,
}) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription>Review your items before checkout</SheetDescription>
        </SheetHeader>
        <div className="mt-8 space-y-4">
          {Object.entries(cart).map(([key, quantity]) => {
            const [id, weight] = key.split("-");
            const spice = spices.find((s) => s.id === parseInt(id));
            return (
              <div key={key} className="flex justify-between items-center">
                <span>
                  {spice.name} - {weight} (${spice.price.toFixed(2)} each)
                </span>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => onRemoveFromCart(key)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="mx-2">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => onAddToCart(spice, weight)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        <SheetFooter className="mt-8">
          <div className="w-full space-y-4">
            <div className="flex justify-between items-center">
              <strong>Total:</strong>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <Button className="w-full" onClick={onCheckout}>
              Checkout (No Payment Required)
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;
