"use client";

import Image from "next/image";
import { useTranslation } from "../hooks/useTranslation";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { t } = useTranslation();

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 transition-opacity duration-500 z-40 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className={`fixed right-0 top-0 h-full w-full max-w-md bg-background z-50 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-serif">Your Cart</h2>
            <button onClick={onClose} className="text-sm uppercase tracking-widest font-bold">Close</button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-8">
            {/* Mock Item 1 */}
            <div className="flex gap-6">
              <div className="relative w-24 h-32 bg-muted">
                <Image src="/tradition_wool.png" alt="Cart item" fill className="object-cover" />
              </div>
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <h3 className="font-serif text-lg">Norwegian Tradition</h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">Natural White / 50g</p>
                </div>
                <div className="flex justify-between items-end">
                  <div className="flex items-center border border-border px-2 py-1 text-sm">
                    <button className="px-2">-</button>
                    <span className="px-3">1</span>
                    <button className="px-2">+</button>
                  </div>
                  <p className="font-sans font-medium text-sm">45,00 NOK</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border mt-8">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm uppercase tracking-widest font-bold">Subtotal</span>
              <span className="text-lg font-serif">45,00 NOK / 19,00 PLN</span>
            </div>
            <p className="text-xs text-muted-foreground mb-8">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full bg-black text-white py-5 uppercase tracking-widest font-bold text-sm hover:bg-zinc-800 transition-colors">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
