'use client'

import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  BarChart3,
  Users,
  Settings,
  LifeBuoy,
  Cpu,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const menu = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Produtos', icon: ShoppingBag, active: false },
  { label: 'Pedidos', icon: Package, active: false },
  { label: 'Relatórios', icon: BarChart3, active: false },
  { label: 'Clientes', icon: Users, active: false },
]

const secondary = [
  { label: 'Configurações', icon: Settings },
  { label: 'Suporte', icon: LifeBuoy },
]

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex h-full flex-col bg-sidebar text-sidebar-foreground">
      {/* Brand */}
      <div className="flex items-center gap-3 px-6 py-6">
        <div className="flex size-10 items-center justify-center rounded-xl bg-sidebar-accent text-sidebar-accent-foreground shadow-lg shadow-black/30">
          <Cpu className="size-5" />
        </div>
        <div className="leading-tight">
          <p className="text-base font-semibold text-white">TechStore</p>
          <p className="text-xs text-sidebar-muted">Painel de vendas</p>
        </div>
      </div>

      {/* Primary menu */}
      <nav className="flex flex-1 flex-col gap-1 px-3">
        <p className="px-3 pb-2 pt-4 text-[11px] font-semibold uppercase tracking-wider text-sidebar-muted">
          Menu
        </p>
        {menu.map((item) => (
          <button
            key={item.label}
            onClick={onNavigate}
            className={cn(
              'group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all',
              item.active
                ? 'bg-sidebar-accent text-sidebar-accent-foreground shadow-lg shadow-black/25'
                : 'text-sidebar-foreground hover:bg-white/5 hover:text-white',
            )}
          >
            <item.icon className="size-[18px] shrink-0" />
            {item.label}
          </button>
        ))}

        <p className="px-3 pb-2 pt-6 text-[11px] font-semibold uppercase tracking-wider text-sidebar-muted">
          Geral
        </p>
        {secondary.map((item) => (
          <button
            key={item.label}
            onClick={onNavigate}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-sidebar-foreground transition-all hover:bg-white/5 hover:text-white"
          >
            <item.icon className="size-[18px] shrink-0" />
            {item.label}
          </button>
        ))}
      </nav>

      {/* Upgrade card */}
      <div className="m-3 rounded-2xl border border-sidebar-border bg-white/5 p-4">
        <p className="text-sm font-semibold text-white">Plano Pro</p>
        <p className="mt-1 text-xs text-sidebar-muted">
          Desbloqueie relatórios avançados e estoque ilimitado.
        </p>
        <button className="mt-3 w-full rounded-lg bg-sidebar-accent px-3 py-2 text-xs font-semibold text-sidebar-accent-foreground transition-transform hover:scale-[1.02]">
          Fazer upgrade
        </button>
      </div>
    </div>
  )
}
