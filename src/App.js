import {useState, useEffect} from "react";
import {Container} from 'react-bootstrap';
import axios from 'axios';
import {InputField} from './fragments/inputfield.js';
import {Message} from './fragments/message.js';

function App() {
    const [messages, setMessages] = useState([]);

    const LoadMessageFromServer = () => {
        async function GetDataFromServer() {
            const messages = await axios({
                url: 'http://localhost:3001/',
                method: 'get'
            });
            setMessages(messages.data);
        }
        GetDataFromServer();
    };

    useEffect(() => LoadMessageFromServer(), []);

    const handleSubmit = (e, inputText) => {
        e.preventDefault();

        // Text validation
        if (inputText.length < 0) {
            return;
        }

        // POST to server
        async function PostMessage() {
            const result = await axios({
                url: 'http://localhost:3001/',
                method: 'post',
                data: {
                    text: inputText,
                },
            });
            if (result.data.status !== 200) {
                console.error(result.data);
            }
            LoadMessageFromServer();
        }
        PostMessage();
    };

    return (
        <Container>
            {messages.length > 0 ?
                messages.map(m => <Message key={m.id} text={m.text} />) :
                <p1>로딩중...</p1>
            }
            <InputField controlId="ctrlInput" onSubmit={handleSubmit} />
        </Container>
    );
};

export {App};
