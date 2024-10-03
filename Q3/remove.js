const fs = require('fs');
const path = require('path');
const logsDir = path.join(__dirname, 'Logs');

function removeLogFiles() {
    if (fs.existsSync(logsDir)) {
        fs.readdirSync(logsDir).forEach(file => {
            const filePath = path.join(logsDir, file);
            console.log(`Deleting file: ${filePath}`);
            fs.unlinkSync(filePath);
        });
        fs.rmdirSync(logsDir);
        console.log('Logs directory deleted.');
    } else {
        console.log('Logs directory does not exist.');
    }
}

removeLogFiles();
