"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import EditorToolbar from "./editor-toolbar";
import Placeholder from "@tiptap/extension-placeholder";
import TextStyle from "@tiptap/extension-text-style";
import FontSize from "tiptap-extension-font-size";
import TextAlign from "@tiptap/extension-text-align";
import Blockquote from "@tiptap/extension-blockquote";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import CodeBlock from "@tiptap/extension-code-block";
import HardBreak from "@tiptap/extension-hard-break";
import Heading from "@tiptap/extension-heading";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import OrderedList from "@tiptap/extension-ordered-list";
import Paragraph from "@tiptap/extension-paragraph";
import Document from "@tiptap/extension-document";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import Code from "@tiptap/extension-code";
import Italic from "@tiptap/extension-italic";
import Dropcursor from "@tiptap/extension-dropcursor";
import Gapcursor from "@tiptap/extension-gapcursor";
import History from "@tiptap/extension-history";
import CustomStrike from "./custom_strike";
import Color from "@tiptap/extension-color";
import FontFamily from "@tiptap/extension-font-family";
import "@/styles/editor.css";

const Editor = () => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          "min-h-[70vh] max-w-[100%] sm:text-sm md:text-base lg:text-lg focus:outline-none rounded-md rounded-tr-none rounded-tl-none border border-input border-t-0 bg-transparent px-6 py-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 overflow-auto",
      },
    },
    content: "",
    editable: true,
    onCreate: ({ editor }) => {
      editor.commands.setFontFamily("inter");
    },
    extensions: [
      Blockquote,
      BulletList,
      ListItem,
      CodeBlock,
      HardBreak,
      Heading,
      HorizontalRule,
      OrderedList,
      Paragraph,
      Document,
      Text,
      Bold,
      Code,
      Italic,
      Dropcursor,
      Gapcursor,
      History,
      TextStyle,
      FontFamily,
      Color,
      FontSize,
      CustomStrike,
      Placeholder.configure({
        placeholder: "Write here...",
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "right", "center", "justify"],
        defaultAlignment: "left",
      }),
    ],
  });

  return (
    <>
      {editor && (
        <div>
          <EditorToolbar editor={editor} />
          <EditorContent editor={editor} />
          {editor.commands.focus()}
        </div>
      )}
    </>
  );
};

export default Editor;
