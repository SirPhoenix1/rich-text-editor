import { Editor } from "@tiptap/react";
import { Toggle } from "@/components/ui/toggle";
import { List } from "lucide-react";

interface UnorderedListButtonProps {
  editor: Editor;
  id?: string;
}

const UnorderedListButton = ({ editor, id }: UnorderedListButtonProps) => {
  return (
    <Toggle
      size="sm"
      pressed={editor.isActive("bulletList")}
      onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
      id={id}
    >
      <List className="h-4 w-4" />
    </Toggle>
  );
};

export default UnorderedListButton;
