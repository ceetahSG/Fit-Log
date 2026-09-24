import { Bookmark } from "lucide-react";
import React from "react";

const SaveButton = () => {
  return (
    <button className="flex items-center justify-center gap-2 rounded-xl border border-[#272a30] bg-transparent px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#272a30]">
      <Bookmark size={18} strokeWidth={2} />
      Save for later
    </button>
  );
};

export default SaveButton;
