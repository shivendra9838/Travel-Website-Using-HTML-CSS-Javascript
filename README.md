# 🌍 Travel Website with Admin Panel

A modern, full-featured travel booking website built with HTML, CSS, and JavaScript, featuring a comprehensive admin panel for user management and analytics.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Website-blue)](https://travel-admin-panel.surge.sh)
[![Admin Panel](https://img.shields.io/badge/Admin%20Panel-Dashboard-green)](https://travel-admin-panel.surge.sh/admin-login.html)
[![GitHub](https://img.shields.io/github/license/shivendra9838/Travel-Website-Using-HTML-CSS-Javascript)](LICENSE)

## 🚀 Live Demo

- **🌐 Website:** [https://travel-admin-panel.surge.sh](https://travel-admin-panel.surge.sh)
- **👨‍💼 Admin Panel:** [https://travel-admin-panel.surge.sh/admin-login.html](https://travel-admin-panel.surge.sh/admin-login.html)

### 🔐 Admin Credentials
- **Username:** `admin`
- **Password:** `admin123`

## 📖 About

"Every Travel" is a comprehensive travel booking platform that bridges travelers with amazing destinations. This project demonstrates modern web development practices with a focus on user experience and administrative functionality.

### 🎯 Project Goals
- Create an intuitive travel booking interface
- Implement secure admin panel for user management
- Provide real-time analytics and tracking
- Showcase modern web development skills
- Build a scalable, deployment-ready application

### ✨ What Makes This Special
- **Professional Admin System** - Complete user tracking and management
- **Real-time Analytics** - Monitor user activity and website performance
- **Responsive Design** - Works seamlessly across all devices
- **Security Features** - Protected admin routes and session management
- **Modern UI/UX** - Clean, intuitive interface with smooth animations

## 🏗️ Project Structure

```
Travel-Website-Using-HTML-CSS-Javascript/
├── 📄 index.html                 # Home page
├── 🔐 admin-login.html           # Admin authentication
├── 👨‍💼 admin.html                # Admin dashboard
├── 🔑 login.html                 # User login/signup
├── 🧭 destination.html           # Destinations page
├── 💰 prices.html                # Pricing page
├── 💬 feedback.html              # Customer feedback
├── 🛒 checkout.html              # Shopping cart
├── 📁 js/
│   ├── 🛡️ admin-auth.js          # Admin authentication system
│   ├── 📊 demo-data.js           # Demo users for testing
│   └── ⚡ main.js                # Core functionality
├── 📁 assets/                    # Images, icons, and media
├── 📁 styles/                    # Additional CSS files
├── 🎨 main.css                   # Main stylesheet
└── 📚 README.md                  # Project documentation
```

## ✨ Features

### 🌟 Frontend Features
- **🏠 Homepage** - Attractive landing page with search functionality
- **🧭 Destinations** - Interactive destination browser with filtering
- **💰 Pricing** - Transparent pricing with package comparisons
- **💬 Feedback** - Customer review system
- **🔐 Authentication** - Secure user login and registration
- **🛒 Shopping Cart** - Complete booking system
- **📱 Responsive Design** - Mobile-first approach

### 🔧 Admin Panel Features
- **👨‍💼 Secure Login** - Protected admin authentication
- **📊 Dashboard** - Real-time statistics and analytics
- **👥 User Management** - View, track, and manage users
- **📈 Analytics** - Visit tracking and user behavior
- **🏨 Content Management** - Destination CRUD operations
- **🔒 Session Management** - Secure admin sessions

### 🎨 UI/UX Features
- **🎭 Modern Design** - Clean, professional interface
- **🌈 Interactive Elements** - Smooth hover effects and animations
- **🎯 User-Centric** - Intuitive navigation and user flow
- **⚡ Performance** - Optimized loading and responsiveness
- **♿ Accessibility** - WCAG compliant design principles

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome** - Professional icon library
- **Bootstrap** - Responsive components (select pages)

### Admin System
- **Vanilla JavaScript** - Custom authentication system
- **LocalStorage** - Client-side data persistence
- **Session Management** - Secure admin sessions
- **Real-time Tracking** - User activity monitoring

### Deployment
- **Surge.sh** - Static website hosting
- **Git** - Version control
- **GitHub** - Repository hosting

## 🚀 Getting Started

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, etc.)
- Basic knowledge of HTML, CSS, JavaScript

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shivendra9838/Travel-Website-Using-HTML-CSS-Javascript.git
   cd Travel-Website-Using-HTML-CSS-Javascript
   ```

2. **Open the project**
   - Open `index.html` in your web browser
   - Or use a local server (recommended):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using Live Server (VS Code extension)
   # Right-click on index.html > "Open with Live Server"
   ```

3. **Access the admin panel**
   - Navigate to `admin-login.html`
   - Use credentials: `admin` / `admin123`

## 📝 Usage

### For Users
1. **Browse Destinations** - Explore available travel packages
2. **Create Account** - Sign up for personalized experience
3. **Book Travel** - Select and book your preferred packages
4. **Provide Feedback** - Share your travel experiences

### For Admins
1. **Login** - Access the admin panel with provided credentials
2. **Monitor Users** - View real-time user activity and registrations
3. **Manage Content** - Add, edit, or remove travel destinations
4. **Analytics** - Track website performance and user engagement

## 📊 Admin Panel Guide

### Dashboard Overview
- **User Statistics** - Total registered users and active sessions
- **Visit Analytics** - Real-time visitor tracking
- **Content Management** - Destination and package management

### User Management
- **User List** - View all registered users with avatars
- **User Details** - Access timestamps and contact information
- **User Actions** - Delete or manage user accounts

### Content Management
- **Add Destinations** - Create new travel packages
- **Edit Content** - Modify existing destinations
- **Media Management** - Upload and manage images

## 🎨 Customization

### Styling
- Edit `main.css` for global styles
- Modify component-specific CSS in the `styles/` folder
- Update CSS variables for theme customization

### Functionality
- Extend `main.js` for additional features
- Modify admin functionality in `js/admin-auth.js`
- Add new pages following the existing structure

### Content
- Update travel destinations in the admin panel
- Modify static content in HTML files
- Add new assets to the `assets/` folder

## 🚀 Deployment

### Deploy to Surge.sh
```bash
npm install -g surge
surge . your-domain.surge.sh
```

### Deploy to Netlify
1. Connect your GitHub repository
2. Set build command: (none for static sites)
3. Set publish directory: `/`

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🔒 Security Features

- **Admin Authentication** - Secure login system
- **Session Management** - Automatic session handling
- **Input Validation** - Client-side form validation
- **XSS Protection** - Safe content rendering

## 📈 Performance

- **Optimized Images** - Compressed assets for faster loading
- **Minified CSS** - Reduced file sizes
- **Efficient JavaScript** - Optimized code execution
- **CDN Resources** - External libraries from CDN

## 🐛 Known Issues

- Admin panel requires JavaScript enabled
- Some features need server-side implementation for production
- LocalStorage has browser storage limits

## 📋 Roadmap

- [ ] Backend integration with Node.js/Express
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Payment gateway integration
- [ ] Email notification system
- [ ] Advanced user roles and permissions
- [ ] Mobile application development

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Shivendra Pratap Singh**
- GitHub: [@shivendra9838](https://github.com/shivendra9838)
- LinkedIn: [Connect with me](https://linkedin.com/in/shivendra9838)

## 🙏 Acknowledgments

- Font Awesome for icons
- Unsplash for high-quality images
- Bootstrap for responsive components
- The open-source community for inspiration

## 📞 Support

If you have any questions or need support:
- Create an issue on GitHub
- Check the documentation
- Contact the author through GitHub

---

⭐ **Star this repository if you found it helpful!**

[![Stars](https://img.shields.io/github/stars/shivendra9838/Travel-Website-Using-HTML-CSS-Javascript?style=social)](https://github.com/shivendra9838/Travel-Website-Using-HTML-CSS-Javascript/stargazers)
[![Forks](https://img.shields.io/github/forks/shivendra9838/Travel-Website-Using-HTML-CSS-Javascript?style=social)](https://github.com/shivendra9838/Travel-Website-Using-HTML-CSS-Javascript/network/members)

---

**Made with ❤️ for the travel community**
