import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer} from "./components"
import './App.css';
import React from "react";
import { ScrollToTop } from "./components/ScrollToTop";


function App() {
  return (
    <div className="App">
      <Header />
      <ScrollToTop />

      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;