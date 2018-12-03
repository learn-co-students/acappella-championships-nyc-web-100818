const dataStore = { groupz: []}

const helper1 = {
  set: () => {
    console.log("rendering all groups");
    displayAllGroups()
  }
}


let proxy1 = new Proxy(dataStore, helper1)

class Group {
  constructor(group) {
    this.id = group.id;
    this.name = group.name;
    this.membership = group.membership;
    this.college = group.college;
    dataStore.groupz.push(this);
  }
}
