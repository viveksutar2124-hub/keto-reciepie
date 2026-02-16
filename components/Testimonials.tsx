
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "Mother of 3",
      text: "I was skeptical at first, but after 2 weeks on this keto plan, I've already lost 8 pounds. The best part? I'm never hungry. These recipes are life-changing!",
      image: "https://i.pravatar.cc/150?u=sarah",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "Tech Consultant",
      text: "The energy boost is what surprised me most. I no longer have that 2 PM crash. My focus is sharp, and I've dropped two belt sizes. This is the only plan that stuck.",
      image: "https://i.pravatar.cc/150?u=david",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Fitness Enthusiast",
      text: "Highly recommend for anyone struggling with cravings. The 'how it works' explanation made so much sense. Simple, effective, and delicious!",
      image: "https://i.pravatar.cc/150?u=elena",
      rating: 5
    }
  ];

  return (
    <section className="bg-emerald-600 rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 p-10 opacity-10">
        <Quote className="w-64 h-64" />
      </div>
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-white">Trusted By 1,000,000+ People</h2>
        <p className="text-emerald-50 text-lg max-w-2xl mx-auto">
          See why thousands are choosing Keto Made Simple as their primary weight loss solution.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {reviews.map((rev, idx) => (
          <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2.5rem] flex flex-col items-center text-center">
            <div className="flex gap-1 mb-6">
              {[...Array(rev.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-lg italic mb-8 leading-relaxed">"{rev.text}"</p>
            <div className="mt-auto">
              <img src={rev.image} alt={rev.name} className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-amber-400 p-1" />
              <p className="font-bold text-xl">{rev.name}</p>
              <p className="text-emerald-200 text-sm">{rev.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
