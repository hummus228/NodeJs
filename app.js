const fs = require("fs");

function mergeFiles() {
  let combinedLines = [];
  for (let i = 1; i <= 10; i++) {
    const fileNum = String(i).padStart(2, "0");
    const fileName = `text${fileNum}.txt`;
   
    try {
      const content = fs.readFileSync(fileName, "utf8");
      const lines = content.split(/\r?\n/);
      const linesToTake = lines.slice(0, i);
      console.log(`Extracted ${linesToTake.length} lines from ${fileName}`);
      combinedLines = combinedLines.concat(linesToTake);
    } catch (err) {
    
      console.error(`Failed to read ${fileName}:`, err.message);
    }
  }
 
  fs.writeFileSync("output.txt", combinedLines.join("\n"), "utf8");
  console.log(
    `\nSuccessfully saved ${combinedLines.length} total lines into output.txt`,
  );
}
mergeFiles();
