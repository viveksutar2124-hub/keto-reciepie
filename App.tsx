
import React from 'react';
import { 
  Flame, 
  ChevronRight, 
  Star, 
} from 'lucide-react';
import Hero from './components/Hero';
import Features from './components/Features';
import LeadCapture from './components/LeadCapture';
import ProblemSolution from './components/ProblemSolution';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation - Simple Floating Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-md border border-slate-100">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-600 p-2 rounded-lg">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900 font-heading tracking-tight">Keto Made Simple</span>
          </div>
          <a 
            href="https://www.claudiacaldwell.com/oto-uf61a?el=splittest-1214-bradflow-control#aff=viveksutar" 
            className="hidden sm:flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-xl transition-all duration-300 font-medium text-sm shadow-sm"
          >
            Get Free Recipes
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 py-20">
          <ProblemSolution />
          <HowItWorks />
          <Features />
          <Testimonials />
          <LeadCapture />
          
          {/* Social Proof Mini-Section */}
          <section className="text-center py-10">
            <h3 className="text-slate-400 font-bold text-sm uppercase tracking-widest mb-8">Trusted by Millions Worldwide</h3>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
               <span className="text-2xl font-black text-slate-800 italic">HEALTHLINE</span>
               <span className="text-2xl font-black text-slate-800 italic">WELLNESS</span>
               <span className="text-2xl font-black text-slate-800 italic">VITALITY</span>
               <span className="text-2xl font-black text-slate-800 italic">KETO LIFE</span>
            </div>
          </section>
        </div>

        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "Is this beginner-friendly?",
      a: "Yes — perfect even if you’re brand new to keto. We break down the science into simple, actionable steps."
    },
    {
      q: "Do I need supplements?",
      a: "No. This plan focuses exclusively on real food, simple recipes, and proven meal plans. No expensive pills or powders required."
    },
    {
      q: "Is it safe?",
      a: "Absolutely. It’s a digital meal plan based on natural ingredients and simple recipes. We focus on sustainable, healthy eating."
    }
  ];

  return (
    <section className="max-w-3xl mx-auto px-4 py-32">
      <h2 className="text-3xl font-bold text-slate-900 font-heading text-center mb-12 uppercase tracking-tight">Quick FAQ</h2>
      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex gap-3">
              <span className="text-emerald-600 font-black">Q:</span> {faq.q}
            </h3>
            <p className="text-slate-600 pl-8 leading-relaxed">
              {faq.a}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-16 bg-emerald-50 p-6 rounded-2xl border border-emerald-100 flex items-start gap-4">
        <div className="bg-emerald-600 p-2 rounded-lg flex-shrink-0">
          <Star className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="text-emerald-900 font-bold mb-1">Pro Tip for Success</p>
          <p className="text-emerald-700 text-sm">Follow the meal plan consistently for at least 14 days to see the best results. Consistency is the key to entering ketosis.</p>
        </div>
      </div>
    </section>
  );
};

export default App;
