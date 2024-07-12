"use client";

import { Editor } from "@tiptap/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";

interface AIButtonProps {
  editor: Editor;
}

const correct_grammar = (text: string) => {
  let result = "";
  return result;
};

const AIActionsMap: { [action: string]: Function } = {
  "Correct Grammar": correct_grammar,
};

const AIButton = ({ editor }: AIButtonProps) => {
  const handleCloseAutoFocus = (event: Event) => {
    event.preventDefault();
  };

  const handleClick = (action: string) => {
    const selection = editor.view.state.selection;

    if (selection.empty) {
      return;
    }

    editor
      .chain()
      .focus()
      .insertContentAt(
        {
          from: selection.from,
          to: selection.to,
        },
        "replacement text"
      )
      .run();

    AIActionsMap[action](selectedText);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="p-2" variant="ghost">
          <span className="h-4 w-4 font-bold">A</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        onCloseAutoFocus={handleCloseAutoFocus}
        className="scrollable-dropdown"
      >
        {Object.keys(AIActionsMap).map((key) => (
          <DropdownMenuItem key={key} onClick={() => handleClick(key)}>
            {key}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AIButton;
