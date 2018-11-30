// helper method to get nested object arrays from an array of keys
// using for sorting ACapellaGroup on nested properties
const nestedObjectValue = (nestedObject,keyArray) => {
  return keyArray.reduce((obj,keyVal) => {
    return (obj && obj[keyVal] !== 'undefined') ? obj[keyVal] : undefined
  }, nestedObject)
}

document.addEventListener('DOMContentLoaded', () => {
  const controller = new DOMController
  ACapellaGroup.populateFromAPI()
    .then(() => {
      controller.render()
    })
})