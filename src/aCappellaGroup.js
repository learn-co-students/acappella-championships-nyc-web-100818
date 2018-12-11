class ACappellaGroup {
  constructor(body) {
    this.id = body.id
    this.name = body.name
    this.membership = body.membership
    this.college = body.college
  }

  render() {
    return `<tr id='${this.id}'><td>${this.college.name}</td> <td>${this.name}</td> <td>${this.membership}</td> <td>${this.college.division}</td> <td><img src='./assets/trophy.png' data-id='${this.id}'/></td> </tr>`
  }
}
