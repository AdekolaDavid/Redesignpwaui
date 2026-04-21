import { useState } from 'react';
import { ArrowLeft, Upload, AlertCircle, Zap, FileText } from 'lucide-react';
import { Card } from './ui/card';

interface NewTicketProps {
  onNavigate?: (path: string) => void;
}

export function NewTicket({ onNavigate }: NewTicketProps) {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    issueType: '',
    description: '',
    priority: '',
  });
  const [files, setFiles] = useState<FileList | null>(null);

  const departments = ['Operations', 'HR', 'Finance', 'Sales', 'Engineering'];
  const issueTypes = [
    'Laptop and accessories',
    'Telematics device',
    'Telematics platform (web and mobile)',
    'Network issues',
    'Software issues',
    'Other',
  ];

  const priorities = [
    {
      value: 'urgent',
      label: 'Urgent',
      gradient: 'from-[#ef4444] via-[#dc2626] to-[#b91c1c]',
      shadowColor: 'shadow-red-500/40',
      icon: AlertCircle,
    },
    {
      value: 'medium',
      label: 'Medium',
      gradient: 'from-[#fbbf24] via-[#f59e0b] to-[#d97706]',
      shadowColor: 'shadow-yellow-500/40',
      icon: Zap,
    },
    {
      value: 'low',
      label: 'Low',
      gradient: 'from-[#1e7fbf] via-[#1e40af] to-[#1e3a8a]',
      shadowColor: 'shadow-blue-500/40',
      icon: FileText,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting ticket:', formData, files);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 from-slate-50 via-blue-50 to-slate-100">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzE4MjUzMyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40 dark:opacity-40 opacity-20" />

      <div className="relative mx-auto max-w-3xl px-4 py-8">
        <button
          onClick={() => onNavigate?.('/')}
          className="group mb-6 flex items-center gap-2 text-slate-400 dark:text-slate-400 text-slate-600 transition-all hover:text-white dark:hover:text-white hover:text-slate-900"
        >
          <div className="rounded-lg bg-slate-800/50 dark:bg-slate-800/50 bg-white/80 p-2 backdrop-blur-sm transition-all group-hover:bg-slate-700/50 dark:group-hover:bg-slate-700/50 group-hover:bg-blue-100">
            <ArrowLeft className="h-4 w-4" />
          </div>
          <span>Back to Dashboard</span>
        </button>

        <Card className="overflow-hidden border border-blue-500/30 bg-slate-800/50 dark:bg-slate-800/50 bg-white/90 shadow-2xl shadow-blue-500/10 backdrop-blur-sm">
          <div className="relative overflow-hidden border-b border-blue-500/30 bg-gradient-to-r from-[#1e7fbf] via-[#2563eb] to-[#1e40af] px-8 py-8">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-40 dark:opacity-40 opacity-30" />
            <h1 className="relative text-4xl text-white drop-shadow-lg">Create New Ticket</h1>
            <p className="relative mt-2 text-blue-100 dark:text-blue-100 text-blue-50">Submit your IT support request</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 p-8">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm uppercase tracking-wider text-slate-300 dark:text-slate-300 text-slate-700">
                Name <span className="text-red-400 dark:text-red-400 text-red-600">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-lg border border-slate-600 dark:border-slate-600 border-slate-300 bg-slate-900/50 dark:bg-slate-900/50 bg-white px-4 py-3 text-white dark:text-white text-slate-900 placeholder-slate-500 dark:placeholder-slate-500 placeholder-slate-400 outline-none backdrop-blur-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50"
                placeholder="Enter your name"
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="department" className="block text-sm uppercase tracking-wider text-slate-300 dark:text-slate-300 text-slate-700">
                  Department <span className="text-red-400 dark:text-red-400 text-red-600">*</span>
                </label>
                <select
                  id="department"
                  required
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="w-full rounded-lg border border-slate-600 dark:border-slate-600 border-slate-300 bg-slate-900/50 dark:bg-slate-900/50 bg-white px-4 py-3 text-white dark:text-white text-slate-900 outline-none backdrop-blur-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50"
                >
                  <option value="">Select department</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="issueType" className="block text-sm uppercase tracking-wider text-slate-300 dark:text-slate-300 text-slate-700">
                  Type of Issue <span className="text-red-400 dark:text-red-400 text-red-600">*</span>
                </label>
                <select
                  id="issueType"
                  required
                  value={formData.issueType}
                  onChange={(e) => setFormData({ ...formData, issueType: e.target.value })}
                  className="w-full rounded-lg border border-slate-600 dark:border-slate-600 border-slate-300 bg-slate-900/50 dark:bg-slate-900/50 bg-white px-4 py-3 text-white dark:text-white text-slate-900 outline-none backdrop-blur-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50"
                >
                  <option value="">Select issue type</option>
                  {issueTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="block text-sm uppercase tracking-wider text-slate-300 dark:text-slate-300 text-slate-700">
                Description <span className="text-red-400 dark:text-red-400 text-red-600">*</span>
              </label>
              <textarea
                id="description"
                required
                rows={6}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full resize-none rounded-lg border border-slate-600 dark:border-slate-600 border-slate-300 bg-slate-900/50 dark:bg-slate-900/50 bg-white px-4 py-3 text-white dark:text-white text-slate-900 placeholder-slate-500 dark:placeholder-slate-500 placeholder-slate-400 outline-none backdrop-blur-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50"
                placeholder="Describe your issue in detail..."
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm uppercase tracking-wider text-slate-300 dark:text-slate-300 text-slate-700">
                Priority Level <span className="text-red-400 dark:text-red-400 text-red-600">*</span>
              </label>
              <div className="grid gap-4 sm:grid-cols-3">
                {priorities.map((priority) => {
                  const Icon = priority.icon;
                  return (
                    <button
                      key={priority.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, priority: priority.value })}
                      className={`group relative overflow-hidden rounded-xl border-2 ${
                        formData.priority === priority.value
                          ? 'border-white/50 dark:border-white/50 border-white/80 bg-gradient-to-br ' + priority.gradient
                          : 'border-slate-600 dark:border-slate-600 border-slate-300 bg-slate-900/30 dark:bg-slate-900/30 bg-slate-100/50'
                      } p-4 shadow-lg transition-all hover:scale-105 ${
                        formData.priority === priority.value ? priority.shadowColor : ''
                      }`}
                    >
                      <div className="relative flex flex-col items-center gap-2">
                        <Icon
                          className={`h-6 w-6 ${
                            formData.priority === priority.value ? 'text-white' : 'text-slate-400 dark:text-slate-400 text-slate-600'
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            formData.priority === priority.value ? 'text-white' : 'text-slate-400 dark:text-slate-400 text-slate-600'
                          }`}
                        >
                          {priority.label}
                        </span>
                      </div>
                      {formData.priority === priority.value && (
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-3">
              <label htmlFor="photos" className="block text-sm uppercase tracking-wider text-slate-300 dark:text-slate-300 text-slate-700">
                Photos (optional)
              </label>
              <div className="flex flex-col gap-3 rounded-xl border-2 border-dashed border-slate-600 dark:border-slate-600 border-slate-300 bg-slate-900/30 dark:bg-slate-900/30 bg-slate-50 p-6 transition-all hover:border-blue-500/50">
                <div className="flex items-center justify-center gap-4">
                  <label
                    htmlFor="photos"
                    className="flex cursor-pointer items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-white shadow-lg shadow-blue-500/30 transition-all hover:scale-105 hover:shadow-blue-500/50"
                  >
                    <Upload className="h-5 w-5" />
                    <span>Choose Files</span>
                  </label>
                  <input
                    id="photos"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => setFiles(e.target.files)}
                    className="hidden"
                  />
                </div>
                <p className="text-center text-sm text-slate-400 dark:text-slate-400 text-slate-600">
                  {files && files.length > 0
                    ? `${files.length} file${files.length > 1 ? 's' : ''} selected`
                    : 'Upload screenshots or related images'}
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 py-5 text-lg text-white shadow-2xl shadow-green-500/40 transition-all hover:scale-[1.02] hover:shadow-green-500/60"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="relative">Submit Ticket</span>
            </button>
          </form>
        </Card>
      </div>
    </div>
  );
}
