"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import Loading from "@/components/Loading";

export function Room({ 
    children,
    RoomId,
    keyPublicLiveBlog,
 }: { 
    children: ReactNode ,
    RoomId: string,
    keyPublicLiveBlog: string,
}) {
 

  return (
    <LiveblocksProvider 
      publicApiKey={keyPublicLiveBlog}
      resolveUsers={async ({ userIds }) => {
        return [
          {
            name: "thangdang03",
            avatar: "client",
          },
          {
            name: "thangdang04",
            avatar: "client",
          },
        ];
      }}
      >
      <RoomProvider id={RoomId}>
        <ClientSideSuspense fallback={<Loading />}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}