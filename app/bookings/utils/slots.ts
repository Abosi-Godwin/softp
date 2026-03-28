import type { TimeSlot } from "./types";

function getFridayOfWeek(date: Date): Date {
    const d = new Date(date);
    const diff = (5 - d.getDay() + 7) % 7;
    d.setDate(d.getDate() + diff);
    d.setHours(0, 0, 0, 0);
    return d;
}

export function generateSlots(): TimeSlot[] {
    const now = new Date();
    const baseFriday = getFridayOfWeek(now);
    const HOURS = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    const slots: TimeSlot[] = [];

    for (let week = 0; week < 3; week++) {
        const friday = new Date(baseFriday);
        friday.setDate(friday.getDate() + week * 7);
        const dateLabel = friday.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" });

        for (const hour of HOURS) {
            const slotDate = new Date(friday);
            slotDate.setHours(hour, 0, 0, 0);
            if (slotDate <= now) continue;

            const id = [
                friday.getFullYear(),
                String(friday.getMonth() + 1).padStart(2, "0"),
                String(friday.getDate()).padStart(2, "0"),
                String(hour).padStart(2, "0")
            ].join("-");

            const label = slotDate.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
            slots.push({ id, date: slotDate, label, dateLabel, booked: false });
        }
    }
    return slots;
}

export function groupSlotsByDate(slots: TimeSlot[]): Record<string, TimeSlot[]> {
    return slots.reduce<Record<string, TimeSlot[]>>((acc, slot) => {
        (acc[slot.dateLabel] ??= []).push(slot);
        return acc;
    }, {});
}
