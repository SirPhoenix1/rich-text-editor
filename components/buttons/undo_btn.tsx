import { Editor } from "@tiptap/react";
import { Button } from "@/components/ui/button";
import { Undo } from "lucide-react";

interface UndoButtonProps {
  editor: Editor;
  id?: string;
}

const UndoButton = ({ editor, id }: UndoButtonProps) => {
  return (
    <Button
      size="sm"
      variant="ghost"
      onClick={() => editor.chain().focus().undo().run()}
      id={id}
    >
      <Undo className="h-4 w-4" />
    </Button>
  );
};

export default UndoButton;
