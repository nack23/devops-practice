import React from "react";

const scholars = [
  {
    name: "Ainkara Karthiga R",
    role: "PhD Scholar (PMRF)",
    topic: "CFD-DEM modeling of non-spherical particles.",
    img: process.env.PUBLIC_URL + "/members/logo.png",
  },
  {
    name: "Gunjan Yadav",
    role: "PhD Scholar",
    topic: "Modeling of gas-solid fluidized beds.",
    img: process.env.PUBLIC_URL + "/members/logo.png",
  },
  {
    name: "Sarita Shit",
    role: "PhD Scholar",
    topic: "Coarse-grained modeling of gas-particle systems.",
    img: process.env.PUBLIC_URL + "/members/logo.png",
  },
  {
    name: "Mahendra Kumar Meena",
    role: "PhD Scholar",
    topic: "Solid Hydrodynamics in Elevated Temp Fluidized Beds.",
    img: process.env.PUBLIC_URL + "/members/logo.png",
  },
  {
    name: "Ainkara Karthiga R",
    role: "PhD Scholar (PMRF)",
    topic: "CFD-DEM modeling of non-spherical particles.",
    img: process.env.PUBLIC_URL + "/members/logo.png",
  },
  {
    name: "Gunjan Yadav",
    role: "PhD Scholar",
    topic: "Modeling of gas-solid fluidized beds.",
    img: process.env.PUBLIC_URL + "/members/logo.png",
  },
  {
    name: "Sarita Shit",
    role: "PhD Scholar",
    topic: "Coarse-grained modeling of gas-particle systems.",
    img: process.env.PUBLIC_URL + "/members/logo.png",
  },
  {
    name: "Ainkara Karthiga R",
    role: "PhD Scholar (PMRF)",
    topic: "CFD-DEM modeling of non-spherical particles.",
    img: process.env.PUBLIC_URL + "/members/logo.png",
  },
  {
    name: "Gunjan Yadav",
    role: "PhD Scholar",
    topic: "Modeling of gas-solid fluidized beds.",
    img: process.env.PUBLIC_URL + "/members/logo.png",
  },
  {
    name: "Sarita Shit",
    role: "PhD Scholar",
    topic: "Coarse-grained modeling of gas-particle systems.",
    img: process.env.PUBLIC_URL + "/members/logo.png",
  },
];

function ResearchGroup() {
  const styles = {
    section: {
      padding: "60px 20px",
      textAlign: "center",
      background: "linear-gradient(to bottom, #f4f5fa, #cfd6e6)",
    },

    title: {
      fontSize: "2.5rem",
      marginBottom: "40px",
      color: "#2d3436",
    },

    container: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "25px",
      maxWidth: "1100px",
      margin: "auto",
    },
card: {
  height: "320px",
  padding: "30px 20px",
  borderRadius: "22px",

  // ✨ Gradient background instead of flat
  background: "linear-gradient(145deg, rgba(255,255,255,0.7), rgba(240,243,255,0.6))",

  // ✨ Soft border for premium look
  border: "1px solid rgba(255,255,255,0.6)",

  // ✨ Deep layered shadow
  boxShadow: `
    0 10px 25px rgba(0,0,0,0.08),
    0 5px 10px rgba(0,0,0,0.05),
    inset 0 1px 1px rgba(255,255,255,0.6)
  `,

  backdropFilter: "blur(12px)",

  // ✨ Subtle top highlight strip
  position: "relative",
  overflow: "hidden",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
},

    img: {
      width: "90px",
      height: "90px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "12px",
      border: "3px solid #6c5ce7",
    },

    name: {
      margin: "8px 0 4px",
      color: "#2d3436",
      fontSize: "1.1rem",
      fontWeight: "600",
    },

    role: {
      fontSize: "0.85rem",
      color: "#6c5ce7",
      marginBottom: "6px",
      fontWeight: "500",
    },

    topic: {
      fontSize: "0.85rem",
      color: "#636e72",
      maxWidth: "220px",
    },
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Our Research Group</h2>

      <div style={styles.container}>
        {scholars.map((s, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-10px) scale(1.03)";
              e.currentTarget.style.boxShadow =
                "0 25px 60px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow =
                "0 15px 40px rgba(0,0,0,0.1)";
            }}
          >
            <img src={s.img} alt={s.name} style={styles.img} />
            <h3 style={styles.name}>{s.name}</h3>
            <div style={styles.role}>{s.role}</div>
            <p style={styles.topic}>{s.topic}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ResearchGroup;