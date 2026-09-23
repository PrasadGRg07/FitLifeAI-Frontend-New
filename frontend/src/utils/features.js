import heroBg from "../assets/carousel/image.png";

export const FEATURES = [
  {
    id: "track-activity",
    title: "Track Activity",
    desc: "Steps, distance, and workouts in one place.",
    linkTo: "/activity",
    cta: "Open Activity Tracker",
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    heroBg,
    iconPath:
      "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 21v-1.5a4.5 4.5 0 014.5-4.5h.75M20.25 21v-1.5a5.25 5.25 0 00-5.25-5.25M13 10.5h5.25",
    overview:
      "FitLife AI keeps every step, workout, and movement in one clean place. Sync your daily activity automatically and watch your progress compound, day after day.",
    highlights: [
      "Automatic step and distance tracking throughout the day",
      "Workout logging with duration, intensity, and calorie estimates",
      "Daily, weekly, and monthly activity trends at a glance",
      "Smart streak and goal tracking to keep you consistent",
    ],
    stats: [
      { value: "10k+", label: "Steps per day" },
      { value: "5 km", label: "Avg. distance" },
      { value: "40+", label: "Workout types" },
    ],
    pointsTitle: "What you can do",
    points: [
      "Log steps, runs, and strength workouts in seconds",
      "Set personalized daily activity goals",
      "See weekly summaries with clear progress charts",
      "Sync across all your devices",
    ],
  },
  {
    id: "ai-insights",
    title: "AI Insights",
    desc: "Understand calorie burn and daily patterns.",
    linkTo: "/predict",
    cta: "Open AI Predictor",
    gradient: "from-indigo-500 via-purple-500 to-fuchsia-600",
    heroBg,
    iconPath:
      "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    overview:
      "Our AI analyzes your activity data to estimate calorie burn, uncover daily patterns, and give you personalized recommendations so you can train smarter every single day.",
    highlights: [
      "AI-powered calorie burn predictions for any workout",
      "Pattern detection across your sleep, activity, and heart rate",
      "Personalized recommendations based on your routine",
      "Clear, easy-to-understand insights—no guesswork",
    ],
    stats: [
      { value: "92%", label: "Prediction accuracy" },
      { value: "24/7", label: "Pattern analysis" },
      { value: "3x", label: "Better goal setting" },
    ],
    pointsTitle: "What you can do",
    points: [
      "Predict calories burned with a single tap",
      "Discover what habits drive your best days",
      "Get daily coaching nudges from your AI coach",
      "Compare your trends week over week",
    ],
  },
  {
    id: "health-overview",
    title: "Health Overview",
    desc: "Sleep, heart rate, and wellness summary.",
    linkTo: "/dashboard",
    cta: "Open Dashboard",
    gradient: "from-amber-500 via-orange-500 to-rose-600",
    heroBg,
    iconPath:
      "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
    overview:
      "Get a complete view of your body in one place. FitLife AI summarizes your sleep, resting heart rate, and overall wellness so you always know how recovered and ready you are.",
    highlights: [
      "Sleep duration and quality summaries every morning",
      "Resting heart rate and recovery trend tracking",
      "Overall wellness score that combines all your signals",
      "Historical trends to see long-term improvement",
    ],
    stats: [
      { value: "7.5 h", label: "Avg. sleep" },
      { value: "62 bpm", label: "Resting HR" },
      { value: "100", label: "Wellness score" },
    ],
    pointsTitle: "What you can do",
    points: [
      "View your wellness summary every morning",
      "Track sleep and heart rate trends over time",
      "Spot early signs of overtraining or poor recovery",
      "Share your health overview with your coach",
    ],
  },
];

export const getFeature = (id) => FEATURES.find((f) => f.id === id);