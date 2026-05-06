# i3eye - International Immune-Mediated Inflammatory Eye Disease Genomic Consortium

A professional website for the i3eye Consortium, dedicated to advancing genomic research in inflammatory eye diseases through international collaboration.

## Features

- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Modern Styling**: Clean, professional appearance with consistent branding
- **Easy Navigation**: Intuitive menu structure with clear site sections
- **Contact Form**: Simple form for visitor inquiries (front-end validation)
- **Fast Performance**: Lightweight HTML/CSS/JavaScript with no external dependencies

## Site Structure

```
/Users/pavel/Developer/i3eye/
├── index.html # Home page
├── about.html # About & vision
├── research.html # Research & timelines
├── membership.html # Membership & MoU info
├── publications.html # Key publications
├── contact.html # Contact form
├── styles.css # Responsive styling
├── script.js # Interactive features
├── assets/ # Images & logos (create this folder)
│ ├── i3eye-logo.svg
│ └── hero-eye-dna.svg
└── README.md # This file
```

## Getting Started Locally

1. **Clone or download** the project to your computer
2. **Open** any HTML file in your web browser (e.g., double-click `index.html`)
3. **Navigate** through the site using the menu

No server or dependencies required!

## Deployment Options

### Option 1: GitHub Pages (Free, Recommended)

1. Create a GitHub account if you don't have one
2. Create a new repository named `username.github.io` or `i3eye`
3. Upload all files to the repository
4. Your site will be live at `https://username.github.io` or `https://username.github.io/i3eye`

### Option 2: Vercel (Free, Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub account
3. Import your GitHub repository
4. Vercel automatically deploys on every push

### Option 3: Netlify (Free, Easy)

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site goes live instantly with a shareable link

### Option 4: Traditional Hosting

Upload all files to your web host via FTP/cPanel. Works with any web hosting provider.

## Customization

### Colors
Edit the CSS variables in `styles.css` (`:root` section):
```css
--primary-dark: #1e3a5f;
--primary-blue: #1e5a96;
--primary-teal: #00897B;
```

### Contact Email
Update email addresses throughout the site:
- `index.html`, `about.html`, etc.: Search for `info@i3eye.org` and `tasanee.braithwaite@kcl.ac.uk`

### Logo & Images
Replace placeholder images in the `assets/` folder with your actual logo and graphics

### Content
Edit text directly in HTML files - all content is clearly labeled and easy to find

## Contact Form Setup

The contact form currently logs to browser console. To enable email delivery:

**Option A: Using Formspree (Free, Easy)**
1. Go to [formspree.io](https://formspree.io)
2. Create an account and add your form
3. Update the `<form action="">` in `contact.html` with your Formspree endpoint

**Option B: Using Basin (Free)**
1. Go to [basinapp.com](https://basinapp.com)
2. Get your form endpoint
3. Update the form action

**Option C: Backend Service**
Implement a backend service (Node.js, Python, etc.) to handle form submissions

## Browser Support

Works on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Lightweight**: ~50KB total (no frameworks, no CDN dependencies)
- **Fast Load**: All CSS/JS inline or local
- **Mobile-Optimized**: Fully responsive design
- **SEO-Ready**: Proper HTML structure with semantic tags

## License

This website is created for the i3eye Consortium. All rights reserved.

## Support

For questions about the website:
- Email: info@i3eye.org
- Lead Contact: Dr. Tasanee Braithwaite (tasanee.braithwaite@kcl.ac.uk)

---

**Version 1.0** | Created 2024 | i3eye Consortium
# i3eye
