const todos = [
    { id: '1', name: 'Take out trash' },
    { id: '2', name: 'Complete Assignment' },
    { id: '3', name: 'Go for a walk' },
]

// const getTaskName = () => {
//     setTimeout(() => {
//         todos.forEach(todo => console.log(todo.name))
//     }, 2000)
// }

// const createTask = (task) => {
//     setTimeout(() => {
//         todos.push(task)
//     }, 3000)
// }

// createTask({ id: '4', name: 'Go for shopping' })
// getTaskName()

// CALLBACK

const getTaskName = () => {
    setTimeout(() => {
        todos.forEach(todo => console.log(todo.name))
    }, 2000)
}

const createTask = (task, callback) => {
    setTimeout(() => {
        todos.push(task)
        callback()
    }, 3000)
}

createTask({ id: '4', name: 'Go for shopping' }, getTaskName)