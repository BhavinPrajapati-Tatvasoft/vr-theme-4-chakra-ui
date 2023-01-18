import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Innerpage from "./Pages/Innerpage";
import theme from "./App.Theme";

function App() {

  // add scroll class
  const addScrollClass = () => {
    if (window.scrollY > 20) {
      document.body.classList.add('page-scrolled');
    } else {
      document.body.classList.remove('page-scrolled');
    }
  };
  window.addEventListener('scroll', addScrollClass);

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
      <Routes>
          <Route path="/innerpage" element={<Innerpage />} />
        </Routes>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
