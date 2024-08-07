"use client";

import { Editor } from "@tiptap/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import { BetweenHorizontalStart } from "lucide-react";
import { line_heights } from "../plugins/line_height_plugin";

interface LineHeightButtonProps {
  editor: Editor;
}

const LineHeightButton = ({ editor }: LineHeightButtonProps) => {
  const handleCloseAutoFocus = (event: Event) => {
    event.preventDefault();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="p-2" variant="ghost">
          <BetweenHorizontalStart className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        onCloseAutoFocus={handleCloseAutoFocus}
        className="scrollable-dropdown"
      >
        {line_heights.map((height) => (
          <DropdownMenuItem
            key={height}
            onClick={() => {
              editor.chain().focus().setLineHeight(height).run();
            }}
            className={
              editor.isActive("textStyle", { lineHeight: height })
                ? "is-active"
                : ""
            }
          >
            {height}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LineHeightButton;
