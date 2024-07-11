import './App.css';
import Home from "./pages/Home"
import { Route ,Routes } from "react-router-dom";
import Store from "./pages/Store"
import { LoginProvider } from './components/Hooks/context-login';


function App() {

  return (
    <LoginProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route  path="/Store" element={<Store />} />
        </Routes>
      </div>
    </LoginProvider>
  );
}

export default App;