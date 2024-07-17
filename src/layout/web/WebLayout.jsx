import {Outlet} from "react-router-dom";
import Header from "../../components/headers/header";
import "./index.scss";
import HeaderDetails from "../../components/headers/headerDetails"
import Footer from "../../layout/web/Footer/Footer"
import FooterBottom from "./Footerend/FooterBottom";

export const WebLayout = () => {
    return (
        <div id="weblayout">
             <Header/>
             <HeaderDetails/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
            <FooterBottom/>

        </div>
    )
}
