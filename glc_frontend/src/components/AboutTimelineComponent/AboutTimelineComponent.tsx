import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import "./AboutTimelineComponent.css";
import aboutContent from "../../pages/AboutUs/AboutContent";

const AboutTimeline = () => {
    return (
        <div id="about-content" className="about-content">
            <Timeline position="alternate">
                {aboutContent.map((item, index) => (
                    <TimelineItem key={index}>
                        <TimelineSeparator>
                            <TimelineConnector
                                sx={{
                                    backgroundColor: "#1974d2",
                                }}
                            />
                            <TimelineDot
                                sx={{
                                    backgroundColor: "#ff7f50",
                                }}
                            ></TimelineDot>
                            <TimelineConnector
                                sx={{
                                    backgroundColor: "#1974d2",
                                }}
                            />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: "10px", px: 2 }}>
                            <h2 className="about-title">{item.title}</h2>
                            <p className="about-text">{item.content}</p>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </div>
    );
};

export default AboutTimeline;
