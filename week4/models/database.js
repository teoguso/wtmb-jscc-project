const fs = require('fs')

const save = function(filename, data) {
  fs.writeFile(__dirname + "/" + filename, JSON.stringify(data, null, 2),
    (err) => {
      if (err) throw err
      console.log("Saved " + filename)
    }
  )
}

// const load = function(filename, handler) {
//   // return JSON.parse(
//   fs.readFile(filename, 'utf8', (err, file) => {
//     if (err) {
//       console.log("There is a read error:", err)
//       return
//     }
//     handler(null, JSON.parse(file));
//   })
// }

let readFile = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, contents) => {
            if (err) {
                console.log('there is an error', err)
                return reject(err)
            }

            resolve(contents)
        })
    })
}

async function load(filename) {
    const contents = await readFile(__dirname + "/" + filename)
    // console.log(contents1)
    return JSON.parse(contents)
}

module.exports = { save, load }