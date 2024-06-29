import { Editor } from "@tiptap/react";
import { Toggle } from "@/components/ui/toggle";
import { Strikethrough } from "lucide-react";

interface StrikeButtonProps {
  editor: Editor;
  id?: string;
}

const StrikeButton = ({ editor, id }: StrikeButtonProps) => {
  return (
    <Toggle
      size="sm"
      pressed={editor.isActive("strike")}
      onPressedChange={() => editor.chain().focus().toggleStrike().run()}
      className={editor.isActive("strike") ? "is-active" : ""}
      id={id}
    >
      <Strikethrough className="h-4 w-4" />
    </Toggle>
  );
};

export default StrikeButton;
