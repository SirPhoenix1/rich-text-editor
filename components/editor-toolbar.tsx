"use client";

import { Editor } from "@tiptap/react";
import {
  Bold,
  Heading,
  Italic,
  List,
  ListOrdered,
  Quote,
  Redo,
  Strikethrough,
  Type,
  Undo,
  CaseSensitive,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
} from "lucide-react";
import { Toggle } from "./ui/toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

interface EditorToolbarProps {
  editor: Editor | null;
}

const EditorToolbar = ({ editor }: EditorToolbarProps) => {
  if (!editor) return null;

  return (
    <div className="relative border border-input bg-transparent rounded-md rounded-br-none rounded-bl-none p-1 flex flex-row items-center gap-1 overflow-hidden">
      {/* Bold */}
      <Toggle
        size="sm"
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className="h-4 w-4" />
      </Toggle>
      {/* Italic */}
      <Toggle
        size="sm"
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic className="h-4 w-4" />
      </Toggle>
      {/* Heading */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="p-2" variant="ghost">
            <Heading className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => editor.chain().focus().setParagraph().run()}
          >
            Paragraph
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
          >
            Heading 1
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
          >
            Heading 2
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
          >
            Heading 3
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 4 }).run()
            }
          >
            Heading 4
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 5 }).run()
            }
          >
            Heading 5
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 6 }).run()
            }
          >
            Heading 6
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* Font Family */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="p-2" variant="ghost">
            <Type className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => editor.chain().focus().setFontFamily("Inter").run()}
            className={
              editor.isActive("textStyle", { fontFamily: "Inter" })
                ? "is-active"
                : ""
            }
          >
            Inter
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              editor
                .chain()
                .focus()
                .setFontFamily("Comic Sans MS, Comic Sans")
                .run()
            }
            className={
              editor.isActive("textStyle", {
                fontFamily: "Comic Sans MS, Comic Sans",
              })
                ? "is-active"
                : ""
            }
          >
            Comic Sans
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => editor.chain().focus().setFontFamily("serif").run()}
            className={
              editor.isActive("textStyle", { fontFamily: "serif" })
                ? "is-active"
                : ""
            }
          >
            Serif
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              editor.chain().focus().setFontFamily("monospace").run()
            }
            className={
              editor.isActive("textStyle", { fontFamily: "monospace" })
                ? "is-active"
                : ""
            }
          >
            Monospace
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              editor.chain().focus().setFontFamily("cursive").run()
            }
            className={
              editor.isActive("textStyle", { fontFamily: "cursive" })
                ? "is-active"
                : ""
            }
          >
            Cursive
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => editor.chain().focus().unsetFontFamily().run()}
          >
            Unset
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* Font Size */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="p-2" variant="ghost">
            <CaseSensitive className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => editor.chain().focus().setFontSize("8pt").run()}
            className={
              editor.isActive("textStyle", { FontSize: "8pt" })
                ? "is-active"
                : ""
            }
          >
            8
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => editor.chain().focus().setFontSize("9pt").run()}
            className={
              editor.isActive("textStyle", { FontSize: "9pt" })
                ? "is-active"
                : ""
            }
          >
            9
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => editor.chain().focus().setFontSize("10pt").run()}
            className={
              editor.isActive("textStyle", { FontSize: "10pt" })
                ? "is-active"
                : ""
            }
          >
            10
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => editor.chain().focus().setFontSize("11pt").run()}
            className={
              editor.isActive("textStyle", { FontSize: "11pt" })
                ? "is-active"
                : ""
            }
          >
            11
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => editor.chain().focus().setFontSize("12pt").run()}
            className={
              editor.isActive("textStyle", { FontSize: "12pt" })
                ? "is-active"
                : ""
            }
          >
            12
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => editor.chain().focus().setFontSize("14pt").run()}
            className={
              editor.isActive("textStyle", { FontSize: "14pt" })
                ? "is-active"
                : ""
            }
          >
            14
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => editor.chain().focus().setFontSize("18pt").run()}
            className={
              editor.isActive("textStyle", { FontSize: "18pt" })
                ? "is-active"
                : ""
            }
          >
            18
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => editor.chain().focus().setFontSize("24pt").run()}
            className={
              editor.isActive("textStyle", { FontSize: "24pt" })
                ? "is-active"
                : ""
            }
          >
            24
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => editor.chain().focus().setFontSize("30pt").run()}
            className={
              editor.isActive("textStyle", { FontSize: "30pt" })
                ? "is-active"
                : ""
            }
          >
            30
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => editor.chain().focus().setFontSize("36pt").run()}
            className={
              editor.isActive("textStyle", { FontSize: "36pt" })
                ? "is-active"
                : ""
            }
          >
            36
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => editor.chain().focus().setFontSize("48pt").run()}
            className={
              editor.isActive("textStyle", { FontSize: "48pt" })
                ? "is-active"
                : ""
            }
          >
            48
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => editor.chain().focus().setFontSize("60pt").run()}
            className={
              editor.isActive("textStyle", { FontSize: "60pt" })
                ? "is-active"
                : ""
            }
          >
            60
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => editor.chain().focus().setFontSize("72pt").run()}
            className={
              editor.isActive("textStyle", { FontSize: "72pt" })
                ? "is-active"
                : ""
            }
          >
            72
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => editor.chain().focus().setFontSize("96pt").run()}
            className={
              editor.isActive("textStyle", { FontSize: "96pt" })
                ? "is-active"
                : ""
            }
          >
            96
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* Text Align */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="p-2" variant="ghost">
            <AlignLeft className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            className={
              "pr-0 pl-0" && editor.isActive({ textAlign: "left" })
                ? "is-active"
                : ""
            }
          >
            <AlignLeft className="h-4 w-4" />
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            className={
              editor.isActive({ textAlign: "center" }) ? "is-active" : ""
            }
          >
            <AlignCenter className="h-4 w-4" />
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            className={
              editor.isActive({ textAlign: "right" }) ? "is-active" : ""
            }
          >
            <AlignRight className="h-4 w-4" />
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => editor.chain().focus().setTextAlign("justify").run()}
            className={
              editor.isActive({ textAlign: "justify" }) ? "is-active" : ""
            }
          >
            <AlignJustify className="h-4 w-4" />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* Strikethrough */}
      <Toggle
        size="sm"
        pressed={editor.isActive("strike")}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
      >
        <Strikethrough className="h-4 w-4" />
      </Toggle>
      {/* Bullet List */}
      <Toggle
        size="sm"
        pressed={editor.isActive("bulletList")}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List className="h-4 w-4" />
      </Toggle>
      {/* Ordered List */}
      <Toggle
        size="sm"
        pressed={editor.isActive("orderedList")}
        onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <ListOrdered className="h-4 w-4" />
      </Toggle>
      {/* Quote Block */}
      <Toggle
        size="sm"
        pressed={editor.isActive("blockQuote")}
        onPressedChange={() => editor.chain().focus().toggleBlockquote().run()}
      >
        <Quote className="h-4 w-4" />
      </Toggle>
      {/* Undo */}
      <Button
        size="sm"
        variant="ghost"
        onClick={() => editor.chain().focus().undo().run()}
      >
        <Undo className="h-4 w-4" />
      </Button>
      {/* Redo */}
      <Button
        size="sm"
        variant="ghost"
        onClick={() => editor.chain().focus().redo().run()}
      >
        <Redo className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default EditorToolbar;
