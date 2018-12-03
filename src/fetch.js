fetch('http://localhost:3000/a_cappella_groups')
.then(response => response.json())
.then(array => {
  array.forEach(group => new Group(group))
  proxy1.groupz = dataStore.groupz
})

const blastGroup = (group) => {
  fetch(`http://localhost:3000/a_cappella_groups/${group.id}`, {
    method: 'DELETE'
  })
}
