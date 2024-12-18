const fs = require('fs');

// Read the entire large file at once
fs.readFile('large-file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    console.log('File content read successfully.');
    // Uncomment to display part of the file (useful for large files)
    console.log(data.substring(0, 100));  // Display only the first 100 characters
});
