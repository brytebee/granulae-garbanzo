import "./App.css";
import Form from "./components/form/Form";
import { Printer } from "./components/reactToPrint/Printer";

function App() {
  return (
    <div className="App">
      <Printer combo={<Form />} />
    </div>
  );
}

export default App;
