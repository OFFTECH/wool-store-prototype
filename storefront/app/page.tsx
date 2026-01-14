"use client";

import Image from "next/image";
import { useTranslation, Locale } from "../hooks/useTranslation";
import { useState } from "react";
import Cart from "../components/Cart";

export default function Home() {
  const { t, locale, changeLocale } = useTranslation();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-serif font-bold tracking-tight">UDD & OSLO</div>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
          <a href="#" className="hover:text-accent transition-colors">{t('nav.shop_all')}</a>
          <a href="#" className="hover:text-accent transition-colors">{t('nav.new_arrivals')}</a>
          <a href="#" className="hover:text-accent transition-colors">{t('nav.kits')}</a>
          <a href="#" className="hover:text-accent transition-colors">{t('nav.our_story')}</a>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 mr-4">
            {(['en', 'no', 'pl'] as Locale[]).map((l) => (
              <button
                key={l}
                onClick={() => changeLocale(l)}
                className={`text-[10px] uppercase font-bold px-2 py-1 border ${locale === l ? 'bg-black text-white' : 'border-black opacity-40 hover:opacity-100'}`}
              >
                {l}
              </button>
            ))}
          </div>
          <button onClick={() => setIsCartOpen(true)} className="text-sm font-medium">Cart (1)</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <Image
          src="/wool_hero_banner.png" 
          alt="Premium Knitting Wool"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center text-white p-6">
          <h1 className="text-5xl md:text-7xl mb-6">{t('hero.title')}</h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 font-sans">
            {t('hero.subtitle')}
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-none hover:bg-zinc-100 transition-all font-medium uppercase tracking-widest text-sm">
              {t('hero.cta_no')}
            </button>
            <button className="bg-transparent border border-white text-white px-8 py-4 rounded-none hover:bg-white/10 transition-all font-medium uppercase tracking-widest text-sm">
              {t('hero.cta_pl')}
            </button>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-accent uppercase tracking-[0.2em] text-xs font-bold mb-2 block">Premium Selection</span>
            <h2 className="text-4xl">{t('featured.title')}</h2>
          </div>
          <a href="#" className="text-sm border-b border-black pb-1 hover:text-accent hover:border-accent transition-all">View All</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Product 1 */}
          <div className="group cursor-pointer">
            <div className="relative h-[400px] mb-4 bg-muted overflow-hidden">
              <Image 
                src="/merino_wool_detail.png" 
                alt={t('featured.products.merino.title')} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <h3 className="text-xl mb-1">{t('featured.products.merino.title')}</h3>
            <p className="text-muted-foreground text-sm mb-2">{t('featured.products.merino.desc')}</p>
            <p className="font-sans font-medium">35,00 NOK / 15,00 PLN</p>
          </div>

          {/* Product 2 */}
          <div className="group cursor-pointer" onClick={() => window.location.href='/products/tradition'}>
            <div className="relative h-[400px] mb-4 bg-muted overflow-hidden">
              <Image 
                src="/tradition_wool.png" 
                alt={t('featured.products.tradition.title')} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <h3 className="text-xl mb-1">{t('featured.products.tradition.title')}</h3>
            <p className="text-muted-foreground text-sm mb-2">{t('featured.products.tradition.desc')}</p>
            <p className="font-sans font-medium">45,00 NOK / 19,00 PLN</p>
          </div>

          {/* Product 3 */}
          <div className="group cursor-pointer">
            <div className="relative h-[400px] mb-4 bg-muted overflow-hidden">
              <Image 
                src="/merino_wool_detail.png" 
                alt={t('featured.products.alpaca.title')} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <h3 className="text-xl mb-1">{t('featured.products.alpaca.title')}</h3>
            <p className="text-muted-foreground text-sm mb-2">{t('featured.products.alpaca.desc')}</p>
            <p className="font-sans font-medium">55,00 NOK / 24,00 PLN</p>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="bg-muted py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <h4 className="text-lg uppercase tracking-widest mb-4">Autonomous Shipping</h4>
            <p className="text-muted-foreground text-sm">Real-time labels and tracking from Norway to Poland and beyond.</p>
          </div>
          <div>
            <h4 className="text-lg uppercase tracking-widest mb-4">Local Impact</h4>
            <p className="text-muted-foreground text-sm">Supporting small-scale wool producers in the Nordic and Slavic regions.</p>
          </div>
          <div>
            <h4 className="text-lg uppercase tracking-widest mb-4">Seamless Payments</h4>
            <p className="text-muted-foreground text-sm">Pay with Vipps in Norway or BLIK in Poland. Fast and secure.</p>
          </div>
        </div>
      </section>

      <footer className="py-12 px-8 border-t border-border mt-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center opacity-60 text-xs uppercase tracking-widest">
          <p>© 2026 UDD & OSLO Wool Company</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Shipping Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
