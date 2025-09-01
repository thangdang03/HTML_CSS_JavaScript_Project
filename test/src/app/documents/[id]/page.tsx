'use client'
import { useParams } from "next/navigation";
import "./_styles/editor.scss";
import Editor from "./_components/Editor";

import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import Loading from "@/components/Loading";

const DocumentDetail = () => {
    const {id} = useParams()
    const publicApiKey = process.env.PK_KEY!
    
    if(!id ) return;

    return (  
       <LiveblocksProvider publicApiKey={"pk_dev_7jEg6W8JozzAB0wugDgOVC-fUfRSkn9BZMqMOTPsnsOTq6qtZdPKu9unpcT15ufu"}>
         <RoomProvider id={id?.toString()}>
            <ClientSideSuspense fallback={<Loading/>}>
                <main>
                  <section className="editor" aria-label="editor section">
                     <Editor />
                  </section>
                </main>
            </ClientSideSuspense>
         </RoomProvider>
       </LiveblocksProvider>
  );
}
 
export default DocumentDetail;