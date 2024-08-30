import { type OriResponse } from "@/lib/driveRequest";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatBytes, formatDate } from "@/lib/utils";

const FileDescription = ({ data }: { data: OriResponse | undefined }) => {
  if (!data) return notFound();
  return (
    <div className="container w-11/12 mt-3">
      <Card>
        <CardHeader>
          <CardTitle>File Information</CardTitle>
          <CardDescription>Detailed file information goes here</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex">
            <div>Image here</div>
            <div className="flex flex-col p-2.5">
              <div className="py-1">
                <p className="text-muted-foreground">File Name:</p>
                <p>{data.name}</p>
              </div>
              <div className="py-1">
                <p className="text-muted-foreground">File Size:</p>
                <p>{formatBytes(data.size)}</p>
              </div>
              <div className="py-1">
                <p className="text-muted-foreground">Created At:</p>
                <p>
                  {data.createdDateTime
                    ? formatDate(data.createdDateTime)
                    : "none"}
                </p>
              </div>
              <div className="py-1">
                <p className="text-muted-foreground">Last Modified:</p>
                <p>
                  {formatDate(data.lastModifiedDateTime)}
                </p>
              </div>
              <div className="py-1">
                <p className="text-muted-foreground">MIME type</p>
                <p>
                  {data.file?.mimeType || "none"}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex space-x-7 mx-auto w-fit">
          <Button type="button" title="download" variant="outline">
            Download
          </Button>
          <Button type="button" title="share" variant="outline">
            Copy link
          </Button>
          <Button type="button" title="share" variant="outline">
            Copy Shorten link
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default FileDescription;
