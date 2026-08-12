import React, { useRef, useEffect, useState } from "react";
import img1 from "./images/shrikrishna.jpg"; // replace with your images

const images = [img1, img1, img1, img1, img1]; // 5 images

const BookPujaSection = () => {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(5);
  const speed = 0.5; // pixels per frame

  // Update slides to show based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1200) setSlidesToShow(5);
      else if (width >= 992) setSlidesToShow(4);
      else if (width >= 768) setSlidesToShow(3);
      else if (width >= 576) setSlidesToShow(2);
      else setSlidesToShow(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll
  useEffect(() => {
    const slider = sliderRef.current;
    let offset = 0;
    const totalWidth = slider ? slider.scrollWidth / 2 : 0;

    const animate = () => {
      if (!slider) return;
      offset -= speed;
      if (Math.abs(offset) >= totalWidth) offset = 0;
      slider.style.transform = `translateX(${offset}px)`;
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);

  // Duplicate images for seamless scroll
  const allImages = [...images, ...images];

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #fce7e7, #fdeccb)",
        padding: "60px 0",
        borderBottomLeftRadius: "30px",
        borderBottomRightRadius: "30px",
        overflow: "hidden",
      }}
    >
      {/* TITLE */}
      <h1
        style={{
          fontSize: "48px",
          color: "#C4302B",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        Online Puja Services
      </h1>

      {/* SUBTITLE */}
      <p
        style={{
          fontSize: "20px",
          color: "#5A5A5A",
          maxWidth: "800px",
          margin: "20px auto 40px",
          lineHeight: "1.6",
          textAlign: "center",
        }}
      >
        Offer Sacred Prayers Online – Invoke Peace, Prosperity, and Krishna’s
        Divine Blessings from ISKCON Bhiwandi!
      </p>

      {/* BUTTON */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <button
          style={{
            width: "203px",
            height: "46px",
            backgroundColor: "#FFC84F",
            borderRadius: "6px",
            border: "none",
            fontWeight: 600,
            fontSize: "18px",
            color: "#AA3236",
            cursor: "pointer",
          }}
        >
          Participate Now!
        </button>
      </div>

      {/* SLIDER */}
      <div
        style={{
          width: "90%",
          margin: "0 auto",
          overflow: "hidden",
        }}
      >
        <div
          ref={sliderRef}
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          {allImages.map((img, index) => (
            <div
              key={index}
              style={{
                flex: `0 0 ${100 / slidesToShow}%`, // responsive width
                minWidth: "100px",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <img
                src={img}
                alt={`slide-${index}`}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookPujaSection;
