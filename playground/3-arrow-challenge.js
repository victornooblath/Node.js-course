const tasks = {
    tasks: [{
        text: 'Grocery shooping',
        completed: true
    }, {
        text: 'celan yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo() {
        return tasksToDo = tasks.filter((task) => !task.completed)
    }
}

console.log(tasks.getTasksToDo())
