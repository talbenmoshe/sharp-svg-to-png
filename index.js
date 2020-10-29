const sharp = require('sharp');
const path = require('path');

const startTime = process.hrtime();
sharp('./test.svg')
  .resize({ width: 7500 })
  .png()
  .toFile(path.join(__dirname, `new-file${new Date().getTime()}.png`))
  .then(function (info) {
    const endTime = process.hrtime(startTime);
    const nanoseconds = endTime[0] * 1e9 + endTime[1];
    const milliseconds = nanoseconds / 1e6;
    console.log(`took - ${milliseconds / 1000} seconds`);
    console.log(info);
  });
