import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const ProductCard = ({ spice, onAddToCart }) => {
  return (
    <Card key={spice.id}>
      <CardHeader>
        <CardTitle>{spice.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <img
          src={spice.image}
          alt={spice.name}
          className="w-full h-48 object-cover mb-2 rounded-md"
        />
        <p className="text-lg font-semibold">${spice.price.toFixed(2)}</p>
        <p className="text-sm text-muted-foreground">{spice.type}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2">
        <Select onValueChange={(weight) => onAddToCart(spice, weight)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select weight" />
          </SelectTrigger>
          <SelectContent>
            {spice.weights.map((weight) => (
              <SelectItem key={weight} value={weight}>
                {weight}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          className="w-full"
          onClick={() => onAddToCart(spice, spice.weights[0])}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
