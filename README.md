# Aman Kumar Pandey — Portfolio

A premium, production-ready personal portfolio built with React, Tailwind CSS, Framer Motion, and Firebase.

---

## Tech Stack

- **React 18** — functional components + hooks
- **Tailwind CSS** — utility-first styling with custom design tokens
- **Framer Motion** — smooth, physics-based animations
- **Lucide React** — clean icon set
- **Firebase Firestore** — contact form persistence

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky nav with active-section highlight
│   ├── Footer.jsx          # Footer with social links
│   └── SectionWrapper.jsx  # Reusable Framer Motion wrappers
├── sections/
│   ├── Hero.jsx            # Animated hero with CTA
│   ├── About.jsx           # Summary + achievement highlights
│   ├── Skills.jsx          # Grouped skill chips with hover FX
│   ├── Projects.jsx        # Cards with expand toggle
│   ├── Experience.jsx      # Alternating timeline layout
│   ├── Education.jsx       # Education cards
│   └── Contact.jsx         # Validated form → Firestore
├── hooks/
│   ├── useActiveSection.js # IntersectionObserver nav tracking
│   └── useContactForm.js   # Form state, validation, submission
├── utils/
│   └── resumeData.js       # Structured resume data (single source of truth)
└── firebase/
    ├── config.js           # Firebase app init
    └── contacts.js         # Firestore write helper
```

---

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/) → Create a project
2. Enable **Firestore Database** (start in test mode for development)
3. Go to Project Settings → Your apps → Add Web App
4. Copy the config and paste into `src/firebase/config.js`:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

### 3. Add Resume PDF for download

Place your resume PDF at `public/resume.pdf` and update `src/utils/resumeData.js`:

```js
resumeUrl: "/resume.pdf",
```

### 4. Run locally

```bash
npm start
```

Runs at `http://localhost:3000`

### 5. Build for production

```bash
npm run build
```

---

## Firestore Data Schema

Contact form submissions are saved to the `contacts` collection:

```json
{
  "name": "string",
  "email": "string",
  "message": "string",
  "createdAt": "Firestore Timestamp"
}
```

---

## Customization

All resume content lives in `src/utils/resumeData.js`. Update that single file to reflect any changes — skills, projects, experience, etc. — and the entire site updates automatically.

---

## Deploy

Works out of the box with:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag & drop the `build/` folder
- **Firebase Hosting**: `firebase deploy`
