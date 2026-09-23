import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import heroBg from "../assets/carousel/Train Hard • Daily Efforts • Fitness Discipline Poster Art.jpeg";
import ctaBg from "../assets/carousel/image.png";

// 📸 Carousel images are auto-loaded from src/assets/carousel/
// Upload your images there and name them slide-1.jpg, slide-2.jpg, slide-3.jpg (jpg/png/webp)
const carouselImages = import.meta.glob("../assets/carousel/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

const SLIDES = [
  {
    image: carouselImages["../assets/carousel/FOCUS.jpeg"] || null,
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    kicker: "AI-Powered Tracking",
    title: "Train Smarter, Not Harder",
    desc: "Your personal AI coach that learns your routine and helps you hit every goal.",
  },
  {
    image: carouselImages["../assets/carousel/DISCIPLINE.jpeg"] || null,
    gradient: "from-indigo-500 via-purple-500 to-fuchsia-600",
    kicker: "Health Insights",
    title: "Understand Your Body Every Day",
    desc: "Sleep, heart rate, and wellness summaries all in one beautiful dashboard.",
  },
  {
    image: carouselImages["../assets/carousel/image.png"] || null,
    gradient: "from-amber-500 via-orange-500 to-rose-600",
    kicker: "Community & Goals",
    title: "Compete, Improve, Achieve",
    desc: "Leaderboards and streaks that keep you motivated from day one to day one hundred.",
  },
];

export default function LandingPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleGetStarted = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/login");
    }, 500);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden text-white">
        <img
          src={heroBg}
          alt="Fitness discipline"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/90 via-emerald-900/75 to-cyan-900/80" />
        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
          <span className="inline-block bg-white/15 backdrop-blur px-4 py-1.5 rounded-full text-sm font-medium tracking-wide mb-6">
            ✦ Fitness · AI · Wellness
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-5 leading-tight">
            FitLife AI
          </h1>
          <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
            Simple AI-powered fitness tracking for a healthier life. Track your
            activity, understand your health, and stay motivated every single day.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleGetStarted}
              className="bg-white text-emerald-700 px-8 py-3.5 rounded-xl font-semibold
                         transition-all duration-300
                         hover:scale-105 hover:shadow-2xl"
            >
              {loading ? "Loading..." : "Get Started Free"}
            </button>
            <button
              onClick={() => navigate("/plans")}
              className="bg-transparent border-2 border-white/70 px-8 py-3.5 rounded-xl font-semibold
                         transition-all duration-300
                         hover:bg-white/10 hover:scale-105"
            >
              View Plans
            </button>
          </div>
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg mx-auto">
            <Stat value="10k+" label="Active Users" />
            <Stat value="4.9★" label="App Rating" />
            <Stat value="120+" label="Workouts" />
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Highlights</h2>
        </div>
        <SlideCarousel />
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Everything You Need</h2>
          <p className="text-gray-600">
            Powerful features designed around your daily routine.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Feature
            id="track-activity"
            title="Track Activity"
            desc="Steps, distance, and workouts in one place."
            icon={
              <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 21v-1.5a4.5 4.5 0 014.5-4.5h.75M20.25 21v-1.5a5.25 5.25 0 00-5.25-5.25M13 10.5h5.25" />
              </svg>
            }
          />
          <Feature
            id="ai-insights"
            title="AI Insights"
            desc="Understand calorie burn and daily patterns."
            icon={
              <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            }
          />
          <Feature
            id="health-overview"
            title="Health Overview"
            desc="Sleep, heart rate, and wellness summary."
            icon={
              <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            }
          />
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden text-white text-center py-20">
        <img
          src={ctaBg}
          alt="Start your fitness journey"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-emerald-950/80" />
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Fitness Journey</h2>
          <p className="mb-8 text-emerald-100 text-lg">Smarter fitness decisions made easy.</p>
          <button
            onClick={handleGetStarted}
            className="bg-white text-emerald-600 px-8 py-3.5 rounded-xl font-semibold
                       transition-all duration-300
                       hover:scale-105 hover:shadow-2xl"
          >
            {loading ? "Loading..." : "Try FitLife AI"}
          </button>
        </div>
      </section>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-bold">{value}</div>
      <div className="text-sm text-emerald-100">{label}</div>
    </div>
  );
}

function SlideCarousel() {
  const [current, setCurrent] = useState(0);
  const total = SLIDES.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-3xl shadow-2xl aspect-[16/8] max-h-[520px]">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {SLIDES.map((slide, i) => (
            <div
              key={i}
              className={`relative min-w-full h-full bg-gradient-to-br ${slide.gradient}`}
            >
              {slide.image ? (
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : null}
              <div className="absolute inset-0 bg-black/50 flex items-center">
                <div className="px-8 md:px-20 text-white max-w-2xl">
                  <span className="inline-block bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                    {slide.kicker}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-extrabold mb-3">{slide.title}</h3>
                  <p className="text-base md:text-lg text-gray-100">{slide.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full p-3 shadow-lg transition-colors"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full p-3 shadow-lg transition-colors"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-emerald-600" : "w-2.5 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function Feature({ id, title, desc, icon }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/feature/${id}`)}
      className="group border rounded-2xl p-8 text-center bg-white
                 transition-all duration-300 ease-in-out
                 hover:-translate-y-3 hover:shadow-xl hover:shadow-emerald-200
                 hover:border-emerald-500 cursor-pointer"
    >
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 transition-colors duration-300 group-hover:bg-emerald-100">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2 transition-colors duration-300 group-hover:text-emerald-600">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-emerald-600 text-sm font-semibold opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        Learn more
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </span>
    </div>
  );
}