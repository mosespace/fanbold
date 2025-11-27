# **Fanbold**

A simple, fast, and customizable tool for generating follower-count graphics without needing design software.
Users enter their follower numbers, choose a template, adjust styling, and download a high-quality graphic — all from a single, intuitive interface.

<p align="center">
  <img src="(https://fanbold.vercel.app/thumbnail.png)" width="720" />
</p>

---

## ✨ **Features**

- **One-screen design editor** — live preview + control panel
- **Multiple templates** (Corporate, Viral, Influencer)
- **Editable follower counts** for any platform
- **Customizable colors, images, canvas size, and layout**
- **Drag-to-pan & scroll-to-zoom** canvas viewer
- **High-resolution export** (PNG/WebP)
- **No login, API keys, or platform connections required**

---

## 🚀 **How It Works**

The app is designed to be extremely straightforward:

1. **Enter follower numbers** for each social platform
2. **Select a template** from the sidebar
3. **Customize colors, images, and layout**
4. **See changes live** in the real-time canvas
5. **Download the final graphic** with one click

Everything updates instantly — no multi-step wizard, no navigation between screens.

---

## 📂 **Project Structure**

```
src/
  components/
    › Sidebar (controls)
    › Canvas (render area)
    › Templates/
      - CorporateTemplate
      - ViralPopTemplate
      - InfluencerTemplate
  hooks/
  utils/
  pages/ or app/
```

The UI is split into two main areas:

### ▶ **Sidebar**

- Template selection
- Follower input fields
- Colors & image settings
- Canvas size
- Download button

### ▶ **Canvas Area**

- Zoomable/pannable design surface
- Renders the selected template
- Real-time updates based on sidebar inputs

---

## 🧩 **Tech Stack**

- **Next.js (App Router)**
- **React**
- **Tailwind CSS**
- **HTML Canvas / DOM-to-image** for exporting
- **TypeScript**

---

## 🔧 **Installation & Setup**

Clone the repository:

```sh
git clone https://github.com/mosespace/fanbold
cd fanbold
```

Install dependencies:

```sh
pnpm install
```

Create an `.env` file:

```sh
cp .env.example .env
```

### **Required environment variable**

```
NODE_ENV=development
```

This enables proper local behavior and ensures assets and templates load correctly.

---

## ▶ **Run in Development**

```sh
npm run dev
```

Open the app:

```
http://localhost:3000
```

---

## 📦 **Production Build**

```sh
pnpm run build
pnpm start
```

---

## 🙌 **Contributing**

Contributions are welcome!
Feel free to open issues, suggest features, or submit pull requests.

Before contributing:

1. Fork the repository
2. Create a feature branch
3. Follow the existing code style + TypeScript conventions
4. Test your changes
5. Open a PR with a clear description

---

## 📄 **License**

MIT License — free to use, modify, and distribute.

---

## ⭐ **Support**

If you find this project useful, consider giving it a star!
It helps others discover it and supports continued development.

---

If you want, I can also provide:

🔹 A polished project logo
🔹 Placeholder screenshots
🔹 A contribution guide (`CONTRIBUTING.md`)
🔹 A template for issues & PRs
Just tell me!
