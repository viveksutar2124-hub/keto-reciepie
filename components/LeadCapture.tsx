
import React, { useState, useEffect } from 'react';
import { Mail, User, ShieldCheck, ArrowRight, CheckCircle2, Star, ExternalLink, Inbox } from 'lucide-react';

const LeadCapture: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const affiliateLink = "https://www.claudiacaldwell.com/oto-uf61a?el=splittest-1214-bradflow-control#aff=viveksutar";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    // Simulate a brief delay for professionalism
    setTimeout(() => {
      try {
        // GET EXISTING LEADS
        const existingLeadsRaw = localStorage.getItem('keto_leads');
        const existingLeads = existingLeadsRaw ? JSON.parse(existingLeadsRaw) : [];
        
        // ADD NEW LEAD
        const newLead = {
          name: formData.name,
          email: formData.email,
          date: new Date().toLocaleString()
        };
        
        existingLeads.push(newLead);
        
        // SAVE BACK TO STORAGE
        localStorage.setItem('keto_leads', JSON.stringify(existingLeads));
        
        setIsSubmitted(true);
      } catch (err) {
        console.error("Storage Error:", err);
        setError("Something went wrong saving your details. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }, 1000);
  };

  // Effect to handle redirect after submission
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        window.location.href = affiliateLink;
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  if (isSubmitted) {
    return (
      <section id="lead-form" className="relative scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border-t-8 border-emerald-600 p-8 md:p-16 text-center animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Inbox className="w-10 h-10" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading mb-4">
              Success! Check Your Email
            </h2>
            
            <p className="text-slate-600 text-lg mb-8 max-w-md mx-auto">
              We've sent a "Thanks" email to <span className="font-bold text-slate-900">{formData.email}</span>. 
              While you wait for it to arrive, you can access your recipes immediately!
            </p>

            <div className="bg-slate-50 border border-dashed border-slate-300 rounded-3xl p-8 mb-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 py-1 border border-slate-200 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Welcome Message
              </div>
              <p className="text-slate-500 italic mb-6">
                "Thanks for joining the tribe! Click the button below to grab your free keto recipes and see the full system..."
              </p>
              
              <a 
                href={affiliateLink}
                className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-500 text-slate-900 font-black text-xl px-10 py-5 rounded-2xl transition-all shadow-lg hover:scale-105 active:scale-95"
              >
                Grab Your Free Keto Recipes Now
                <ExternalLink className="w-6 h-6" />
              </a>
            </div>

            <p className="text-slate-400 text-sm">
              You're being redirected to the full plan in 8 seconds...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-form" className="relative scroll-mt-24">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 p-12 md:p-16 flex flex-col justify-center text-center">
          <h2 className="text-4xl font-bold text-slate-900 font-heading mb-6 leading-tight">
            Get Free Keto Recipes (Limited Access)
          </h2>
          <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            Enter your details below to unlock free keto recipes and instant access to the full plan.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto w-full">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-xl text-slate-900 font-medium placeholder:text-slate-400"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="email"
                placeholder="Your Best Email Address"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-xl text-slate-900 font-medium placeholder:text-slate-400"
              />
            </div>
            
            {error && (
              <p className="text-rose-600 text-sm font-bold bg-rose-50 p-3 rounded-xl border border-rose-100">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-70 text-white font-bold text-xl py-5 rounded-2xl shadow-xl shadow-emerald-200 transition-all flex items-center justify-center gap-3 active:scale-[0.98] glow-button"
            >
              {isLoading ? "Saving..." : "Unlock Free Keto Recipes Now"}
              <ArrowRight className="w-6 h-6" />
            </button>
          </form>

          <div className="mt-8 flex items-center justify-center gap-3 text-slate-400 text-sm">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <span>Secure connection. No spam. Ever.</span>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-slate-500 font-medium italic">"The simplest keto guide I've ever used!"</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;
