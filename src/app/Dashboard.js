import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { styled } from "styled-components";
import Main from "../../components/Main";
import Sidebar from "../../components/Sidebar";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";

var provider = ethers.providers.getDefaultProvider(
  "https://sepolia.infura.io/v3/171270891a894263942ed8d50c046ae9"
);
const sdk = new ThirdwebSDK(
  new ethers.Wallet(process.env.NEXT_PUBLIC_METAMASK_KEY, provider)
);


const Dashboard = ({ address }) => {

  const [sanityTokens, setSanityTokens] = useState([]);
  const [thirdWebTokens, setThirdWebTokens] = useState([]);

  useEffect(() => {
    
    const getSanityAndThirdWebTokens = async () => {
      const coins = await fetch(
        "https://2zdx3eow.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D'coins'%5D%20%7B%0A%20%20name%2C%0A%20%20%20%20usdPrice%2C%0A%20%20%20%20contractAddress%2C%0A%20%20%20%20symbol%2C%0A%20%20%20%20logo%0A%7D"
      );

      const sanityTokens = (await coins.json()).result;
      setSanityTokens(sanityTokens);

      setThirdWebTokens(
        sanityTokens.map((token) => sdk.getTokenModule(token.contractAddress))
      );

    };

    return getSanityAndThirdWebTokens();
  }, []);
  return (
    <Wrapper>
      <Sidebar />
      <MainContainer>
        <Header
          walletAddress={address}
          sanityTokens={sanityTokens}
          thirdWebTokens={thirdWebTokens}
        />
        <Main
          walletAddress={address}
          sanityTokens={sanityTokens}
          thirdWebTokens={thirdWebTokens}
        />
      </MainContainer>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #0a0b0d;
  color: white;
  overflow: hidden;
`;

const MainContainer = styled.div`
  flex: 1;
`;
