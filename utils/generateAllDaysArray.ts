import { start } from "repl";

type entry ={
    id: number;
    description: string | null;
    img_id: number | null;
    user_id: number;
    created_date: Date;
}

export function generateAllDaysArray(entries: entry[], today: Date): number[] {
    let startTimeUTC = new Date(today);
    startTimeUTC.setHours(today.getHours() - 9);
    // console.log("startTimeUTC=======",startTimeUTC);
    let endTimeUTC = new Date(startTimeUTC);
    endTimeUTC.setDate(startTimeUTC.getDate() + 1);
    // console.log("endTimeUTC========",endTimeUTC);
    // console.log("check date comparism========", entries[0].created_date > startTimeUTC && entries[0].created_date< endTimeUTC);
    let allDayArray: number[] = [0];
    for (let i = 0; i < entries.length; i++) {
        // console.log("startTimeUTC=========",startTimeUTC);
        // console.log("today================", entries[i].created_date);
        // console.log("endTimeUTC===========", endTimeUTC);
        // console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
        if (entries[i].created_date > startTimeUTC && entries[i].created_date < endTimeUTC) {
            allDayArray[allDayArray.length - 1] += 1;
        }
        if (entries[i].created_date < startTimeUTC) {
            startTimeUTC.setDate(startTimeUTC.getDate() - 1);
            endTimeUTC.setDate(endTimeUTC.getDate() - 1);
            allDayArray.push(0);
            i -= 1;
        }
    }
    return allDayArray;
    // console.log(allDayArray);
}