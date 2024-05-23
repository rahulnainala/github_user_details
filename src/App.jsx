import Footer from "./Components/Footer";
import Output from "./Components/Output";

function App() {
  return (
    <center>
      <div className="w-screen h-screen flex flex-col">
        <main className="flex-grow flex items-center justify-center mt-16 mb-16">
          <Output />
        </main>
        <footer className="fixed bottom-0 w-full py-5">
          <Footer />
        </footer>
      </div>
    </center>
  );
}

export default App;
