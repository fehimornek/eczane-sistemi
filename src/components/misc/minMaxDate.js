const minMaxDate = () => {
    const fullDate = new Date()
    let month = fullDate.getMonth() + 1
    let year = fullDate.getFullYear()
    let date = fullDate.getDate()
    var lengthOfMonth= new Date(year, month, 0).getDate();
     
    let nextMonthPickableDays = 30 - (lengthOfMonth - date + 1)
    let maxDate = lengthOfMonth
    let maxYear = year
    let maxMonth = month
    // if it's not the beginning of the month (which is very unlikely)
    if (nextMonthPickableDays > 0) {
        maxDate = nextMonthPickableDays
        maxMonth = month + 1
        if (maxMonth === 13){
            maxMonth = 1
            maxYear = year + 1
        }
    }
    if (date < 10) date = "0" + date

    if (month < 10) month = "0" + month

    if (maxMonth < 10) maxMonth = "0" + maxMonth 
    
    if (maxDate < 10) maxDate = "0" + maxDate

    const minimumDate = year + "-" + month + "-" + date
    const maximumDate = maxYear + "-" + maxMonth + "-" + maxDate
    return [minimumDate, maximumDate, lengthOfMonth]
}

export default minMaxDate