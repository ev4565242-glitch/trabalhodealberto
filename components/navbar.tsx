'use client'

import { Search, Bell, Menu, ShoppingCart } from 'lucide-react'

export function Navbar({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-black/5 bg-navbar px-4 text-navbar-foreground shadow-sm sm:px-6">
      {/* Mobile menu button */}
      <button
        onClick={onMenuClick}
        aria-label="Abrir menu"
        className="flex size-10 items-center justify-center rounded-xl text-navbar-foreground transition-colors hover:bg-black/5 lg:hidden"
      >
        <Menu className="size-5" />
      </button>

      {/* Search */}
      <div className="relative hidden flex-1 items-center sm:flex">
        <Search className="pointer-events-none absolute left-3 size-4 text-navbar-foreground/40" />
        <input
          type="text"
          placeholder="Buscar produtos, pedidos..."
          className="h-10 w-full max-w-md rounded-xl border border-black/10 bg-black/[0.03] pl-10 pr-4 text-sm text-navbar-foreground outline-none transition-colors placeholder:text-navbar-foreground/40 focus:border-brand focus:bg-white"
        />
      </div>

      <div className="flex flex-1 sm:hidden" />

      {/* Actions */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        <button
          aria-label="Carrinho"
          className="relative flex size-10 items-center justify-center rounded-xl text-navbar-foreground transition-colors hover:bg-black/5"
        >
          <ShoppingCart className="size-5" />
          <span className="absolute right-1.5 top-1.5 flex size-2 rounded-full bg-brand ring-2 ring-navbar" />
        </button>
        <button
          aria-label="Notificações"
          className="relative flex size-10 items-center justify-center rounded-xl text-navbar-foreground transition-colors hover:bg-black/5"
        >
          <Bell className="size-5" />
          <span className="absolute right-1.5 top-1.5 flex size-2 rounded-full bg-stat-revenue ring-2 ring-navbar" />
        </button>

        <div className="ml-1 flex items-center gap-3 rounded-xl py-1 pl-1 pr-2 transition-colors hover:bg-black/5">
          <img
            src="/avatar.png"
            alt="Foto de perfil de Ana Souza"
            className="size-9 rounded-lg object-cover"
          />
          <div className="hidden leading-tight md:block">
            <p className="text-sm font-semibold">Ana Souza</p>
            <p className="text-xs text-navbar-foreground/50">Administradora</p>
          </div>
        </div>
      </div>
    </header>
  )
}
