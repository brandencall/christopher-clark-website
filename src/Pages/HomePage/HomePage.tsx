import { useEffect, useState } from "react";
import ContactIcons from "../../Components/ContactIcons";
import "./HomePage.css";

export default function HomePage() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={`page-content ${fadeIn ? "fade-in" : ""}`}>
      <div className="icon-row fade-in-up" style={{ ["--d" as any]: "0.5s" }}>
        <ContactIcons />
      </div>

      <div className="container">
        <section className="hero">
          <img
            src="/ChristopherClarkHeadShot.JPEG"
            alt="Christopher Clark"
            className="hero__image fade-in-up"
            style={{ ["--d" as any]: "0.4s" }}
            loading="lazy"
            decoding="async"
          />

          <h2 className="hero__name fade-in-up" style={{ ["--d" as any]: "1.1s" }}>
            Christopher Clark
          </h2>

          <h3 className="hero__tagline fade-in-up" style={{ ["--d" as any]: "1.4s" }}>
            Technical Project Manager | Systems Administrator
          </h3>
        </section>

        <div className="hero__text fade-in-up" style={{ ["--d" as any]: "1.7s" }}>
          <p>My path into IT started in July 2018 …</p>
          <p>As I advanced to Sergeant in 2023 …</p>
          <p>Along the way, I leaned into personal development …</p>
          <p>My education reflects that same drive …</p>
          <p>I'm also enrolled in the Army National Guard's …</p>
          <p>At the core of everything I do is a mindset …</p>
        </div>
      </div>
    </div>
  );
}
