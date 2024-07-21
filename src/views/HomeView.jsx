import React from "react";
import HomeTyping from "../components/HomeComponents/HomeTyping";
import HomeButton from "../components/HomeComponents/HomeButton";

export default function HomeView() {
    return (
        <div className="flex flex-col gap-y-5 items-center justify-center min-h-screen">
            <HomeTyping />
            <HomeButton />
        </div>
    )
}
