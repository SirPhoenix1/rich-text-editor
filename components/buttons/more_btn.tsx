"use client";

import { ReactNode } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { MoreHorizontal } from "lucide-react";

interface MoreButtonProps {
  buttons: ReactNode[];
  id?: string;
}
const MoreButton = ({ buttons, id }: MoreButtonProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild id={id}>
        <Button className="p-2" variant="ghost">
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {buttons.map((button, index) => (
          <DropdownMenuItem key={index} id={`more-${index}`}>
            {button}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MoreButton;
