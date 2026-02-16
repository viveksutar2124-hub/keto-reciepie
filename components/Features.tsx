
import React from 'react';
import { Utensils, BookOpen, Clock, HeartPulse, ShieldCheck, Globe } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Easy-to-Follow Plans",
      desc: "Get simple, done-for-you keto meal plans tailored for consistency.",
      icon: <Utensils className="w-6 h-6" />,
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      title: "Tasty Recipes",
      desc: "Delicious keto recipes you'll actually enjoy eating every day.",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-amber-100 text-amber-600"
    },
    {
      title: "Save Time & Effort",
      desc: "No more spending hours searching for what to eat. We did the work for you.",
      icon: <Clock className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Health Focused",
      desc: "Improve energy levels, control blood sugar, and feel great from the inside out.",
      icon: <HeartPulse className="w-6 h-6" />,
      color: "bg-rose-100 text-rose-600"
    },
    {
      title: "Risk-Free Trial",
      desc: "Our low-cost entry makes it incredibly easy and safe to start today.",
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Works for Everyone",
      desc: "A proven system that works for both men and women worldwide.",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-cyan-100 text-cyan-600"
    }
  ];

  return (
    <section id="features">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-heading mb-6">
          What You Get Today
        </h2>
        <p className="text-slate-600 text-lg">
          Everything you need to succeed on keto, simplified into one easy-to-use system.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, idx) => (
          <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-500 group">
            <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center ${f.color} group-hover:scale-110 transition-transform`}>
              {f.icon}
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">{f.title}</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
