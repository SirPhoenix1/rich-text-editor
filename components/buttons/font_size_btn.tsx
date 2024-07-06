"use client";

import { Editor } from "@tiptap/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import { CaseSensitive } from "lucide-react";
import font_sizes from "@/components/font_sizes";
import { useState } from "react";

interface FontSizeButtonProps {
  editor: Editor;
}

const FontSizeButton = ({ editor }: FontSizeButtonProps) => {
  const [fSize, setFSize] = useState(font_sizes[4]);
  const handleCloseAutoFocus = (event: Event) => {
    event.preventDefault();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="p-2" variant="ghost">
          {fSize}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        onCloseAutoFocus={handleCloseAutoFocus}
        className="scrollable-dropdown"
      >
        {font_sizes.map((size) => (
          <DropdownMenuItem
            key={size}
            onClick={() => {
              editor
                .chain()
                .focus()
                .setFontSize(size + "pt")
                .run();
              setFSize(size);
            }}
            className={
              editor.isActive("textStyle", { FontSize: size })
                ? "is-active"
                : ""
            }
          >
            {size}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FontSizeButton;
