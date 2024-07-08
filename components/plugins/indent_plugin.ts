interface IndentOptions {
  types: string[];
  indentLevels: number[];
  defaultIndentLevel: number;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    indent: {
      /**
       * Increase the indent attribute
       */
      increaseIndent: () => ReturnType;
      /**
       * Decrease the indent attribute
       */
      decreaseIndent: () => ReturnType;
      /**
       * Unset the indent attribute
       */
      unsetIndent: () => ReturnType;
    };
  }
}
