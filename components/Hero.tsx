
import React from 'react';
// Added missing Utensils and Scale icon imports
import { Flame, CheckCircle2, Globe, Timer, ChevronRight, Star, Utensils, Scale } from 'lucide-react';

const Hero: React.FC = () => {
  const stats = [
    { label: "Beginner Friendly", icon: <Star className="w-5 h-5 text-amber-400" /> },
    { label: "No Supplements", icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" /> },
    { label: "Works Worldwide", icon: <Globe className="w-5 h-5 text-blue-400" /> },
    { label: "Results Focused", icon: <Timer className="w-5 h-5 text-rose-400" /> },
  ];

  const affiliateLink = "https://www.claudiacaldwell.com/oto-uf61a?el=splittest-1214-bradflow-control#aff=viveksutar";

  return (
    <div className="relative pt-32 pb-20 overflow-hidden bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-100 mb-8">
              <Flame className="w-5 h-5 text-emerald-600" />
              <span className="text-emerald-700 font-bold text-sm tracking-wide">PROVEN MEAL PLAN USED BY MILLIONS</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 font-heading leading-[1.1] mb-8">
              Keto Made Simple: Lose Weight <span className="text-emerald-600">Without</span> Giving Up Your Favorites
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Discover the #1 high-converting Keto Meal Plan trusted worldwide — designed to help you burn fat, control cravings, and stay consistent without complicated rules.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center lg:items-start gap-2 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  {stat.icon}
                  <span className="text-xs font-bold text-slate-700 leading-tight">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <a 
                href={affiliateLink}
                className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-5 rounded-2xl font-bold text-xl transition-all duration-300 shadow-xl glow-button hover:scale-105 active:scale-95"
              >
                Get FREE Keto Recipes
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex -space-x-3 overflow-hidden">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                ))}
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-emerald-100 ring-2 ring-white text-emerald-700 text-xs font-bold">+1M</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=1200&auto=format&fit=crop" 
                alt="Delicious Keto Meal" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/95 backdrop-blur rounded-2xl shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 p-2 rounded-xl">
                    <Utensils className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-emerald-600 font-bold text-sm uppercase tracking-widest">Featured Recipe</p>
                    <p className="text-slate-900 font-bold text-xl">Avocado & Bacon Keto Salad</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floaties */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-amber-400 rounded-full flex flex-col items-center justify-center shadow-xl rotate-[-12deg] z-20">
              <span className="text-slate-900 font-black text-2xl">FREE</span>
              <span className="text-slate-900 font-bold text-xs uppercase">Recipes</span>
            </div>
            <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white px-6 py-4 rounded-2xl shadow-xl z-20 border border-slate-100 hidden md:block">
              <div className="flex items-center gap-2 mb-1">
                <Scale className="w-4 h-4 text-emerald-600" />
                <span className="text-slate-900 font-bold">-12 lbs</span>
              </div>
              <p className="text-xs text-slate-500 font-medium">in just 3 weeks!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
