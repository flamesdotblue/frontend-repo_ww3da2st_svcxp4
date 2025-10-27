import React from 'react';
import Hero3D from './components/Hero3D';
import FeatureHighlights from './components/FeatureHighlights';
import CreatorProfileCard from './components/CreatorProfileCard';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 font-inter text-white">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-block rounded-md bg-gradient-to-br from-cyan-400 to-violet-400 p-1" />
            <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-lg font-semibold text-transparent">
              SupportMe
            </span>
          </a>
          <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#demo" className="hover:text-white">Demo</a>
            <a href="#get-started" className="hover:text-white">Get started</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#" className="hidden rounded-lg border border-white/15 px-3 py-1.5 text-sm text-white/90 hover:bg-white/5 sm:inline-block">Sign in</a>
            <a href="#" className="rounded-lg bg-cyan-400 px-3 py-1.5 text-sm font-medium text-slate-900 hover:bg-cyan-300">Create page</a>
          </div>
        </div>
      </header>

      <main>
        <Hero3D />
        <div id="features">
          <FeatureHighlights />
        </div>
        <CreatorProfileCard />
        <CallToAction />
      </main>

      <footer className="border-t border-white/10 bg-slate-950 py-8 text-center text-sm text-white/60">
        <div className="mx-auto max-w-7xl px-6">
          <p>© {new Date().getFullYear()} SupportMe. Built for creators.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
