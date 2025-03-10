function getMonths(mo){
    mo = mo - 1 
    let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
    if (months[mo]){
        return months[mo];
    } else { 
        throw "InvalidMonthNo"; 
    }
}

try { 
    monthName = getMonths(myMonth);
} catch (e) {
    monthName = "unknown";
    logMyErrors(e);
} 