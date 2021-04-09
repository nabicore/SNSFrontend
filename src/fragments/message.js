import {Alert} from "react-bootstrap";

const Message = ({text}) => {
    return (
        <Alert variant="success">{text}</Alert>
    );
};

export {Message}