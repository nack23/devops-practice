import React from "react";

function Hero() {
  return (
    <>
      <style>{`

.hero-section{
  padding:0;
}

.hero-container{
  margin:auto;
  position:relative;

  display:grid;
  grid-template-columns: 1.5fr 0.5fr;
  align-items:center;

  padding:10px 280px 50px 180px;

  background: linear-gradient(
    90deg,
    #e6e0ff,
    #f3f0ff,
    #ffffff
  );

  overflow:hidden;
}

/* ===== LEFT ===== */

.hero-left{
  display:flex;
  flex-direction:column;
}

.hero-tag{
  color:#7c3aed;
  font-weight:600;
}

/* ===== PROFILE BLOCK ===== */

.profile-inline{
  display:flex;
  align-items:center;
  gap:40px;
  margin:20px 0 40px 0;
}

.profile-circle{
  width:220px;
  height:220px;
  border-radius:50%;
  background: linear-gradient(135deg, #7c3aed, #c4b5fd);
  display:flex;
  justify-content:center;
  align-items:center;
}

.profile-img{
  width:190px;
  height:190px;
  border-radius:50%;
  object-fit:cover;
}

.profile-content h2{
  font-size:32px;
  margin:0;
  color:#111;
}

.profile-content h4{
  color:#7c3aed;
  margin:8px 0 15px;
}

.info-item{
  display:flex;
  margin-bottom:8px;
}

.info-label{
  font-weight:600;
  min-width:130px;
  color:#111 !important;
}

.info-value{
  color:#555 !important;
}

/* ===== ORIGINAL HERO (UNCHANGED) ===== */

.hero-left h1{
  font-size:42px;
  color:#111;
}

.hero-left span{
  color:#7c3aed;
}

.hero-desc{
  color:#555;
  margin:15px 0;
}

/* BUTTONS */

.hero-btns{
  display:flex;
  gap:15px;
}

.btn-primary{
  background:#7c3aed;
  color:white;
  padding:10px 20px;
  border-radius:25px;
  border:none;
}

.btn-outline{
  border:2px solid #7c3aed;
  color:#7c3aed;
  padding:10px 20px;
  border-radius:25px;
  background:transparent;
}

/* RIGHT */

.hero-right{
  position:relative;
  display:flex;
  justify-content:center;
  align-items:center;
  min-height:320px;
}

.left-animation{
  position:absolute;
  top:50%;
  right:-169%;
  transform:translateY(-50%);
}

.ring{
  width:600px;
  height:600px;
  border-radius:50%;
  background: conic-gradient(
    from 0deg,
    #7c3aed,
    #6366f1,
    #8b5cf6,
    #a78bfa,
    #c4b5fd,
    #7c3aed
  );
  animation: rotateRing 8s linear infinite;
}

.ring-img{
  width:600px;
  height:600px;
  border-radius:50%;
  object-fit:cover;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
}

@keyframes rotateRing{
  from{ transform: rotate(0deg); }
  to{ transform: rotate(360deg); }
}

/* MOBILE */

@media(max-width:768px){

.hero-container{
  display:flex;
  flex-direction:column;
  align-items:center;
  text-align:center;
  padding:5px 15px;
  gap:20px;
}

.hero-right{
  display:none;
}

.profile-inline{
  flex-direction:column;
}

.info-item{
  flex-direction:column;
  align-items:center;
}

.profile-circle{
  width:180px;
  height:180px;
}

.profile-img{
  width:150px;
  height:150px;
}

.hero-left h1{
  font-size:24px;
}

.hero-btns{
  justify-content:center;
  flex-wrap:wrap;
}

}

      `}</style>

      <section className="hero-section">
        <div className="hero-container">

          {/* LEFT */}
          <div className="hero-left">

            <p className="hero-tag">
              IIT Delhi • Faculty Profile
            </p>

            {/* 🔥 PROFILE */}
            <div className="profile-inline">
              <div className="profile-circle">
                <img
                  src={process.env.PUBLIC_URL + "/prof.png"}
                  alt="profile"
                  className="profile-img"
                />
              </div>

              <div className="profile-content">
                <h2>Prof. Somnath Ghosh</h2>
                <h4>Assistant Professor, IIT Delhi</h4>

                <div className="info-item">
                  <span className="info-label">Department:</span>
                  <span className="info-value">Chemical Engineering</span>
                </div>

                <div className="info-item">
                  <span className="info-label">Email:</span>
                  <span className="info-value">somnath@iitd.ac.in</span>
                </div>

                <div className="info-item">
                  <span className="info-label">Research:</span>
                  <span className="info-value">
                    Microfluidics, CFD, Fluid Mechanics, Colloids
                  </span>
                </div>

                <div className="info-item">
                  <span className="info-label">Office:</span>
                  <span className="info-value">Block II, IIT Delhi</span>
                </div>
              </div>
            </div>

            {/* 🔥 ORIGINAL CONTENT SAME */}
            <h1>
              
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

          {/* RIGHT */}
          <div className="hero-right">
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
    </>
  );
}

export default Hero;