class College {
  constructor(name, state, division) {
    this.name = name
    this.state = state
    this.division = division
    College.all.push(this)
  }

  static findOrCreate({ name, state, division }) {
    let college = College.all.find(c => c.name == name && c.state == state && c.division == division)
    if (!college)
      college = new College(name, state, division)
    return college
  }
}

College.all = []