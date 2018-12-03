groupDiv.addEventListener('click', event => {
  if (event.target.className == "trophy") {
    const groupId = event.target.dataset.id
    const group = dataStore.groupz.find(group => group.id == groupId)
    removeGroup(group);
  } else if (event.target.className == "button"){
    const groupId = event.target.dataset.id
    const group = dataStore.groupz.find(group => group.id == groupId)
    // console.log(group);
    deleteGroup(group)
  }
})
