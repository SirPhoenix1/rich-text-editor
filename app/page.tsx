"use client";

import Editor from "@/components/editor";

export default function Home() {
  return (
    <div className="w-1/2 h-screen mx-auto">
      <h1 className="flex justify-center pt-20 text-2xl font-medium mb-20">
        Rich Text Editor
      </h1>
      <Editor />
    </div>
  );
}
