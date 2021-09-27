const fs = require('fs')

fs.writeFile("./abis/test.txt", "hello there", (err) => {
  if (err) throw err;
  console.log("file has been saved")
})
