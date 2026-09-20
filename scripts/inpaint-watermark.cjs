/**
 * For photos (gradients, fabric, desks): fills the Gemini sparkle area by blending the
 * colours found on all four sides of it, weighted by distance, plus a little grain so
 * the fill does not look flat.
 *
 *   node scripts/inpaint-watermark.cjs <input> <output>
 */
const sharp = require('sharp')

const BOX = 78
const OFFSET = 159

;(async () => {
  const [input, output] = process.argv.slice(2)
  const img = sharp(input).removeAlpha()
  const { width: W, height: H } = await img.metadata()
  const { data } = await img.raw().toBuffer({ resolveWithObject: true })
  // smoothed copy to read border colours from, so single noisy pixels do not streak
  const soft = await sharp(input).removeAlpha().blur(3).raw().toBuffer()

  const x0 = W - OFFSET, y0 = H - OFFSET, x1 = x0 + BOX, y1 = y0 + BOX
  const at = (buf, x, y, c) => buf[(y * W + x) * 3 + c]

  for (let y = y0; y < y1; y++) {
    for (let x = x0; x < x1; x++) {
      const dl = x - x0 + 1, dr = x1 - x, dt = y - y0 + 1, db = y1 - y
      const wl = 1 / dl, wr = 1 / dr, wt = 1 / dt, wb = 1 / db
      const sum = wl + wr + wt + wb
      const grain = (Math.random() - 0.5) * 5
      for (let c = 0; c < 3; c++) {
        const v =
          (at(soft, x0 - 2, y, c) * wl + at(soft, x1 + 1, y, c) * wr + at(soft, x, y0 - 2, c) * wt + at(soft, x, y1 + 1, c) * wb) / sum
        data[(y * W + x) * 3 + c] = Math.max(0, Math.min(255, Math.round(v + grain)))
      }
    }
  }

  await sharp(data, { raw: { width: W, height: H, channels: 3 } }).webp({ quality: 90 }).toFile(output)
  console.log('inpainted', output)
})()
