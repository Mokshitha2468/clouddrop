<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# CloudDrop

### AI-Powered Parametric Income Insurance for India's Gig Economy

**Guidewire DEVTrails 2026 Submission** | Persona: Food Delivery Partners — Zomato / Swiggy

> CloudDrop strictly excludes coverage for health, life, accidents, and vehicle repairs. All payouts are triggered exclusively by external environmental and civic disruptions causing income loss.

---

# 1. Problem Statement

Food delivery partners on Zomato and Swiggy lose **20–40% of their daily earnings** when external disruptions hit — heavy rain, flooding, AQI spikes, curfews, or fuel shortages cause platform order cancellations. No insurance product covers this income loss. CloudDrop solves this with **automated parametric income insurance** — disruption detected, payout fired, zero paperwork.

---

# 2. Target Persona

| Attribute | Detail |
|---|---|
| Platform | Zomato / Swiggy |
| Daily Income | ₹600–₹900/day |
| Weekly Income | ₹3,500–₹5,500/week |
| Working Hours | 8–12 hours/day |
| Primary Disruptions | Heavy rain, floods, AQI spikes, curfews, fuel shortages, platform outages |
| Payment Cycle | Weekly payouts from platform |

---

# 3. Real Worker Scenarios

**Rajan, 26 — Swiggy Delivery Partner, Bengaluru (Pack B)**

Rajan moved from Kolar to Bengaluru 3 years ago. He delivers 12–15 orders a day on Swiggy, earning ₹750/day — the sole income for his wife and 4-year-old daughter. On a Tuesday in July, heavy rain hits Marathahalli at 3 PM. Swiggy cancels all incoming orders. Rajan sits home watching ₹300 disappear from his week. With CloudDrop, it doesn't. The system detects 18mm/hr via 2/3 weather APIs, confirms his GPS is stationary at home, and fires ₹300 to his UPI automatically in 60 seconds. No form. No call. No claim filed. His daughter's school fees are safe.

**Priya, 23 — Zomato Delivery Partner, Mumbai (Pack A + Brigade)**

Priya is a part-time delivery partner in Andheri, Mumbai — she delivers evenings after college to pay her own fees. She earns ₹600/day and cannot afford to lose even one bad day. When AQI crosses 310 (Hazardous) in her zone, outdoor work becomes unsafe. CloudDrop detects the threshold, verifies her GPS is in the affected zone, and triggers a ₹150 payout automatically. She is part of a 6-member Brigade with her college friends who also deliver — their shared pool tops up a small trust score gap. Her friends financially vouched for her without even knowing it.

**Arjun, 31 — Swiggy Delivery Partner, Chennai (Pack B)**

Arjun has been delivering for 5 years. He earns ₹900/day and supports his parents and younger brother. He has seen two floods, three curfews, and one platform outage wipe out his income with zero compensation. He joined CloudDrop on Pack B. When a sudden civic curfew is declared in his zone one Wednesday morning, CloudDrop detects the verified civic alert, confirms his GPS is within the affected zone, and fires a full-day payout of ₹720 to his UPI within 60 seconds. For the first time in 5 years — a disruption didn't break his month.

---

# 4. Insurance Plans

## Income Tiers

| Tier | Daily Income |
|---|---|
| Starter | ₹400–₹600 |
| Regular | ₹600–₹900 |
| Pro | ₹900–₹1,400 |

## Pack A — Shield

| Feature | Value |
|---|---|
| Weekly Premium | ₹99–₹149 |
| Coverage | 50% income protection |
| Triggers | Heavy rain ≥15mm/hr, AQI ≥300 |
| Max Payout | ₹150–₹250 |

## Pack B — Armor

| Feature | Value |
|---|---|
| Weekly Premium | ₹139–₹280 |
| Coverage | 80% income protection |
| Triggers | Rain ≥2mm, AQI, curfews, platform outages, fuel shortages |
| Max Payout | ₹250–₹750 |

## Squad Pack — Group Insurance with Built-in Brigade

Groups of 5–10 riders from the same zone buy together at ₹119–₹249/week (discounted). Brigade pool activates automatically — 5% of each member's premium builds a shared pool. Zero claims for 8 weeks → cashback split equally. If any member is caught frauding, the entire group loses cashback — social accountability stronger than any algorithm.

```
Example — 5 riders, Marathahalli:
Each pays ₹179/week → pool = ₹45/week
After 8 clean weeks → ₹72 cashback each
```

## Premium Affordability Cap

All premiums capped at **3% of weekly income.**

```
Vijayawada worker ₹700/day → cap = ₹147/week ✅
Bengaluru worker  ₹900/day → cap = ₹189/week ✅
```

---

# 5. Parametric Triggers

| Event | Threshold | Pack A | Pack B |
|---|---|---|---|
| Heavy Rain | ≥15mm/hr | Yes | Yes |
| Extreme Rain | ≥25mm/hr | Yes + bonus | Yes + bonus |
| Light / Moderate Rain | 2–15mm/hr | No | Yes |
| Severe AQI | ≥300 | No | Yes |
| Platform Outage | ≥2 hours | No | Yes |
| Curfew / Zone Closure | Verified civic alert | No | Yes |
| Fuel Shortage | Platform drop >60% for 3+ hrs + news API confirms | No | Yes |

Rain verified by **2/3 API consensus** (OpenWeatherMap, WeatherAPI, Visual Crossing).

---

# 6. Payout Formula

```
Final Payout =
  Daily Income × (Hours Lost ÷ Working Hours) × Coverage % × Trust Score Multiplier
  ± Brigade Pool Adjustment
```

```
Rajan — 4 hrs lost, Pack B, Trust 88:
₹750 × (4/8) × 0.80 × 1.0 = ₹300 → UPI in 60 seconds ✅

Arjun — full day, Pack B, Trust 85:
₹900 × (8/8) × 0.80 × 1.0 = ₹720 → UPI in 60 seconds ✅
```

---

# 7. AI/ML Components

### 7.1 XGBoost — Dynamic Premium Pricing

Personalized weekly premium using 6 inputs: city flood-risk score, micro-zone rainfall frequency, income tier, platform type, season flag, 4-week claim history. Output: risk multiplier (0.85x–1.40x) capped at 3% of weekly income.

| Feature | Example |
|---|---|
| City flood-risk score | Bengaluru = 0.78, Vijayawada = 0.55 |
| Zone rainfall frequency | Marathahalli = 16 heavy-rain days/yr |
| Season flag | 1 = Jun–Sep monsoon, 0 = dry |
| 4-week claim history | 0–4 prior claims |

> Bengaluru scores higher than Vijayawada because it rains more frequently. XGBoost learns this from 10 years of IMD data — we never manually assign scores.

**Training data:** IMD historical rainfall CSVs (2014–2024) across Mumbai, Bengaluru, Chennai, Hyderabad, Vijayawada, Delhi.

### 7.2 Trust Score — Claim Verification

| Signal | Change |
|---|---|
| GPS stationary during verified disruption | +5 |
| Kept working, no claim | +2 |
| 4 consecutive clean weeks | +10 |
| GPS speed >15 km/h during claimed event | −20 |
| Zone density check failed | −15 |
| Duplicate claim attempt | −30 |

| Score | Multiplier |
|---|---|
| 80–100 | 1.0x — full payout |
| 60–79 | 0.85x |
| 40–59 | 0.65x |
| Below 40 | Manual review |

### 7.3 Isolation Forest — Fraud Ring Detection

Monitors all claim patterns in real time. Flags workers whose behaviour is statistically unlike the normal population — cold-start accounts, identical claim timing, behavioural signatures matching a coordinated group.

### 7.4 Facebook Prophet — Internal Risk Monitoring

Predicts disruption probability 24–36 hours ahead from IMD micro-zone data. Used internally by CloudDrop to pre-position liquidity reserves and alert the operations team before a high-claim event. Workers are never notified in advance — to prevent pre-planned fraudulent claims.

---

# 8. Fraud Detection Flow

```
Disruption verified by 2/3 APIs
        ↓
GPS location history check
(gradual movement = genuine | instant zone jump = spoof)
        ↓
Cross-signal check: GPS vs IP vs mobile tower
        ↓
Accelerometer vs GPS consistency
        ↓
Isolation Forest anomaly scoring
        ↓
Trust Score multiplier applied
        ↓
Payout fires to UPI in 60 seconds
```

---

# 9. Brigade System

5–9 workers, ₹10/week extra. 5% of each premium builds a shared pool for payout top-ups, emergency floats, and cashback after 8 clean weeks. Members lose cashback if any member frauds — social accountability no algorithm can replicate.

---

# 10. Rain Twin City Pooling

Mumbai peaks June–July. Chennai peaks October–November. Never disrupted simultaneously. Idle premiums from dry cities fund payouts in wet cities — same actuarial principle as global reinsurance at ₹139/week.

---

# 11. Tech Stack

| Layer | Technology |
|---|---|
| Mobile App | React Native |
| Backend | Node.js + Express |
| ML Models | Python + XGBoost + Prophet + Scikit-learn via FastAPI |
| Database | PostgreSQL (Supabase) + Redis |
| Weather | OpenWeatherMap, WeatherAPI, Visual Crossing |
| AQI | WAQI API |
| Payments | Razorpay UPI sandbox |
| Notifications | Firebase Cloud Messaging |
| Hosting | Vercel (frontend) + Railway (backend) + Supabase (database) |

---

# 12. System Architecture

```
Weather + AQI + Civic Alert + GPS
            ↓
  Disruption Detection (2/3 consensus)
            ↓
  GPS History + Cross-Signal Check
            ↓
  Isolation Forest Anomaly Detection
            ↓
  Trust Score Engine
            ↓
  Payout Formula (+ Brigade adjustment)
            ↓
  UPI Instant Payout → Dashboard Update
```

---

# 13. Financial Viability

Only 20–30% of riders in a city are disrupted in any given week. Rest pay premiums without claiming. Twin City Pooling covers bad weeks. 30% reserve fund handles catastrophic events.

```
1000 Bengaluru riders × ₹147 = ₹1,47,000 collected
300 affected × ₹300 avg payout = ₹90,000 paid
Gross margin = ₹57,000/week ✅
```

---

# 14. Development Timeline

| Week | Deliverables |
|---|---|
| Week 1 | Onboarding, plan selection, worker dashboard, mock trigger engine |
| Week 2 | Trust score visualisation, Brigade panel, payout calculator, analytics dashboard |

---

# 15. Adversarial Defense & Anti-Spoofing Strategy

## The Attack

500 workers coordinate via Telegram, use GPS spoofing to fake their location inside a rain zone, and simultaneously file claims to drain CloudDrop's liquidity pool.

## 6-Layer Defense

**Layer 1 — Location History (strongest signal)**
```
Real worker: gradual movement into zone before rain ✅
GPS spoofer: instant zone jump with no travel time ❌
Teleportation is physically impossible — caught immediately
```

**Layer 2 — Cross-Signal Verification**
```
GPS vs IP address vs mobile tower — all 3 must agree
GPS says Bengaluru + IP says Delhi → rejected ❌
```

**Layer 3 — Accelerometer vs GPS**
```
GPS stationary + accelerometer shows movement → contradiction ❌
```

**Layer 4 — Claim Surge Detection**
```
Normal rain: claims trickle over 90–120 minutes
500 claims in 8 minutes → zone frozen instantly 🚨
```

**Layer 5 — Social Graph**
```
All 500 onboarded within 72 hours? 🚩
Same Brigade group? 🚩
Same device fingerprints? 🚩
```

**Layer 6 — Isolation Forest**
```
Cold-start accounts + perfect simultaneous timing
= statistical outlier = auto flagged
```

## Protecting Honest Workers — 3-Tier Confidence

| GPS Signal | Tower Match | Weather Match | Action |
|---|---|---|---|
| Weak | No | — | Screenshots every 15 mins + civic photo proof |
| Weak | Yes | No | Screenshots every 15 mins → payout released |
| Weak | Yes | Yes | Auto payout — no action needed ✅ |

**Why screenshots every 15 minutes?** A fraudster in another area cannot fake 1 hour of consistent location screenshots. Effort cost exceeds payout value. Genuine workers in a flood zone can easily photograph flooded streets outside.

**Graduated Fraud Score:**
```
Score 0–30  → Full auto payout ✅
Score 31–60 → 50% advance + screenshot verification
Score 61–80 → Hold 2 hrs + manual review + civic proof
Score 81+   → Rejected + Trust Score −50
```

## Stopping the 500-Person Ring

```
Rain verified → 500 claims in 8 mins → Zone frozen 🚨
487/500 show instant GPS zone jump → flagged
340/500 IP contradicts GPS location → rejected
Social graph: all onboarded together → ring confirmed
Isolation Forest: remaining flagged as outliers
23 genuine workers paid in full ✅
477 fraudsters rejected + reported to authorities
```

## Why This Cannot Be Gamed

| Attack | Defense |
|---|---|
| GPS spoofing | Location history — instant zone jump is impossible |
| Telegram coordination | Surge detector fires in under 60 seconds |
| Different devices | IP + tower check is device-independent |
| Spreading claims over time | Social graph connects ring regardless of timing |
| Faking weak GPS | Tower + weather API still confirm or deny |
| Building Trust Score slowly | Organic patterns cannot be replicated at scale |
| Bribing real workers | Brigade cashback loss — friends turn on each other |

---

# 16. Compliance Statement

CloudDrop exclusively covers income loss from external environmental and civic disruptions. No payouts for health, life, accidents, vehicle damage, or personal injury. All triggers are parametric only.

---

# 17. Project Structure

```
clouddrop/
├── README.md
├── frontend/
│   ├── mobile/         # React Native
│   └── web/            # React.js dashboard
├── backend/
│   ├── api/            # Node.js + Express
│   ├── ml/             # Python ML models (FastAPI)
│   └── jobs/           # Disruption detection cron jobs
└── docs/
    ├── payout-formula.md
    └── system-flow.md
```

---

# 18. Demo Video

[CloudDrop — Phase 1 Demo Video](https://youtu.be/a0GFoHEgr7c)

---

# 19. Team

| Name | Role |
|---|---|
| Mokshitha Popuri | Team Leader |
| Boyapati Thanmai Sree | Member |
| Saanvitha Koppoju | Member |
| M Sharanya | Member |

---

*CloudDrop — Protecting India's Gig Workers from Invisible Risks*
>>>>>>> be8e766265c39028af24a842336c9c6f22d044f3
