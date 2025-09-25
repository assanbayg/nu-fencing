import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor")!;
    const move = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      id="cursor"
      className="fixed w-4 h-4 bg-blue-600/70 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-out z-50"
    ></div>
  );
}
