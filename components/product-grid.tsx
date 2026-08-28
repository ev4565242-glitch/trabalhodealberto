'use client'

import { ShoppingCart, Star } from 'lucide-react'

type Product = {
  name: string
  category: string
  price: string
  oldPrice?: string
  rating: number
  image: string
  badge?: string
}

const products: Product[] = [
  {
    name: 'Ultrabook Pro 14"',
    category: 'Notebooks',
    price: 'R$ 8.499',
    oldPrice: 'R$ 9.299',
    rating: 4.9,
    image: '/products/laptop.png',
    badge: 'Oferta',
  },
  {
    name: 'Fone Wireless Max',
    category: 'Áudio',
    price: 'R$ 1.299',
    rating: 4.8,
    image: '/products/headphones.png',
  },
  {
    name: 'Smartphone Titan X',
    category: 'Smartphones',
    price: 'R$ 6.199',
    oldPrice: 'R$ 6.999',
    rating: 4.7,
    image: '/products/smartphone.png',
    badge: 'Novo',
  },
  {
    name: 'Smartwatch Active 2',
    category: 'Wearables',
    price: 'R$ 2.099',
    rating: 4.6,
    image: '/products/smartwatch.png',
  },
  {
    name: 'Teclado Mecânico RGB',
    category: 'Acessórios',
    price: 'R$ 749',
    rating: 4.9,
    image: '/products/keyboard.png',
    badge: 'Top',
  },
  {
    name: 'Câmera Mirrorless Z',
    category: 'Fotografia',
    price: 'R$ 5.499',
    oldPrice: 'R$ 5.999',
    rating: 4.8,
    image: '/products/camera.png',
  },
]

export function ProductGrid() {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Produtos em destaque
          </h2>
          <p className="text-sm text-muted-foreground">
            Os itens mais vendidos da semana
          </p>
        </div>
        <button className="hidden rounded-xl border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary sm:block">
          Ver tudo
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {products.map((product) => (
          <article
            key={product.name}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
              {product.badge && (
                <span className="absolute left-3 top-3 z-10 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-brand-foreground shadow-md">
                  {product.badge}
                </span>
              )}
              <img
                src={product.image || '/placeholder.svg'}
                alt={product.name}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-wide text-brand">
                  {product.category}
                </span>
                <span className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
                  <Star className="size-3.5 fill-stat-satisfaction text-stat-satisfaction" />
                  {product.rating.toLocaleString('pt-BR')}
                </span>
              </div>

              <h3 className="mt-2 text-base font-semibold text-foreground">
                {product.name}
              </h3>

              <div className="mt-3 flex items-end gap-2">
                <span className="text-xl font-bold text-foreground">
                  {product.price}
                </span>
                {product.oldPrice && (
                  <span className="pb-0.5 text-sm text-muted-foreground line-through">
                    {product.oldPrice}
                  </span>
                )}
              </div>

              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground transition-all hover:brightness-110 active:scale-[0.98]">
                <ShoppingCart className="size-4" />
                Comprar
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
