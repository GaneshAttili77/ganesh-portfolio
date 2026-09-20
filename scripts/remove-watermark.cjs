/**
 * Paints over the small sparkle mark that Gemini puts near the bottom-right corner
 * of generated images, using a feathered patch of the neighbouring background.
 *
 *   node scripts/remove-watermark.cjs public/images/new-image.webp [left|right]
 *
 * "left"/"right" = which side of the mark to copy clean background from (default: right).
 * Run with no arguments to process the site's known images.
 */
const sharp = require('sharp')
const fs = require('fs')

const BOX = 84          // patch size (the mark is ~55px)
const OFFSET = 162      // mark's top-left corner, measured from the bottom-right of the image
const FEATHER = 9

const known = [
  ['public/og-image.webp', 'right'],
  ['public/images/hero.webp', 'left'],
  ['public/images/about.webp', 'left'],
  ['public/images/blog-1.webp', 'right'],
  ['public/images/blog-2.webp', 'right'],
  ['public/images/blog-3.webp', 'right'],
]

async function clean(file, side = 'right') {
  const input = fs.readFileSync(file)
  const { width, height } = await sharp(input).metadata()
  const left = width - OFFSET
  const top = height - OFFSET
  const srcLeft = side === 'left' ? left - BOX : Math.min(left + BOX - 8, width - BOX)

  // soft-edged alpha so the patch blends instead of showing a square
  const mask = await sharp({ create: { width: BOX, height: BOX, channels: 3, background: '#000' } })
    .composite([{
      input: await sharp({ create: { width: BOX - FEATHER * 2, height: BOX - FEATHER * 2, channels: 3, background: '#fff' } }).png().toBuffer(),
      left: FEATHER, top: FEATHER,
    }])
    .blur(FEATHER / 2)
    .extractChannel(0)
    .png()
    .toBuffer()

  const patch = await sharp(input)
    .extract({ left: srcLeft, top, width: BOX, height: BOX })
    .removeAlpha()
    .joinChannel(mask)
    .png()
    .toBuffer()

  const out = await sharp(input).composite([{ input: patch, left, top }]).webp({ quality: 90 }).toBuffer()
  fs.writeFileSync(file, out)
  console.log('cleaned', file, `${width}x${height}`)
}

;(async () => {
  const [file, side] = process.argv.slice(2)
  if (file) return clean(file, side)
  for (const [f, s] of known) if (fs.existsSync(f)) await clean(f, s)
})()
