import React from 'react';
import { Coffee, Shield, Users, Wallet } from 'lucide-react';

const features = [
  {
    icon: Coffee,
    title: 'One-time tips',
    desc: 'Offer quick presets like ₹100/₹250/₹500 and custom amounts with beautiful receipts.'
  },
  {
    icon: Users,
    title: 'Memberships',
    desc: 'Create tiers with monthly perks, renewals, and gated posts for members-only.'
  },
  {
    icon: Wallet,
    title: 'Global payments',
    desc: 'Stripe and Razorpay support with instant confirmations and transparent fees.'
  },
  {
    icon: Shield,
    title: 'Secure by design',
    desc: 'Auth token validation, sane defaults, and privacy-first data practices.'
  }
];

const FeatureHighlights = () => {
  return (
    <section className="relative w-full bg-slate-950 py-16 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(40%_30%_at_10%_20%,rgba(34,197,94,0.15),transparent)]" />
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-2xl font-semibold sm:text-3xl">Everything you need to grow</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-white/70">
          A polished toolkit for creators, designed to convert love into recurring support.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 backdrop-blur transition hover:border-white/20"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-cyan-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-white/70">{desc}</p>
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl transition-opacity duration-300 group-hover:opacity-70" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
