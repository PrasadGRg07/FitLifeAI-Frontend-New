import { Link, useNavigate, useParams } from "react-router-dom";
import { getFeature, FEATURES } from "../utils/features";

export default function FeatureDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const feature = getFeature(id);

  if (!feature) {
    return (
      <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl font-bold mb-3">Feature not found</h1>
        <p className="text-gray-600 mb-6">We couldn't find that feature.</p>
        <Link
          to="/"
          className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section
        className={`relative overflow-hidden text-white bg-gradient-to-br ${feature.gradient}`}
      >
        {feature.heroBg && (
          <img
            src={feature.heroBg}
            alt={feature.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-5xl mx-auto px-6 py-20">
          <button
            onClick={() => navigate(-1)}
            className="mb-8 inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Back
          </button>
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
            <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d={feature.iconPath} />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{feature.title}</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">{feature.desc}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to={feature.linkTo}
              className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
            >
              {feature.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-xl text-gray-700 leading-relaxed mb-12">{feature.overview}</p>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {feature.highlights.map((item, i) => (
            <div
              key={i}
              className="border rounded-2xl p-6 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 font-bold">
                {i + 1}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {feature.stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl border bg-gray-50 p-6 text-center"
            >
              <div className="text-3xl font-extrabold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Points + CTA */}
        <div className="rounded-3xl bg-gray-50 p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold mb-6">{feature.pointsTitle}</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {feature.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
          <Link
            to={feature.linkTo}
            className={`inline-block text-white px-8 py-3.5 rounded-xl font-semibold bg-gradient-to-r ${feature.gradient} hover:scale-105 transition-all duration-300 shadow-lg`}
          >
            {feature.cta}
          </Link>
        </div>

        {/* Other features */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Explore other features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.filter((f) => f.id !== feature.id).map((f) => (
              <Link
                key={f.id}
                to={`/feature/${f.id}`}
                className="group border rounded-2xl p-6 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-emerald-400"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 group-hover:bg-emerald-100 transition-colors">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.iconPath} />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-emerald-600 transition-colors">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}