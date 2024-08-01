const fs = require('fs');

const content = 'This is the content to write into the file.';

fs.writeFile('example.txt', content, (err) => {
    if (err) {
        console.error('An error occurred while writing to the file:', err);
    } else {
        console.log('File has been written successfully.');
    }
});
