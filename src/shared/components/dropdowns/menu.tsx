"use client";

import { useState } from "react";

function useDropDownMenu({ menu }: { menu?: JSX.Element }) {
  const [isOpen, setOpen] = useState(false);
  const dropdown = (
    <div className="absolute" role="menu">
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-neutral-800/20 z-40"
          onClick={() => setOpen(false)}
        />
      )}
      <div className="relative z-50 mt-3">{isOpen && menu}</div>
    </div>
  );

  return { dropdown, isOpen, setOpen };
}

export default useDropDownMenu;
