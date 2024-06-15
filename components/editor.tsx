"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EditorToolbar from "./editor-toolbar";
import Placeholder from "@tiptap/extension-placeholder";
import TextStyle from "@tiptap/extension-text-style";
import FontFamily from "@tiptap/extension-font-family";
import FontSize from "tiptap-extension-font-size";
import TextAlign from "@tiptap/extension-text-align";
import "@/styles/editor.css";

const Editor = () => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          "min-h-[70vh] max-w-[100%] focus:outline-none rounded-md rounded-tr-none rounded-tl-none border border-input border-t-0 bg-transparent px-6 py-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 overflow-auto",
      },
    },
    content: "",
    editable: true,
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Write here...",
      }),
      TextStyle,
      FontFamily,
      FontSize,
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "right", "center", "justify"],
        defaultAlignment: "left",
      }),
    ],
  });

  return (
    <>
      <EditorToolbar editor={editor} />
      <EditorContent editor={editor} />
      {editor?.commands.focus()}
    </>
  );
};

export default Editor;
