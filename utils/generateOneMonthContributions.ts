type Entry = {
    id: number;
    description: string | null;
    img_id: number | null;
    project_id: number;
    user_id: number;
    created_date: Date;
}

export function generateOneMonthContributions(numberOfDays: number, entries: Entry[]) {
    const result: number[] = new Array(numberOfDays).fill(0);
    
    for (let i = 0; i < entries.length; i++) {
        const UTCTime = entries[i].created_date.getUTCHours();
        entries[i].created_date.setUTCHours(UTCTime + 9);
        result[entries[i].created_date.getUTCDate()-1] += 1;
    }
    return result;
}