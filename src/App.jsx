import "./App.css";
import Blog from "./containers/blog/Blog";
import Features from "./containers/features/Features";
import Footer from "./containers/footer/Footer";
import Header from "./containers/header/Header";
import Possibility from "./containers/possibility/Possibility";
import Whatgpt from "./containers/whatgpt/Whatgpt";
import Navbar from "./components/navbar/Navbar";
import Brand from "./components/brand/Brand";
// import cta from "./components/cta/Cta";
// import feature from "./components/feature/Feature";
function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgpt />
      <Features />
      <Possibility />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
