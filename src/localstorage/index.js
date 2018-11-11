// const todoList = []

export default {
  getItem () {
    // console.log(JSON.parse(localStorage.getItem('todo-mvvm')))
    if (localStorage.getItem('todo-mvvm')) {
      return JSON.parse(localStorage.getItem('todo-mvvm'))
    }
  },
  setItem (n) {
    let todoList = this.getItem() || []
    if (n) {
      todoList.push(n)
    }
    let items = JSON.stringify(todoList)
    localStorage.setItem('todo-mvvm', items)
  },
  delItem (n) {
    let delItemList = this.getItem()
    delItemList.splice(n, 1)
    let item = JSON.stringify(delItemList)
    localStorage.setItem('todo-mvvm', item)
  },
  removeItem () {
    localStorage.removeItem('todo-mvvm')
  }
}
