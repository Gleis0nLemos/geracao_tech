import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const PageLayout = () => {
  return (  
    <>
      <div>
        <Header />
        <div className="main-content">     
          <SideBar />
          <div className="main-content-wrapper">
            <main>
              <Outlet />
            </main>
          </div>       
        </div>
        <Footer />
      </div>
    </>
  );
}
 
export default PageLayout;