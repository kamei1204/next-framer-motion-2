import { Particles } from "react-tsparticles";  // npm install react-tsparticles
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { color } from "framer-motion";

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (main:any) => {
    await loadFull(main);
    //　上の意味は、await loadFull(main)が終わるまで待ってから、下の処理を実行するという意味
    // これを書かないと、particlesが表示されない
    //loadFull(main)は、particlesの設定を読み込む関数
  }, []);
  // useCallbackは、関数をキャッシュするためのもの 

  const particlesLoaded = useCallback(async (container:any) => {
    await container.play();
  }, []);

  return (
      <Particles className="w-full h-full absolute translate-z-0" id="tsparticles" init={particlesInit} loaded={particlesLoaded} 
        options={{
          fullScreen: {enable: false},
          background: {
            color: {
              value: "",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantiny: 90
              },
              repulse: {
                distance: 200,
                duration: 0.4
              }
            }
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 1,
              straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
          },
          detectRetina: true,
        }
      }
    />
  );
};

export default ParticlesContainer;
