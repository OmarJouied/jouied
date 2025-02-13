import { ImageResponse } from 'next/og'
import { join } from 'node:path'
import { readFile } from 'node:fs/promises'

export const alt = "Omar's Portfolio"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'


export default async function Image() {
  const logoData = await readFile(join(process.cwd(), 'public/open-graph.png'))
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
        <img src={logoSrc} style={{ ...size, margin: 'auto' }} />
        <div
          style={{
            display: 'flex',
            flexDirection: "column",
            alignItems: 'center',
            justifyContent: 'flex-end',
            position: 'absolute',
            zIndex: '10',
            ...size,
            background: '#0008',
            color: 'white',
            padding: '40px'
          }}
        >
          <span style={{ fontSize: '45' }}>Omar's</span>
          <span style={{ fontSize: '60', fontWeight: "bold" }}>Portfolio</span>
        </div>
      </div>
    )
  )
}