"use client";
import { ItemsResponse, OriResponse } from "@/lib/driveRequest";
import PreviewContainer from "./PreviewContainer";
import { useEffect, useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
export const PDFPreview = ({ file }: { file: OriResponse | ItemsResponse }) => {
  const [origin, setOrigin] = useState("");
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);
  const filePath = encodeURI(origin + "/api/graph/raw?item=" + file.id);
  return (
    <PreviewContainer file={file}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div className="h-[80vh]">
          <Viewer
            fileUrl={filePath}
            plugins={[
              defaultLayoutPluginInstance,
            ]}
            enableSmoothScroll
          />
        </div>
      </Worker>
    </PreviewContainer>
  );
};
