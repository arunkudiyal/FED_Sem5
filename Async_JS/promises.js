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

const createTask = (task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            tasks.push(task)
            // ERROR
            let error = true
            if (!error) {
                resolve()
            } else {
                reject
            }
        }, 2000)
    })
}


createTask({ id: '104', name: 'Task - 4', desc: 'Task - 4 Desc' })
    .then(printTaskName)
    .catch(err => console.log('Something went wrong'))
// printTaskName() --> X