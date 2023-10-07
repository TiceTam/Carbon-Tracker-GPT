import './ChatGPT.css';
import React, {useEffect, useState} from 'react';

function ChatGPT(props){
    
    const [responseGPT, setResponseGPT] = useState([]);

    
    useEffect(() => {
        promptGPT();
    }, []);

    const promptGPT = async () =>{
        const response = await fetch('http://localhost:8000/api/chatGPT',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: props.prompt
            }),
        });

        const data = await response.json();
        console.log(data);
        setResponseGPT(data.message);
    } 
   
      

    return(
        <div id="ChatGPT">
            <h1 id="chatGPTTitle">Here's how you can help.</h1>
            <div id= "textboxGPT">
                <p id="responseGPT">{responseGPT.content}</p>
            </div>
        </div>
    );
}

export default ChatGPT;