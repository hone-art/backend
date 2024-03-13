export function getDaysInMonth(yearMonth: string): number {
    const [year, month] = yearMonth.split('-').map(Number);
    const date = new Date(year, month, 0);
    return date.getDate();
}