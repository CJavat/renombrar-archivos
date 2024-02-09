import fs from "fs";
import path from "path";

const picturesPath: string = path.join(__dirname, "/pages");

const totalFiles: number = 256;
const endLoop: number = 216;
const quantityOfProductsToAdd: number = 1;

const increaseBy: number = quantityOfProductsToAdd * 2;


for( let i = totalFiles; i >= endLoop ; i-- ) {
  try {
    fs.renameSync( picturesPath + `/${ i }.jpg`, picturesPath + `/${ i + increaseBy }.jpg` );
    fs.renameSync( picturesPath + `/${ i }-large.jpg`, picturesPath + `/${ i + increaseBy }-large.jpg` );
    fs.renameSync( picturesPath + `/${ i }-regions.json`, picturesPath + `/${ i + increaseBy }-regions.json` );

  } catch ( error: any ) {
    const fileNotExists = error.path.split('\\').at(-1);
    
    console.log(`No se encontró el archivo ${ fileNotExists }, por eso no se pudo renombrar.`);
    throw new Error(`No se encontró el archivo ${ fileNotExists }, por eso no se pudo renombrar.`);
  }
}

console.log("Files renamed successfully");













