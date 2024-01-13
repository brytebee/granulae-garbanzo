import React, { useState, useEffect } from "react";
import Web3 from "web3";

const Web3Auth = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userAddress, setUserAddress] = useState("");

  /* 
  To use this
  You'll need web3
  npm i web3
 */

  useEffect(() => {
    const connectToWeb3 = async () => {
      // Check if MetaMask is installed
      if (window.ethereum) {
        try {
          // Request account access from the user
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const web3 = new Web3(window.ethereum);

          // Get the user's Ethereum address
          const accounts = await web3.eth.getAccounts();
          setUserAddress(accounts[0]);

          // Set the login status
          setLoggedIn(true);
        } catch (error) {
          console.log("Error connecting to Web3 provider:", error);
        }
      } else {
        console.log("MetaMask not found. Please install MetaMask extension.");
      }
    };

    connectToWeb3();
  }, []);

  const handleLogout = () => {
    // Clear the user's address and set the login status to false
    setUserAddress("");
    setLoggedIn(false);
  };

  return (
    <div>
      {loggedIn ? (
        <>
          <h2>Welcome, {userAddress}</h2>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <h2>Please login with MetaMask</h2>
      )}
    </div>
  );
};

export default Web3Auth;
