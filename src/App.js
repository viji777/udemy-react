import Navbar from "./components/Navbar"
import Categories from "./components/Categories"
import SaleImage from "./components/SaleImage"
import Recommended from "./components/Recommended"
import Topics from "./components/Topics"
import MostPopular from "./components/MostPopular"
import Footer from "./components/Footer"
function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Categories></Categories>
            <SaleImage></SaleImage>
            <Recommended></Recommended>
            <Topics></Topics>
            <MostPopular></MostPopular>
            <Footer></Footer>

        </div>)
}
export default App