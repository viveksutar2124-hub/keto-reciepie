
import React, { useState, useEffect } from 'react';
import { Flame, Heart, Download, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Secret Access Check: Only show download button if ?admin=true is in the URL
    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === 'true') {
      setIsAdmin(true);
    }
  }, []);

  const downloadLeads = () => {
    try {
      const leadsRaw = localStorage.getItem('keto_leads');
      const leads = leadsRaw ? JSON.parse(leadsRaw) : [];
      
      if (leads.length === 0) {
        alert("No leads found in storage yet.");
        return;
      }

      // Convert JSON to CSV (Excel compatible)
      const headers = ["Name", "Email", "Date Submitted"];
      const rows = leads.map((l: any) => [
        `"${l.name}"`,
        `"${l.email}"`,
        `"${l.date}"`
      ]);

      const csvContent = [
        headers.join(","),
        ...rows.map((e: any) => e.join(","))
      ].join("\n");

      // Trigger Browser Download
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', `KetoLeads_${new Date().toISOString().split('T')[0]}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Export Failed:", err);
      alert("Error exporting leads. Check console.");
    }
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-600 p-2 rounded-lg">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-900 font-heading">Keto Made Simple</span>
          </div>

          {/* HIDDEN ADMIN PANEL - ONLY VISIBLE WITH ?admin=true */}
          {isAdmin && (
            <div className="flex flex-col items-center gap-4 bg-white p-8 rounded-3xl border-2 border-emerald-500 shadow-2xl max-w-lg w-full animate-bounce-subtle">
              <div className="flex items-center gap-2 text-emerald-700 font-black uppercase tracking-widest text-sm">
                <Shield className="w-5 h-5" />
                Admin Dashboard
              </div>
              <p className="text-slate-600 text-sm">
                Your leads are securely stored in this browser's local database. Click below to export them to an Excel (CSV) file.
              </p>
              <button 
                onClick={downloadLeads}
                className="w-full flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg active:scale-95"
              >
                <Download className="w-5 h-5" />
                Download All Leads (.CSV)
              </button>
            </div>
          )}
          
          <nav className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            <a href="#" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Terms of Service</a>
            <a href="https://www.claudiacaldwell.com/oto-uf61a?el=splittest-1214-bradflow-control#aff=viveksutar" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Official Access Link</a>
          </nav>

          <div className="pt-8 border-t border-slate-200 w-full flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Keto Made Simple. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> for your health journey.
            </p>
          </div>
          
          <div className="text-xs text-slate-400 max-w-3xl leading-relaxed">
            <p className="mb-2 uppercase font-bold text-[10px] tracking-widest text-slate-500">Medical Disclaimer</p>
            The content provided is for informational purposes only and is not intended as medical advice. Always consult with a healthcare professional before starting any new diet or exercise program. Individual results may vary.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
