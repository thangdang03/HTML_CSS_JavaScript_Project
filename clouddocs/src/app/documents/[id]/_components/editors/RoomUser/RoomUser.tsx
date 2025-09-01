import React from "react";
import { Avatar } from "./Avatar";
import {  useOthers } from "@liveblocks/react";
import styles from "../../../styles/index.module.css";
import { useUser } from "@clerk/nextjs";

function RoomUser() {
  const users = useOthers();
  const {user} = useUser();
  console.log(user?.username)
  const hasMoreUsers = users.length > 3; 
  if(!users || ! user) return;
  return (
    <div className="flex  select-none place-content-center place-items-center">
      <div className="flex pl-3">
        {users.slice(0, 3).map(({ connectionId , info }:{connectionId:any ,info:any}) => {
          return (
            <Avatar key={connectionId} src={info?.avatar} name={info?.name} />
          );
        })}

        {hasMoreUsers && <div className={styles.more}>+{users.length - 3}</div>}

        {user && (
          <div className="relative ml-8 first:ml-0">
            <Avatar src={user?.imageUrl || " "} name={user?.username || "client"} />
          </div>
        )}
      </div>
    </div>
  );
}

export default RoomUser;