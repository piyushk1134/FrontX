# 📄 FrontX — Cover Page Studio

A sleek, browser-based **A4 cover page editor** for creating professional academic project front pages. No installation required — just open the HTML file in your browser and start designing.

![Built with](https://img.shields.io/badge/Built_with-HTML%20%7C%20CSS%20%7C%20JavaScript-blue)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

### 🖊️ Inline Text Editing
- Click any text on the page to edit it directly
- Each text element has its own **individual font size slider** (floating toolbar)
- Global **text size** and **text spacing** controls in the sidebar

### 🖼️ Logo Management
- Upload a custom logo image via the sidebar
- Resize the logo with a dedicated slider

### ➕ Dynamic Text Fields
- **Add new text fields** from the sidebar
- New fields are **draggable** — position them anywhere on the page using the grip handle (⋮⋮)
- **Remove** any text field via the floating toolbar's delete button

### 🎨 Designer Aesthetics
- Elegant **double border frame** (navy outer + gold inner)
- **Gold corner ornaments** at all four corners
- **Diamond divider** and gold accent lines
- Premium typography: *Cormorant Garamond*, *Montserrat*, *Inter*
- Warm cream paper background

### 🖨️ Print / PDF Export
- Click **"Save as PDF / Print"** for a clean A4 output
- All editor UI (sidebar, toolbar, drag handles) auto-hides during print
- Decorative elements are fully preserved in PDF via `print-color-adjust: exact`
- Strict **A4 dimensions** (210mm × 297mm)

---

## 🚀 Getting Started

1. **Clone** the repository:
   ```bash
   git clone https://github.com/<your-username>/frontx.git
   ```
2. **Open** `Project_Cover_Page.html` in any modern browser (Chrome, Edge, Firefox)
3. **Edit** text by clicking directly on the page
4. **Customize** using sidebar controls
5. **Save** as PDF using the print button

> No server, no dependencies, no build step — just open the HTML file and go.

---

## 🛠️ Editor Controls

| Control | Location | Description |
|---------|----------|-------------|
| Upload Logo | Sidebar | Replace the default logo with your own image |
| Logo Size | Sidebar | Adjust logo dimensions (50px–400px) |
| Text Size | Sidebar | Scale all text globally (50%–150%) |
| Text Spacing | Sidebar | Adjust vertical gaps between sections (20%–200%) |
| Add Text Field | Sidebar | Add a new draggable text element |
| Font Size Slider | Floating Toolbar | Resize individual text elements (click any text) |
| Remove Button | Floating Toolbar | Delete a text element |
| Drag Handle (⋮⋮) | On custom fields | Drag to reposition the field |

---

## 📐 Page Specifications

| Property | Value |
|----------|-------|
| Page Size | A4 (210mm × 297mm) |
| Background | Cream (#FDFCF8) |
| Primary Color | Navy (#0B1D3A) |
| Accent Color | Gold (#C9A84C) |
| Fonts | Cormorant Garamond, Montserrat, Inter |

---

## 📁 Project Structure

```
frontx/
├── Project_Cover_Page.html   # HTML structure
├── styles.css                # All styles and print media queries
├── script.js                 # Editor logic, toolbar, drag & drop
├── .gitignore                # Git ignore rules
└── README.md                 # Documentation
```

---

## 🌐 Browser Support

| Browser | Supported |
|---------|-----------|
| Chrome  | ✅ |
| Edge    | ✅ |
| Firefox | ✅ |
| Safari  | ✅ |

---

## 📝 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).
