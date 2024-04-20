import "./SectionComponent.css";

const SectionComponent = ({
    title,
    content,
    index,
}: {
    title: string;
    content: string[];
    index: number;
}) => {
    const isOdd = index % 2 !== 0;
    return (
        <div className={`section ${isOdd ? "odd" : "even"}`}>
            <div className="circle"></div>
            <div className="content">
                <h2>{title}</h2>
                {content.map((paragraph: string, idx: number) => (
                    <p key={idx}>{paragraph}</p>
                ))}
            </div>
        </div>
    );
};

export default SectionComponent;
