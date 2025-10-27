import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Coffee } from 'lucide-react';

const Hero3D = () => {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(56,189,248,0.20),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_80%_80%,rgba(167,139,250,0.18),transparent)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 py-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <Rocket className="h-3.5 w-3.5 text-cyan-300" />
          <span>Modern support platform for creators</span>
        </div>
        <h1 className="mt-6 bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-6xl">
          SupportMe — turn love into fuel
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Accept tips, run memberships, post exclusive content, and build a community — all in one elegant space.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#get-started"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-slate-900 transition hover:bg-cyan-300 active:scale-[0.99]"
          >
            <Coffee className="h-5 w-5" />
            Start accepting coffees
          </a>
          <a
            href="#demo"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white transition hover:bg-white/10"
          >
            Preview a creator page
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
