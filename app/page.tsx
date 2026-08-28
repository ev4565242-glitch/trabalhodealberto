'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { Sidebar } from '@/components/sidebar'
import { Navbar } from '@/components/navbar'
import { MetricCards } from '@/components/metric-cards'
import { ProductGrid } from '@/components/product-grid'

export default function Page() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed sidebar (desktop) */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-sidebar-border lg:block">
        <Sidebar />
      </aside>

      {/* Mobile sidebar drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            aria-label="Fechar menu"
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <div className="absolute inset-y-0 left-0 w-64 border-r border-sidebar-border shadow-2xl">
            <button
              aria-label="Fechar menu"
              onClick={() => setMobileOpen(false)}
              className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-lg text-sidebar-foreground hover:bg-white/10"
            >
              <X className="size-5" />
            </button>
            <Sidebar onNavigate={() => setMobileOpen(false)} />
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="lg:pl-64">
        <Navbar onMenuClick={() => setMobileOpen(true)} />

        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {/* Page heading */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold tracking-tight text-foreground text-balance sm:text-3xl">
              Bem-vinda de volta, Ana
            </h1>
            <p className="mt-1 text-sm text-muted-foreground text-pretty">
              Aqui está o resumo da sua loja TechStore hoje.
            </p>
          </div>

          {/* Metrics */}
          <MetricCards />

          {/* Products */}
          <div className="mt-8 lg:mt-10">
            <ProductGrid />
          </div>
        </main>
      </div>
    </div>
  )
}
