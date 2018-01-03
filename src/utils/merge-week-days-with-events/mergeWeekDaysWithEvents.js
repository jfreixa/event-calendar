export default function mergeWeekDaysWithEvents(weekDays, events) {
    return weekDays.map(week => week.map(day => {
        if (!day.actualMonth) {
            return day;
        }
        let event = events.find(event => event.day === day.number);
        return event ? {
            ...day,
            assisted: event.assisted,
            missed: event.missed
        } : day; 
    }));
}