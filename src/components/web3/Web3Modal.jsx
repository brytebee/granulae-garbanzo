import React from "react";
// import Web3Modal from "web3modal";
// import { ethers } from "ethers";
// import { ethers } from "./dist/ethers.min.js";
import { Core } from "@walletconnect/core";
import { Web3Wallet } from "@walletconnect/web3wallet";
/*

// DID NOT WORK
npm i ethers
npm i web3modal
npm i @coinbase/wallet-sdk


npm install @walletconnect/web3wallet

*/

// const providerOptions = {};

const Web3ModalAuth = () => {
  // const connectWallet = async () => {
  //   try {
  //     let web3modal = new Web3Modal({ cacheProvider: false, providerOptions });
  //     const webModalInstance = await web3modal.connect();
  //     const web3ModalProvider = new ethers.providers.Web3Provider(
  //       webModalInstance
  //     );
  //     console.log(web3ModalProvider);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const core = new Core({
    projectId: process.env.REACT_APP_PROJECT_ID,
  });

  console.log(core);

  const connectWallet = async () => {
    try {
      const web3wallet = await Web3Wallet.init({
        core, // <- pass the shared `core` instance
        metadata: {
          name: "Demo app",
          description: "Demo Client as Wallet/Peer",
          url: "www.walletconnect.com",
          icons: [],
        },
      });
      // console.log(web3wallet);

      web3wallet.on("session_proposal", async (proposal) => {
        const session = await web3wallet.approveSession({
          id: proposal.id,
          namespaces,
        });
        console.log({ session });
      });
      await web3wallet.core.pairing.pair({ uri });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Web3ModalAuth</h1>
      <button onClick={connectWallet}>Connect Wallet</button>
    </div>
  );
};

export default Web3ModalAuth;
