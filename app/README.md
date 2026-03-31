# Tanya Gangegedara — Portfolio

Built with **Next.js 14 (App Router)** + **SCSS Modules**.

---

## 📁 Project Structure

```
tanya-portfolio/
├── app/
│   ├── layout.jsx          ← Root layout + global styles
│   └── page.jsx            ← Assembles all sections
│
├── components/
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.module.scss
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── Hero.module.scss
│   ├── Stats/
│   │   ├── Stats.jsx
│   │   └── Stats.module.scss
│   ├── About/
│   │   ├── About.jsx
│   │   └── About.module.scss
│   ├── Skills/
│   │   ├── Skills.jsx        ← Animated progress bars
│   │   └── Skills.module.scss
│   ├── Experience/
│   │   ├── Experience.jsx    ← Colour-coded timeline
│   │   └── Experience.module.scss
│   ├── Projects/
│   │   ├── Projects.jsx
│   │   └── Projects.module.scss
│   ├── Blogs/
│   │   ├── Blogs.jsx
│   │   └── Blogs.module.scss
│   ├── Education/
│   │   ├── Education.jsx
│   │   └── Education.module.scss
│   ├── Contact/
│   │   ├── Contact.jsx       ← EmailJS + mailto fallback
│   │   └── Contact.module.scss
│   ├── Footer/
│   │   ├── Footer.jsx
│   │   └── Footer.module.scss
│   └── ScrollRevealInit.jsx  ← Global scroll animations
│
└── styles/
    ├── _variables.scss       ← All tokens, mixins, keyframes
    └── globals.scss          ← CSS reset + shared utility classes
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Set up EmailJS (for the contact form)

1. Sign up free at [emailjs.com](https://www.emailjs.com)
2. Create a **Gmail service** → copy the **Service ID**
3. Create an **Email Template** with these variables:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{subject}}` — subject line
   - `{{message}}` — message body
4. Copy your **Template ID** and **Public Key** (Account → API Keys)
5. Open `components/Contact/Contact.jsx` and replace:
   ```js
   const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
   const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
   ```

> **Without EmailJS keys** the form still works — it falls back to opening your default email client with the message pre-filled.

### 3. Run locally
```bash
npm run dev
# → http://localhost:3000
```

### 4. Deploy to Vercel
```bash
# Install Vercel CLI if needed
npm i -g vercel

vercel
```

---

## 🎨 Customisation

All design tokens (colours, fonts, spacing, animations) live in:
```
styles/_variables.scss
```

To update your content, edit the data arrays at the top of each component file — no JSX changes needed.
