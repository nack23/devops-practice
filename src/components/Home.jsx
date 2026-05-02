import React from "react";

function Hero() {
  return (
    <section className="hero-section">
      
      <div className="hero-container">
         
        {/* LEFT SIDE */}
        <div className="hero-left">

          <p className="hero-tag">
            IIT Delhi • Faculty Profile
          </p>

          <h1>
            Prof. Somnath Ghosh <br />
            <span>Expert in Complex Fluids & Microfluidics</span>
          </h1>

          <p className="hero-desc">
            Assistant Professor, Department of Chemical Engineering. 
            Specialized in CFD, Microfluidics, Fluid mechanics, Functional colloids synthesis and their interaction, interfacial engineering.
          </p>
          

          <div className="courses">
            <p><strong>Courses:</strong></p>
            <ul>
              <li>Fluid Mechanics</li>
            </ul>
          </div>

          <div className="hero-btns">
            <button className="btn-primary">View Research</button>
            <button className="btn-outline">Contact</button>
          </div>

        </div>

        {/* RIGHT SIDE (CLEANED) */}
        <div className="hero-right">

          {/* 🔥 animation only */}
          <div className="left-animation">

            <div className="ring"></div>

            <img
              src={process.env.PUBLIC_URL + "/bk.jpeg"}
              alt="center"
              className="ring-img"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;