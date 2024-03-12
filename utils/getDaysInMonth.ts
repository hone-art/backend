export function getDaysInMonth(yearMonth: string): number {
    const [year, month] = yearMonth.split('-').map(Number);
    // console.log("year==========", year);
    // console.log("month=========", month);
    const date = new Date(year, month, 0);
    // console.log(date.getDate());
    return date.getDate();
}