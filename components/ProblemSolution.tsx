
import React from 'react';
import { XCircle, CheckCircle2, Flame, Scale } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-heading mb-6">
          Why Most Keto Journeys Fail
        </h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Most people fail on keto because it’s confusing, restrictive, and hard to sustain.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <XCircle className="w-7 h-7 text-rose-500" />
            The Hard Way:
          </h3>
          <ul className="space-y-6">
            {[
              "Confusing and complicated rules",
              "Giving up all your favorite foods",
              "Expensive, unnecessary supplements",
              "Boring, repetitive meals",
              "Unstable energy and constant cravings"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 text-slate-600 text-lg">
                <div className="w-2 h-2 rounded-full bg-rose-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-emerald-600 p-10 rounded-[2.5rem] shadow-2xl text-white transform md:scale-105 relative">
          <div className="absolute -top-4 -right-4 bg-amber-400 text-slate-900 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg rotate-12">
            THE SIMPLE WAY
          </div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Flame className="w-7 h-7 text-amber-300" />
            Our Proven Solution:
          </h3>
          <ul className="space-y-6">
            {[
              "Done-for-you keto meal plans",
              "Easy recipes anyone can follow",
              "Clear guidance to stay in ketosis",
              "No guesswork — just results",
              "Sustainable fat loss without the stress"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 text-emerald-50 text-lg">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-amber-300" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-20 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-6 text-emerald-600 font-bold uppercase tracking-widest text-sm">
          <Scale className="w-5 h-5" />
          <span>Real Science. Real Results.</span>
        </div>
        <p className="text-2xl font-bold text-slate-800 font-heading leading-tight">
          Lose weight, control your cravings, and stay consistent without complicated rules.
        </p>
      </div>
    </section>
  );
};

export default ProblemSolution;
