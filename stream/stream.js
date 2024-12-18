const fs = require('fs');

// Create a readable stream to read the large file in chunks
const readerStream = fs.createReadStream('large-file.txt', { encoding: 'utf8' });

// Handle stream events
readerStream.on('data', (chunk) => {
    console.log('Chunk received:', chunk.substring(0, 100));  // Display part of the chunk
});

readerStream.on('end', () => {
    console.log('File reading completed.');
});

readerStream.on('error', (err) => {
    console.error('Error reading file:', err);
});
