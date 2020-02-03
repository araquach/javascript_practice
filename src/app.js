import moment from 'moment'

const futureDate = moment().add(14, 'days')

let selectedDate = moment('2020-02-16')

let prebooked = function isPrebooked(future, selected) {
    if (future >= selected) {
        console.log("You can have it!")
    } else {
        console.log("You can't have it")
    }
}

prebooked(futureDate, selectedDate)

console.log(futureDate, selectedDate)