import {useState} from 'react';
import {Form, Button} from 'react-bootstrap';

const InputField = ({controlId, onSubmit}) => {
    const [inputMessage, setInputMessage] = useState('');

    return (
        <Form onSubmit={e => onSubmit(e, inputMessage)} inline>
            <Form.Group contorlId={controlId}>
                <Form.Control type="text" onChange={(e) => setInputMessage(e.target.value)} placeholder="아무거나 입력" />
                <Button variant="primary" type="submit">전송</Button>
            </Form.Group>
        </Form>
    );
};

export {InputField};