"use client";

import { Editor } from "@tiptap/react";
import * as Buttons from "@/components/buttons/buttons_export";
import { useEffect, useState, cloneElement } from "react";
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
    let visibleCount;

    if (width < 340) {
      visibleCount = 0;
    } else if (width < 420) {
      visibleCount = 3;
    } else if (width < 500) {
      visibleCount = 4;
    } else if (width < 580) {
      visibleCount = 5;
    } else if (width < 660) {
      visibleCount = 6;
    } else if (width < 740) {
      visibleCount = 7;
    } else if (width < 820) {
      visibleCount = 8;
    } else if (width < 900) {
      visibleCount = 9;
    } else if (width < 980) {
      visibleCount = 10;
    } else if (width < 980) {
      visibleCount = 11;
    } else {
      visibleCount = buttonComponents.length;
    }

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
