import React, { useEffect, useState } from 'react';

export const Starstwo = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const container = document.querySelector('.container') as HTMLElement;
        const addStars = () => {
            for (let i = 0; i < 60; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                star.style.top = Math.random() * 100 + '%';
                star.style.left = Math.random() * 100 + '%';
                container.appendChild(star);
            }
        };

        const timer = setTimeout(() => {
            setIsLoaded(true);
            addStars();
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isLoaded) {
            return;
        }

        const style = document.createElement('style');
        style.innerHTML = `
      .star {
        position: fixed;
        width: 1.2px;
        height: 1.2px;
        background-color: #fff;
        border-radius: 50%;
        animation: twinkling 3s infinite;
        z-index: -100;
        background-size: cover;
      }

      .star:nth-child(1) {
        top: 25%;
        left: 20%;
      }

      .star:nth-child(2) {
        top: 40%;
        left: 70%;
      }

      .star:nth-child(3) {
        top: 60%;
        left: 40%;
      }

      .star:nth-child(4) {
        top: 80%;
        left: 90%;
      }
    `;
        document.head.appendChild(style);
    }, [isLoaded]);

    return <div className="container"></div>;
};

export default Starstwo;
