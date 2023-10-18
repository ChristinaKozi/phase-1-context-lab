/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(info) {
    const [firstName, familyName, title, payPerHour] = info
    const employeeRecord = {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents: [],
        timeOutEvents: [],
      };
      return employeeRecord;
    }

function createEmployeeRecords(srcArray) {
    return srcArray.map(createEmployeeRecord);
}

function createTimeInEvent(dateStamp) {
    const [date,time] = dateStamp.split(' ')
    const [hour,min] = time.split(':')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour,10),
        date: date
    })
    return this
}

function createTimeOutEvent(dateStamp){
    const [date,time] = dateStamp.split(' ')
    const [hour,min] = time.split(':')
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour,10),
        date: date
    })
    return this
}

function hoursWorkedOnDate(dateStamp) {
    const [date,time] = dateStamp.split(' ')
    const timeInEvent = this.timeInEvents.find((event)=>event.date === date)
    const timeOutEvent = this.timeOutEvents.find((event)=>event.date === date)
    const hoursWorked = (timeOutEvent.hour - timeInEvent.hour)/100
    return hoursWorked
}   

function wagesEarnedOnDate(dateStamp) {
    const hoursWorked = hoursWorkedOnDate.call(this, dateStamp)
    return hoursWorked * this.payPerHour
}

function findEmployeeByFirstName(srcArray,firstName) {
    return srcArray.find((employee) => employee.firstName === firstName)
}

function calculatePayroll(employeeRecords) {
    let totalPayroll = 0;
    employeeRecords.forEach((employee) => {
        totalPayroll += allWagesFor.call(employee)
    })
    return totalPayroll
  }
