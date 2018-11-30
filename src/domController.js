class DOMController {
  constructor() {
    this.winner = document.getElementById('winner')
    this.tableBody = document.getElementById('table-body')
    this.tableHeader = document.querySelector('.sortable')
    this.tableBody.addEventListener('click', this.handleTableClick.bind(this))
    this.tableHeader.addEventListener('click', this.handleTableHeaderClick.bind(this))
  }

  render() {
    this.winner.innerHTML = ACapellaGroup.renderWinner()
    this.tableBody.innerHTML = ACapellaGroup.renderTable()
  }

  handleTableClick(e) {
    if (e.target.dataset.action === "crown-winner") {
      const newWinner = ACapellaGroup.findBy("id", e.target.dataset.id)
      ACapellaGroup.currentWinner = newWinner
      this.render()
    } else if (e.target.dataset.action === "delete") {
      ACapellaGroup.remove(e.target.dataset.id)
      this.render()
    }
  }

  handleTableHeaderClick(e) {
    if (e.target.dataset.sort) {
      ACapellaGroup.sortBy(e.target.dataset.sort)
      this.render()
    }
  }
}