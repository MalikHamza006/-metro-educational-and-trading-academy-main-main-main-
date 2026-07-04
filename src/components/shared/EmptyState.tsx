import React from 'react';
import { HelpCircle } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

export default function EmptyState({
  title = "No Match Found",
  description = "Modify filters or search term parameters.",
  icon = <HelpCircle className="w-8 h-8 text-red-500/30 mx-auto" strokeWidth={1.5} />
}: EmptyStateProps) {
  return (
    <div className="text-center py-16 space-y-2.5 bg-zinc-55 bg-zinc-50/50 rounded-3xl border border-dashed border-red-500/10 max-w-md mx-auto">
      {icon}
      <h4 className="font-display font-bold text-slate-800 text-sm">{title}</h4>
      <p className="text-xs text-slate-500 font-sans">{description}</p>
    </div>
  );
}
