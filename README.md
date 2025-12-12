# 🌐 Ayush Narayan Gupta — Portfolio

A **high‑performance, fully responsive personal portfolio website** built using **React**, **Vite**, and **Tailwind CSS v4**.
This project showcases my work, skills, and growth as a **Frontend Developer**, with a strong focus on **clean UI, reusability, accessibility, and performance**.

🚀 Deployed with **Vercel** and optimized to achieve **near‑perfect Lighthouse scores**.

---

## ✨ Highlights

### 🎨 Design & UI
- Modern, minimal UI with a **custom theme system**
- Dark / Light mode with smooth transitions
- Glassmorphic sticky navbar with active route highlighting
- Fully responsive across mobile, tablet, and desktop

### ⚙️ Functionality
- Multi‑page navigation using React Router
- Reusable and scalable component architecture
- Contact form integrated with **EmailJS**
- Resume download with local file delivery
- Toast notifications for form feedback

### ⚡ Performance & SEO
- Built with **Vite** for blazing‑fast builds
- Optimized images and lazy loading
- Clean semantic HTML
- Excellent Lighthouse scores:
  - **Performance:** 100
  - **SEO:** 100
  - **Best Practices:** 96+

---

## 🛠 Tech Stack

| Technology | Usage |
|---------|------|
| **React** | Component‑based UI |
| **Vite** | Fast dev server & bundler |
| **Tailwind CSS v4** | Utility‑first styling |
| **React Router DOM** | Client‑side routing |
| **EmailJS** | Contact form email handling |
| **React Hot Toast** | User notifications |
| **CSS Variables** | Theme & design tokens |

---

## 📁 Project Structure

```
src/
├── assets/             # Images, icons, resume
├── components/
│   ├── NavBar.jsx
│   ├── ThemeSwitch.jsx
│   ├── ProjectCard.jsx
│   └── ui/             # Reusable UI components
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Work.jsx
│   └── Contact.jsx
│
├── index.css           # Tailwind + theme variables
├── App.jsx             # Layout wrapper
└── main.jsx            # React root
```

---

## 🎨 Theme System

The app uses a **CSS variable‑based theme system** for consistency and scalability.

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

These variables power:
- Backgrounds & text
- Buttons & cards
- Navbar transparency
- Hover and focus states

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/ayush16110/portfolio.git
cd portfolio
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Start development server
```bash
npm run dev
```

Visit:
```
http://localhost:5173
```

---

## 🏗 Build for Production

```bash
npm run build
npm run preview
```

---

## 🌍 Live Demo
🔗 https://ayush-narayan-gupta-portfolio.vercel.app/

---

## 📌 Future Enhancements
- Blog / writing section
- Project filtering & search
- Analytics integration
- Backend‑powered contact handling

---

## 📄 License
This project is intended for **personal and educational use**.

---

⭐ If you like this project, feel free to **star the repository**!
