import { Editor } from "@tiptap/react";
import { Toggle } from "@/components/ui/toggle";
import { Quote } from "lucide-react";

interface QuoteButtonProps {
  editor: Editor;
  id?: string;
}

const QuoteButton = ({ editor, id }: QuoteButtonProps) => {
  return (
    <Toggle
      size="sm"
      pressed={editor.isActive("blockQuote")}
      onPressedChange={() => editor.chain().focus().toggleBlockquote().run()}
      id={id}
    >
      <Quote className="h-4 w-4" />
    </Toggle>
  );
};

export default QuoteButton;
