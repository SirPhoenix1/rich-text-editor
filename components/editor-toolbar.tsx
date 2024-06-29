"use client";

import { Editor } from "@tiptap/react";
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
import FontSizeButton from "./buttons/font_size_btn";
import AlignButton from "./buttons/align_btn";

import "@/styles/toolbar.css";

interface EditorToolbarProps {
  editor: Editor | null;
}

interface ToolbarButton {
  id: string;
  component: React.ReactElement;
}

const EditorToolbar = ({ editor }: EditorToolbarProps) => {
  if (!editor) return null;

  const tbList = [
    <BoldButton editor={editor} key="bold" id="tb-0" />,
    <ItalicButton editor={editor} key="italic" id="tb-1" />,
    <HeadingButton editor={editor} key="heading" id="tb-2" />,
    <FontFamilyButton editor={editor} key="fontFamily" id="tb-3" />,
    <FontSizeButton editor={editor} key="fontSize" id="tb-4" />,
    <AlignButton editor={editor} key="align" id="tb-5" />,
    <StrikeButton editor={editor} key="strike" id="tb-6" />,
    <UnorderedListButton editor={editor} key="ul" id="tb-7" />,
    <OrderedListButton editor={editor} key="ol" id="tb-8" />,
    <QuoteButton editor={editor} key="quote" id="tb-9" />,
    <UndoButton editor={editor} key="undo" id="tb-10" />,
    <RedoButton editor={editor} key="redo" id="tb-11" />,
  ];

  const moreList = [
    <BoldButton editor={editor} key="bold" />,
    <ItalicButton editor={editor} key="italic" />,
    <HeadingButton editor={editor} key="heading" />,
    <FontFamilyButton editor={editor} key="fontFamily" />,
    <FontSizeButton editor={editor} key="fontSize" />,
    <AlignButton editor={editor} key="align" />,
    <StrikeButton editor={editor} key="strike" />,
    <UnorderedListButton editor={editor} key="ul" />,
    <OrderedListButton editor={editor} key="ol" />,
    <QuoteButton editor={editor} key="quote" />,
    <UndoButton editor={editor} key="undo" />,
    <RedoButton editor={editor} key="redo" />,
  ];

  return (
    <div className="relative border border-input bg-transparent rounded-md rounded-br-none rounded-bl-none p-1 flex flex-row items-center gap-1 overflow-hidden toolbar">
      {...tbList}
      {/* More */}
      <MoreButton buttons={moreList} id="more-btn" />
    </div>
  );
};

export default EditorToolbar;
