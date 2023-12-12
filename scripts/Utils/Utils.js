export function containsWord(originalString, wordToTest) {
  wordToTest = wordToTest.toLowerCase()
  originalString = originalString.toLowerCase()
  const regex = new RegExp(`\\b${wordToTest}\\b`, 'g')
  return regex.test(originalString)
}

export function displayChosenTags(category, value) {
  let selected = []
  const chosenTagsDiv = document.querySelector('.chosen-tags')
  chosenTagsDiv.classList.replace('closed', 'opened')
  const chosenTag = document.createElement('div')
  chosenTag.classList.add('chosen-tag')
  chosenTag.innerHTML = `
    <span class='tag-text'>${value}</span>
    <button>
      <span class="fa-solid fa-xmark remove-tag"></span>
    </button>
  `
  if (category === 'ingredients') {
    selected = JSON.parse(sessionStorage.getItem('selectedIngredients'))
    selected.push(value)
    selected = [...new Set(selected)]
    sessionStorage.setItem('selectedIngredients', JSON.stringify(selected))
  } else if (category === 'appliances') {
    selected = JSON.parse(sessionStorage.getItem('selectedAppliances'))
    selected.push(value)
    selected = [...new Set(selected)]
    sessionStorage.setItem('selectedAppliances', JSON.stringify(selected))
  } else if (category === 'ustensils') {
    selected = JSON.parse(sessionStorage.getItem('selectedUstensils'))
    selected.push(value)
    selected = [...new Set(selected)]
    sessionStorage.setItem('selectedUstensils', JSON.stringify(selected))
  }
  chosenTagsDiv.appendChild(chosenTag)
}
