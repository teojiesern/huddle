import { StyledCard } from "./Styles/Card.styled";

export default function Card({ item: { id, title, body, image } }) {
    return (
        <StyledCard reverse={id % 2 === 0 ? "row-reverse" : null}>
            <div>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
            <div>
                <img src={`/Images/${image}`} />
            </div>
        </StyledCard>
    );
}
