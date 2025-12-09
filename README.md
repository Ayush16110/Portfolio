# 🌐 Ayush Portfolio — React, Vite, Tailwind v4

A fully responsive and modern personal portfolio website built using **React**, **Vite**, and **Tailwind CSS v4**.
This portfolio showcases my skills, projects, experience, and personality as a frontend developer.
It features a custom theme system, dark mode support, and smooth navigation with clean UI components.

---

## 🚀 Features

### 🎨 Modern Design System
- Custom CSS variables for light & dark mode
- Tailwind v4-powered styling with no config required
- Consistent spacing, colors, and typography
- Premium glassmorphic navbar

### 💡 Functional Features
- Sticky navbar with active route highlighting
- Dark/Light theme switcher with smooth transitions
- Fully responsive navigation (desktop + mobile)
- Reusable UI components (buttons, cards, sections)

### ⚡ Performance Focused
- Built on Vite for ultra-fast dev experience
- Automatic code-splitting & optimized production builds
- Small bundle size & clean structure

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React** | UI Components & state management |
| **Vite** | Dev server + fast bundler |
| **Tailwind CSS v4** | Styling using utilities + CSS variables |
| **React Router DOM** | Multi-page navigation |
| **CSS Variables** | Theme system |

---

## 📁 Folder Structure

```
src/
├── assets/             # Images, SVGs, icons, CV, etc.
├── components/
│   ├── NavBar.jsx
│   ├── ThemeSwitch.jsx
│   ├── ButtonPrimary.jsx
│   ├── ui/             # Reusable UI components
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Work.jsx
│   ├── Contact.jsx
│
├── index.css           # Tailwind import + custom theme
├── App.jsx             # App layout wrapper
└── main.jsx            # React root + router
```

---

## 🎨 Theme System (CSS Variables)

The project uses a fully custom theme system defined in **index.css**:

### 🌞 Light Mode
```
--bg: #ffffff;
--text: #0f172a;
--primary: #3b82f6;
--navbar-bg: rgba(255,255,255,0.7);
--navbar-border: rgba(226,232,240,0.6);
```

### 🌙 Dark Mode
```
--bg: #0f172a;
--text: #e2e8f0;
--primary: #38bdf8;
--navbar-bg: rgba(15,23,42,0.6);
--navbar-border: rgba(51,65,85,0.7);
```

These variables are used throughout components for:
- Backgrounds
- Text colors
- Hover colors
- Navbar transparency
- Buttons and cards

---

## 🧩 Components Overview

### 🔷 NavBar
- Sticky glassmorphic design
- Animated active link underline
- Mobile hamburger menu
- Uses React Router's `NavLink`

### 🔷 ThemeSwitch
- Toggles dark/light mode
- Applies `.dark` class to `<html>` element
- Smooth color transitions

### 🔷 ButtonPrimary
- Reusable button component
- Matches theme system
- Used for CTAs like “Download CV”

### 🔷 Section Components
- Each page section uses `.section` utility
- Consistent spacing and max width

---

## 🧪 Installation & Setup

### 1️⃣ Clone the repo
```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Run development server
```bash
npm run dev
```

Project runs at:
```
http://localhost:5173
```

---

## 🏗️ Build for production

```bash
npm run build
npm run preview
```

---


## 🤝 Acknowledgements
- Tailwind CSS
- React
- Vite
- React Router
- Heroicons & Tabler Icons

---

## 📄 License
This project is licensed for **personal and educational use**.

---

### ⭐ If you find this useful, feel free to star the repo!
