import { Editor } from "@tiptap/react";
import { Toggle } from "@/components/ui/toggle";
import { Bold } from "lucide-react";

interface BoldButtonProps {
  editor: Editor;
  id?: string;
}

const BoldButton = ({ editor, id }: BoldButtonProps) => {
  return (
    <Toggle
      size="sm"
      pressed={editor.isActive("bold")}
      onPressedChange={() => editor.chain().focus().toggleBold().run()}
      id={id}
    >
      <Bold className="h-4 w-4" />
    </Toggle>
  );
};

export default BoldButton;
