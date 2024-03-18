export function calculateStreaks(allDayArray: number[]) {
    let onCurrent: boolean = true;
    let onStreak: boolean = true;
    let onSequence: boolean = true;
    let longest: number = 0;
    let current: number = 0;
    let sequence: number = 0;
    for (let i = 0; i < allDayArray.length; i++) {
        if (allDayArray[i] !== 0) {
            onSequence = true;
            if (onCurrent) {
                current += 1;
            }
            if (onSequence) {
                sequence += 1;
            }
            if (sequence > longest) {
                longest = sequence;
            }
        } else {
            onCurrent = false;
            onSequence = false;
            sequence = 0;
        }
    }
    return {
        current: current,
        longest: longest
    }
}