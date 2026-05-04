<!-- Project README: professional, concise, and interviewer-focused -->
# Hire-Mate — Full‑Stack Live Coding & Interview Platform

![Demo App](frontend/public/screenshot-for-readme.png)

Brief: Hire‑Mate is a full‑stack interview platform that provides real‑time paired coding interviews with video, voice, chat, secure code execution, and automated test feedback. It combines a React + Vite frontend with a Node.js + Express backend, real‑time media and messaging, and isolated code execution for safe evaluation.

Table of contents
- Features
- Architecture & Tech Stack
- Notable Implementations
- Local Setup (quick)
- Environment Variables
- Running Locally
- Testing & Development notes
- Deployment
- Contributing & Contact

Features
- Real‑time collaborative code editor with execution and test validation
- 1:1 video interview rooms with mic/camera controls and screen sharing
- Chat and in‑session messaging
- Practice problems and session history (dashboard + stats)
- Secure, isolated code execution for multiple languages
- Background job processing (Inngest) for async tasks
- Authentication (Clerk) and role/room access controls

Architecture & Tech Stack
- Frontend: React, Vite, TanStack Query; components under frontend/src
- Backend: Node.js, Express; API and business logic under backend/src
- Database: MongoDB (connection in backend/lib/db.js)
- Real‑time & Media: Stream (or similar) for video/chat; WebRTC integrations
- Background jobs: Inngest for async processing
- Dev tooling: ESLint, Prettier, Vite dev server

Notable implementations
- Secure code execution: sandboxed runner invoked by backend with strict time/memory limits and per‑run isolation.
- Automated test feedback: each problem has a test harness — runs are evaluated and results are returned to the UI with pass/fail details.
- Room locking & access: interview rooms permit only intended participants; session state persisted in `Session` model.

Local setup (quick)
Prerequisites
- Node.js (>=16) and npm
- MongoDB connection (local or hosted)

Environment variables
- Copy the example env values into the appropriate `.env` files for each service.
- Backend: create `.env` in the [backend](backend) folder.
- Frontend: create `.env` in the [frontend](frontend) folder.

Example variables (summary)
- Backend (`backend/.env`)
	- `PORT` (e.g. 3000)
	- `NODE_ENV` (development)
	- `DB_URL` (MongoDB connection URI)
	- `INNGEST_EVENT_KEY`, `INNGEST_SIGNING_KEY` (background jobs)
	- `STREAM_API_KEY`, `STREAM_API_SECRET` (media)
	- `CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY` (auth)
	- `CLIENT_URL` (frontend origin)
- Frontend (`frontend/.env`)
	- `VITE_CLERK_PUBLISHABLE_KEY`
	- `VITE_API_URL` (e.g. http://localhost:3000/api)
	- `VITE_STREAM_API_KEY`

Running locally
1) Backend
```bash
cd backend
npm install
npm run dev
```

2) Frontend
```bash
cd frontend
npm install
npm run dev
```

Notes
- Backend runs on `PORT` (default 3000) and exposes API under `/api`.
- Frontend Vite dev server typically runs on port 5173 and proxies API calls to the backend during development.

Testing & development notes
- Look for models under `backend/src/models` (e.g., `Session.js`, `User.js`).
- API routes live under `backend/src/routes` and controllers under `backend/src/controllers`.
- Useful dev entrypoints: `npm run dev` in each folder (frontend/backend).

Deployment
- App is designed to be deployed as two units: frontend static build (Vite) and backend Node service. Background workers for Inngest should be deployed where they can securely access the backend and event keys.

Security & privacy
- Code execution is sandboxed on the server and should be deployed behind strict resource limits. Do not run untrusted runners on shared hosts without additional isolation.

Contributing
- Read `CONTRIBUTING.md` (if present) and follow GitHub PR workflow. Create branches per feature and open PRs for review.

Contact
- Author / Maintainer: see repository commit history for contact information, or open an issue/PR for questions.

Short demo and screenshots are under `frontend/public`.

If you'd like, I can: add a usage GIF, expand the API documentation, or generate a short one‑page bullet summary tailored for a résumé. Which would you prefer next?
