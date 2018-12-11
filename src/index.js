// This does not address double or triple bonus and winner does not persist

let teamBody;

// On initial loadup
document.addEventListener('DOMContentLoaded', () => {
  teamBody = document.querySelector('tbody')
  displayAll()
})

// Display all teams
function displayAll() {
  fetch('http://localhost:3000/a_cappella_groups')
  .then(res => res.json())
  .then(res => {
    res.forEach((team) => {
      const newTeam = new ACappellaGroup(team)
      teamBody.innerHTML += newTeam.render()
    })
    bindClickTr()
  })
}

// Add Winner Functions
function bindClickTr() {
  const rows = document.querySelectorAll('tr')
  rows.forEach((row) => {
    if (row.id !== "") {
      row.addEventListener('click', setWinner)
      row.style.display = "" // Make all rows display
    }
  })
}

function setWinner(event) {
  const row = event.target.parentNode
  row.style.display = "none" // 'Remove' the winning row

  const winnerText = document.getElementById('winner')
  winnerText.innerHTML = `Winner: ${row.children[1].innerHTML}`
}
