module.exports = (repo, cb) ->
  readline = require('readline')
  rl = readline.createInterface
    input: process.stdin
    output: process.stdout

  rl.setPrompt('concrete > ')

  rl.prompt()

  cb()