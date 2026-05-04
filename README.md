
# Hire-Mate — Real-time Coding & Interview Platform

Hire-Mate is a full-stack interview platform designed for technical interviews and collaborative coding rounds. It combines live coding, real-time video interaction, chat, and automated code execution feedback in one workflow.

## Features

- Real-time coding environment for interviewer and candidate
- 1:1 video interview rooms with mic/camera controls and screen sharing
- In-session chat for communication during interviews
- Secure code execution with automated pass/fail test feedback
- Practice problems page for individual preparation
- Session history and dashboard analytics
- Authentication and access-controlled interview rooms
- Background job handling for asynchronous workflows

## Tech Stack

### Frontend
- React
- Vite
- TanStack Query
- Axios

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose

### Integrations / Services
- Clerk (authentication)
- Stream (real-time video/chat)
- Inngest (background jobs)
- Piston / isolated runtime for code execution

## Project Structure

```text
Hire-Mate/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   └── lib/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── api/
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js (v16+ recommended)
- npm
- MongoDB connection string (local or cloud)

### 1) Clone Repository

```bash
git clone https://github.com/SanjayBhargav-18/Hire-Mate.git
cd Hire-Mate
```

### 2) Configure Environment Variables

Create `.env` in `backend/`:

```bash
PORT=3000
NODE_ENV=development

DB_URL=your_mongodb_connection_url

INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

CLIENT_URL=http://localhost:5173
```

Create `.env` in `frontend/`:

```bash
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:3000/api
VITE_STREAM_API_KEY=your_stream_api_key
```

### 3) Install & Run Backend

```bash
cd backend
npm install
npm run dev
```

### 4) Install & Run Frontend

```bash
cd frontend
npm install
npm run dev
```

## Workflow and Screens of Project

The complete project workflow, feature mapping, and screen flow are documented in Eraser for a cleaner, structured overview of the product experience.

View the interactive workflow and screens here: [Eraser Workspace](https://app.eraser.io/workspace/tz33jxYdQppT0qVk6AIv)

This diagram workspace covers the end-to-end product flow, including authentication, dashboard navigation, practice problems, and 1-to-1 collaboration sessions.

## Deployment Notes

- Frontend can be deployed as a Vite static build.
- Backend runs as a Node.js service.
- Keep all API keys and secrets in environment variables.

## Author

Sanjay Bhargav
