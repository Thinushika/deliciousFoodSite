import About from "./about/About";
import Content from "./content/Content";
import Menu from "./menu/Menu";
import TopBar from "./topbar/TopBar";
import MeetChef from "./chef/MeetChef";
import Form from "./form/Form";
import Footer from "./footer/Footer";

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

          <div>
            <MeetChef />
          </div>

          <div>
            <Form />
          </div>

          <div>
            <Footer />
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
