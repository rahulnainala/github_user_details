import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Output from "./Components/Output";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <Output />
      </main>
      <Footer />
    </div>
  );
}

export default App;
