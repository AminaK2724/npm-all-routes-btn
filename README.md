# [npm-all-routes-button] (https://www.npmjs.com/package/npm-ripple-wave-bg)
A fully customizable **React button** for navigating between multiple routes with **smooth animations**. It supports **slide, fade, and zoom effects**, allowing developers to create **dynamic page transitions**.

## 📦 Installation
Install the package using npm:
```sh
npm install npm-all-routes-button
```

## 🛠️ Usage
Import the `AllRoutesButton` component and pass your **routes, animations, and styles**.

### 📍 **Basic Example**
```jsx
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AllRoutesButton from 'npm-all-routes-button'
import './custom-button.css' // Custom styles

const routes = [
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'About Me', path: '/about-me' },
  { name: 'Contact', path: '/contact' },
  { name: 'Projects', path: '/projects/1' },
]

const customStyles = {
  buttonStyles: { backgroundColor: 'blue', color: 'white', padding: '12px 24px', borderRadius: '8px' },
  buttonHoverStyles: { backgroundColor: 'darkblue', color: 'yellow' },
  overlayStyles: { backgroundColor: 'rgba(0, 0, 0, 0.9)' },
  containerStyles: { padding: '20px', borderRadius: '12px', textAlign: 'center' },
  headerStyles: { color: 'yellow', fontSize: '2rem' },
  linkStyles: { color: 'cyan', fontSize: '1.2rem' },
  linkHoverStyles: { color: 'white', transform: 'scale(1.1)' }
}

function App() {
  return (
    <Router>
      <AllRoutesButton routes={routes} animation="slide-in" styles={customStyles} />
    </Router>
  )
}

export default App
```

---

## 🎨 Customization
You can **fully customize** the component by passing props for **routes, animations, and styles**.

### **🛤 Routes**
The `routes` prop is required and should contain an array of objects with:
- `name`: The display name of the route.
- `path`: The React Router path.

#### **Example:**
```jsx
const routes = [
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Projects', path: '/projects/1' },
]
```
Then pass the `routes` prop:
```jsx
<AllRoutesButton routes={routes} animation="zoom-in" />
```

---

### **🎬 Animations**
Choose from **three built-in animations**:  
✅ **Slide (`slide-in`, `slide-out`)**  
✅ **Fade (`fade-in`, `fade-out`)**  
✅ **Zoom (`zoom-in`, `zoom-out`)**  

#### **Example:**
```jsx
<AllRoutesButton routes={routes} animation="fade-in" />
```

Animations **automatically reverse** when navigating away.

---

### **🎨 Styling**
You can **fully style** the button, overlay, and links using the `styles` prop.

| Prop | Type | Description |
|------|------|-------------|
| `routes` | `array` | List of routes with `{ name, path }` |
| `animation` | `string` | Animation type (`slide-in`, `fade-in`, `zoom-in`) |
| `buttonStyles` | `object` | Styles for the button (default: fixed at top-right) |
| `buttonHoverStyles` | `object` | Styles when hovering over the button |
| `overlayStyles` | `object` | Styles for the full-screen overlay |
| `containerStyles` | `object` | Styles for the content container |
| `headerStyles` | `object` | Styles for the header text |
| `linkContainerStyles` | `object` | Styles for the list items |
| `linkStyles` | `object` | Styles for the links inside the menu |
| `linkHoverStyles` | `object` | Styles for the links on hover |

### **Example with Custom Styles**
```jsx
const myStyles = {
  buttonStyles: { background: 'black', color: 'white' },
  overlayStyles: { background: 'rgba(255, 0, 0, 0.8)' },
  linkStyles: { color: 'white' },
  linkHoverStyles: { color: 'gold' }
}

<AllRoutesButton routes={routes} animation="zoom-in" styles={myStyles} />
```

---

## 🔄 Fun Feature - Reverse Animation on Navigation
When clicking on a **link or the Go Back button**, the reverse animation will play **before navigating**.

### **Example**
If `animation="slide-in"`, it will **slide-out** when navigating away.

---

## 🌟 Why Use This Package?
✔ **Full-Screen Overlay with Animations**  
✔ **Customizable Styles via Props**  
✔ **Works with React Router**  
✔ **Supports Reverse Animations**  
✔ **Easy to Use & Lightweight**  

---

## 🛠️ Requirements
- **React 18+**
- **React Router 6+**

---

### **🛠 Development & Contribution**
If you’d like to contribute:

#### **Clone the repository:**
```sh
git clone https://github.com/AminaK2724/npm-all-routes-btn
```

#### **Navigate to the project directory:**
```sh
cd all-routes-button
```

#### **Install dependencies:**
```sh
npm install
```

#### **Run the project locally:**
```sh
npm start
```

#### **Build the package:**
```sh
npm run build
```

#### **Test the package in a sample React project:**
```sh
cd test-all-routes-button
npm install npm-all-routes-button
npm start
```

Feel free to **fork** the repository and submit a **pull request** if you’d like to contribute! 🚀

--- 

## 📄 **License**

ISC License © 2025 Amina Khan

---

## ⭐ **Support & Feedback**

If you like this package, give it a ⭐ on GitHub!  
For issues, report them [here](https://github.com/AminaK2724/npm-ripple-wave-bg/issues).

For any inquiries or feedback, please reach out to:

**Amina Khan**  
aminak2724@gmail.com | [GitHub](https://github.com/AminaK2724)
