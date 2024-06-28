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
  Undo,
  CaseSensitive,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  MoreHorizontal,
} from "lucide-react";
import { Toggle } from "./ui/toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { fontList } from "@/app/fonts";
import { useState } from "react";
import font_sizes from "./font_sizes";
import { inter } from "@/app/fonts";
import "@/styles/toolbar.css";

interface EditorToolbarProps {
  editor: Editor | null;
}

const EditorToolbar = ({ editor }: EditorToolbarProps) => {
  const [fontLabel, setFontLabel] = useState("Inter");
  const [fontValue, setFontValue] = useState(inter.variable);
  if (!editor) return null;

  const setFontFamily = (fontFamily: string) => {
    editor.commands.setFontFamily(fontFamily);
  };

  return (
    <div className="relative border border-input bg-transparent rounded-md rounded-br-none rounded-bl-none p-1 flex flex-row items-center gap-1 overflow-hidden toolbar">
      {/* Bold */}
      <Toggle
        size="sm"
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
        id="boldBtn"
      >
        <Bold className="h-4 w-4" />
      </Toggle>
      {/* Italic */}
      <Toggle
        size="sm"
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
        id="italicBtn"
      >
        <Italic className="h-4 w-4" />
      </Toggle>
      {/* Heading */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild id="headingBtn">
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
        <DropdownMenuTrigger asChild id="fontFamilyBtn">
          <Button
            className="p-2 no-outline"
            style={{
              fontFamily: fontValue,
            }}
            variant="ghost"
          >
            {fontLabel}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="scrollable-dropdown">
          {fontList.map((font) => (
            <DropdownMenuItem
              key={font.name}
              onClick={() => {
                setFontLabel(font.name);
                setFontValue(font.font);
                editor.chain().focus().setFontFamily(font.font).run();
                console.log(font.font);
              }}
              className={
                editor.isActive("textStyle", { fontFamily: font.font })
                  ? "is-active"
                  : ""
              }
              style={{ fontFamily: font.font }}
            >
              {font.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      {/* Font Size */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild id="fontSizeBtn">
          <Button className="p-2" variant="ghost">
            <CaseSensitive className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="scrollable-dropdown">
          {font_sizes.map((size) => (
            <DropdownMenuItem
              key={size}
              onClick={() => editor.chain().focus().setFontSize(size).run()}
              className={
                editor.isActive("textStyle", { FontSize: size })
                  ? "is-active"
                  : ""
              }
            >
              {size.replace("pt", "")}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      {/* Text Align */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild id="alignBtn">
          <Button className="p-2" variant="ghost">
            {editor.isActive({ textAlign: "left" }) && (
              <AlignLeft className="h-4 w-4" />
            )}
            {editor.isActive({ textAlign: "center" }) && (
              <AlignCenter className="h-4 w-4" />
            )}
            {editor.isActive({ textAlign: "right" }) && (
              <AlignRight className="h-4 w-4" />
            )}
            {editor.isActive({ textAlign: "justify" }) && (
              <AlignJustify className="h-4 w-4" />
            )}
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
        className={editor.isActive("strike") ? "is-active" : ""}
        id="strikeBtn"
      >
        <Strikethrough className="h-4 w-4" />
      </Toggle>
      {/* Bullet List */}
      <Toggle
        size="sm"
        pressed={editor.isActive("bulletList")}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
        id="ulBtn"
      >
        <List className="h-4 w-4" />
      </Toggle>
      {/* Ordered List */}
      <Toggle
        size="sm"
        pressed={editor.isActive("orderedList")}
        onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
        id="olBtn"
      >
        <ListOrdered className="h-4 w-4" />
      </Toggle>
      {/* Quote Block */}
      <Toggle
        size="sm"
        pressed={editor.isActive("blockQuote")}
        onPressedChange={() => editor.chain().focus().toggleBlockquote().run()}
        id="quoteBtn"
      >
        <Quote className="h-4 w-4" />
      </Toggle>
      {/* Undo */}
      <Button
        size="sm"
        variant="ghost"
        onClick={() => editor.chain().focus().undo().run()}
        id="undoBtn"
      >
        <Undo className="h-4 w-4" />
      </Button>
      {/* Redo */}
      <Button
        size="sm"
        variant="ghost"
        onClick={() => editor.chain().focus().redo().run()}
        id="redoBtn"
      >
        <Redo className="h-4 w-4" />
      </Button>
      {/* More */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild id="moreBtn">
          <Button className="p-2" variant="ghost">
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            className={
              editor.isActive({ textAlign: "center" }) ? "is-active" : ""
            }
          >
            <AlignCenter className="h-4 w-4" />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default EditorToolbar;
