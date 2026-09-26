import React, { useState } from 'react'
import { sendContactMessage } from '../api/contactApi'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const response = await sendContactMessage(formData)

    setIsSubmitting(false)

    if (response.success) {
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 antialiased selection:bg-blue-500 selection:text-white">

      {/* Hero Section with Watermarked Image Background */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-24 px-6 text-center">

        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Nammy3.png"
            alt="Nammy Yoghurt Background"
            className="w-full h-full object-cover object-center opacity-30"
          />
          {/* Dark Overlay Gradient to maintain high text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/60" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider text-blue-200 uppercase bg-blue-600/30 backdrop-blur-md rounded-full border border-blue-400/30">
            We'd Love to Hear From You
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-200 max-w-xl mx-auto font-light leading-relaxed">
            Have a question about our yoghurt flavors, bulk order inquiries, or special delivery in Kumasi? Let's talk.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Contact Details, Image, and Info Cards */}
          <div className="lg:col-span-5 space-y-8">

            {/* Header & Quick Intro */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Direct Contact
              </span>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Reach Out Directly
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Whether you need fresh yoghurt supplied for an event or just want to satisfy a daily craving, feel free to contact us anytime.
              </p>
            </div>

            {/* Featured Image Container */}
            <div className="relative group overflow-hidden rounded-2xl shadow-sm border border-slate-200/80 bg-white">
              <img
                src="https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80"
                alt="Nammy Yoghurt Parfait with fresh fruit and granola"
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-medium uppercase text-blue-200 tracking-wide">Freshly Prepared Daily</p>
                <p className="text-sm font-semibold">Handcrafted with care in Kumasi, Ghana</p>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">

              {/* Phone Card */}
              <a
                href="tel:0538885992"
                className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200/70 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block">Call / WhatsApp</span>
                  <span className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">053 888 5992</span>
                  <p className="text-xs text-slate-500 mt-0.5">Mon–Sat, 8:00 AM – 6:00 PM</p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:kedmer07entreprise@gmail.com"
                className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200/70 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block">Email Us</span>
                  <span className="font-semibold text-slate-800 truncate block group-hover:text-blue-600 transition-colors">kedmer07entreprise@gmail.com</span>
                  <p className="text-xs text-slate-500 mt-0.5">We reply within 24 hours</p>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200/70 shadow-sm">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block">Main Location</span>
                  <span className="font-semibold text-slate-800">Appiadu, Kumasi</span>
                  <p className="text-xs text-slate-500 mt-0.5">Ashanti Region, Ghana</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl border border-slate-200/80 shadow-md">

            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Send Us a Message</h2>
              <p className="text-sm text-slate-500 mt-1">
                Fill out the form below and our team will get back to you promptly.
              </p>
            </div>

            {/* Success Toast Banner */}
            {submitted && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-center gap-3 animate-fadeIn">
                <svg className="w-5 h-5 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-sm">
                  <p className="font-semibold">Message sent successfully!</p>
                  <p className="text-emerald-600 text-xs mt-0.5">Thank you for contacting Nammy Yoghurt. We'll be in touch soon.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name & Phone Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Kwame Mensah"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="e.g. 024 000 0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all text-sm"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all text-sm"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                  Your Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  placeholder="Tell us about your request, preferred flavours, or event orders..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all text-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>
      </section>

    </div>
  )
}