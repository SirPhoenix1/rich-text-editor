"use client";

import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { MoreHorizontal } from "lucide-react";

interface ToolbarButton {
  id: string;
  component: React.ReactElement;
}

interface MoreButtonProps {
  toolbarButtons: ToolbarButton[];
}
const MoreButton = ({ toolbarButtons }: MoreButtonProps) => {
  const [hiddenButtons, setHiddenButtons] = useState<ToolbarButton[]>([]);

  useEffect(() => {
    const updateHiddenButtons = () => {
      const hidden = toolbarButtons.filter((button) => {
        const buttonElement = document.getElementById(button.id);
        console.log(toolbarButtons);
        return (
          buttonElement &&
          window.getComputedStyle(buttonElement).display === "none"
        );
      });
      setHiddenButtons(hidden);
    };

    // Initial check
    updateHiddenButtons();

    // Observer for changes
    const observer = new MutationObserver(updateHiddenButtons);

    toolbarButtons.forEach((button) => {
      const buttonElement = document.getElementById(button.id);
      if (buttonElement) {
        observer.observe(buttonElement, {
          attributes: true,
          attributeFilter: ["style"],
        });
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild id="moreBtn">
        <Button className="p-2" variant="ghost">
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {hiddenButtons.map((button) => (
          <DropdownMenuItem key={button.id} id={`more-${button.id}`}>
            {button.component}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MoreButton;
