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
    
    
    // console.log(entries[0]);
    // console.log(typeof entries[].created_date);
    // entries.forEach(entry => entry.created_date.setHours(entry.created_date.getHours() + 9));
    for (let i = 0; i < entries.length; i++) {
        console.log("original time is====",entries[i].created_date);
        const UTCTime = entries[i].created_date.getUTCHours();
        console.log("UTC time is=======",UTCTime);
        // const localTime = entries[i].created_date.getHours();
        // console.log("Local time is ========", localTime);
        entries[i].created_date.setUTCHours(UTCTime + 9);
        console.log("UTC time is=======",entries[i].created_date.getUTCHours());

        
        console.log(entries[i].created_date.getUTCDate());
        result[entries[i].created_date.getUTCDate()-1] += 1;
    }
    // console.log(entries[0].created_date.getDate())
    // for (let i = 0; i < entries.length; i++){
    //     const day = entries[i].created_date.getDate();
    //     console.log(day);
    // }
    return result;
}