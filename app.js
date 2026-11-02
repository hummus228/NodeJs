// kirill pushkin and yonatan yuriev

const fs = require("fs");

//megrgin lines from file 01 to 10 throu loop
function mergeFiles() {
  let combinedLines = [];
  for (let i = 1; i <= 10; i++) {
    const fileNum = String(i).padStart(2, "0"); //becouse of 01,02
    const fileName = `text${fileNum}.txt`;

    try {
      const content = fs.readFileSync(fileName, "utf8");
      const lines = content.split(/\r?\n/); //split into lines
      const linesToTake = lines.slice(0, i); //grabing number of lines depending of 'i'
      console.log(`Extracted ${linesToTake.length} lines from ${fileName}`);
      combinedLines = combinedLines.concat(linesToTake);
    } catch (err) {
      console.error(`Failed to read ${fileName}:`, err.message);
    }
  }
  //write all lines to outputfile
  fs.writeFileSync("output.txt", combinedLines.join("\n"), "utf8");
  console.log(
    `\nSuccessfully saved ${combinedLines.length} total lines into output.txt`,
  );
}
mergeFiles();
