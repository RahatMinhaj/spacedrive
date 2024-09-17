import { ItemsResponse, OriResponse } from "@/lib/driveRequest";
import React, { ReactNode, Suspense } from "react";
import { Separator } from "@/components/ui/separator";
import { getFileIcon } from "@/lib/getFileIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Loader } from "../Loader";

const PreviewContainer = ({
  children,
  file,
}: {
  children: ReactNode;
  file: ItemsResponse | OriResponse;
}) => {
  return (
    <div className="rounded-lg border bg-card shadow-sm py-6 px-2 md:px-5 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl w-full mx-auto text-wrap">
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={getFileIcon(file.name, { video: Boolean(file?.video) })}
          className="size-3 md:size-4 mr-2 md:ml-4"
        />
        <p className="font-bold w-full truncate">{file.name}</p>
      </div>
      <Separator className="my-3" />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
};

export default PreviewContainer;
