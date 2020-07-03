import React, {useState} from 'react';
import './styles.css';
/* -import logo from '../assets/logo.jpg' */

export default function MessageReceiver(){
    /* var sectionStyle = {
        backgroundImage: `url(${logo})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
    } */

    const [message, setMessage] = useState("");
    const [telephone, setTelephone] = useState("");

    async function handleSubmit(e){
        const baseURL = `https://web.whatsapp.com/send?phone=55${telephone}&text=${message}`;

        await fetch(baseURL)
            .then(
                window.open(baseURL)
            );
    }

    return (
        <div className="container">
            <div className="content">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="tel"
                            minLength="11"
                            maxLength="11"
                            value={telephone}
                            onChange={e => setTelephone(e.target.value)}
                            placeholder="32988887777"
                        />
                        <textarea
                            type="text"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            placeholder="Insira o texto"
                        />

                        <button type="submit">Enviar</button>
                    </form>
            </div>
        </div>
    );
}