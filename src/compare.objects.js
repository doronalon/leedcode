const _ = require('lodash')

function compare(oldObjects, newObjects) {

    let index = 0
    let oldObjectSort = _.sortBy(oldObjects, (element) => oldObjects.id)
    let newObjectSort = _.sortBy(newObjects, (element) => oldObjects.id)

    let summarize = {
        new: [],
        removed: [],
        updated: []
    }

    try {
        for (let index = 0; index < oldObjectSort.length && newObjectSort.length; index++) {
            if (newObjects[index].id < !oldObjectSort[index].id) {
                summarize.new.push(newObjectSort[index])
            } else if (!newObjects[index].id > oldObjectSort[index].id) {
                summarize.removed.push(newObjectSort[index])
            } else if ((newObjects[index].id === oldObjectSort[index].id) && !_.isEqual(newObjectSort, oldObjectSort)) {
                summarize.updated.push(newObjectSort)
            }
        }
        console.info(`\nNew:\n ${JSON.stringify(summarize.new)}`)
        console.log(`\nRemoved:\n ${JSON.stringify(summarize.removed)}`)
        console.info(`\nUpdated:\n ${JSON.stringify(summarize.updated)}`)
    } catch (e) {
        console.error(`e.message: ${e.message}`)
    }
}


let oldObjects = [
    {id: '1', name: 'Tom Bird', job: 'Lifeguard', age: 30, salary: 82},
    {id: '2', name: 'Kobi Perry', job: 'Actor', age: 18, salary: 68},
    {id: '3', name: 'Moni Levi', job: 'VP R&D', age: 44, salary: 700},
    {id: '5', name: 'Tal David', job: 'Devops', age: 20, salary: 100}
];


let newObjects = [
    {id: '1', name: 'Tom Bird', job: 'Waiter', age: 31, salary: 120},
    {id: '2', name: 'Kobi Perry', job: 'Actor', age: 18, salary: 68},
    {id: '3', name: 'Moni Levi', job: 'Architect', age: 44, salary: 210},
    {id: '4', name: 'Jacob Brener', job: 'CEO', age: 44, salary: 630}
];


console.log(compare(oldObjects, newObjects));


/* Expected Result
{
new: [
  { id: '4', name: 'Jacob Brener', job: 'CEO', age: 44, salary: 630 }
 ],
removed: [
  { id: '5', name: 'Tal David', job: 'Devops', age: 20, salary: 100 }
 ],
updated: [
  { id: '3', name: 'Moni Levi', job: 'Architect', age: 44, salary: 210 },
  { id: '1', name: 'Tom Bird', job: 'Waiter', age: 31, salary: 120 }
]
}

*/