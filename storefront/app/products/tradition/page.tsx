"use client";

import Image from "next/image";
import { useTranslation } from "../../../hooks/useTranslation";
import { useState } from "react";
import Cart from "../../../components/Cart";

export default function ProductPage() {
  const { t } = useTranslation();
  const [selectedColor, setSelectedColor] = useState("Terracotta");
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
       <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
       
       {/* Simple Header */}
       <header className="px-8 py-6 max-w-7xl mx-auto flex justify-between items-center border-b border-border">
        <div className="text-xl font-serif font-bold cursor-pointer" onClick={() => window.location.href = '/'}>UDD & OSLO</div>
        <div className="text-sm uppercase tracking-widest font-medium cursor-pointer" onClick={() => setIsCartOpen(true)}>Cart (1)</div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Gallery */}
        <div className="space-y-4">
          <div className="relative h-[600px] bg-muted overflow-hidden">
             <Image 
                src="/tradition_wool.png" 
                alt="Product detail" 
                fill 
                className="object-cover" 
              />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="relative h-32 bg-muted opacity-60 hover:opacity-100 cursor-pointer transition-opacity">
                <Image src="/tradition_wool.png" alt="Thumb" fill className="object-cover" />
            </div>
            <div className="relative h-32 bg-muted opacity-60 hover:opacity-100 cursor-pointer transition-opacity">
                <Image src="/merino_wool_detail.png" alt="Thumb" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <span className="text-accent uppercase tracking-[0.2em] text-xs font-bold mb-2">Heritage Collection</span>
          <h1 className="text-5xl mb-4">Norwegian Tradition</h1>
          <p className="text-2xl font-sans mb-8">45,00 NOK / 19,00 PLN</p>
          
          <div className="h-px bg-border mb-8" />

          <div className="mb-8">
            <h3 className="text-sm uppercase tracking-widest font-bold mb-4">Color: {selectedColor}</h3>
            <div className="flex gap-4">
                {["#A67C52", "#E5D9C4", "#2D2926", "#8E4A42"].map((color, i) => (
                    <button 
                        key={i}
                        onClick={() => setSelectedColor(["Tan", "Cream", "Charcoal", "Terracotta"][i])}
                        className={`w-10 h-10 rounded-full border-2 ${selectedColor === ["Tan", "Cream", "Charcoal", "Terracotta"][i] ? 'border-black' : 'border-transparent'}`}
                        style={{ backgroundColor: color }}
                    />
                ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-sm uppercase tracking-widest font-bold mb-4">Quantity</h3>
            <div className="flex items-center border border-black w-32 justify-between px-4 py-2">
                <button className="text-xl">-</button>
                <span>1</span>
                <button className="text-xl">+</button>
            </div>
          </div>

          <button 
            onClick={() => setIsCartOpen(true)}
            className="w-full bg-black text-white py-5 uppercase tracking-widest font-bold text-sm mb-4 hover:bg-zinc-800 transition-colors"
          >
            Add to Cart
          </button>

          <div className="mt-12 space-y-8">
            <div>
                <h4 className="text-sm uppercase tracking-widest font-bold mb-2 underline decoration-accent underline-offset-4">Materials & Care</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                    100% Peruvian Highland Wool. Hard-wearing and perfect for everyday garments. 
                    Hand wash only, max 30°C. Dry flat.
                </p>
            </div>
            <div>
                <h4 className="text-sm uppercase tracking-widest font-bold mb-2 underline decoration-accent underline-offset-4">Sustainability</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                    Sourced from mulesing-free farms. Dyed using Oeko-Tex Standard 100 certified processes.
                </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
