'use client'
import { UndoRedoButton } from "@/components/tiptap-ui/undo-redo-button";
import { EditorContent, EditorContext, useEditor } from "@tiptap/react";
import Document from '@tiptap/extension-document'
import FontFamily from '@tiptap/extension-font-family'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import TextStyle from '@tiptap/extension-text-style'
import StarterKit from "@tiptap/starter-kit";
import FontFamilyButton from "./FontFamily";
import { Printer } from "lucide-react";
import FontSize from "./FontSize";
import Heading from "@tiptap/extension-heading";
import FontSizeExtension from "../_extentions/font-size-extention";
import HeadingDropMenu from "./HeadingDropMenu";
import { Separator } from "@/components/tiptap-ui-primitive/separator";
import Bold from "@tiptap/extension-bold";
import Highlight from '@tiptap/extension-highlight'
import Italic from "@tiptap/extension-italic";
import Underline from '@tiptap/extension-underline'
import { Color } from '@tiptap/extension-color'
import ColorInput from "./ColorInput";
import HightLine from "./HightLine";
import MarkButton from "./MarkButton";
import Link from '@tiptap/extension-link'
import LinkText from "./LinkText";
import { ImageUploadNode } from "@/components/tiptap-node/image-upload-node";
import { MAX_FILE_SIZE } from "@/lib/tiptap-utils";
import ImagePlus from "./ImagePlush";
import Image from '@tiptap/extension-image'
import TextAlignButtons from "./Textalign";
import { TaskList } from '@tiptap/extension-task-list'
import { TaskItem } from '@tiptap/extension-task-item'
import { ListDropdownMenu } from "@/components/tiptap-ui/list-dropdown-menu";
import Blockquote from '@tiptap/extension-blockquote'
import Quote from "./Quote";
import Placeholder from "@tiptap/extension-placeholder";
import { Threads } from "./Threads";
import { FloatingComposer, FloatingToolbar, useLiveblocksExtension } from "@liveblocks/react-tiptap";



const Editor = () => {
    const handleImageUpload = async (file:File):Promise<string> =>{
        const dataForm = new FormData()
        dataForm.append("file",file)
        dataForm.append("cloud_name","dhtkxfjd8")
        dataForm.append("upload_preset","wintion_uppload")
        const result = await fetch("https://api.cloudinary.com/v1_1/dhtkxfjd8/upload",{
          method: "POST",
          body: dataForm
        })
        const res  = await result.json()
        return res.url
       
    }
    const liveblocks = useLiveblocksExtension();
    const editor = useEditor({
        immediatelyRender: false,
        extensions: [
          liveblocks,
          FontSizeExtension,
          Document, 
          Paragraph,
          Bold,
          Italic,
          Text,
          Image,
          Color, 
          TextStyle,
          FontFamily,
          Underline,
          Heading.configure({
              levels: [1, 2, 3, 4],
          }),
          Link.configure({
            HTMLAttributes: {
                class: "tiptap-link",
            },
            openOnClick: true,
            autolink: true,
            defaultProtocol: 'https',
            protocols: ['http', 'https'],
            isAllowedUri: (url, ctx) => {
                  try {
                    // construct URL
                    const parsedUrl = url.includes(':') ? new URL(url) : new URL(`${ctx.defaultProtocol}://${url}`)
                
                    // use default validation
                    if (!ctx.defaultValidate(parsedUrl.href)) {
                      return false
                    }
                
                    // disallowed protocols
                    const disallowedProtocols = ['ftp', 'file', 'mailto']
                    const protocol = parsedUrl.protocol.replace(':', '')
                
                    if (disallowedProtocols.includes(protocol)) {
                      return false
                    }
                
                    // only allow protocols specified in ctx.protocols
                    const allowedProtocols = ctx.protocols.map(p => (typeof p === 'string' ? p : p.scheme))
                
                    if (!allowedProtocols.includes(protocol)) {
                      return false
                    }
                
                    // disallowed domains
                    const disallowedDomains = ['example-phishing.com', 'malicious-site.net']
                    const domain = parsedUrl.hostname
                
                    if (disallowedDomains.includes(domain)) {
                      return false
                    }
                
                    // all checks have passed
                    return true
                  } catch {
                    return false
                  }
            },
            shouldAutoLink: url => {
                  try {
                    // construct URL
                    const parsedUrl = url.includes(':') ? new URL(url) : new URL(`https://${url}`)
                
                    // only auto-link if the domain is not in the disallowed list
                    const disallowedDomains = ['example-no-autolink.com', 'another-no-autolink.com']
                    const domain = parsedUrl.hostname
                
                    return !disallowedDomains.includes(domain)
                  } catch {
                    return false
                  }
            }
          }),
          ImageUploadNode.configure({
              accept: 'image/*',
              maxSize: MAX_FILE_SIZE,
              limit: 3,
              upload: handleImageUpload,
              onError: (error) => console.error('Upload failed:', error),
          }),
          TaskList,
          Blockquote,
          TaskItem.configure({ nested: true }),
          StarterKit.configure({
                blockquote: {
                  HTMLAttributes: {
                    class: "tiptap-blockquote",
                  },
                },
                code: {
                  HTMLAttributes: {
                    class: "tiptap-code",
                  },
                },
                codeBlock: {
                  languageClassPrefix: "language-",
                  HTMLAttributes: {
                    class: "tiptap-code-block",
                    spellcheck: false,
                  },
                },
                heading: {
                  levels: [1, 2, 3],
                  HTMLAttributes: {
                    class: "tiptap-heading",
                  },
                },
                // The Collaboration extension comes with its own history handling
                history: false,
                horizontalRule: {
                  HTMLAttributes: {
                    class: "tiptap-hr",
                  },
                },
                listItem: {
                  HTMLAttributes: {
                    class: "tiptap-list-item",
                  },
                },
                orderedList: {
                  HTMLAttributes: {
                    class: "tiptap-ordered-list",
                  },
                },
                paragraph: {
                  HTMLAttributes: {
                    class: "tiptap-paragraph",
                  },
                },
            }),
          Highlight.configure({
              HTMLAttributes: {
                class: "tiptap-highlight",
              },
              multicolor: true 
          }),
          Image.configure({
              HTMLAttributes: {
                class: "tiptap-image",
              },
          }),
          Placeholder.configure({
            placeholder: "Start writing…",
            emptyEditorClass: "tiptap-empty",
          }),
          TaskList.configure({
            HTMLAttributes: {
              class: "tiptap-task-list",
            },
          }),
          
        ],
        editorProps: {
          attributes: {
            // Add styles to editor element
            class: "outline-none flex-1 transition-all",
          },
        },
    })

    const printer = ():void =>{
       window.print()
    }
    if(!editor)  return

    return (  
        <EditorContext.Provider value={{editor}} >
            <div className="w-full h-[100dvh] flex flex-wrap justify-center items-center  ">
                <div className="tiptap-button-group flex justify-start items-center !gap-[15px] font-medium  w-full px-4  bg-[#f2f3fa] h-[46px]" data-orientation="horizontal" >
                    <UndoRedoButton 
                        action="undo"  
                    />
                    <UndoRedoButton 
                        action="redo" 
                    />

                    <Printer
                        className="w-[15px] h-[15px] cursor-pointer hover:text-black"
                        onClick={()=>{
                            printer()
                        }}
                    />

                    <Separator />

                    <FontFamilyButton
                        editor={editor}
                    />

                    <Separator />

                    <HeadingDropMenu 
                        editor={editor}
                    />

                    <Separator />

                    <FontSize
                        editor={editor}
                    />

                    <MarkButton
                        editor={editor}
                    />

                    <ColorInput
                        editor={editor}
                    />

                    <HightLine 
                        editor={editor}
                    />

                    <Separator />
                    
                    <LinkText
                        editor={editor}
                    />

                    <ImagePlus
                        editor={editor}
                    />

                    <TextAlignButtons />
                    <ListDropdownMenu types={['bulletList', 'orderedList', 'taskList']} />
                    <Quote 
                      editor={editor}
                    />
                    
                </div>

                <div className="w-[70%] min-h-[80dvh] p-10 shadow-lg" id="editorContainer">
                    <EditorContent editor={editor} role="presentation" />
                </div>
                  <Threads 
                    editor={editor}
                  />
                  <FloatingToolbar 
                    editor={editor} 
                  />
                  <FloatingComposer editor={editor} style={{ width: 350 }} />
           </div>
        </EditorContext.Provider>
    );
}
 
export default Editor;