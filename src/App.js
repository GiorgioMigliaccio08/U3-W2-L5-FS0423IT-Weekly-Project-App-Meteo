import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Importo i miei componenti
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Footer></Footer>
    </div>
  );
}

export default App;
