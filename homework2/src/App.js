import "./App.css";

import Header from "./Header.js";
import Content from "./Content.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
      <>
        <header>
          <Header />
        </header>
        <main>
          <Content />
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    </div>
  );
}

export default App;
