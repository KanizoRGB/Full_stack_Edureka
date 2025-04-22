import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

  function App() {
    return(
      <div>
      <BrowserRouter>
        <Header/>
        <main className="container mt-4">
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
      </div>
    )
  }

  export default App;