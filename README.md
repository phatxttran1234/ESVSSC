# 🏐 VSSCS - Volleyball & Video Drill System

A comprehensive volleyball learning platform built with React, TypeScript, and modern web technologies.

## ✨ Features

### 🎓 Learning Tools
- **50+ Volleyball Terms** - Pre-loaded essential vocabulary
- **Interactive Flashcards** - 3D flip animations with progress tracking
- **Timed Testing** - Multiple choice quizzes with detailed analytics
- **Video Drills** - YouTube, Vimeo, and local video support

### 👥 User Roles
- **Admin** - Full content management (username: `admin`, password: `1234`)
- **Coach/Guest** - Study and view content (no login required)

### 📱 Mobile-First Design
- Responsive layout optimized for all devices
- Touch-friendly interface with smooth animations
- Progressive enhancement for offline use

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone and install dependencies:**
```bash
git clone <your-repo-url>
cd vsscs-app
npm install
```

2. **Set up environment (optional):**
```bash
cp .env.example .env
# Edit .env with your database URL if using Neon PostgreSQL
```

3. **Start development server:**
```bash
npm run dev
```

4. **Open your browser:**
Navigate to `http://localhost:5173`

## 🗄️ Database Setup (Optional)

The app works with local storage by default. For production with Neon PostgreSQL:

1. Create a [Neon](https://neon.tech) database
2. Add your connection string to `.env`:
```
VITE_DATABASE_URL=postgresql://username:password@host/database?sslmode=require
```
3. The app will automatically create tables and migrate data

## 🎮 Usage

### For Students/Coaches:
1. Click "Join as Coach" on login page
2. Browse vocabulary terms
3. Study with flashcards or take tests
4. Watch training drill videos

### For Admins:
1. Login with admin credentials
2. Use "Add Content" to manage vocabulary and videos
3. Edit or delete existing content
4. Upload video drills with tags and descriptions

## 🛠️ Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure
```
src/
├── components/          # React components
├── contexts/           # React contexts (auth)
├── lib/               # Database and storage utilities
├── types/             # TypeScript type definitions
└── main.tsx          # App entry point
```

### Key Technologies
- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first styling
- **Neon PostgreSQL** - Serverless database
- **Vite** - Fast build tool and dev server

## 🎨 Design System

- **Colors**: Volleyball-themed gradients (orange, purple, pink)
- **Typography**: Clear hierarchy with emoji accents
- **Animations**: Smooth transitions and micro-interactions
- **Mobile**: Touch-optimized with large tap targets

## 🔧 Configuration

### Environment Variables
- `VITE_DATABASE_URL` - Neon PostgreSQL connection string (optional)

### Default Admin Credentials
- Username: `admin`
- Password: `1234`

## 📦 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify/Vercel
1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables if using database

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly on mobile and desktop
5. Submit a pull request

## 📄 License

MIT License - feel free to use this project for educational purposes!

## 🏐 About

Created with ❤️ for volleyball enthusiasts who want to learn and improve their game through interactive digital tools.

---

**Ready to spike your volleyball knowledge?** 🏐✨