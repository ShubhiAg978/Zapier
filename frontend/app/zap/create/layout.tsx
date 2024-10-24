"use client";

import Header from "./components/header";
import { useState } from "react";

export default function ZapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-10 bg-white shadow-md">
        <Header />
      </div>

      {/* Fixed Action Bar Below Header */}
      <div className="fixed top-16 left-0 w-full z-10 bg-gray-200 py-2 shadow-md">
        <div className="flex justify-between px-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Enable
          </button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded">
            Publish
          </button>
        </div>
      </div>

      {/* Scrollable and Zoomable Content Area */}
      <div className="mt-32 flex-grow overflow-auto">
        <ZoomableContainer>{children}</ZoomableContainer>
      </div>
    </div>
  );
}

// Component to handle zoom functionality
function ZoomableContainer({ children }: { children: React.ReactNode }) {
  const [zoom, setZoom] = useState(1); // Default zoom level

  const handleZoomIn = () => setZoom((prevZoom) => prevZoom + 0.1);
  const handleZoomOut = () => setZoom((prevZoom) => prevZoom - 0.1);
  const resetZoom = () => setZoom(1);

  return (
    <div className="relative w-full h-full">
      {/* Zoom Controls */}
      <div className="absolute top-2 right-2 z-20">
        <button onClick={handleZoomIn} className="px-3 py-2 bg-green-600 text-white">
          +
        </button>
        <button onClick={handleZoomOut} className="px-3 py-2 bg-red-600 text-white ml-2">
          -
        </button>
        <button onClick={resetZoom} className="px-3 py-2 bg-gray-600 text-white ml-2">
          Reset
        </button>
      </div>

      {/* Content Area with Zoom */}
      <div
        className="w-full h-full"
        style={{
          transform: `scale(${zoom})`,
          transformOrigin: "center top",
          transition: "transform 0.2s ease",
        }}
      >
        {children}
      </div>
    </div>
  );
}
