import React, { useState } from "react";

const items = [
  { type: "text", content: "📢 Big update: New transport providers onboarded!" },
  { type: "image", content: "https://picsum.photos/400/200" },
  { type: "video", content: "https://www.w3schools.com/html/mov_bbb.mp4" },
];

function NewsSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % items.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + items.length) % items.length);

  return (
    <div className="relative bg-gray-100 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">News & Updates</h2>

      <div className="flex justify-center items-center">
        <button onClick={prevSlide} className="px-3">⬅️</button>

        <div className="w-[400px] h-[220px] flex items-center justify-center bg-white shadow-lg rounded-lg overflow-hidden">
          {items[current].type === "text" && <p className="p-4">{items[current].content}</p>}
          {items[current].type === "image" && <img src={items[current].content} alt="" />}
          {items[current].type === "video" && (
            <video controls className="w-full h-full">
              <source src={items[current].content} type="video/mp4" />
            </video>
          )}
        </div>

        <button onClick={nextSlide} className="px-3">➡️</button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {items.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${i === current ? "bg-teal-600" : "bg-gray-400"}`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default NewsSection;
