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
          textAlign: 'center'
        }}
      >
        <img src={logoSrc} style={size} />
        <div
          style={{
            display: 'flex',
            flexDirection: "column",
            alignItems: 'center',
            justifyContent: 'flex-end',
            position: 'absolute',
            zIndex: '10',
            ...size,
            background: '#0006',
            color: 'white'
          }}
        >
          <span style={{ fontSize: '35' }}>Omar's</span>
          <span style={{ fontSize: '40', fontWeight: "bold" }}>Portfolio</span>
        </div>
      </div>
    )
  )
}