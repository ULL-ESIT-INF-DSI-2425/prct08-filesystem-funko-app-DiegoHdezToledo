import fs from "fs";
import path from "path";

/**
 * @brief Funcion encargada de mostrar todos las versiones de un ficherp
 * 
 * @param fileName Fichero el cual se va a checkear sus versiones
 * @param backupDir Directorio donde se almacenará la copia de seguridad.
 * 
 */
function log(fileName: string, backupDir: string) {
  fs.readdir(backupDir, (err, files) => {
    if (err) return console.error(`Error reading backup directory: ${err.message}`);
    const versions = files.filter(file => file.startsWith(fileName));
    if (versions.length === 0) {
        console.log(`No backups found for ${fileName}`);
    } else {
        console.log(`Versions for ${fileName}:`);
        versions.forEach(version => console.log(version));
    }
  });
}

const backupDir = process.argv[3] || './.versions';
const logFile = process.argv[2] || 'ControlVersion.ts';

log(logFile, backupDir);