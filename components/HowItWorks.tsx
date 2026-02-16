
import React from 'react';
import { Zap, Beef, Brain, TrendingDown } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: "1. Switch Your Fuel",
      desc: "Normally your body burns carbs. We teach you how to switch to burning healthy fats for fuel instead.",
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=400&auto=format&fit=crop"
    },
    {
      title: "2. Eat Delicious Foods",
      desc: "Enjoy steak, eggs, avocado, and butter. No more starving yourself or eating 'rabbit food'.",
      icon: <Beef className="w-8 h-8 text-rose-500" />,
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=400&auto=format&fit=crop"
    },
    {
      title: "3. Enter Ketosis",
      desc: "Within days, your body enters 'Ketosis'—a state where fat is being melted away 24/7, even while you sleep.",
      icon: <Brain className="w-8 h-8 text-emerald-500" />,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400&auto=format&fit=crop"
    },
    {
      title: "4. Rapid Fat Loss",
      desc: "Watch the scale drop as your energy levels skyrocket and brain fog disappears forever.",
      icon: <TrendingDown className="w-8 h-8 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-heading mb-6">How The Keto Diet Works</h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          The science of keto is simple: stop burning sugar and start burning fat. Here is your roadmap to success.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="group">
            <div className="relative mb-6 overflow-hidden rounded-[2rem] shadow-lg aspect-square">
              <img src={step.image} alt={step.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute top-4 left-4 bg-white p-3 rounded-2xl shadow-xl">
                {step.icon}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3 font-heading">{step.title}</h3>
            <p className="text-slate-600 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
