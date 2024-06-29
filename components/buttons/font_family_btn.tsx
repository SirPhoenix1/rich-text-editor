"use client";

import { Editor } from "@tiptap/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import { useState } from "react";
import { inter } from "@/app/fonts";
import { fontList } from "@/app/fonts";

interface FontFamilyButtonProps {
  editor: Editor;
}

const FontFamilyButton = ({ editor }: FontFamilyButtonProps) => {
  const [fontLabel, setFontLabel] = useState("Inter");
  const [fontValue, setFontValue] = useState(inter.variable);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
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
  );
};

export default FontFamilyButton;
