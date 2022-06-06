import React from 'react';
import styled from 'styled-components';

const Background = () => {
  return (
    <Container>
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Container>
  );
};

const Container = styled.section`
  @keyframes move {
    100% {
      transform: translate3d(0, 0, 1px) rotate(360deg);
    }
  }

  .background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #3e1e68;
    overflow: hidden;
    z-index: -1;
  }

  .background span {
    width: 20vmin;
    height: 20vmin;
    border-radius: 20vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 45;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .background span:nth-child(0) {
    color: #e45a84;
    top: 25%;
    left: 67%;
    animation-duration: 39s;
    animation-delay: -41s;
    transform-origin: 22vw -10vh;
    box-shadow: -40vmin 0 5.78438704451516vmin currentColor;
  }
  .background span:nth-child(1) {
    color: #583c87;
    top: 55%;
    left: 89%;
    animation-duration: 24s;
    animation-delay: -29s;
    transform-origin: -1vw 3vh;
    box-shadow: -40vmin 0 5.134329058843603vmin currentColor;
  }
  .background span:nth-child(2) {
    color: #ffacac;
    top: 83%;
    left: 30%;
    animation-duration: 35s;
    animation-delay: -36s;
    transform-origin: 20vw -11vh;
    box-shadow: -40vmin 0 5.508693354640261vmin currentColor;
  }
  .background span:nth-child(3) {
    color: #583c87;
    top: 63%;
    left: 78%;
    animation-duration: 18s;
    animation-delay: -34s;
    transform-origin: 7vw 12vh;
    box-shadow: -40vmin 0 5.371927770325874vmin currentColor;
  }
  .background span:nth-child(4) {
    color: #ffacac;
    top: 54%;
    left: 37%;
    animation-duration: 10s;
    animation-delay: -1s;
    transform-origin: 14vw 17vh;
    box-shadow: 40vmin 0 5.355036769358052vmin currentColor;
  }
  .background span:nth-child(5) {
    color: #ffacac;
    top: 26%;
    left: 27%;
    animation-duration: 30s;
    animation-delay: -14s;
    transform-origin: -1vw 10vh;
    box-shadow: 40vmin 0 5.5495919330911345vmin currentColor;
  }
  .background span:nth-child(6) {
    color: #583c87;
    top: 45%;
    left: 46%;
    animation-duration: 34s;
    animation-delay: -35s;
    transform-origin: 14vw -2vh;
    box-shadow: 40vmin 0 5.909567876589288vmin currentColor;
  }
  .background span:nth-child(7) {
    color: #ffacac;
    top: 28%;
    left: 95%;
    animation-duration: 17s;
    animation-delay: -36s;
    transform-origin: -9vw 15vh;
    box-shadow: 40vmin 0 5.635927456229327vmin currentColor;
  }
  .background span:nth-child(8) {
    color: #583c87;
    top: 43%;
    left: 72%;
    animation-duration: 43s;
    animation-delay: -44s;
    transform-origin: -23vw 4vh;
    box-shadow: 40vmin 0 5.155358755531463vmin currentColor;
  }
  .background span:nth-child(9) {
    color: #ffacac;
    top: 18%;
    left: 58%;
    animation-duration: 50s;
    animation-delay: -35s;
    transform-origin: -8vw 13vh;
    box-shadow: 40vmin 0 5.109641427854312vmin currentColor;
  }
  .background span:nth-child(10) {
    color: #583c87;
    top: 78%;
    left: 21%;
    animation-duration: 39s;
    animation-delay: -7s;
    transform-origin: -10vw -12vh;
    box-shadow: -40vmin 0 5.742949697730524vmin currentColor;
  }
  .background span:nth-child(11) {
    color: #ffacac;
    top: 46%;
    left: 40%;
    animation-duration: 7s;
    animation-delay: -5s;
    transform-origin: 17vw 13vh;
    box-shadow: -40vmin 0 5.351217187100053vmin currentColor;
  }
  .background span:nth-child(12) {
    color: #e45a84;
    top: 18%;
    left: 20%;
    animation-duration: 14s;
    animation-delay: -18s;
    transform-origin: 12vw -20vh;
    box-shadow: -40vmin 0 5.059383229013619vmin currentColor;
  }
  .background span:nth-child(13) {
    color: #ffacac;
    top: 85%;
    left: 36%;
    animation-duration: 51s;
    animation-delay: -21s;
    transform-origin: -13vw 19vh;
    box-shadow: 40vmin 0 5.129473768779378vmin currentColor;
  }
  .background span:nth-child(14) {
    color: #e45a84;
    top: 91%;
    left: 40%;
    animation-duration: 46s;
    animation-delay: -42s;
    transform-origin: -5vw 2vh;
    box-shadow: 40vmin 0 5.640629681974168vmin currentColor;
  }
  .background span:nth-child(15) {
    color: #583c87;
    top: 46%;
    left: 29%;
    animation-duration: 21s;
    animation-delay: -26s;
    transform-origin: -24vw -3vh;
    box-shadow: 40vmin 0 5.018984844356421vmin currentColor;
  }
  .background span:nth-child(16) {
    color: #583c87;
    top: 87%;
    left: 52%;
    animation-duration: 51s;
    animation-delay: -49s;
    transform-origin: 12vw 2vh;
    box-shadow: 40vmin 0 5.690812415970414vmin currentColor;
  }
  .background span:nth-child(17) {
    color: #e45a84;
    top: 25%;
    left: 93%;
    animation-duration: 21s;
    animation-delay: -31s;
    transform-origin: 15vw -19vh;
    box-shadow: -40vmin 0 5.9242558761613315vmin currentColor;
  }
  .background span:nth-child(18) {
    color: #583c87;
    top: 79%;
    left: 5%;
    animation-duration: 26s;
    animation-delay: -18s;
    transform-origin: 6vw 6vh;
    box-shadow: 40vmin 0 5.523001016666865vmin currentColor;
  }
  .background span:nth-child(19) {
    color: #e45a84;
    top: 28%;
    left: 100%;
    animation-duration: 54s;
    animation-delay: -46s;
    transform-origin: -14vw 3vh;
    box-shadow: 40vmin 0 5.189538543205093vmin currentColor;
  }
`;

export default Background;
