// Build sencillo: copia el código fuente a dist/
const fs = require('node:fs');

fs.rmSync('dist', { recursive: true, force: true });
fs.cpSync('src', 'dist', { recursive: true });
fs.writeFileSync(
  'dist/build-info.json',
  JSON.stringify({ fecha: new Date().toISOString() }, null, 2)
);

console.log('Build OK: archivos generados en dist/');
