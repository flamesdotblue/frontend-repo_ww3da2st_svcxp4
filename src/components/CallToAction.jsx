import React from 'react';
import { Sparkles } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="get-started" className="relative w-full bg-gradient-to-b from-slate-950 to-slate-900 py-16 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(120deg,rgba(34,211,238,0.15),rgba(167,139,250,0.15))] p-8 text-center backdrop-blur">
          <div className="mx-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs text-white/80">
            <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
            No-code setup • Firebase + Stripe/Razorpay
          </div>
          <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">Launch your SupportMe page in minutes</h3>
          <p className="mx-auto mt-2 max-w-2xl text-white/80">
            Sign in, customize your profile, set tiers, and share your unique link. You focus on creating — we handle the rest.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#" className="rounded-xl bg-white px-6 py-3 font-medium text-slate-900 transition hover:opacity-90">Create your page</a>
            <a href="#" className="rounded-xl border border-white/20 px-6 py-3 text-white transition hover:bg-white/5">Read the docs</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
