import { Card } from "react-bootstrap";
import { CardProps } from "../../interfaces/card-props";

export default function CardTask({ card }: CardProps) {
    return (
        <Card
            style={{
                width: '18rem',
                marginRight: '20px',
                flexBasis: 'calc(100% / 5)',
                border: '0.5px solid black',
            }}
        >
            <Card.Img
                variant="top"
                style={{ width: '100%', height: '200px' }}
                src={card.imageSrc}
            />
            <Card.Body
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <div>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.description}</Card.Text>
                </div>
            </Card.Body>
        </Card>
    )
}
