"use client"
import React from "react";
// Removed unused import
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import {TextInput} from "@repo/ui/text-input";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const [useRoomId,setroomId] = React.useState<string>("");
  const roomId = useRoomId;
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      width: "100vw",
      justifyContent: "center",
      justifyItems: "center",
      alignItems: "center",
    }}>
      <TextInput  
      placeholder="join room" 
      value = {roomId} 
      onChange = {(e)=>setroomId(e.currentTarget.value)}
      ></TextInput>
      <button onClick={()=>{
        router.push(`/room/${roomId}`);
      }}>Join room</button>
    </div>
  );
}
