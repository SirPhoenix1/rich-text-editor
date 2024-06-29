import { Editor } from "@tiptap/react";
import { Toggle } from "@/components/ui/toggle";
import { ListOrdered } from "lucide-react";

interface OrderedListButtonProps {
  editor: Editor;
  id?: string;
}

const OrderedListButton = ({ editor, id }: OrderedListButtonProps) => {
  return (
    <Toggle
      size="sm"
      pressed={editor.isActive("orderedList")}
      onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
      id={id}
    >
      <ListOrdered className="h-4 w-4" />
    </Toggle>
  );
};

export default OrderedListButton;
