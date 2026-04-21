import { ArrowLeft, Search, Filter, Download, Clock, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { Badge } from './ui/badge';

interface TicketsListProps {
  onNavigate?: (path: string) => void;
}

interface Ticket {
  id: string;
  name: string;
  department: string;
  issue: string;
  description: string;
  priority: 'low' | 'medium' | 'urgent';
  status: 'pending' | 'in-progress' | 'resolved';
  date: string;
}

export function TicketsList({ onNavigate }: TicketsListProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const mockTickets: Ticket[] = [
    {
      id: 'b2a6ac26...',
      name: 'Adelll',
      department: 'Operations',
      issue: 'Laptop and accessories',
      description: 'rty;',
      priority: 'low',
      status: 'pending',
      date: '3/20/2026, 6:42:51 PM',
    },
    {
      id: 'bdcd3903...',
      name: 'David',
      department: 'HR',
      issue: 'Laptop and accessories',
      description: 'Lah',
      priority: 'urgent',
      status: 'pending',
      date: '3/15/2026, 2:14:58 AM',
    },
    {
      id: 'a0da04b1...',
      name: 'Adeolu',
      department: 'Operations',
      issue: 'Telematics device',
      description: 'Goo',
      priority: 'low',
      status: 'pending',
      date: '3/15/2026, 2:04:26 AM',
    },
    {
      id: '55f438b6...',
      name: 'Bebeb',
      department: 'Operations',
      issue: 'Telematics platform (web and mobile)',
      description: 'Keiej',
      priority: 'medium',
      status: 'pending',
      date: '3/15/2026, 1:55:17 AM',
    },
    {
      id: 'ab68d1aa...',
      name: 'David',
      department: 'Finance',
      issue: 'Telematics device',
      description: 'Euehe',
      priority: 'urgent',
      status: 'pending',
      date: '3/15/2026, 1:52:56 AM',
    },
    {
      id: 'dfd3789e...',
      name: 'rtg',
      department: 'HR',
      issue: 'Laptop and accessories',
      description: 'Yuh',
      priority: 'urgent',
      status: 'pending',
      date: '3/15/2026, 1:30:21 AM',
    },
  ];

  const getPriorityStyles = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return {
          bg: 'bg-gradient-to-r from-red-500/20 to-red-600/20',
          border: 'border-red-500/50',
          text: 'text-red-400',
          glow: 'shadow-red-500/20',
        };
      case 'medium':
        return {
          bg: 'bg-gradient-to-r from-yellow-500/20 to-yellow-600/20',
          border: 'border-yellow-500/50',
          text: 'text-yellow-400',
          glow: 'shadow-yellow-500/20',
        };
      case 'low':
        return {
          bg: 'bg-gradient-to-r from-blue-500/20 to-blue-600/20',
          border: 'border-blue-500/50',
          text: 'text-blue-400',
          glow: 'shadow-blue-500/20',
        };
      default:
        return {
          bg: 'bg-gray-500/20',
          border: 'border-gray-500/50',
          text: 'text-gray-400',
          glow: 'shadow-gray-500/20',
        };
    }
  };

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'pending':
        return {
          bg: 'bg-gradient-to-r from-orange-500/20 to-orange-600/20',
          border: 'border-orange-500/50',
          text: 'text-orange-400',
          glow: 'shadow-orange-500/20',
        };
      case 'in-progress':
        return {
          bg: 'bg-gradient-to-r from-cyan-500/20 to-cyan-600/20',
          border: 'border-cyan-500/50',
          text: 'text-cyan-400',
          glow: 'shadow-cyan-500/20',
        };
      case 'resolved':
        return {
          bg: 'bg-gradient-to-r from-green-500/20 to-green-600/20',
          border: 'border-green-500/50',
          text: 'text-green-400',
          glow: 'shadow-green-500/20',
        };
      default:
        return {
          bg: 'bg-gray-500/20',
          border: 'border-gray-500/50',
          text: 'text-gray-400',
          glow: 'shadow-gray-500/20',
        };
    }
  };

  const filteredTickets = mockTickets.filter((ticket) =>
    Object.values(ticket).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 from-slate-50 via-blue-50 to-slate-100">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzE4MjUzMyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40 dark:opacity-40 opacity-20" />

      <div className="relative mx-auto max-w-[1600px] px-4 py-8">
        <button
          onClick={() => onNavigate?.('/')}
          className="group mb-6 flex items-center gap-2 text-slate-400 dark:text-slate-400 text-slate-600 transition-all hover:text-white dark:hover:text-white hover:text-slate-900"
        >
          <div className="rounded-lg bg-slate-800/50 dark:bg-slate-800/50 bg-white/80 p-2 backdrop-blur-sm transition-all group-hover:bg-slate-700/50 dark:group-hover:bg-slate-700/50 group-hover:bg-blue-100">
            <ArrowLeft className="h-4 w-4" />
          </div>
          <span>Back to Dashboard</span>
        </button>

        <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="mb-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-500 from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-4xl text-transparent">
              All Submitted Tickets
            </h1>
            <p className="flex items-center gap-2 text-slate-400 dark:text-slate-400 text-slate-600">
              <Clock className="h-4 w-4" />
              <span>Real-time ticket monitoring</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 dark:text-slate-400 text-slate-500" />
              <input
                type="text"
                placeholder="Search tickets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64 rounded-lg border border-slate-600 dark:border-slate-600 border-slate-300 bg-slate-900/50 dark:bg-slate-900/50 bg-white py-2.5 pl-10 pr-4 text-white dark:text-white text-slate-900 placeholder-slate-500 dark:placeholder-slate-500 placeholder-slate-400 outline-none backdrop-blur-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50"
              />
            </div>
            <button className="flex items-center gap-2 rounded-lg border border-slate-600 dark:border-slate-600 border-slate-300 bg-slate-900/50 dark:bg-slate-900/50 bg-white px-4 py-2.5 text-white dark:text-white text-slate-700 backdrop-blur-sm transition-all hover:border-blue-500 hover:bg-slate-800/50 dark:hover:bg-slate-800/50 hover:bg-blue-50">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-slate-600 bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2.5 text-white shadow-lg shadow-blue-500/30 transition-all hover:scale-105">
              <Download className="h-4 w-4" />
              <span>Export</span>
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-700 dark:border-slate-700 border-slate-300 bg-slate-800/50 dark:bg-slate-800/50 bg-white/90 shadow-2xl shadow-blue-500/5 backdrop-blur-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-slate-700 dark:border-slate-700 border-slate-200 bg-gradient-to-r from-slate-900/80 to-slate-800/80 dark:from-slate-900/80 dark:to-slate-800/80 from-slate-100 to-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-400 dark:text-slate-400 text-slate-600">
                    Ticket ID
                  </th>
                  <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-400 dark:text-slate-400 text-slate-600">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-400 dark:text-slate-400 text-slate-600">
                    Department
                  </th>
                  <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-400 dark:text-slate-400 text-slate-600">
                    Issue Type
                  </th>
                  <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-400 dark:text-slate-400 text-slate-600">
                    Description
                  </th>
                  <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-400 dark:text-slate-400 text-slate-600">
                    Priority
                  </th>
                  <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-400 dark:text-slate-400 text-slate-600">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-400 dark:text-slate-400 text-slate-600">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50 dark:divide-slate-700/50 divide-slate-200">
                {filteredTickets.map((ticket, index) => {
                  const priorityStyles = getPriorityStyles(ticket.priority);
                  const statusStyles = getStatusStyles(ticket.status);

                  return (
                    <tr
                      key={ticket.id}
                      className="group transition-all hover:bg-slate-700/30 dark:hover:bg-slate-700/30 hover:bg-blue-50/50"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <td className="px-6 py-4">
                        <code className="rounded bg-slate-900/50 dark:bg-slate-900/50 bg-cyan-100 px-2 py-1 text-xs text-cyan-400 dark:text-cyan-400 text-cyan-700">
                          {ticket.id}
                        </code>
                      </td>
                      <td className="px-6 py-4 text-white dark:text-white text-slate-900">{ticket.name}</td>
                      <td className="px-6 py-4">
                        <span className="rounded-lg border border-purple-500/30 bg-purple-500/10 dark:bg-purple-500/10 bg-purple-100 px-3 py-1 text-sm text-purple-300 dark:text-purple-300 text-purple-700">
                          {ticket.department}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-300 dark:text-slate-300 text-slate-700">{ticket.issue}</td>
                      <td className="px-6 py-4 text-slate-400 dark:text-slate-400 text-slate-600">{ticket.description}</td>
                      <td className="px-6 py-4">
                        <div
                          className={`inline-flex items-center gap-1.5 rounded-lg border ${priorityStyles.border} ${priorityStyles.bg} px-3 py-1.5 shadow-lg ${priorityStyles.glow}`}
                        >
                          <AlertCircle className={`h-3 w-3 ${priorityStyles.text}`} />
                          <span className={`text-sm capitalize ${priorityStyles.text}`}>
                            {ticket.priority}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div
                          className={`inline-flex items-center gap-1.5 rounded-lg border ${statusStyles.border} ${statusStyles.bg} px-3 py-1.5 shadow-lg ${statusStyles.glow}`}
                        >
                          <div className={`h-2 w-2 animate-pulse rounded-full ${statusStyles.text.replace('text-', 'bg-')}`} />
                          <span className={`text-sm capitalize ${statusStyles.text}`}>
                            {ticket.status}
                          </span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-400 dark:text-slate-400 text-slate-600">
                        {ticket.date}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {filteredTickets.length === 0 && (
          <div className="rounded-xl border border-slate-700 dark:border-slate-700 border-slate-300 bg-slate-800/50 dark:bg-slate-800/50 bg-white/90 py-16 text-center backdrop-blur-sm">
            <Search className="mx-auto mb-4 h-12 w-12 text-slate-600 dark:text-slate-600 text-slate-400" />
            <p className="text-lg text-slate-400 dark:text-slate-400 text-slate-600">No tickets found matching your search.</p>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-500 text-slate-500">Try adjusting your search terms</p>
          </div>
        )}

        <div className="mt-6 flex items-center justify-between rounded-xl border border-slate-700 dark:border-slate-700 border-slate-300 bg-slate-800/30 dark:bg-slate-800/30 bg-white/50 px-6 py-4 backdrop-blur-sm">
          <p className="text-sm text-slate-400 dark:text-slate-400 text-slate-600">
            Showing <span className="text-white dark:text-white text-slate-900">{filteredTickets.length}</span> of{' '}
            <span className="text-white dark:text-white text-slate-900">{mockTickets.length}</span> tickets
          </p>
          <div className="flex gap-2">
            <button className="rounded-lg border border-slate-600 dark:border-slate-600 border-slate-300 bg-slate-900/50 dark:bg-slate-900/50 bg-white px-4 py-2 text-sm text-white dark:text-white text-slate-700 transition-all hover:bg-slate-800/50 dark:hover:bg-slate-800/50 hover:bg-blue-50">
              Previous
            </button>
            <button className="rounded-lg border border-blue-500/50 bg-blue-600/20 dark:bg-blue-600/20 bg-blue-500/30 px-4 py-2 text-sm text-blue-400 dark:text-blue-400 text-blue-700">
              1
            </button>
            <button className="rounded-lg border border-slate-600 dark:border-slate-600 border-slate-300 bg-slate-900/50 dark:bg-slate-900/50 bg-white px-4 py-2 text-sm text-white dark:text-white text-slate-700 transition-all hover:bg-slate-800/50 dark:hover:bg-slate-800/50 hover:bg-blue-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
