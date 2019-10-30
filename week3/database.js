const fs = require('fs')

const save = function(filename, data) {
  fs.writeFile(filename, JSON.stringify(data, null, 2))
}

const load = function(filename, handler) {
  // return JSON.parse(
  fs.readFile(filename, 'utf8', (err, file) => {
    if (err) {
      console.log("There is a read error:", err)
      return
    }
    handler(null, JSON.parse(file));
  })
}

module.exports = { save, load }