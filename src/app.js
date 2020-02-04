import moment from 'moment'

const start = moment('2020-02-12')
const end = moment('2020-03-29')
//calculate only Saturday
const dailyInfo = [false, false, false, false, false, false, true]
let totalDays = 0;

dailyInfo.forEach((info, index) => {
    if (info === true) {
        let current = start.clone();
        if (current.isoWeekday() <= index) {
            current = current.isoWeekday(index);
        } else {
            current.add(1, 'weeks').isoWeekday(index);
        }
        while (current.isSameOrBefore(end)) {
            current.day(7 + index);
            totalDays += 1;
        }
    }
})

console.log(totalDays)

