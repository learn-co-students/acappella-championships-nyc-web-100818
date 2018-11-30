class ACapellaGroup {
  constructor({id, name, membership, college}) {
    this.id = id
    this.name = name
    this.membership = membership
    this.college = College.findOrCreate(college)
    this.winner = false
    ACapellaGroup.all.push(this)
  }

  renderRow() {
    return `<tr><td>${this.college.name}</td><td>${this.name}</td><td>${this.membership}</td><td>${this.college.division}</td><td><img src='./assets/trophy.png' data-action="crown-winner" data-id='${this.id}'/></td><td><button data-id='${this.id}' data-action="delete">Delete</button></td></tr>`
  }

  static get currentWinner() {
    return ACapellaGroup.findBy("winner", true)
  }

  static set currentWinner(group) {
    if (ACapellaGroup.currentWinner)
      ACapellaGroup.currentWinner.winner = false
    group.winner = true
  }

  static remove(id) {
    ACapellaGroup.adapter.delete(id) // remove from API
    const i = ACapellaGroup.all.findIndex(a => a.id == id)
    ACapellaGroup.all.splice(i, 1) // remove local
  }

  static findBy(key, value) {
    return ACapellaGroup.all.find(a => a[key] == value)
  }

  static sortBy(key) {
    ACapellaGroup.all.sort((a,b) => {
      let a1 = nestedObjectValue(a, key.split("."))
      let b1 = nestedObjectValue(b, key.split("."))

      return (a1 < b1) ? -1 : ((a1 > b1) ? 1 : 0)
    })
  }

  static renderWinner() {
    if (ACapellaGroup.currentWinner) {
      return `Winner: ${ACapellaGroup.currentWinner.college.name} ${ACapellaGroup.currentWinner.name}`
    } else {
      return `No winner selected`
    }
  }

  static renderTable() {
    return ACapellaGroup.all.filter(a => !a.winner)
            .map(a => a.renderRow()).join('')
  }

  static populateFromAPI() {
    return ACapellaGroup.adapter.getAll()
            .then(json => {
              json.forEach(acaObj => {
                new ACapellaGroup(acaObj)
              })
            })
  }

}

ACapellaGroup.all = []
ACapellaGroup.adapter = new JSONAPIAdapter('http://localhost:3000/a_cappella_groups')