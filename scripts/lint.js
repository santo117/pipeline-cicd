// Linter sencillo: revisa que todos los .js tengan sintaxis válida
const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const carpetas = ['src', 'tests', 'scripts'];
let revisados = 0;

for (const carpeta of carpetas) {
  for (const archivo of fs.readdirSync(carpeta)) {
    if (!archivo.endsWith('.js')) continue;
    const ruta = path.join(carpeta, archivo);
    execFileSync(process.execPath, ['--check', ruta], { stdio: 'inherit' });
    revisados++;
  }
}

console.log(`Lint OK: ${revisados} archivos revisados`);
