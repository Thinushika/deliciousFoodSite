import About from "./about/About";
import Content from "./content/Content";
import Menu from "./menu/Menu";
import TopBar from "./topbar/TopBar";

function App() {

  return (
    <>
      <div>
        <TopBar />
        
        <div>
          <div id="SecOne">
            <Content />
          </div>

          <div id="SecTwo">
            <About />
          </div>

          <div id="SecThree">
            <Menu />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
