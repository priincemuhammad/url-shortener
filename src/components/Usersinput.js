import React from 'react';
import styled from 'styled-components';
import Linkresult from './Linkresult';

const Usersinput = () => {
  return (
    <Container>
      <Content>
        <h1>
          URL <span>Shortener</span>
        </h1>
        <div>
          <input type="text" placeholder="Enter URL to shorten" />
          <button>Shorten</button>
        </div>
        <Linkresult />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  z-index: 10;
  width: 555px;
  margin: 0 auto;
  padding: 0px 20px;
  h1 {
    font-size: 3.5rem;
    color: #fff;
    span {
      color: dodgerblue;
    }
  }
  div {
    width: 100%;
    display: grid;
    margin-bottom: 22px;
    grid-template-columns: 3fr 1fr;
    input {
      padding: 1rem;
      text-indent: 1rem;
      font-size: 1rem;
      border: none;
      outline: none;
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
      &::placeholder {
        font-size: 0.9rem;
      }
    }
    button {
      font-size: 1rem;
      padding: 0 1rem;
      height: 100%;
      text-transform: uppercase;
      font-weight: bold;
      cursor: pointer;
      border-bottom-right-radius: 5px;
      border-top-right-radius: 5px;
      color: #fff;
      border: none;
      background: dodgerblue;
    }
  }
`;

export default Usersinput;
