import { ImageResponse } from 'next/og'
import { join } from 'node:path'
import { readFile } from 'node:fs/promises'

export const alt = "Omar's Portfolio"
export const size = {
  width: 630,
  height: 630,
}
export const contentType = 'image/jpg'


export default async function Image() {
  const logoData = await readFile(join(process.cwd(), 'public/jouied.jpg'))
  const logoSrc = Uint8Array.from(logoData).buffer as unknown as string

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <img src={logoSrc} />
        <div
          style={{
            display: 'flex',
            flexDirection: "column",
            alignItems: 'center',
            justifyContent: 'end',
            position: 'absolute',
            zIndex: '10',
            background: '#0004'
          }}
        >
          <span style={{ fontSize: '14' }}>Omar's</span>
          <span style={{ fontSize: '18', fontWeight: "bold" }}>Portfolio</span>
        </div>
      </div>
    )
  )
}