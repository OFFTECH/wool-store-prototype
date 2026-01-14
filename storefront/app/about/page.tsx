"use client";

import Image from "next/image";
import { useTranslation } from "../hooks/useTranslation";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-serif font-bold tracking-tight cursor-pointer" onClick={() => window.location.href = '/'}>UDD & OSLO</div>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
          <a href="/" className="hover:text-accent transition-colors">Home</a>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-8 py-24">
        <span className="text-accent uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Our Story</span>
        <h1 className="text-5xl md:text-7xl font-serif mb-12 leading-tight italic">Fibres of the North, Woven with Tradition.</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div className="relative h-[500px] bg-muted overflow-hidden">
             <Image src="/wool_hero_banner.png" alt="Wool texture" fill className="object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-serif mb-6">Origins</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              UDD & OSLO was born from a shared love for the Nordic and Slavic textile heritage. 
              We believe that every skein of wool carries a story of the landscape it came from—be it the windswept hills of Norway or the deep forests of Poland.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to bridge these two worlds, bringing the finest, ethically sourced fibers to those who cherish the slow, mindful practice of knitting.
            </p>
          </div>
        </div>

        <div className="space-y-16">
          <section>
            <h3 className="text-sm uppercase tracking-widest font-bold mb-6 underline decoration-accent underline-offset-8 decoration-2">Ethical Sourcing</h3>
            <p className="text-xl leading-relaxed text-muted-foreground italic">
              "We only work with farms that practice mulesing-free sheep farming and prioritize the welfare of their animals and the health of their land."
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div>
                <h4 className="text-lg font-serif mb-4">Norway: The Heritage</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                   Norwegian wool is renowned for its durability and resilience. It is a fiber that has protected people from the harsh Arctic winters for centuries. We source our Highland wool from small-scale producers who maintain traditional methods.
                </p>
             </div>
             <div>
                <h4 className="text-lg font-serif mb-4">Poland: The Softness</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                   The Polish lowlands provide perfect conditions for fine-merino and mixed-breed sheep. Our Polish collection focuses on softness and elegance, perfect for next-to-skin garments that require a delicate touch.
                </p>
             </div>
          </section>
        </div>
      </main>

      <footer className="py-24 bg-muted mt-24">
          <div className="max-w-7xl mx-auto px-8 text-center">
              <h2 className="text-3xl font-serif mb-8 italic">Join our slow living journey.</h2>
              <p className="text-sm opacity-60 uppercase tracking-widest cursor-pointer hover:text-accent transition-colors">Follow us on Instagram</p>
          </div>
      </footer>
    </div>
  );
}
