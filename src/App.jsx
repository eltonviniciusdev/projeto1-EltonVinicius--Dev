import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div id="main">
      <nav className="nav-container">
        <a href="#" className="logo2">Logo</a>
        <div className="nav-menu">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Produto</a>
        </div>
        <iframe
          src="https://lottie.host/embed/63041ba6-0197-426a-a26c-547ea8792576/TEoIY4kQqz.lottie"
          id="menu"
          title="Menu Animation"
        />
      </nav>

      <section className="hero">
        
      <h1 className="text">CAFÉ</h1>
      <img id="logo" src='src/assets/cafe3.png' alt="Logo Café" />
        <section id="cafe-section">
          <img id="copo-cafe" src='src/assets/cafee.jpg' alt="Copo de Café" />
        </section>

      <section className="palette"></section>

      </section>

      <div id="hero2">
        <div className="left-side">
          <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="60" cy="30" rx="55" ry="25" fill="#f5e8d3" stroke="#8B5A2B" stroke-width="3"/>
          <ellipse cx="60" cy="28" rx="40" ry="18" fill="#d2b48c" opacity="0.6"/>
          </svg>
          <img id="cafe2" src='src/assets/caputino.png' alt="Caputino" />
          <img id="graos2" src="src/assets/graos2.png" alt='graos' />
          <img id="graos" src="src/assets/graos.png" alt='graos' />
        </div>
        <div className="right-side">
          <h2>Bem vindo ao nosso café!</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni animi aliquam 
            est amet laborum dicta quaerat omnis provident molestias sapiente deleniti 
            placeat excepturi quam dolor blanditiis, minus ipsam at. Ullam?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempora 
              harum id modi officia veritatis, quis dolores optio velit voluptate saepe qui 
              necessitatibus non incidunt aspernatur nisi, dolore, voluptas facilis!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet eveniet distinctio 
              inventore cupiditate unde libero cum aperiam! Ipsa, eveniet sapiente eius quae autem 
              eos eligendi cumque, distinctio nam laboriosam quia!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;