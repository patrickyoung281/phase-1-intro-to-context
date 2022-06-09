
const employeeData = ["Joe", "Smith", "Cashier", "$15.00"]

function createEmployeeRecord (array) {
    const employeeDataObj = Object.assign({},array)
    employeeDataObj["firstName"] = employeeDataObj["0"];
    delete employeeDataObj["0"]
    employeeDataObj["familyName"] = employeeDataObj["1"];
    delete employeeDataObj["1"]
    employeeDataObj["title"] = employeeDataObj["2"];
    delete employeeDataObj["2"]
    employeeDataObj["payPerHour"] = employeeDataObj["3"];
    delete employeeDataObj["3"]
    employeeDataObj["timeInEvents"] = [];
    employeeDataObj["timeOutEvents"] = [];
    return employeeDataObj;
};

console.log(createEmployeeRecord(employeeData));

function createEmployeeRecords(arrayOfArrays) {
    const newInfo = arrayOfArrays.map(createEmployeeRecord);
    return newInfo;
}


function createTimeInEvent (objectOfEmployeeRecord, dateStamp) {
    
    let [date, hour] = dateStamp.split(" ") 

    console.log("Date", date);

    objectOfEmployeeRecord.timeInEvents.push(
    {
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    });
    
    return objectOfEmployeeRecord;

}
createTimeInEvent(employeeData, "2022-09-18 1130");


function createTimeOutEvent (objectOfEmployeeRecord, dateStamp) {
    
    let [date, hour] = dateStamp.split(" ") 

    console.log("Date", date);

    objectOfEmployeeRecord.timeOutEvents.push(
    {
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    });
    
    return objectOfEmployeeRecord;

}

function hoursWorkedOnDate (objectOfEmployeeRecord, date) {

//on this date, when did you clock in?

    let timeIn = objectOfEmployeeRecord.timeInEvents.find((e) => e.date === date).hour
    let timeOut = objectOfEmployeeRecord.timeOutEvents.find((e) => e.date === date).hour

    let totalHours = (timeOut-timeIn)/100;

    return totalHours;
}

function wagesEarnedOnDate (objectOfEmployeeRecord, date) {
 
    let payRate = objectOfEmployeeRecord.payPerHour;
    let dailyHours = hoursWorkedOnDate(obj, date); 

    let totalPay = payRate * dailyHours

    return totalPay;
    
}

function allWagesFor (objectOfEmployeeRecord) {
    const allWages = obj.timeInEvents.map((day) => {return wagesEarnedOnDate(obj, day.date)})
    return allWages.reduce((acc, cv) => acc + cv)
}

function calculatePayroll (arrayOfEmployeeRecords) {
        const allPay = (records.map((empl) => {return allWagesFor(empl)}))
        return allPay.reduce((acc, cv) => acc + cv)
}

