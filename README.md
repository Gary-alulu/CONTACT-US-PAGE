# Next.js Contact Page

A modern, responsive contact page built with Next.js 14, TypeScript, Tailwind CSS, and React Hook Form. Features a clean design with contact form, interactive map, and dynamic footer.

## 🚀 Features

- **Modern Design**: Clean, professional UI with gradient backgrounds and smooth animations
- **Responsive Layout**: Fully responsive design that works on all device sizes
- **Form Validation**: Real-time validation using React Hook Form and Zod
- **Loading States**: Visual feedback during form submission
- **Success Notifications**: Toast notifications for user feedback
- **Interactive Map**: Embedded Google Maps for location visualization
- **Dynamic Footer**: Auto-updating year and comprehensive contact information
- **TypeScript**: Full TypeScript support for better development experience
- **Accessibility**: Semantic HTML and keyboard navigation support

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form + Zod
- **Notifications**: React Hot Toast
- **Icons**: Lucide React
- **Validation**: Zod schema validation

## 📁 Project Structure

```
contact-page/
├── src/
│   └── app/
│       ├── layout.tsx          # Root layout with metadata
│       ├── page.tsx            # Main contact page component
│       ├── globals.css         # Global styles and Tailwind CSS
│       └── components/
│           └── Footer.tsx      # Dynamic footer component
├── public/                     # Static assets
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── next.config.js            # Next.js configuration
├── .eslintrc.json            # ESLint configuration
├── postcss.config.js         # PostCSS configuration
└── .env.local               # Environment variables
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or download the project**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## 🎯 Form Configuration

The contact form includes these fields:
- **Name** (required)
- **Email** (required, validated)
- **Subject** (optional)
- **Message** (required, 10-500 characters)

### Form Validation Rules

- **Name**: Required, minimum 2 characters
- **Email**: Required, valid email format
- **Message**: Required, minimum 10 characters, maximum 500 characters
- **Subject**: Optional, no validation

### Customization Options

#### Update Contact Information
Edit the contact details in `src/app/page.tsx`:

```typescript
// Update contact information
const contactInfo = {
  email: "contact@company.com",
  phone: "+1 (555) 123-4567",
  address: "123 Business St, City, State 12345",
  businessHours: "Monday - Friday: 9:00 AM - 6:00 PM"
};
```

#### Customize Footer
Update the footer information in `src/app/components/Footer.tsx`:

```typescript
// Update footer details
const footerConfig = {
  companyName: "Your Company Name",
  email: "contact@yourcompany.com",
  phone: "+1 (555) 123-4567",
  address: "123 Business St, City, State 12345"
};
```

#### Update Map Location
Change the Google Maps embed URL:

```typescript
// Update the map location in src/app/page.tsx
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1...YOUR_LOCATION_HERE"
  // ... other props
/>
```

#### Form Integration
To connect the form to a real backend:

1. **Create an API route** in `src/app/api/contact/route.ts`
2. **Update the form submission** in `src/app/page.tsx`:

```typescript
const onSubmit = async (data: ContactFormData) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  
  if (response.ok) {
    toast.success('Message sent successfully!');
  } else {
    toast.error('Failed to send message');
  }
};
```

## 🎨 Styling Customization

### Tailwind CSS Configuration
Modify `tailwind.config.js` to customize colors, fonts, and spacing:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        }
      }
    }
  }
}
```

### Dark Mode Support
The project is ready for dark mode implementation. Add dark mode classes to components as needed.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
2. **Import repository** on [Vercel](https://vercel.com)
3. **Deploy** with zero configuration

### Build and Deploy Manually

```bash
# Build the project
npm run build

# Start production server
npm start
```

## 🧪 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Design

The contact page is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-repo/issues) tab
2. Create a new issue with detailed description
3. Include steps to reproduce the problem