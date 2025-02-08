import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Omar's Portfolio";
export const size = {
  width: 250,
  height: 250,
};

export const contentType = "image/jpg";

export default async function Image() {
  const interSemiBold = await readFile(
    join(process.cwd(),)
  )
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          width: "100%",
          height: "100%",
        }}
      >{alt}</div>
    ),
    {
      ...size,
    }
  )
}