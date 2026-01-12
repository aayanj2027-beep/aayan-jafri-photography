import Home from './pages/Home';
import About from './pages/About';
import Gear from './pages/Gear';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "About": About,
    "Gear": Gear,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};