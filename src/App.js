import React from 'react';
import ParticlesBg from 'particles-bg';
import MouseParticles from 'react-mouse-particles';
import { AnimatePresence, motion } from "framer-motion"
import Main from './Main/Main';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

export default function App() {

  const blackBox = {
    initial: {
      height: "100vh",
      bottom: 0,
    },
    animate: {
      height: 0,
      transition: {
        when: "afterChildren",
        duration: 1.8,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  const InitialTransition = () => {
    return (
      <motion.div
        className="transitionsApp"
        initial="initial"
        animate="animate"
        variants={blackBox}
        onAnimationStart={() => document.getElementById("awa").style.overflow="hidden"}
        onAnimationComplete={() =>
          document.getElementById("awa").style.overflow="auto"
        }
      />
    );
  };

  return (
    <div className="App" id="awa">
      <AnimatePresence exitBeforeEnter>
        <InitialTransition />
      </AnimatePresence>
      <Main />
      <ParticlesBg type="cobweb" color="#ffd699" num={150} bg={true} />
      <MouseParticles g={1} radius={10} color={["#ffd699", "#376176"]} cull="col,image-wrapper" />

    </div>
  );
}

