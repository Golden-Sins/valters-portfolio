"use client";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="print:hidden fixed top-6 right-6 z-50 font-mono text-xs uppercase tracking-wider bg-accent text-ink px-4 py-2 hover:bg-accent-dim transition-colors"
    >
      Print / Save as PDF
    </button>
  );
}
