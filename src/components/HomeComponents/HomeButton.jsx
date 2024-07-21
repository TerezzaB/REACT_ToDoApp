import React from "react";
import { useNavigate } from 'react-router-dom';

export default function HomeButton() {
    const navigate = useNavigate();

    const todoRoute = () => {
        navigate('/todo');
    };

    return (
        <div>
            <button onClick={todoRoute} className="bg-fuchsia-600 hover:bg-fuchsia-500 rounded-2xl p-5 font-bold">Continue To ToDo App</button>
        </div>
    );
}
