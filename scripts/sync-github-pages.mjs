import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = await readFile(join(projectRoot, 'dist/index.html'), 'utf8');
const output = source
  .replace('<!-- GitHub Pages copy: generated from dist/index.html -->\n', '')
  .replaceAll('href="assets/', 'href="dist/assets/')
  .replaceAll('src="assets/', 'src="dist/assets/')
  .replace('href="styles.css"', 'href="dist/styles.css"')
  .replace('src="script.js"', 'src="dist/script.js"')
  .replace('<!doctype html>\n', '<!doctype html>\n<!-- GitHub Pages copy: generated from dist/index.html -->\n');

await writeFile(join(projectRoot, 'index.html'), output);
