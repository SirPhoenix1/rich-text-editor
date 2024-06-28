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
import { Toggle } from "@/components/ui/toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

import { useRef, useState } from "react";
import font_sizes from "./font_sizes";

import "@/styles/toolbar.css";
import BoldButton from "@/components/buttons/bold_btn";
import ItalicButton from "./buttons/italic_btn";
import HeadingButton from "./buttons/heading_btn";
import FontFamilyButton from "./buttons/font_family_btn";
import StrikeButton from "./buttons/strike_btn";
import UnorderedListButton from "./buttons/ul_btn";
import OrderedListButton from "./buttons/ol_btn";
import QuoteButton from "./buttons/quote_btn";
import UndoButton from "./buttons/undo_btn";
import RedoButton from "./buttons/redo_btn";
import MoreButton from "./buttons/more_btn";

interface EditorToolbarProps {
  editor: Editor | null;
}

interface ToolbarButton {
  id: string;
  component: React.ReactElement;
}

const EditorToolbar = ({ editor }: EditorToolbarProps) => {
  const btnRefs = useRef([]);
  if (!editor) return null;

  return (
    <div className="relative border border-input bg-transparent rounded-md rounded-br-none rounded-bl-none p-1 flex flex-row items-center gap-1 overflow-hidden toolbar">
      {/* Bold */}
      <BoldButton editor={editor} />
      {/* Italic */}
      <ItalicButton editor={editor} />
      {/* Heading */}
      <HeadingButton editor={editor} />
      {/* Font Family */}
      <FontFamilyButton editor={editor} />
      {/* Strikethrough */}
      <StrikeButton editor={editor} />
      {/* Bullet List */}
      <UnorderedListButton editor={editor} />
      {/* Ordered List */}
      <OrderedListButton editor={editor} />
      {/* Quote Block */}
      <QuoteButton editor={editor} />
      {/* Undo */}
      <UndoButton editor={editor} />
      {/* Redo */}
      <RedoButton editor={editor} />
      {/* More */}
      <MoreButton toolbarButtons={} />
    </div>
  );
};

export default EditorToolbar;
