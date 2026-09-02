const tasks = [
    { id: 1, name: 'Task - 1', desc: 'Task 1 Desc' },
    { id: 2, name: 'Task - 2', desc: 'Task 2 Desc' },
    { id: 3, name: 'Task - 3', desc: 'Task 3 Desc' }
]

const printTaskName = () => {
    setTimeout(() => {
        tasks.forEach(task => console.log(task.name))
    }, 3000)
}

const createTask = (task, cb) => {
    setTimeout(() => {
        tasks.push(task)
        // ERROR
        let error = true
        if (!error) {
            cb();
        }
    }, 2000)
}

createTask({ id: 4, name: 'Task - 4', desc: 'Task 4 Desc' }, printTaskName)
