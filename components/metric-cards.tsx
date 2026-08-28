import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingCart,
  Smile,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Metric = {
  label: string
  value: string
  change: string
  trending: 'up' | 'down'
  icon: LucideIcon
  color: string
  glow: string
}

const metrics: Metric[] = [
  {
    label: 'Faturamento',
    value: 'R$ 128.430',
    change: '+12,5%',
    trending: 'up',
    icon: DollarSign,
    color: 'text-stat-revenue',
    glow: 'shadow-[0_10px_40px_-12px] shadow-stat-revenue/50',
  },
  {
    label: 'Vendas',
    value: '2.847',
    change: '+8,2%',
    trending: 'up',
    icon: ShoppingCart,
    color: 'text-stat-sales',
    glow: 'shadow-[0_10px_40px_-12px] shadow-stat-sales/50',
  },
  {
    label: 'Satisfação',
    value: '96,4%',
    change: '-1,1%',
    trending: 'down',
    icon: Smile,
    color: 'text-stat-satisfaction',
    glow: 'shadow-[0_10px_40px_-12px] shadow-stat-satisfaction/50',
  },
]

export function MetricCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {metrics.map((m) => (
        <div
          key={m.label}
          className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 ${m.glow}`}
        >
          {/* subtle colored corner glow */}
          <div
            className={`pointer-events-none absolute -right-8 -top-8 size-24 rounded-full opacity-15 blur-2xl ${m.color.replace('text-', 'bg-')}`}
          />

          <div className="flex items-start justify-between">
            <div
              className={`flex size-11 items-center justify-center rounded-xl bg-secondary ${m.color}`}
            >
              <m.icon className="size-5" />
            </div>
            <span
              className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
                m.trending === 'up'
                  ? 'bg-stat-revenue/10 text-stat-revenue'
                  : 'bg-destructive/10 text-destructive'
              }`}
            >
              {m.trending === 'up' ? (
                <TrendingUp className="size-3.5" />
              ) : (
                <TrendingDown className="size-3.5" />
              )}
              {m.change}
            </span>
          </div>

          <p className="mt-5 text-sm font-medium text-muted-foreground">
            {m.label}
          </p>
          <p className="mt-1 text-3xl font-bold tracking-tight text-foreground">
            {m.value}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            comparado ao mês anterior
          </p>
        </div>
      ))}
    </div>
  )
}
