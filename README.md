# PathAI - AI-Powered Career Coach 🧠✨

🔗 [Live Demo](https://path-ai-brown.vercel.app/)

## 🚀 Overview

**PathAI** is a smart, AI-powered career coach that helps users:
- ✍️ Generate personalized **cover letters** and **resumes**
- 🎯 Take domain-specific **quizzes** to prep for interviews
- 🔒 Access protected features via **Clerk authentication**

Designed with a sleek, responsive UI and a modular component structure — this project brings together practicality and modern web standards with a SaaS feel.

---

## ✨ Features

- 📝 AI-Generated Cover Letters & Resumes (via OpenAI)
- 🎯 Domain-Based Quizzes with Score Evaluation
- 🔐 Authentication & User Management (via Clerk)
- 📱 Fully Responsive UI (Mobile/Desktop Friendly)
- 🧩 Component-Based Architecture

---

## 🛠 Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS
- **Auth:** Clerk
- **Backend/API:** PrismaORM, NeonDB, NVIDIA NIM API, Node.js
- **Deployment:** Vercel

---

## 🔐 Environment Variables

- `NVIDIA_API_KEY` — required for AI responses
- `NVIDIA_MODEL` — optional (defaults to `mistralai/mistral-medium-3.5-128b`)
- `NVIDIA_REASONING_EFFORT` — optional (omit to skip `reasoning_effort`)

---
