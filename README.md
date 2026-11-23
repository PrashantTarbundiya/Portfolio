# Prashant Tarbundiya — Engineering Portfolio 2.0
### High-Performance Developer Portfolio & Systems Architecture Showcase

A luxury, high-performance developer portfolio built with **React 18**, **Tailwind CSS**, and **Vite**, featuring luxury **Glassmorphism**, dynamic **Atmospheric Mesh**, **Lenis Smooth Inertia Scrolling**, **Interactive Developer CLI (`~`)**, and **Command Palette (`⌘K`)**.

---

## 🚀 Key Highlights & Systems

### 1. Flagship: AuraPass (Enterprise Biometric Attendance & Access Control)
- **Repo**: [github.com/PrashantTarbundiya/RMS](https://github.com/PrashantTarbundiya/RMS)
- **Live System**: [13-60-225-165.sslip.io](https://13-60-225-165.sslip.io/)
- **Architecture**: 90° Yaw tolerance, passive anti-spoofing v2, sub-220ms convolutional embeddings, Docker microservices, PostgreSQL RBAC, and zero raw biometric image persistence.

### 2. Live Deployed Systems
- **MakeChat**: Multi-model unified platform dynamically routing queries across Gemini, OpenRouter, Groq, and HuggingFace with RAG document analysis. → [make-chat.vercel.app](https://make-chat.vercel.app/)
- **PlayBack**: Production video streaming platform with modular REST APIs, multi-provider OAuth, Cloudinary optimization, and Gemini video summarization. → [play-back-frontend.vercel.app](https://play-back-frontend.vercel.app/)
- **Scatch**: High-security full-stack authentication microservice with JWT and email OTP verification. → [scatch-livid.vercel.app](https://scatch-livid.vercel.app/)
- **Lab Portal**: Diagnostic patient report delivery platform deployed on AWS EC2 with Nginx reverse proxy. → [3.26.15.115](http://3.26.15.115)

### 3. Interactive Developer Tools
- **Command Palette (`Ctrl+K` / `⌘K`)**: Instant fuzzy search across all 10+ engineered systems, live deployments, jump navigation, and profile links.
- **Developer CLI Terminal (`~`)**: Interactive in-browser console supporting `help`, `whoami`, `skills`, `projects`, `aurapass`, `education`, `experience`, `contact`, and `clear`.
- **Direct Email Dispatch**: Asynchronous zero-friction contact form delivering messages directly to `prashanttarbundiya2@gmail.com` via FormSubmit with automatic `mailto:` fallback.
- **Lenis Smooth Inertia Scrolling**: Hardware-accelerated RAF scrolling with wheel isolation for inner dialogs and terminals.

---

## 🛠️ Local Development & Build

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates optimized, minified production assets in the `dist/` folder.

### 4. Deploy to Vercel
The repository includes a production-ready `vercel.json` configured with SPA fallback rewrites.
Deploy with the Vercel CLI:
```bash
vercel --prod
```
Or connect your GitHub repository directly to Vercel for automatic continuous deployments.

---

## 📁 Repository Structure
```
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
├── index.html
├── public/
│   ├── favicon.svg
│   └── assets/
│       └── Prashant_Tarbundiya_Resume.pdf
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── data/
│   │   └── portfolioData.js
│   ├── hooks/
│   │   ├── useActiveSection.js
│   │   ├── useCountUp.js
│   │   ├── useLenis.js
│   │   └── useScrollReveal.js
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── SkillsMatrix.jsx
│       ├── AuraPassShowcase.jsx
│       ├── ProjectsSection.jsx
│       ├── ExperienceEducation.jsx
│       ├── AchievementsSection.jsx
│       ├── ContactSection.jsx
│       ├── ArchitectureModal.jsx
│       ├── ProjectDetailModal.jsx
│       ├── CommandPalette.jsx
│       ├── DeveloperConsole.jsx
│       ├── Footer.jsx
│       └── Toast.jsx
```

---

## 📬 Contact & Handles
- **Email**: `prashanttarbundiya2@gmail.com`
- **GitHub**: [github.com/PrashantTarbundiya](https://github.com/PrashantTarbundiya)
- **LinkedIn**: [linkedin.com/in/prashant-tarbundiya](https://linkedin.com/in/prashant-tarbundiya)
- **LeetCode**: [leetcode.com/u/sRj6itRSrz/](https://leetcode.com/u/sRj6itRSrz/)
- **Codeforces**: [codeforces.com/profile/Prashant1304](https://codeforces.com/profile/Prashant1304)
