# My Portfolio

A personal portfolio website built with React.js and Bootstrap, showcasing my skills, projects, and experience.

## Features
- **Home Page** - Introduction and welcome message.
- **About Page** - Details about my education and experience.
- **Skills Page** - List of technologies and tools I specialize in.
- **Resume Page** - My resume in an accessible format.
- **Contact Page** - A form to get in touch with me.
- **Loader** - A loading screen with a smooth transition.

## Installation and Setup
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Clone the Repository
```bash
git clone https://github.com/your-username/my-portfolio.git
cd my-portfolio
```

### Install Dependencies
```bash
npm install
# OR
yarn install
```

### Start the Development Server
```bash
npm start
# OR
yarn start
```
This will start the project at `http://localhost:3000/`.

## Project Structure
```
my-portfolio/
│── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Loader.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Resume.jsx
│   │   ├── Contact.jsx
│   ├── App.js
│   ├── index.js
│── public/
│── package.json
│── README.md
```

## Adding a Loader to Your Project
The loader ensures smooth transitions while the content loads.

1. **Create `Loader.jsx` in `src/components/`**
```jsx
import React from "react";
import "./Loader.css";

const Loader = ({ fadeOut }) => {
  return (
    <div className={`loader-container ${fadeOut ? "fade-out" : ""}`}>
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;
```

2. **Create `Loader.css`**
```css
.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  background: rgba(255, 255, 255, 0); /* Transparent background */
  transition: opacity 0.5s ease-out, visibility 0.5s ease-out;
}

.loader-container.fade-out {
  opacity: 0;
  visibility: hidden;
}

.spinner {
  width: 60px;
  height: 60px;
  border: 6px solid rgba(0, 0, 0, 0.2);
  border-top: 6px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

3. **Use `Loader` in `App.js`**
```jsx
import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading && <Loader fadeOut={!loading} />}
      <div className={`app-container ${loading ? "hidden" : ""}`}>
        {/* Your Components Here */}
      </div>
    </>
  );
};

export default App;
```

## Deployment
### Deploy on Vercel
```bash
npm install -g vercel
vercel
```
Follow the CLI steps to deploy your portfolio.

## Author
**Anurag Dubey** - [LinkedIn](https://www.linkedin.com/in/andyouranurag)

## License
This project is licensed under the MIT License.

