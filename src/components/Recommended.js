import c1 from "../assets/images/c1.jpg"
import c2 from "../assets/images/c2.jpg"
import c3 from "../assets/images/c3.jpg"
import c4 from "../assets/images/c4.jpg"

function Recommended()
{
    return(<div className="recommended">
    <h3 className="recommended__title">Recommended For You</h3>
    <p>Pick the best fit</p>
    <div className="recommended__container">
        <div className="course__card">
            <img src={c1} alt="Course Image"></img>
            <h3>2023 Phython Data Visualisation Masterclass</h3>
            <p>Col Steeve</p>
            <p>4.8⭐⭐⭐⭐</p>
            <p>499
                <del>1999</del>
            </p>
        </div>
        <div className="course__card">
            <img src={c2} alt="Course Image"></img>
            <h3>Web Developement Bootcamp 2023|Advance</h3>
            <p>Col Steeve</p>
            <p>3.2⭐⭐⭐</p>
            <p>499
                <del>1999</del>
            </p>
        </div>
        <div className="course__card">
            <img src={c3} alt="Course Image"></img>
            <h3>2023 Master UI/UX Designing with Figma</h3>
            <p>Col Steeve</p>
            <p>4.8⭐⭐⭐⭐</p>
            <p>499
                <del>1999</del>
            </p>
        </div>
        <div className="course__card">
            <img src={c4} alt="Course Image"></img>
            <h3>Basic to Advance Java core Training</h3>
            <p>Col Steeve</p>
            <p>4.8⭐⭐⭐⭐</p>
            <p>499
                <del>1999</del>
            </p>
        </div>


    </div>
</div>)
}

export default Recommended