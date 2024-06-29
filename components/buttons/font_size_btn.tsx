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

interface FontSizeButtonProps {
  editor: Editor;
}

const FontSizeButton = ({ editor }: FontSizeButtonProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
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
  );
};

export default FontSizeButton;
