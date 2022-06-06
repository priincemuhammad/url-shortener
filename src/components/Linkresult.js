import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Linkresult = () => {
  const [shortenLink, setShortenLink] = useState('hi prince');
  const [copyLink, setCopylink] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopylink(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copyLink]);

  return (
    <Container>
      <p>{shortenLink}</p>
      <CopyToClipboard text={shortenLink} onCopy={() => setCopylink(true)}>
        <button className={copyLink ? 'copied' : ''}>Copy to clipbord</button>
      </CopyToClipboard>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid dodgerblue;
  border-radius: 5px;
  grid-template-columns: 3fr 2fr !important;
  button {
    background: dodgerblue !important;
    color: #fff !important;
  }
  .copied {
    background: #fff !important;
    color: dodgerblue !important;
  }
  p {
    color: #fff;
  }
`;

export default Linkresult;
