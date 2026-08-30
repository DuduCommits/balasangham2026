import fs from 'node:fs';
import path from 'node:path';

const indexPath = path.resolve('.vercel/output/functions/__server.func/index.mjs');
if (fs.existsSync(indexPath)) {
  let content = fs.readFileSync(indexPath, 'utf-8');
  content = content.replace(
    'export { vercel_web_default as default };',
    'export default function(req, ctx) { return vercel_web_default.fetch(req, ctx); }'
  );
  fs.writeFileSync(indexPath, content);
  console.log('Fixed Vercel Web Streams export in index.mjs');
} else {
  console.log('Vercel Web Streams export fix skipped: index.mjs not found');
}
