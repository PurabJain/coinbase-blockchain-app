import React from "react";
import { styled } from "styled-components";
import Portfolio from "./Portfolio";
import Promos from "./Promos";

const Main = ({ thirdWebTokens, sanityTokens, walletAddress }) => {
  return (
    <Wrapper>
      <Portfolio
        walletAddress={walletAddress}
        sanityTokens={sanityTokens}
        thirdWebTokens={thirdWebTokens}
      />
      <Promos />
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  overflow: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  display: flex;
  max-height: calc(100vh - 96px);

  //the below will let you scroll vertically and won't show the side scrollbar as well. AMAZING!!

  & div {
    border-radius: 0.4rem;
  }
`;
