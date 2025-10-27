import React from 'react';
import { Star, Lock } from 'lucide-react';

const perks = [
  'Exclusive posts',
  'Early access',
  'Supporter-only chat',
];

const CreatorProfileCard = () => {
  return (
    <section id="demo" className="relative w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=240&auto=format&fit=crop"
                alt="Creator avatar"
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold">@dev_aurora</h3>
                <p className="text-sm text-white/70">Developer • Indie Hacker</p>
              </div>
            </div>

            <p className="mt-4 text-white/80">
              Building delightful open-source tools and sharing behind-the-scenes on indie hacking.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[100, 250, 500].map((amt) => (
                <button
                  key={amt}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition hover:bg-white/10"
                >
                  Buy ₹{amt}
                </button>
              ))}
            </div>

            <button className="mt-4 w-full rounded-xl bg-cyan-400 px-5 py-3 font-medium text-slate-900 transition hover:bg-cyan-300">
              Support with a custom amount
            </button>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-amber-300" />
                <h4 className="font-semibold">Membership tiers</h4>
              </div>
              <ul className="mt-3 grid gap-2 sm:grid-cols-3">
                {['Bronze', 'Silver', 'Gold'].map((t, i) => (
                  <li key={t} className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <p className="font-medium">{t}</p>
                    <p className="text-sm text-white/70">₹{[199, 399, 799][i]} / month</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h4 className="text-lg font-semibold">Example members-only post</h4>
            <div className="mt-3 flex items-center gap-2 text-sm text-white/70">
              <Lock className="h-4 w-4" />
              Locked for members • Gold tier or above
            </div>
            <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1525072124541-6237cc0b235b?q=80&w=1200&auto=format&fit=crop"
                alt="Members-only preview"
                className="h-56 w-full object-cover"
              />
            </div>
            <ul className="mt-4 grid gap-2">
              {perks.map((p) => (
                <li key={p} className="text-sm text-white/80">• {p}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorProfileCard;
