import "./App.css";
// import Navigation from "./Component/Navaigation";
import NavigationGrid from "./Component/NavigationGrid";
import MenuLineBar from "./Component/MenuLineBar";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <div class="main-layout">
        <NavigationGrid />
        <MenuLineBar />
        <Footer />
      </div>
    </>
  );
}

export default App;
