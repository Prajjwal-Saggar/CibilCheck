# CibilCheck+ - Credit Score Calculator



## 🌟 Overview

CibilCheck+ is a modern, interactive credit score calculator built with React that helps users understand and estimate their CIBIL score. With a beautiful 3D animated interface and real-time calculations, users can get instant insights into their credit health.

## ✨ Features

- 🎯 Real-time CIBIL score calculation
- 🎨 Interactive 3D background animations
- 📊 Visual score representation with circular progress
- 📱 Fully responsive design
- ⚡ Smooth page transitions and animations
- 🔍 Detailed credit score analysis
- 🎭 Dynamic color-coded results

## 🛠️ Technologies Used

- React.js
- Framer Motion
- Three.js
- TailwindCSS
- React Router DOM
- React Icons
- React-Circular-Progressbar

## 🎨 Color Palette

```css
:root {
  --very-dark-teal: #032030;
  --dark-cyan-blue: #022B42;
  --deep-blue: #003554;
  --strong-blue: #004D74;
  --bright-sky-blue: #006494;
  --vivid-blue: #006DA4;
}
```

## 📦 Project Structure

```
src/
├── components/
│   ├── AnimatedSphere.jsx    # 3D background animation
│   ├── BackButton.jsx        # Navigation component
│   ├── CalComponent.jsx      # Score calculator logic
│   ├── Footer.jsx           # Footer component
│   └── Header.jsx           # Navigation header
├── pages/
│   ├── Home.jsx             # Landing page
│   ├── About.jsx            # About page
│   └── Calculator.jsx       # Calculator page
├── utils/
│   └── calculations.js      # Calculation utilities
├── assets/
│   └── react.svg           # Static assets
├── App.jsx                  # Main application component
├── index.css               # Global styles
└── main.jsx                # Entry point
```

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/cibilcheck-plus.git
```

2. Install dependencies:
```bash
cd cibilcheck-plus
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📱 Credit Score Factors

The calculator considers these key factors:

| Factor | Weight | Impact |
|--------|---------|--------|
| Credit Utilization | 30% | High |
| Payment History | 35% | Very High |
| Credit History Length | 15% | Medium |
| Credit Mix | 10% | Low |
| New Credit | 10% | Low |

## 🎯 Score Ranges

| Score Range | Rating | Description |
|-------------|--------|-------------|
| 750-850 | Excellent | Exceptional creditworthiness |
| 700-749 | Very Good | Above average credit |
| 650-699 | Good | Average credit score |
| 600-649 | Fair | Below average credit |
| 300-599 | Poor | Needs improvement |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Gargi Patel - Initial work

## 🙏 Acknowledgments

- React Team for the amazing framework
- Three.js Community for 3D graphics
- Framer Motion for smooth animations
- TailwindCSS Team for styling utilities

---
Made with ❤️ for better financial decisions | ©