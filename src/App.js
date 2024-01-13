import "./App.css";
// import Box from "./components/creatableSelector/CreatableSelector";
import Modal from "./components/modal/Modal";
import Remi_it from "./components/remi_it/Remi_it";
import Uploader from "./components/uploader/Uploader";
import Web3Auth from "./components/web3/Web3Auth";
import Web3ModalAuth from "./components/web3/Web3Modal";

function App() {
  const disp = () => {
    return (
      <div>
        <h1>This is some header for testing</h1>
        <p>
          Bright shows Bisola Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Ducimus maxime nobis esse?
        </p>
      </div>
    );
  };
  return (
    <div className="App">
      {/* <Modal trigger="Show" display={disp()} />
      <Web3ModalAuth />
      <Box /> */}
      <Remi_it />
    </div>
  );
}

export default App;
