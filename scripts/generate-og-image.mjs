import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const WIDTH = 1200;
const HEIGHT = 630;
const LOGO_WIDTH = 360;

async function main() {
  // Load logo and flatten grey background to white
  const logoBuffer = await sharp(path.join(ROOT, "public/images/logo/logo.png"))
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .resize({ width: LOGO_WIDTH })
    .toBuffer();

  const logoMeta = await sharp(logoBuffer).metadata();
  const logoHeight = logoMeta.height;

  // Vertical layout calculation (centered slightly above middle)
  const taglineY = 0; // relative; we'll compute absolute positions
  const gapLogoToTagline = 24;
  const gapTaglineToLine = 20;
  const gapLineToLocation = 20;
  const taglineFontSize = 48;
  const locationFontSize = 13;
  const lineWidth = 72;
  const lineThickness = 1;

  // Estimate total block height
  const totalHeight =
    logoHeight +
    gapLogoToTagline +
    taglineFontSize * 1.2 +
    gapTaglineToLine +
    lineThickness +
    gapLineToLocation +
    locationFontSize * 1.2;

  // Start Y so block is vertically centered, shifted slightly up
  const startY = Math.round((HEIGHT - totalHeight) / 2 - 15);

  const logoX = Math.round((WIDTH - LOGO_WIDTH) / 2);
  const logoY = startY;

  const taglineCenterY = logoY + logoHeight + gapLogoToTagline + taglineFontSize * 0.6;
  const lineCenterY = taglineCenterY + taglineFontSize * 0.5 + gapTaglineToLine;
  const locationCenterY = lineCenterY + lineThickness + gapLineToLocation + locationFontSize * 0.5;

  // SVG overlay with text and decorative lines
  const svgOverlay = `
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <!-- Top border line -->
      <line x1="60" y1="44" x2="${WIDTH - 60}" y2="44" stroke="#e5e5e5" stroke-width="1"/>
      <!-- Bottom border line -->
      <line x1="60" y1="${HEIGHT - 44}" x2="${WIDTH - 60}" y2="${HEIGHT - 44}" stroke="#e5e5e5" stroke-width="1"/>

      <!-- Tagline -->
      <text x="${WIDTH / 2}" y="${taglineCenterY}" text-anchor="middle"
            font-family="Georgia, 'Cormorant Garamond', serif" font-size="${taglineFontSize}"
            font-style="italic" font-weight="300" fill="#444444">
        Art, as Practice.
      </text>

      <!-- Decorative line below tagline -->
      <line x1="${(WIDTH - lineWidth) / 2}" y1="${lineCenterY}"
            x2="${(WIDTH + lineWidth) / 2}" y2="${lineCenterY}"
            stroke="#cccccc" stroke-width="${lineThickness}"/>

      <!-- Location text -->
      <text x="${WIDTH / 2}" y="${locationCenterY}" text-anchor="middle"
            font-family="Georgia, 'Cormorant Garamond', sans-serif" font-size="${locationFontSize}"
            font-weight="400" fill="#aaaaaa" letter-spacing="6">
        SHANGHAI  —  TOKACHI
      </text>
    </svg>
  `;

  // Compose final image
  await sharp({
    create: {
      width: WIDTH,
      height: HEIGHT,
      channels: 3,
      background: { r: 255, g: 255, b: 255 },
    },
  })
    .png()
    .composite([
      { input: logoBuffer, left: logoX, top: logoY },
      { input: Buffer.from(svgOverlay), left: 0, top: 0 },
    ])
    .toFile(path.join(ROOT, "public/images/og-image.png"));

  console.log("✓ OGP image generated: public/images/og-image.png");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
