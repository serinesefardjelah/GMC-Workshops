// Import the fs module
var fs = require('fs');

// File path for demonstration
var filePath = 'new_file.txt';

// 1. Create a file and write some text into it
console.log("Creating and writing to a file...");
fs.writeFile(filePath, 'Dummy Text For Testing !!!!', function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("File created and data written successfully!");

    // 2. Read the file asynchronously
    console.log("Reading the file asynchronously...");
    fs.readFile(filePath, function(err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("Asynchronous read: " + data.toString());

        // 3. Read the file synchronously
        console.log("Reading the file synchronously...");
        var syncData = fs.readFileSync(filePath);
        console.log("Synchronous read: " + syncData.toString());

        // 4. Get file information
        console.log("Getting file information...");
        fs.stat(filePath, function(err, stats) {
            if (err) {
                return console.error(err);
            }
            console.log("File Stats: ", stats);

            // 5. Open the file
            console.log("Opening the file...");
            fs.open(filePath, 'r+', function(err, fd) {
                if (err) {
                    return console.error(err);
                }
                console.log("File opened successfully!");

                // 6. Read from the file using file descriptor
                var buffer = new Buffer.alloc(1024);
                console.log("Reading the file using file descriptor...");
                fs.read(fd, buffer, 0, buffer.length, 0, function(err, bytesRead) {
                    if (err) {
                        return console.error(err);
                    }
                    console.log(bytesRead + " bytes read");
                    console.log(buffer.slice(0, bytesRead).toString());

                    // 7. Truncate the file
                    console.log("Truncating the file to 10 bytes...");
                    fs.ftruncate(fd, 10, function(err) {
                        if (err) {
                            return console.error(err);
                        }
                        console.log("File truncated successfully!");

                        // 8. Close the file
                        console.log("Closing the file...");
                        fs.close(fd, function(err) {
                            if (err) {
                                return console.error(err);
                            }
                            console.log("File closed successfully!");

                            // 9. Delete the file
                            console.log("Deleting the file...");
                            fs.unlink(filePath, function(err) {
                                if (err) {
                                    return console.error(err);
                                }
                                console.log("File deleted successfully!");

                                // 10. Create a directory
                                var dirPath = 'test_dir';
                                console.log("Creating a directory...");
                                fs.mkdir(dirPath, function(err) {
                                    if (err) {
                                        return console.error(err);
                                    }
                                    console.log("Directory created successfully!");

                                    // 11. Read the directory
                                    console.log("Reading the directory...");
                                    fs.readdir('.', function(err, files) {
                                        if (err) {
                                            return console.error(err);
                                        }
                                        console.log("Files in directory: ", files);

                                        // 12. Remove the directory
                                        console.log("Removing the directory...");
                                        fs.rmdir(dirPath, function(err) {
                                            if (err) {
                                                return console.error(err);
                                            }
                                            console.log("Directory removed successfully!");
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
