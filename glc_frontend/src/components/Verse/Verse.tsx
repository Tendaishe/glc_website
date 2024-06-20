import IVerse from "../../pages/Bible/IVerse";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import "./Verse.css";

const Verse = (props: IVerse) => {
    return (
        <Accordion className="verse-container">
            <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className="verse-reference">
                    {props.reference}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div
                    className="verse-text"
                    dangerouslySetInnerHTML={{ __html: props.text }}
                />
            </AccordionDetails>
        </Accordion>
    );
};

export default Verse;
