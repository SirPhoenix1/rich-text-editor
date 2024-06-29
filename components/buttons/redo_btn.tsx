import { Editor } from "@tiptap/react";
import { Button } from "@/components/ui/button";
import { Redo } from "lucide-react";

interface RedoButtonProps {
  editor: Editor;
  id?: string;
}

const RedoButton = ({ editor, id }: RedoButtonProps) => {
  return (
    <Button
      size="sm"
      variant="ghost"
      onClick={() => editor.chain().focus().redo().run()}
      id={id}
    >
      <Redo className="h-4 w-4" />
    </Button>
  );
};

export default RedoButton;
