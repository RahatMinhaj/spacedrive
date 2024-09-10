import {
  getFileContent,
  getItems,
  ItemsResponse,
  OriResponse,
} from "@/lib/driveRequest";

export async function getInformations({
  accessToken,
  params,
}: {
  accessToken: string;
  params: string[];
}) {
  const items = (await getItems({
    access_token: accessToken,
    folder: params,
    listChild: true,
  })) as ItemsResponse[];

  let item;
  let readmeFile = items?.find(
    (item) => item.name.toLowerCase() === "readme.md"
  );
  let readmeContent;

  if (!items) {
    item = (await getItems({
      access_token: accessToken,
      folder: params,
      row: true,
    })) as OriResponse;
  }

  if (readmeFile) {
    readmeContent = await getFileContent(readmeFile, accessToken);
  }

  return { items, item, readmeContent, readmeFile };
}
