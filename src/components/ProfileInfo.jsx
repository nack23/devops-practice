import React from "react";

const ProfileInfo = () => {
  return (
    <>
      <style>{`
        .profile-section {
          padding: 60px 20px;
          
          display: flex;
          justify-content: center;
        }

        .profile-container {
          max-width: 1100px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 40px;
          align-items: center;
        }

        /* ===== LEFT IMAGE ===== */

        .profile-image-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .profile-circle {
          width: 260px;
          height: 260px;
          border-radius: 50%;
          background: linear-gradient(135deg, #7c3aed, #c4b5fd);
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        .profile-img {
          width: 220px;
          height: 220px;
          border-radius: 50%;
          object-fit: cover;
          background: white;
          padding: 0px;
        }

        /* ===== RIGHT CONTENT ===== */

        .profile-content h2 {
          font-size: 34px;
          margin: 0;
          color: #111;
        }

        .profile-content h4 {
          color: #7c3aed;
          margin: 10px 0 20px;
        }

        .info-item {
          display: flex;
          margin-bottom: 10px;
        }

        .info-label {
          font-weight: 600;
          min-width: 140px;
        }

        .info-value {
          color: #555;
        }

        /* ===== RESPONSIVE ===== */

        @media(max-width:768px){
          .profile-container{
            grid-template-columns: 1fr;
            text-align: center;
          }

          .info-item{
            flex-direction: column;
            align-items: center;
          }

          .profile-circle{
            width: 200px;
            height: 200px;
          }

          .profile-img{
            width: 170px;
            height: 170px;
          }
        }
      `}</style>

      <section className="profile-section">
        <div className="profile-container">

          {/* LEFT IMAGE */}
          <div className="profile-image-wrapper">
            <div className="profile-circle">
              <img
                src={process.env.PUBLIC_URL + "/prof.png"}
                alt="profile"
                className="profile-img"
              />
            </div>
          </div>

          {/* RIGHT INFO */}
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
      </section>
    </>
  );
};

export default ProfileInfo;