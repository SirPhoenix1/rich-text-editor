"use client";

import { Editor } from "@tiptap/react";
import * as Buttons from "@/components/buttons/buttons_export";
import { useEffect, useState } from "react";
import "@/styles/toolbar.css";

interface EditorToolbarProps {
  editor: Editor;
}

const EditorToolbar = ({ editor }: EditorToolbarProps) => {
  const [visibleButtons, setVisibleButtons] = useState<string[]>([]);
  const [dropdownButtons, setDropdownButtons] = useState<string[]>([]);

  const buttonComponents = [
    <Buttons.HeadingButton editor={editor} key={"hBtn"} />,
    <Buttons.FontFamilyButton editor={editor} key={"fFBtn"} />,
    <Buttons.FontSizeButton editor={editor} key={"fSBtn"} />,
    <Buttons.BoldButton editor={editor} key={"bBtn"} />,
    <Buttons.ItalicButton editor={editor} key={"iBtn"} />,
    <Buttons.UnderlineButton editor={editor} key={"uBtn"} />,
    <Buttons.ColorButton editor={editor} key={"cBtn"} />,
    <Buttons.HighlightButton editor={editor} key={"hlBtn"} />,
    <Buttons.LinkButton editor={editor} key={"lBtn"} />,
    <Buttons.AlignButton editor={editor} key={"aBtn"} />,
    <Buttons.StrikeButton editor={editor} key={"sBtn"} />,
    <Buttons.UnorderedListButton editor={editor} key={"ulBtn"} />,
    <Buttons.OrderedListButton editor={editor} key={"olBtn"} />,
    <Buttons.QuoteButton editor={editor} key={"qBtn"} />,
    <Buttons.UndoButton editor={editor} key={"undoBtn"} />,
    <Buttons.RedoButton editor={editor} key={"redoBtn"} />,
  ];

  const updateButtonVisibility = () => {
    const width = window.innerWidth;
    let visibleCount = width / 80 - 2;

    const visible = buttonComponents
      .slice(0, visibleCount)
      .map((button) => (button.key ? button.key : ""));
    const dropdown = buttonComponents
      .slice(visibleCount)
      .map((button) => (button.key ? button.key : ""));

    setVisibleButtons(visible);
    setDropdownButtons(dropdown);
  };

  useEffect(() => {
    updateButtonVisibility();
    window.addEventListener("resize", updateButtonVisibility);
    return () => window.removeEventListener("resize", updateButtonVisibility);
  }, []);

  return (
    <div className="relative border border-input bg-transparent rounded-md rounded-br-none rounded-bl-none p-1 flex flex-row items-center gap-1 overflow-hidden toolbar">
      {visibleButtons.map((key) => (
        <div key={key} className="inline-block">
          {buttonComponents.find((button) => button.key === key)}
        </div>
      ))}
      {/* More */}
      {dropdownButtons.length > 0 && (
        <div className="inline-block relative">
          <Buttons.MoreButton>
            {dropdownButtons.map((key) => (
              <div key={key} className="inline-block">
                {buttonComponents.find((button) => button.key === key)}
              </div>
            ))}
          </Buttons.MoreButton>
        </div>
      )}
    </div>
  );
};

export default EditorToolbar;
