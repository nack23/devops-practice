import React from "react";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "30+", label: "Publications" },
  { value: "5+", label: "PhD Scholars" },
  { value: "IITD", label: "Current Affiliation" },
];

const StatsSection = () => {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(
            90deg,
            #e6e0ff,
            #f3f0ff,
            #ffffff
          );
        }

        .stats-container {
          display: flex;
          justify-content: center;
          padding: 10px 15px;
        }

        .stats-box {
          width: 100%;
          max-width: 1100px;
          background: linear-gradient(135deg, #1c1c3a, #2a2a5a);
          border-radius: 25px;
          padding: 50px 30px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          text-align: center;
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
          position: relative;
          overflow: hidden;
        }

        /* subtle glow effect */
        .stats-box::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,77,109,0.15), transparent 70%);
          transform: rotate(25deg);
        }

        .stat-item {
          transition: all 0.35s ease;
          cursor: pointer;
          z-index: 1;
        }

        .stat-item:hover {
          transform: translateY(-8px) scale(1.08);
        }

        .stat-value {
          font-size: 36px;
          font-weight: bold;
          color: #ff4d6d;
          text-shadow: 0 0 10px rgba(255,77,109,0.5);
        }

        .stat-label {
          margin-top: 10px;
          color: #e0e0ff;
          font-size: 13px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        /* divider lines (pro look) */
        .stat-item:not(:last-child)::after {
          content: "";
          position: absolute;
          right: 0;
          top: 20%;
          height: 60%;
          width: 1px;
          background: rgba(255,255,255,0.1);
        }

        /* Desktop */
        @media (min-width: 768px) {
          .stats-box {
            grid-template-columns: repeat(4, 1fr);
            padding: 60px;
          }

          .stat-value {
            font-size: 50px;
          }

          .stat-label {
            font-size: 15px;
          }
        }
      `}</style>

      <div className="stats-container">
        <div className="stats-box">
          {stats.map((item, index) => (
            <div key={index} className="stat-item">
              <h2 className="stat-value">{item.value}</h2>
              <p className="stat-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StatsSection;