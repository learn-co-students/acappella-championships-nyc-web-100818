// const table = document.querySelector('table')

const groupDiv = document.getElementById('table-body')
const winnerDiv = document.getElementById('winner')

const displayAllGroups = () => {
  winnerDiv.innerHTML = ""
  groupDiv.inngerHTML = ""
  // debugger
  dataStore.groupz.forEach(group => {
    displayGroup(group)
  })
}

const displayGroup = (group) => {
  const collegeName = group.college.name
  const division = group.college.division
  groupDiv.innerHTML += `
  <tr data-id="${group.id}">
    <td>${collegeName}</td>
    <td>${group.name}</td>
    <td>${group.membership}</td>
    <td>${division}</td>
    <td><img src='./assets/trophy.png' class="trophy" data-id="${group.id}"></td>
    <td><button data-id="${group.id}" class="button"> Delete</td>
  </tr>
  `
}

const removeGroup = (group) => {
  const rows = groupDiv.querySelectorAll('tr')
  let tr = ""
  rows.forEach(row => {
    if (row.dataset.id == group.id) {
      tr = row;
    }
  })
  tr.remove()
  addToWinner(group)
}

const addToWinner = (group) => {
  const oldDiv = winnerDiv.children[0]
  let oldGroupId;
  if (oldDiv) {
    oldGroupId = oldDiv.dataset.id
  }
  let oldGroup = dataStore.groupz.find(group => group.id == oldGroupId)
  console.log(oldGroup);
  winnerDiv.innerHTML = ""
  winnerDiv.innerHTML += `<h2 data-id="${group.id}"> Winner: ${group.name}</h2>`
  reRenderGroup(oldGroup)
}

const reRenderGroup = (group) => {
  if (group != undefined) {
    displayGroup(group)
  }
}

const deleteGroup = (group) => {
  const groupIndex = dataStore.groupz.indexOf(group);
  dataStore.groupz.splice(groupIndex, 1)
  proxy1.groupz = dataStore.groupz
  blastGroup(group);
}
