const tasks = [
    { id: '101', name: 'Task - 1', desc: 'Task - 1 Desc' },
    { id: '102', name: 'Task - 2', desc: 'Task - 2 Desc' },
    { id: '103', name: 'Task - 3', desc: 'Task - 3 Desc' }
]

const printTaskName = () => {
    setTimeout(() => {
        tasks.forEach(task => console.log(task.name))
    }, 5000)
}

const createTask = (task, callback) => {
    setTimeout(() => {
        tasks.push(task)
        // ERROR
        let error = true
        if (!error) {
            callback()
        }
    }, 2000)
}


createTask({ id: '104', name: 'Task - 4', desc: 'Task - 4 Desc' }, printTaskName)
// printTaskName() --> X