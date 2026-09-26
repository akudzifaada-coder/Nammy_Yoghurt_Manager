import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  const ingredients = [
    { name: "Fresh Milk", desc: "Locally sourced, pasteurized dairy base." },
    { name: "Live Yoghurt Culture", desc: "Packed with active gut-friendly probiotics." },
    { name: "Real Fruit Flavours", desc: "Infused with banana, vanilla, & strawberry." },
    { name: "Natural Sweeteners", desc: "Balanced sweetness without artificial syrup." },
    { name: "Crunchy Granola", desc: "Topped with freshly baked grains & fruit for parfaits." },
    { name: "Zero Artificial Preservatives", desc: "Clean, honest ingredients in every batch." }
  ]

  const values = [
    {
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Quality Ingredients",
      desc: "Made with real fruit extracts and live cultures—never taking shortcuts on health or taste."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Handcrafted With Care",
      desc: "Crafted thoughtfully in small batches to ensure consistency and fresh taste in every jar."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Community First",
      desc: "Inspired by feedback from our everyday yogurt lovers and growing family of customers."
    }
  ]

  return (
    <div className="bg-white text-slate-800 antialiased selection:bg-blue-500 selection:text-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 text-white py-24 px-6 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-blue-100 uppercase bg-blue-500/30 backdrop-blur-md rounded-full border border-blue-400/30">
            Handcrafted & Fresh Daily
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            About Nammy Yoghurt
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">
            A small business built on real ingredients, mindful craftsmanship, and unforgettable taste.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 space-y-3">
            <span className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
              Our Journey
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Pure goodness in every spoon.
            </h2>
          </div>

          <div className="md:col-span-7 space-y-4 text-slate-600 leading-relaxed">
            <p>
              Nammy Yoghurt started as a simple passion project: make yoghurt the way it was meant to taste—fresh, full-bodied, infused with real fruit, and completely free of lazy shortcuts.
            </p>
            <p>
              What began as a single home-brewed batch has expanded into a boutique range of <strong className="text-slate-900">Banana, Vanilla, and Strawberry</strong> yogurt, alongside rich Greek yoghurt and crunchy fruit parfaits. Every jar is still small-batch prepared to guarantee top quality.
            </p>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="bg-slate-50 py-20 px-6 border-y border-slate-100">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
              Transparent Crafting
            </span>
            <h2 className="text-3xl font-bold text-slate-900">
              Simple & Honest Ingredients
            </h2>
            <p className="text-slate-600">
              We stick to essential, high-quality ingredients with zero fillers or unpronounceable chemicals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ingredients.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0" />
                  <h3 className="font-semibold text-slate-900">{item.name}</h3>
                </div>
                <p className="text-sm text-slate-500 pl-5 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
              Our Promise
            </span>
            <h2 className="text-3xl font-bold text-slate-900">Driven by Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-8 bg-white border border-slate-100 rounded-2xl shadow-sm space-y-4 hover:border-blue-100 transition-colors"
              >
                <div className="p-3 bg-blue-50 rounded-2xl">
                  {val.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-900">{val.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold">Ready to sample real yoghurt?</h2>
          <p className="text-blue-100">
            Explore our daily fresh menu or order a custom batch today.
          </p>
          <div className="pt-2">
            <Link
              to="/our-flavours"
              className="inline-block px-8 py-3.5 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:bg-blue-50 transition-all hover:shadow-xl"
            >
              Explore Our Flavours
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}