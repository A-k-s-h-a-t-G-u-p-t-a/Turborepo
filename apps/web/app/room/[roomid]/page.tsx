"use client"
import { useParams } from "next/navigation";

export default function Room() {
    const {roomid} = useParams();
    return (
        <div style={{
            height: "100vh",
            display: "flex",
            width: "100vw",
            justifyContent: "center",
            justifyItems: "center",
            alignItems: "center",
        }}>
            <h1>Room {roomid}</h1>
        </div>
    );
}