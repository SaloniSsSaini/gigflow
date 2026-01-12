# 🚀 GigFlow – Mini Freelance Marketplace Platform

GigFlow is a mini freelance marketplace platform where clients can post jobs (Gigs) and freelancers can apply by submitting bids.  
The platform demonstrates secure authentication, role-flexible users, database relationships, and a complete hiring workflow.

This project was built as part of the **Full Stack Development Internship Assignment** for **ServiceHive**.

---

## 🛠 Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- Redux Toolkit
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication (HttpOnly Cookies)

---

## ✨ Core Features

### 🔐 Authentication
- User Registration & Login
- JWT-based authentication using HttpOnly cookies
- Any user can act as both Client and Freelancer

### 📄 Gig Management
- Create new gigs (Client)
- Browse all open gigs
- View gig details with bids
- Budget, description, and title support

### 💸 Bidding System
- Freelancers can submit bids with message & price
- Clients can view all bids for their gig

### 🔥 Hiring Workflow (Core Logic)
- Client can hire **only one** freelancer per gig
- When hired:
  - Gig status → `assigned`
  - Selected bid → `hired`
  - All other bids → `rejected`
- Implemented with **transaction-safe logic** to prevent race conditions

---

## 🧠 Bonus Concepts Implemented
- Transaction-safe hiring logic using MongoDB sessions
- Clean separation of concerns (controllers, routes, models)
- Scalable and readable folder structure

---

## 📂 Project Structure

gigflow/
├── client/ # React + Vite frontend
├── server/ # Node + Express backend
├── README.md
└── .gitignore

yaml
Copy code

---

## ⚙️ Environment Setup

### Backend `.env`
PORT=5000
MONGO_URI=mongodb://localhost:27017/gigflow
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173

shell
Copy code

### Frontend `.env`
VITE_API_URL=http://localhost:5000/api

yaml
Copy code

---

## ▶️ How to Run Locally

### 1️⃣ Backend
```bash
cd server
npm install
npm run dev
Server will run on:

arduino
Copy code
http://localhost:5000
2️⃣ Frontend
bash
Copy code
cd client
npm install
npm run dev
Frontend will run on:

arduino
Copy code
http://localhost:5173
🔗 API Endpoints
Auth
POST /api/auth/register

POST /api/auth/login

POST /api/auth/logout

Gigs
GET /api/gigs

POST /api/gigs

GET /api/gigs/:id

Bids
POST /api/bids

GET /api/bids/:gigId

PATCH /api/bids/:bidId/hire


User registration & login

Posting a gig

Submitting bids

Hiring a freelancer

Automatic status updates



👩‍💻 Author
Saloni Saini
Full Stack Developer
