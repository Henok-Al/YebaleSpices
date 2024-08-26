"use client";

import CheckoutModal from "@/components/CheckoutModal";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import ShoppingCart from "@/components/ShoppingCart";
import React, { useState } from "react";

const spices = [
  {
    id: 1,
    name: "Cinnamon",
    price: 3.99,
    image: "https://images.pexels.com/photos/414807/pexels-photo-414807.jpeg",
    type: "Regular",
    weights: ["100g", "250g", "500g", "1kg"],
  },
  {
    id: 2,
    name: "Turmeric",
    price: 2.99,
    image: "https://images.pexels.com/photos/5531157/pexels-photo-5531157.jpeg",
    type: "Regular",
    weights: ["100g", "250g", "500g", "1kg"],
  },
  {
    id: 3,
    name: "Cumin",
    price: 1.99,
    image: "https://images.pexels.com/photos/5531158/pexels-photo-5531158.jpeg",
    type: "Regular",
    weights: ["100g", "250g", "500g", "1kg"],
  },
  {
    id: 4,
    name: "Paprika",
    price: 2.49,
    image: "https://images.pexels.com/photos/5531159/pexels-photo-5531159.jpeg",
    type: "Regular",
    weights: ["100g", "250g", "500g", "1kg"],
  },
  {
    id: 5,
    name: "Ginger",
    price: 3.49,
    image: "https://images.pexels.com/photos/5531160/pexels-photo-5531160.jpeg",
    type: "Regular",
    weights: ["100g", "250g", "500g", "1kg"],
  },
  {
    id: 6,
    name: "Cardamom",
    price: 4.99,
    image: "https://images.pexels.com/photos/5531161/pexels-photo-5531161.jpeg",
    type: "Regular",
    weights: ["100g", "250g", "500g", "1kg"],
  },
  {
    id: 7,
    name: "Berbere",
    price: 5.99,
    image: "https://images.pexels.com/photos/5531162/pexels-photo-5531162.jpeg",
    type: "Ethiopian",
    weights: ["100g", "250g", "500g", "1kg"],
  },
  {
    id: 8,
    name: "Korarima",
    price: 6.99,
    image: "https://images.pexels.com/photos/5531163/pexels-photo-5531163.jpeg",
    type: "Ethiopian",
    weights: ["100g", "250g", "500g", "1kg"],
  },
  {
    id: 9,
    name: "Shiro",
    price: 4.99,
    image: "https://images.pexels.com/photos/5531164/pexels-photo-5531164.jpeg",
    type: "Ethiopian",
    weights: ["100g", "250g", "500g", "1kg"],
  },
  {
    id: 10,
    name: "Ethiopian Coffee",
    price: 7.99,
    image: "https://images.pexels.com/photos/5531165/pexels-photo-5531165.jpeg",
    type: "Ethiopian",
    weights: ["250g", "500g", "1kg"],
  },
];

const SpiceShop = () => {
  const [cart, setCart] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (spice, weight) => {
    const key = `${spice.id}-${weight}`;
    setCart((prevCart) => ({
      ...prevCart,
      [key]: (prevCart[key] || 0) + 1,
    }));
  };

  const removeFromCart = (key) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[key] > 1) {
        newCart[key]--;
      } else {
        delete newCart[key];
      }
      return newCart;
    });
  };

  const cartTotal = Object.entries(cart).reduce((total, [key, quantity]) => {
    const [id, weight] = key.split("-");
    const spice = spices.find((s) => s.id === parseInt(id));
    return total + spice.price * quantity;
  }, 0);

  const cartItemsCount = Object.values(cart).reduce((a, b) => a + b, 0);

  const handleCheckout = () => {
    setIsModalOpen(true);
    setIsCartOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <Header
        cartItemsCount={cartItemsCount}
        onOpenCart={() => setIsCartOpen(true)}
      />
      <HeroSection />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {spices.map((spice) => (
          <ProductCard key={spice.id} spice={spice} onAddToCart={addToCart} />
        ))}
      </div>
      <ShoppingCart
        open={isCartOpen}
        onOpenChange={setIsCartOpen}
        cart={cart}
        onAddToCart={addToCart}
        onRemoveFromCart={removeFromCart}
        cartTotal={cartTotal}
        onCheckout={handleCheckout}
        spices={spices} // Pass the spices array as a prop
      />
      <CheckoutModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
};

export default SpiceShop;







