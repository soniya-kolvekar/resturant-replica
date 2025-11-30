🍽️ Resturant — Modern Restaurant Website (Next.js + Tailwind CSS + Firebase Auth)

A fully responsive, dark-mode friendly restaurant website built using Next.js 14 App Router, Tailwind CSS, and Firebase Authentication.
This project replicates the elegant UI of premium restaurant templates, focusing on pixel-perfect design, mobile responsiveness, and clean component architecture.

⚡ Note: Navigation is not used on the landing page intentionally to keep the hero section immersive.
Navigation appears normally across all inner pages such as Menu, Blog, About Us, Contact, etc.

🚀 Features at a Glance
🎨 Design & UI

Fully responsive (Mobile, Tablet, Desktop)

Dark mode compatible across all pages

Premium restaurant-style animations & layout

Central logo with split navigation (Desktop)

Sticky navbar behavior with scroll detection

Clean mobile hamburger navigation

🔐 Firebase Authentication

User Sign Up (with email verification)

User Login

Password reset

Firebase-powered auth utilities (create, login, logout, reset)

Seamless redirect flows

Clean UI matching the restaurant theme

🧩 Component-Based Structure

Reusable components:

Navbar

RestanHeader

RestanFooter

BlogCard, ChefCard, MenuCard

Video

SafeHydrate for SSR hydration fixes

📂 Project Structure
resturant/
│
├── app/
│   ├── aboutus/
│   ├── blog/
│   ├── blog2/
│   ├── chef/
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
│   └── page.js (Landing page)
│
├── public/
├── .env.local
├── next.config.mjs
├── package.json
└── README.md

🔥 Tech Stack
Category	Technologies
Frontend	Next.js 14 (App Router), React, Tailwind CSS
Backend	Firebase Authentication, Firebase Firestore
Styling	Tailwind CSS, Custom Components
Utilities	SafeHydrate, Responsive Layouts
Deployment Ready	✔ Vercel compatible
🛠️ Firebase Setup

Create a .env.local with:

NEXT_PUBLIC_FIREBASE_API_KEY=xxxx
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxxx
NEXT_PUBLIC_FIREBASE_PROJECT_ID=xxxx
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=xxxx
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=xxxx
NEXT_PUBLIC_FIREBASE_APP_ID=xxxx


All Firebase logic lives inside:

app/core/firebase.js
app/core/auth.js

📱 Pages Included
Page	Description
/	Landing page (UI-focused without navbar)
/aboutus	Restaurant story, values & history
/chef	Chef showcase section
/menu	Full food & beverage menu
/blog	Articles & food posts
/blog2	Single blog view
/order	Shop section
/shop-single	Single product view
/contactus	Contact & address
/login	Create account page
/SignIn	Sign in page
🎯 Project Goals

Recreate a premium restaurant template with precision

Deliver world-class mobile responsiveness

Maintain clean component hierarchies

Integrate Firebase auth without complicating UI

Ensure dark mode works beautifully everywhere

🧪 How to Run Locally
npm install
npm run dev


Visit:
👉 http://localhost:3000

🌟 Future Enhancements

User dashboard after login

Firebase Firestore menu management

Cart & checkout

Admin panel for blog + menu items

Animations for scrolling sections

💬 Feedback & Contributions

Feel free to open issues, suggest UI improvements, or help scale the project.
This repo is actively evolving, and contributions are welcome!
