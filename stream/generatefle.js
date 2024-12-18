const fs = require('fs');

// Define the file path and content
const filePath = 'large-file.txt';
const content = 'This is a test line.\n';  // Content to be repeated
const numLines = 5000;  // Number of lines to write

// Create a write stream and write content to the file
const writerStream = fs.createWriteStream(filePath);

// Write content to the file multiple times to make it large
for (let i = 0; i < numLines; i++) {
    writerStream.write(`${content} ${i}`);
}

// Close the stream
writerStream.end(() => {
    console.log(`Large file created with ${numLines} lines.`);
});
