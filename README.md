# **🍽️ Restan Bistro – Modern Restaurant Website (Next.js + Firebase)**

A premium, elegant restaurant website built using Next.js 14, Tailwind CSS, and Firebase Authentication.
The project features beautiful UI sections, smooth animations, reusable components, and clean folder architecture.

This project is designed to showcase a high-end restaurant brand with pages like Menu, Blog, Chef Profiles, Shop, Contact, and more — all wrapped in a polished UI.

### Vercel Deployment Link: https://resturant-replica.vercel.app/

## 🚀 Live Features

1. Authentication System<br>
2.Email/Password Signup<br>
3.Login System (Firebase Auth)<br>
4.Reset Password<br>
5.Email Verification<br>
6.Redirect flow: Sign Up → Sign In → Landing Page (future plan)

## 🧩 Reusable UI Components

1.Hero Section<br>
2.Responsive Navigation (Desktop + Mobile)<br>
3.Footer<br>
4.Chef Cards<br>
5.Menu Cards<br>
6.Blog Cards<br>
7.Auto-hydrating components with SafeHydrate

## 🌙 Dark Mode Compatibility

The entire site supports clean dark/light mode transitions (based on OS theme).

## 🎨 Premium Aesthetic UI

A classy fine-dining theme, soft gold accents, elegant typography, and balanced spacing.

## 📁 Folder Structure

⚠️ Completely GitHub-safe.
Just copy–paste — formatting stays perfect.

resturant/

│

├── app/

│   ├── aboutus/

│   ├── blog/

│   ├── blog2/

│   ├── chef/

│   │
│   ├── components/

│   │   ├── BlogCard/

│   │   ├── chefcards/

│   │   ├── MenuCard/

│   │   ├── Navbar/

│   │   ├── RestanFooter/

│   │   ├── RestanHeader/

│   │   ├── SafeHydrate/

│   │   └── Video/

│   │

│   ├── contactus/

│   ├── core/

│   │   ├── firebase.js

│   │   └── auth.js

│   │

│   ├── login/

│   ├── SignIn/

│   ├── menu/

│   ├── order/

│   ├── shop-single/

│   │

│   ├── favicon.ico

│   ├── globals.css

│   ├── layout.js

│   └── page.js     ← Landing Page (navbar intentionally hidden)

│

├── public/

│

├── .env.local

├── next.config.mjs

├── package.json

└── README.md

## 🛠️ Tech Stack

1.Technology	Purpose<br>
2.Next.js 14	Routing, SSR, app directory<br>
3.React 18	Core UI<br>
4.Tailwind CSS	Styling<br>
5.Firebase Authentication	Sign-up, Login, Reset Password<br>
6.Firestore (optional)	Future support for reservations, orders<br>
6 Vercel Deployment

## ⚙️ Environment Setup

Create a file:

.env.local<br>
NEXT_PUBLIC_FIREBASE_API_KEY=xxxx<br>
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxxx<br>
NEXT_PUBLIC_FIREBASE_PROJECT_ID=xxxx<br>
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=xxxx<br>
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=xxxx<br>
NEXT_PUBLIC_FIREBASE_APP_ID=xxxx

▶️ Installation & Running Locally

1️⃣ Install dependencies
npm install

2️⃣ Run the dev server
npm run dev

3️⃣ Open in browser
http://localhost:3000/

## 🧑‍🍳 About This Project

This web app is built as a fully dynamic and extendable restaurant website.
The codebase is structured to be:

✔ Clean<br>
✔ Scalable<br>
✔ Component-driven<br>
✔ Developer-friendly<br>

It can be extended to include:

1.Table reservations<br>
2.Food ordering<br>
3.Admin dashboard<br>
4.Inventory management<br>
5.Multi-language support<br>

## ⭐ If you like this project…

Give the repository a star ⭐ to support the work!
