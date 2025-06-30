# 🎓 Nuton Kuri Pre-Cadet Management System

> **A comprehensive financial management solution for educational institutions**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Google Apps Script](https://img.shields.io/badge/Google_Apps_Script-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://developers.google.com/apps-script)

---

## 🚀 Overview

**Nuton Kuri Pre-Cadet Management System** is a sophisticated web-based financial management solution designed specifically for educational institutions. Built with modern web technologies and integrated with Google Apps Script for seamless data processing, this system provides comprehensive tools for managing student fees and institutional expenses.

### ✨ Key Features

- **📊 Student Fee Management** - Complete student transaction tracking
- **💰 Expense & Accumulation Tracking** - Detailed financial record keeping
- **📄 PDF Generation** - Professional report generation with jsPDF
- **🎨 Modern UI/UX** - Responsive design with Tailwind CSS
- **🔧 Google Apps Script Integration** - Backend processing and data management
- **📱 Mobile Responsive** - Works seamlessly across all devices

---

## 🛠️ Technology Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **HTML5** | Structure & Semantics | Latest |
| **CSS3** | Styling & Layout | Latest |
| **JavaScript (ES6+)** | Frontend Logic & Interactivity | Modern |
| **Tailwind CSS** | Utility-first CSS Framework | Latest |
| **Google Apps Script** | Backend Processing | Latest |
| **jsPDF** | PDF Generation | 2.5.1 |

---

## 📁 Project Structure

```
naturn_kuri/
├── 📁 Accumulate Expense Details/
│   ├── 📄 index.html          # Main expense tracking interface
│   ├── 📄 javascript.html     # Frontend logic & PDF generation
│   └── 📄 google.js           # Google Apps Script backend
├── 📁 fees entry/
│   ├── 📄 index.html          # Student fee management interface
│   ├── 📄 javascript.html     # Frontend logic & form handling
│   └── 📄 google.js           # Google Apps Script backend
└── 📄 README.md               # Project documentation
```

---

## 🎯 Core Modules

### 1. Student Fee Transaction System
- **Student Information Management**
  - Student ID generation (KURI- prefix)
  - Comprehensive student details tracking
  - Class and roll number management
- **Fee Processing**
  - Multiple description entries
  - Real-time total calculation
  - Transaction ID generation
- **Reporting**
  - Professional PDF reports
  - Transaction history
  - Student-specific records

### 2. Expense & Accumulation Tracking
- **Financial Management**
  - Debit/Credit categorization
  - Detailed expense descriptions
  - Accumulation tracking
- **Advanced Features**
  - Dynamic form fields
  - Real-time calculations
  - Professional reporting
- **Data Organization**
  - Unit-based categorization
  - Register page tracking
  - Date-based filtering

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Google account for Apps Script integration
- Basic understanding of web technologies

### Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/naturn_kuri.git
   cd naturn_kuri
   ```

2. **Google Apps Script Setup**
   - Open [Google Apps Script](https://script.google.com/)
   - Create a new project
   - Copy the contents of `google.js` files
   - Deploy as a web application

3. **Local Development**
   - Open `index.html` files in your browser
   - Ensure internet connection for CDN resources
   - Test all functionality

---

## 💡 Key Features Explained

### 🔄 Dynamic Form Management
```javascript
// Auto-generating transaction IDs
const TRANSACTION_PREFIX = "AE";
function generateTransactionId() {
    const randomPart = Math.floor(100000 + Math.random() * 900000);
    return `${TRANSACTION_PREFIX}${randomPart}`;
}
```

### 📊 Real-time Calculations
```javascript
// Automatic total calculation
function calculateTotal() {
    const amountInputs = document.querySelectorAll("input[name='amount[]']");
    let total = 0;
    amountInputs.forEach(input => {
        const value = parseFloat(input.value);
        if (!isNaN(value)) total += value;
    });
    return total.toFixed(2);
}
```

### 📄 PDF Generation
- Professional report formatting
- Branded headers and styling
- Comprehensive transaction details
- Automatic calculations and totals

---

## 🎨 UI/UX Highlights

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern Interface**: Clean, professional appearance with Tailwind CSS
- **User-Friendly**: Intuitive navigation and form interactions
- **Accessibility**: Proper labeling and semantic HTML structure
- **Visual Feedback**: Hover effects and interactive elements

---

## 🔧 Customization

### Styling
The system uses Tailwind CSS for styling. Customize by modifying:
- Color schemes in the HTML classes
- Layout configurations
- Component styling

### Functionality
Extend functionality by:
- Adding new form fields
- Implementing additional validation
- Creating new report types
- Integrating with external APIs

---

## 📈 Performance Features

- **Optimized Loading**: CDN resources for faster loading
- **Efficient JavaScript**: Modern ES6+ syntax and best practices
- **Responsive Images**: Optimized for various screen sizes
- **Minimal Dependencies**: Lightweight and fast

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Developer

**RubidSoft** - *Full Stack Developer*

- **Frontend**: HTML5, CSS3, JavaScript, Tailwind CSS
- **Backend**: Google Apps Script
- **Tools**: Git, VS Code, Google Apps Script Editor
- **Specialties**: Web Development, Financial Systems, Educational Technology

---

## 🙏 Acknowledgments

- **Tailwind CSS** for the amazing utility-first framework
- **jsPDF** for professional PDF generation capabilities
- **Google Apps Script** for seamless backend integration
- **Educational Institutions** for inspiring this solution

---

## 📞 Contact & Support

- **Developer**: RubidSoft
- **Email**: [your-email@example.com]
- **LinkedIn**: [Your LinkedIn Profile]
- **Portfolio**: [Your Portfolio Website]

---

<div align="center">

**Built with ❤️ by RubidSoft**

*Empowering education through technology*

[![GitHub stars](https://img.shields.io/github/stars/yourusername/naturn_kuri?style=social)](https://github.com/yourusername/naturn_kuri/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/naturn_kuri?style=social)](https://github.com/yourusername/naturn_kuri/network)
[![GitHub issues](https://img.shields.io/github/issues/yourusername/naturn_kuri)](https://github.com/yourusername/naturn_kuri/issues)

</div>
