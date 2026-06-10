import { useEffect } from "react";

export function useSecurityRestrictions() {
  useEffect(() => {
    const blockContextMenu = (e) => e.preventDefault();

    const blockCopy = (e) => e.preventDefault();

    const blockDragStart = (e) => e.preventDefault();

    const blockKeys = (e) => {
      // F12
      if (e.key === "F12") { e.preventDefault(); return; }
      // Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C (devtools)
      if (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) {
        e.preventDefault(); return;
      }
      // Ctrl+U (view source)
      if (e.ctrlKey && e.key.toUpperCase() === "U") {
        e.preventDefault(); return;
      }
      // Ctrl+S (save page)
      if (e.ctrlKey && e.key.toUpperCase() === "S") {
        e.preventDefault(); return;
      }
      // Ctrl+A (select all)
      if (e.ctrlKey && e.key.toUpperCase() === "A") {
        e.preventDefault(); return;
      }
      // Ctrl+C (copy)
      if (e.ctrlKey && e.key.toUpperCase() === "C") {
        e.preventDefault(); return;
      }
      // Ctrl+P (print)
      if (e.ctrlKey && e.key.toUpperCase() === "P") {
        e.preventDefault(); return;
      }
    };

    document.addEventListener("contextmenu", blockContextMenu);
    document.addEventListener("copy", blockCopy);
    document.addEventListener("dragstart", blockDragStart);
    document.addEventListener("keydown", blockKeys);

    return () => {
      document.removeEventListener("contextmenu", blockContextMenu);
      document.removeEventListener("copy", blockCopy);
      document.removeEventListener("dragstart", blockDragStart);
      document.removeEventListener("keydown", blockKeys);
    };
  }, []);
}
