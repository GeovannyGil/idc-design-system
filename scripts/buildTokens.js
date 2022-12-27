const { tokens } = require('../consts/tokens')
const fs = require('fs')

// 2 - Cambiar  los keys a kebab-case

const toKebabCase = (string) =>
  string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()

function transformTokens (parentKey, object) {
  const objectKeys = Object.keys(object)
  return objectKeys.reduce((tokensTransformed, objectKey) => {
    const value = object[objectKey]
    if (typeof value === 'object') {
      const customProperty = parentKey ? `${parentKey}-${objectKey}` : objectKey
      return `${tokensTransformed}\n${transformTokens(
        toKebabCase(customProperty),
        value
      )}`
    }
    return `${tokensTransformed}\n\t--${parentKey}-${toKebabCase(
      objectKey
    )}: ${value};`
  }, '')
}

function buildTokens () {
  const customProperties = `${transformTokens(
    null,
    tokens
  )}\n`
  const data = [':root {', customProperties.trim()].join('\n\t').concat('\n}')
  fs.writeFile('./styles/tokens.css', data, 'utf8', function (error) {
    if (error) {
      return console.error(error)
    }
  })
}

buildTokens()
