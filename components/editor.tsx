"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EditorToolbar from "./editor-toolbar";
import Placeholder from "@tiptap/extension-placeholder";

const Editor = () => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          "min-h-[70vh] prose max-w-[100%] dark:prose-invert prose-sm sm:prose-base lg:prose-lg focus:outline-none rounded-md rounded-tr-none rounded-tl-none border border-input border-t-0 bg-transparent px-6 py-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 overflow-auto",
      },
    },
    content: "",
    editable: true,
    extensions: [
      StarterKit.configure({
        orderedList: { HTMLAttributes: { class: "list-decimal pl-4" } },
        bulletList: { HTMLAttributes: { class: "list-disc pl-4" } },
      }),
      Placeholder.configure({
        placeholder: "Write here...",
        emptyEditorClass:
          "cursor-text before:content-[attr(data-placeholder)] before:absolute before:top-4 before:left-6 before:text-mauve-11 before:opacity-50 before-pointer-events-none",
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
