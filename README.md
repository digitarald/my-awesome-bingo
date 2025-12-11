# 🎉 Soc Ops

**Break the ice, make connections, have fun!**

Soc Ops is a modern social bingo game designed for in-person events, mixers, and team-building activities. Walk around, find people who match the prompts, and race to get five in a row. It's the perfect way to get people talking and having fun together.

[![Live Demo](https://img.shields.io/badge/🎮_Live_Demo-Play_Now-blue?style=for-the-badge)](https://digitarald.github.io/my-awesome-bingo/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)
[![Built with React](https://img.shields.io/badge/Built_with-React-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

---

## ✨ Features

- 🎲 **Randomized Boards** - Every game is unique with shuffled prompts
- 📱 **Mobile-First** - Optimized for phones and tablets
- 💾 **Auto-Save** - Your progress is preserved even if you close the tab
- 🎊 **Instant Feedback** - Animated celebrations when you get BINGO!
- 🎨 **Modern UI** - Clean, accessible design with smooth animations
- ⚡ **Lightning Fast** - Built with Vite and React 19 for instant loading
- 🔒 **Privacy-First** - Everything runs in your browser, no data sent anywhere

## 🎮 How to Play

1. **Start the Game** - Open the app and tap "Start Game"
2. **Mingle & Find** - Walk around and find people who match the prompts on your board
3. **Mark Your Matches** - Tap a square when you find someone who matches
4. **Get Five in a Row** - First to get 5 squares in a row (horizontal, vertical, or diagonal) wins!
5. **Celebrate** - Share your victory and start a new round!

> **Pro Tip:** The center square is always a FREE SPACE to help you get started!

## 🚀 Quick Start

### Prerequisites

- [Node.js 22](https://nodejs.org/) or higher

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) and start playing!

### Build for Production

```bash
# Create optimized production build
npm run build
```

The app automatically deploys to [GitHub Pages](https://digitarald.github.io/my-awesome-bingo/) on every push to `main`.

## 🎨 Customization

### Add Your Own Prompts

Edit the questions in [`src/data/questions.ts`](src/data/questions.ts) to customize the game for your event:

```typescript
export const questions: string[] = [
  "bikes to work",
  "has lived in another country",
  "speaks more than 2 languages",
  // Add your own prompts here!
];
```

### Styling

The app uses [Tailwind CSS v4](https://tailwindcss.com/) for styling. Customize colors and themes in [`src/index.css`](src/index.css).

## 🏗️ Tech Stack

- **Framework:** [React 19](https://react.dev/) with TypeScript
- **Build Tool:** [Vite 7](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Testing:** [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/)
- **Linting:** [ESLint 9](https://eslint.org/)
- **Deployment:** GitHub Pages with automated workflows

## 🧪 Development

### Run Tests

```bash
npm test
```

### Linting

```bash
npm run lint
```

## 🤝 Contributing

Contributions are welcome! Whether you want to:

- 🐛 Report a bug
- 💡 Suggest a new feature
- 📝 Improve documentation
- 🎨 Enhance the UI/UX
- ➕ Add more prompts

Please feel free to open an issue or submit a pull request. Check out our [Contributing Guide](CONTRIBUTING.md) for more details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Acknowledgments

- Inspired by classic bingo games and modern icebreaker activities
- Built with ❤️ for bringing people together
- Created by [Harald Kirschner](https://github.com/digitarald)

---

<div align="center">
  
**[⭐ Star this repo](https://github.com/digitarald/my-awesome-bingo)** if you find it useful!

Made with 🎯 for memorable social events

</div>
