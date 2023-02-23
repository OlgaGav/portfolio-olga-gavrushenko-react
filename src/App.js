import Resume from './components/Resume'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio';
import { useState } from 'react'

function App() {

  const [activeTab, setActiveTab] = useState("about"); // Initialize activeTab state

  // Define a function to handle the click event on a tab
  const handleTabClick = (tab) => {
    setActiveTab(tab); // Update the activeTab state with the selected tab
  };

  return (
    <div>
    <nav className='navbar'>
      <h1 onClick={() => handleTabClick("about")}>Olga Gavrushenko</h1>
      <div className='links'>
        <button
          className={activeTab === "about" ? "active" : ""}
          onClick={() => handleTabClick("about")}
        >
          About me
        </button>
        <button
          className={activeTab === "portfolio" ? "active" : ""}
          onClick={() => handleTabClick("portfolio")}
        >
          Portfolio
        </button>
        <button
          className={activeTab === "contact" ? "active" : ""}
          onClick={() => handleTabClick("contact")}
        >
          Contact
        </button>
        <button
          className={activeTab === "resume" ? "active" : ""}
          onClick={() => handleTabClick("resume")}
        >
          Resume
        </button>
      </div>
    </nav>
    {/* Render the content based on the active tab */}
    {activeTab === "about" && <AboutMe />}
    {activeTab === "portfolio" && <Portfolio />}
    {activeTab === "contact" && <Contact />}
    {activeTab === "resume" && <Resume />}
    <Footer />
  </div>
  );
}

export default App;
