'use client'
import FontFamily from '@tiptap/extension-font-family'
import TextStyle from '@tiptap/extension-text-style'
import { UndoRedoButton } from '@/components/tiptap-ui/undo-redo-button'
import { EditorContext } from '@tiptap/react'
import Document from '@tiptap/extension-document'
import Heading from '@tiptap/extension-heading'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Printer } from 'lucide-react'
import HeadingDropMenu from './HeadingDropMenu'
import FontFamilyButton from './FontFamily'
import { Separator } from "@/components/tiptap-ui-primitive/separator";
import FontSize from './FontSize'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Underline from '@tiptap/extension-underline'
import MarkButton from './MarkButton'
import FontSizeExtension from '../../_extentions/font-size-extention'
import Highlight from '@tiptap/extension-highlight'
import HightLine from './HightLine'
import { Color } from '@tiptap/extension-color'
import Link from '@tiptap/extension-link'
import ColorInput from './ColorInput'
import Code from '@tiptap/extension-code'
import LinkText from './LinkText'
import { Image } from '@tiptap/extension-image'
import { ImageUploadNode } from '@/components/tiptap-node/image-upload-node'
import {  MAX_FILE_SIZE } from '@/lib/tiptap-utils'
import ImagePlus from './ImagePlush'
import { TextAlign } from '@tiptap/extension-text-align'
import { TaskList } from '@tiptap/extension-task-list'
import { TaskItem } from '@tiptap/extension-task-item'
import TextAlignButtons from './Textalign'
import { ListDropdownMenu } from '@/components/tiptap-ui/list-dropdown-menu'
import Quote from './Quote'
import Blockquote from '@tiptap/extension-blockquote'
import ImageResize from 'tiptap-extension-resize-image';
import NavigationDetail from '../NavigationDetail'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import Table from '@tiptap/extension-table'
import Gapcursor from '@tiptap/extension-gapcursor'
import { FloatingComposer, FloatingThreads, FloatingToolbar, useLiveblocksExtension } from '@liveblocks/react-tiptap'
import Placeholder from '@tiptap/extension-placeholder'
import { useThreads } from '@liveblocks/react/suspense'


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
        FontSizeExtension,Underline,Document,Paragraph,Text,TextStyle, ImageResize,Bold,Italic,Underline,FontFamily,
        Code,Image,TaskList,Blockquote,TableRow,TableHeader,TableCell,Gapcursor,
        Color.configure({
          types: ['textStyle'],
        }),
        Table.configure({
          resizable: true,
        }),
        Link.configure({
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
        },
        }),
        ImageUploadNode.configure({
        accept: 'image/*',
        maxSize: MAX_FILE_SIZE,
        limit: 3,
        upload: handleImageUpload,
        onError: (error) => console.error('Upload failed:', error),
        }),
        TextAlign.configure({ types: ['heading', 'paragraph'] }),
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
          Placeholder.configure({
            placeholder: "Start writing…",
            emptyEditorClass: "tiptap-empty",
          }),
          TaskList.configure({
            HTMLAttributes: {
              class: "tiptap-task-list",
            },
          })
    ]
  })

  const printer = ():void =>{
     window.print();
  }

  const { threads } = useThreads();
  return(
    <EditorContext.Provider value={{editor}} >
        {/*editor navigation */}
        <NavigationDetail
          editor={editor}
        />

        <div className="w-full min-h-[100dvh] flex flex-wrap justify-center items-center  ">
            <div className="tiptap-button-group flex justify-start items-center !gap-[15px] font-medium  w-full px-4  bg-[#f2f3fa] h-[46px]" data-orientation="horizontal" >
                <div className="tiptap-button-group" data-orientation="horizontal">
                  <UndoRedoButton action="undo" />
                  <UndoRedoButton action="redo" />
                </div>
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
            <div className="w-[70%] min-h-[100dvh] p-10 shadow-lg " id="editorContainer">
              <EditorContent editor={editor}   />
              <FloatingThreads threads={threads} editor={editor} />
            </div>
              <FloatingComposer editor={editor} className="floating-composer" />
              <FloatingToolbar 
                editor={editor} 
              />
        </div>
    </EditorContext.Provider>
  )
}

export default Editor
