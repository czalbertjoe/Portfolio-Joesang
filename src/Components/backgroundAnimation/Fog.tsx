import React, { useEffect } from 'react';
import cloudDarkImg from '/src/assets/ImgProfile/cloudDark.png';

export const Fog = () => {
  useEffect(() => {
    const container = document.querySelector('.container') as HTMLElement;
    let cloudCount = 0;

    const addCloud = () => {
      if (cloudCount >= 10) {
        // Limita el número máximo de imágenes de nube generadas
        clearInterval(intervalId);
        return;
      }

      const cloud = document.createElement('img');
      cloud.classList.add('cloud');
      cloud.src = cloudDarkImg; // Ruta de la imagen
      cloud.style.top = `${Math.random() * 100 + 9}%`; // Generar posición vertical aleatoria entre 5% y 95%
      cloud.style.left = `${Math.random() * 90 + 3}%`; // Generar posición horizontal aleatoria entre 5% y 95%
      cloud.style.animationDelay = `${Math.random() * -3}s`;
      container.appendChild(cloud);

      cloudCount++;
    };

    // Llama a la función addCloud cada cuatro segundos
    const intervalId = setInterval(addCloud, 4000);

    const style = document.createElement('style');
    style.innerHTML = `
      .cloud {
        position: fixed;
        width: 300px;
        height: 110px;
        z-index: -90;
        opacity: 0.1; 
        animation: moveClouds 50s linear infinite;
      }

      @keyframes moveClouds {
        0% {
          left: -200px;
        }
        100% {
          left: 100%;
        }
      }
    `;
    document.head.appendChild(style);

    // Limpia el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  return <div className="container"></div>;
};

export default Fog;
