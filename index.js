/**
 * Part B3.7, B3.8 & B3.9
 * Purpose: Reading and writing to a file
 * Was covered in Session 3
 */
/**
 * ------------
 * Part B3.7
 * -------------
 */

const fs = require('node:fs');
const targetFileName = 'output.txt';
const fileContent = 'This string is for Part B3.7';

/**Algo for writing to a text file 
 * writeTextFile
 * @param {string} targetFileName - the name of the file to create
 * @param {string} fileContent - the text to save into the file
*/
fs.writeFile(targetFileName, fileContent, (err) => {
        if (err) {
            console.log("B3.8 Could not write the file:", err);
            return false;
        } else {
            console.log("B3.8 Wrote the file:", targetFileName);
            return true;
        }
    })

    /**
 * Algo for reading from a file
 * readTextFile
 * Reads a text file and prints its contents 
 * @param {string} targetFileName - the name of the file to read
 * @returns {string} the contents of the file, or an empty string if error
 */
readTextFile(targetFileName) {
    fs.readFile(targetFileName, (err, data) => {
    if(err) {
        console.log("B3.9 Could not read the file", err);
    } else {
        console.log("B3.9 The file contents are: " + targetFileName + ":");
        console.log(data);
    }})
}