import React, { useEffect } from 'react';

const Stars: React.FC = () => {
  useEffect(() => {
    const container = document.querySelector(".container") as HTMLElement;

    const addStars = () => {
      for (let i = 0; i < 10; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";
        container.appendChild(star);
      }
    }

    addStars();

    const intervalId = setInterval(() => {
      addStars();
    }, 2000);

    const style = document.createElement("style");
    style.innerHTML = `
      .star {
        position: fixed;
        width: 1px;
        height: 1px;
        background-color: #fff;
        border-radius: 50%;
        animation: twinkling 2.5s infinite;
        z-index: -100;
        background-size: cover;
      }
    `;
    document.head.appendChild(style);

    return () => clearInterval(intervalId);
  }, []);

  return <div className="container" />;
};

export default Stars;
