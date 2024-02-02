import saleimg from "../assets/images/sale image.jpg"
function SaleImage()
{
    return(
        <div className="sale__image">
        <img src={saleimg} alt="Sale"></img>
        <div className="sale__image__offer">
            <h2>Udemy Flash sale! 24 hours to save.</h2>
            <p>Get the top courses for just 499. Just one day to save but a lifetime to learn</p>
        </div>
 
    </div>
    )
}
export default SaleImage