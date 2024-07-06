"use client";

import { Editor } from "@tiptap/react";
import {
  BoldButton,
  ItalicButton,
  HeadingButton,
  FontFamilyButton,
  FontSizeButton,
  AlignButton,
  StrikeButton,
  UnorderedListButton,
  OrderedListButton,
  QuoteButton,
  UndoButton,
  RedoButton,
  MoreButton,
} from "@/components/buttons/buttons_export";
import { useEffect, useState } from "react";
import "@/styles/toolbar.css";

interface EditorToolbarProps {
  editor: Editor;
}

const EditorToolbar = ({ editor }: EditorToolbarProps) => {
  const [visibleButtons, setVisibleButtons] = useState<number[]>([]);
  const [dropdownButtons, setDropdownButtons] = useState<number[]>([]);

  const buttonComponents = [
    { id: 0, component: <BoldButton editor={editor} key={0} /> },
    { id: 1, component: <ItalicButton editor={editor} key={1} /> },
    { id: 2, component: <HeadingButton editor={editor} key={2} /> },
    { id: 3, component: <FontFamilyButton editor={editor} key={3} /> },
    { id: 4, component: <FontSizeButton editor={editor} key={4} /> },
    { id: 5, component: <AlignButton editor={editor} key={5} /> },
    { id: 6, component: <StrikeButton editor={editor} key={6} /> },
    { id: 7, component: <UnorderedListButton editor={editor} key={7} /> },
    { id: 8, component: <OrderedListButton editor={editor} key={8} /> },
    { id: 9, component: <QuoteButton editor={editor} key={9} /> },
    { id: 10, component: <UndoButton editor={editor} key={10} /> },
    { id: 11, component: <RedoButton editor={editor} key={11} /> },
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
      visibleCount = 12;
    }

    const visible = buttonComponents
      .slice(0, visibleCount)
      .map((button) => button.id);
    const dropdown = buttonComponents
      .slice(visibleCount)
      .map((button) => button.id);

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
      {visibleButtons.map((id) => (
        <div key={id} className="inline-block">
          {buttonComponents.find((button) => button.id === id)?.component}
        </div>
      ))}
      {/* More */}
      {dropdownButtons.length > 0 && (
        <div className="inline-block relative">
          <MoreButton>
            {dropdownButtons.map((id) => {
              const button = buttonComponents.find(
                (button) => button.id === id
              );
              return button ? button.component : null;
            })}
          </MoreButton>
        </div>
      )}
    </div>
  );
};

export default EditorToolbar;
