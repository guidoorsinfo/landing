"use client";
import React, { useState } from "react";
import {
  Clock,
  DollarSign,
  Star,
  Users,
  TrendingUp,
  Check,
  ChevronRight,
  Search,
  Heart,
  Camera,
} from "lucide-react";
import Image from "next/image";

export default function GuidoorsLanding() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email && email.includes("@")) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Image
                src="/guidoors-icon-512-transparent.png"
                alt="Guidoors"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Guidoors
              </span>
            </div>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl">
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full mb-8 animate-pulse">
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">
                25+ creators already pre-registered
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Unlock Authentic Travel
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Experiences
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Stop wasting hours researching scattered travel advice. Buy
              curated digital guides from real travelers who've been there, with
              insider tips, hidden gems, and practical details you won't find
              anywhere else.
            </p>

            {/* Email Signup */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full border-2 border-slate-300 focus:border-indigo-600 focus:outline-none text-lg text-slate-500"
                />
                <button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-2xl transition-all font-semibold whitespace-nowrap"
                >
                  Join Waitlist
                </button>
              </div>
              {submitted && (
                <p className="text-green-600 mt-3 font-medium">
                  ✓ You're on the list! We'll be in touch soon.
                </p>
              )}
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-slate-500">
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>Early bird access</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Mockup */}
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-3xl"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Sample Guide Cards */}

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-indigo-200">
                  <div className="aspect-video bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg mb-4 overflow-hidden relative">
                    <img
                      src="/santorini.jpg"
                      alt="Santorini sunset view"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-slate-900">
                    Santorini Hidden Gems
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">
                    5-day itinerary with secret sunset spots
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-indigo-600">
                      €8
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-slate-900">
                        4.9
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-indigo-200">
                  <div className="aspect-video bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg mb-4 overflow-hidden relative">
                    <img
                      src="/tokyo.jpg"
                      alt="Tokyo sunset view"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-slate-900">
                    Tokyo Food Adventure
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">
                    Best local eats & hidden izakayas
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-600">
                      €6
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-slate-900">
                        5.0
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-indigo-200">
                  <div className="aspect-video bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg mb-4 overflow-hidden relative">
                    <img
                      src="/crete.webp"
                      alt="Tokyo sunset view"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-slate-900">
                    Crete by Ferry
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">
                    Complete island hopping guide
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">
                      €7
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-slate-900">
                        4.8
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Planning Travel Shouldn't Be Overwhelming
            </h2>
            <p className="text-xl text-slate-600">
              Guidoors connects travelers through authentic, experience-based
              guides written by people who've already been there.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-slate-900">
                Hours Wasted
              </h3>
              <p className="text-slate-600">
                Endless research across multiple platforms and blogs
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-slate-900">
                Scattered Info
              </h3>
              <p className="text-slate-600">
                Information is fragmented and hard to piece together
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-slate-900">
                Outdated Advice
              </h3>
              <p className="text-slate-600">
                Reviews and tips from years ago that no longer apply
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-slate-900">
                Biased Reviews
              </h3>
              <p className="text-slate-600">
                Sponsored content disguised as authentic recommendations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Real Guides from Real Travelers
              </h2>
              <p className="text-xl text-indigo-100 mb-8">
                Get curated, experience-based guides with everything you need:
                itineraries, budgets, picture spots with exact locations, hidden
                gems, safety tips, and insider knowledge you won't find anywhere
                else.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      Detailed Itineraries
                    </h4>
                    <p className="text-indigo-100">
                      Day-by-day plans with timing and transportation details
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Budget Breakdowns</h4>
                    <p className="text-indigo-100">
                      Real costs for meals, activities, and transportation
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      Picture Spots with Geolocation
                    </h4>
                    <p className="text-indigo-100">
                      Exact coordinates for the best photo opportunities
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      Hidden Gems & Local Tips
                    </h4>
                    <p className="text-indigo-100">
                      Unique finds you won't discover in guidebooks
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="bg-white rounded-xl p-6 text-slate-900">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full"></div>
                    <div>
                      <h4 className="font-bold">Maria's Milos Guide</h4>
                      <p className="text-sm text-slate-600">
                        Travel Blogger • 15 guides
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-700 mb-4 italic">
                    "Book Villa Serenity for the balcony view - it's absolutely
                    MAGIC at sunset. Also, skip the tourist beaches and head to
                    Papafragas Cave at 8am for a private swimming experience."
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold">4.9</span>
                      <span className="text-slate-600 text-sm">
                        (127 reviews)
                      </span>
                    </div>
                    <span className="text-2xl font-bold text-indigo-600">
                      €8
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Guidoors Works
            </h2>
            <p className="text-xl text-slate-600">
              Built for modern travelers who value authenticity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-indigo-100">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Peer-to-Peer Trust
              </h3>
              <p className="text-slate-600">
                Younger audiences trust real travelers, not corporate marketing.
                Get advice from people like you.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Smart Filtering
              </h3>
              <p className="text-slate-600">
                Find guides that match your travel style - by ferry, budget
                backpacking, luxury stays, adventure focus.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Affordable Access
              </h3>
              <p className="text-slate-600">
                Even buying 10 guides for a new destination costs less than a
                single meal. Incredible value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Early Validation</h2>
            <p className="text-xl text-indigo-200">
              Real travelers want this solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                85%
              </div>
              <p className="text-xl text-indigo-200">
                Would pay for curated local guides
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                70%
              </div>
              <p className="text-xl text-indigo-200">
                Travelers interested in publishing content
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-2">
                25+
              </div>
              <p className="text-xl text-indigo-200">
                Creators pre-registered for beta
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Join the Travel Revolution
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            Be among the first to experience authentic, peer-to-peer travel
            guides. Join our waitlist and get early access when we launch.
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full border-2 border-slate-300 focus:border-indigo-600 focus:outline-none text-lg text-slate-500"
              />
              <button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-2xl transition-all font-semibold whitespace-nowrap flex items-center space-x-2"
              >
                <span>Join Now</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            {submitted && (
              <p className="text-green-600 mt-3 font-medium">
                ✓ Welcome aboard! Check your email soon.
              </p>
            )}
          </div>

          <p className="text-slate-500 mt-6">
            Join 4.1 million daily travelers discovering a better way to explore
            the world
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image
                src="/guidoors-icon-512-transparent-white.png"
                alt="Guidoors"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-xl font-bold">Guidoors</span>
            </div>
            <p className="text-slate-400">
              © 2025 Guidoors. Unlock authentic travel experiences.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
