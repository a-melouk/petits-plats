export function containsWord(originalString, wordToTest) {
  wordToTest = wordToTest.toLowerCase()
  originalString = originalString.toLowerCase()
  const regex = new RegExp(`\\b${wordToTest}\\b`, 'g')
  return regex.test(originalString)
}
