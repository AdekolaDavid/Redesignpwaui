import { TicketPlus, Clock, CircleDot, CheckCircle2, TrendingUp, Activity } from 'lucide-react';
import { Card } from './ui/card';

interface DashboardProps {
  onNavigate?: (path: string) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  const stats = [
    {
      title: 'Pending Tickets',
      count: 29,
      subtitle: 'Waiting',
      icon: Clock,
      gradient: 'from-[#ef4444] via-[#dc2626] to-[#b91c1c]',
      iconBg: 'bg-gradient-to-br from-[#fee2e2] to-[#fecaca]',
      glowColor: 'shadow-red-500/20',
      borderColor: 'border-red-500/30',
    },
    {
      title: 'In Progress',
      count: 0,
      subtitle: 'Working',
      icon: CircleDot,
      gradient: 'from-[#1e7fbf] via-[#1e40af] to-[#1e3a8a]',
      iconBg: 'bg-gradient-to-br from-[#dbeafe] to-[#bfdbfe]',
      glowColor: 'shadow-blue-500/20',
      borderColor: 'border-blue-500/30',
    },
    {
      title: 'Resolved',
      count: 0,
      subtitle: 'Avg Resolution: 1h 20m',
      icon: CheckCircle2,
      gradient: 'from-[#fb923c] via-[#f97316] to-[#ea580c]',
      iconBg: 'bg-gradient-to-br from-[#fed7aa] to-[#fdba74]',
      glowColor: 'shadow-orange-500/20',
      borderColor: 'border-orange-500/30',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 from-slate-50 via-blue-50 to-slate-100">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzE4MjUzMyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40 dark:opacity-40 opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 animate-pulse rounded-full bg-gradient-to-r from-[#1e7fbf] via-[#ef4444] to-[#fb923c] opacity-20 blur-2xl" />
              <img
                src="/src/imports/new-logo.png"
                alt="TruckSoft"
                className="relative h-20 w-auto drop-shadow-2xl"
              />
            </div>
          </div>
          <h1 className="mb-3 bg-gradient-to-r from-white via-blue-100 to-white dark:from-white dark:via-blue-100 dark:to-white from-slate-800 via-blue-600 to-slate-800 bg-clip-text text-5xl text-transparent">
            IT Support Dashboard
          </h1>
          <p className="text-lg text-slate-400 dark:text-slate-400 text-slate-600">Real-time ticket monitoring & management system</p>

          <div className="mt-6 flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-green-400 dark:text-green-400 text-green-600" />
              <span className="text-slate-400 dark:text-slate-400 text-slate-600">System Online</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-blue-400 dark:text-blue-400 text-blue-600" />
              <span className="text-slate-400 dark:text-slate-400 text-slate-600">Response Rate: 98%</span>
            </div>
          </div>
        </div>

        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card
                key={stat.title}
                className={`group relative overflow-hidden border ${stat.borderColor} bg-gradient-to-br from-slate-800/90 to-slate-900/90 dark:from-slate-800/90 dark:to-slate-900/90 from-white/90 to-slate-50/90 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-2xl ${stat.glowColor}`}
              >
                <div className="absolute right-0 top-0 h-32 w-32 opacity-10">
                  <div className={`h-full w-full rounded-full bg-gradient-to-br ${stat.gradient} blur-3xl`} />
                </div>

                <div className="relative p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className={`rounded-2xl ${stat.iconBg} p-3.5 shadow-lg`}>
                      <Icon className={`h-7 w-7 bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }} />
                    </div>
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm" />
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm uppercase tracking-wider text-slate-400 dark:text-slate-400 text-slate-600">{stat.title}</p>
                    <p className={`bg-gradient-to-br ${stat.gradient} bg-clip-text text-6xl text-transparent`}>
                      {stat.count}
                    </p>
                    <div className="flex items-center gap-2 border-t border-white/10 dark:border-white/10 border-slate-300/50 pt-3">
                      <div className={`h-2 w-2 animate-pulse rounded-full bg-gradient-to-r ${stat.gradient}`} />
                      <p className="text-sm text-slate-300 dark:text-slate-300 text-slate-700">{stat.subtitle}</p>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={() => onNavigate?.('/new-ticket')}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#1e7fbf] via-[#2563eb] to-[#1e40af] px-8 py-4 text-white shadow-2xl shadow-blue-500/30 transition-all hover:scale-105 hover:shadow-blue-500/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative flex items-center justify-center gap-3">
              <TicketPlus className="h-5 w-5" />
              <span className="text-lg">Create New Ticket</span>
            </div>
          </button>

          <button
            onClick={() => onNavigate?.('/tickets')}
            className="group relative overflow-hidden rounded-xl border-2 border-blue-500/50 bg-slate-800/50 dark:bg-slate-800/50 bg-white/80 px-8 py-4 text-white dark:text-white text-blue-700 backdrop-blur-sm transition-all hover:scale-105 hover:border-blue-400 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 hover:bg-blue-50 hover:shadow-xl hover:shadow-blue-500/20"
          >
            <div className="relative flex items-center justify-center gap-3">
              <span className="text-lg">View All Tickets</span>
            </div>
          </button>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-4">
          <div className="rounded-xl border border-yellow-500/30 bg-gradient-to-br from-yellow-900/20 to-yellow-950/20 dark:from-yellow-900/20 dark:to-yellow-950/20 from-yellow-100/80 to-yellow-200/60 p-4 backdrop-blur-sm">
            <div className="mb-2 text-2xl text-yellow-400 dark:text-yellow-400 text-yellow-700">124</div>
            <div className="text-sm text-slate-400 dark:text-slate-400 text-slate-600">Total Tickets</div>
          </div>
          <div className="rounded-xl border border-green-500/30 bg-gradient-to-br from-green-900/20 to-green-950/20 dark:from-green-900/20 dark:to-green-950/20 from-green-100/80 to-green-200/60 p-4 backdrop-blur-sm">
            <div className="mb-2 text-2xl text-green-400 dark:text-green-400 text-green-700">95%</div>
            <div className="text-sm text-slate-400 dark:text-slate-400 text-slate-600">Resolution Rate</div>
          </div>
          <div className="rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-purple-950/20 dark:from-purple-900/20 dark:to-purple-950/20 from-purple-100/80 to-purple-200/60 p-4 backdrop-blur-sm">
            <div className="mb-2 text-2xl text-purple-400 dark:text-purple-400 text-purple-700">2.5h</div>
            <div className="text-sm text-slate-400 dark:text-slate-400 text-slate-600">Avg Response</div>
          </div>
          <div className="rounded-xl border border-cyan-500/30 bg-gradient-to-br from-cyan-900/20 to-cyan-950/20 dark:from-cyan-900/20 dark:to-cyan-950/20 from-cyan-100/80 to-cyan-200/60 p-4 backdrop-blur-sm">
            <div className="mb-2 text-2xl text-cyan-400 dark:text-cyan-400 text-cyan-700">12</div>
            <div className="text-sm text-slate-400 dark:text-slate-400 text-slate-600">Active Agents</div>
          </div>
        </div>
      </div>
    </div>
  );
}
