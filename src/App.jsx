import Header from "./Layout/Header.jsx";
import Footer from "./Layout/Footer.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow bg-gray-50">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
