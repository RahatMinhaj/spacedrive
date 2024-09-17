"use client";

import { ItemsResponse, OriResponse } from "@/lib/driveRequest";
import PreviewContainer from "./PreviewContainer";
import { apiConfig } from "@/config/api.config";

export const OfficePreview = ({
  file,
}: {
  file: OriResponse | ItemsResponse;
}) => {
  const filePath = `${apiConfig.origin}/api/graph/raw?item=${file.id}`;
  const url = `https://view.officeapps.live.com/op/embed.aspx?src=${filePath}`;
  return (
    <PreviewContainer file={file}>
      <iframe
        className="h-lvh"
        src={url}
        width="100%"
        height="100%"
        title="pdf-viewer"
      ></iframe>
    </PreviewContainer>
  );
};
