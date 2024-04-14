import IVerse from "../../pages/Bible/IVerse";
import "./Verse.css";

const Verse = (props: IVerse) => {
    return (
        <div className="verse-container">
            <h3 className="verse-reference">{props.reference}</h3>
            <p className="verse-text">{props.text}</p>
        </div>
    );
};

export default Verse;
