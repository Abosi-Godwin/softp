import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import type { TimeSlot } from "../utils/types";
import { generateSlots } from "../utils/slots";

export function useBookingSlots(active: boolean) {
    const [slots, setSlots] = useState<TimeSlot[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!active) return;

        const fetchSlots = async () => {
            setLoading(true);
            try {
                const allSlots = generateSlots();
                if (allSlots.length === 0) { setSlots([]); return; }

                const q = query(
                    collection(db, "bookings"),
                    where("__name__", "in", allSlots.map(s => s.id))
                );
                const snapshot = await getDocs(q);
                const bookedIds = new Set(snapshot.docs.map(d => d.id));
                setSlots(allSlots.map(slot => ({ ...slot, booked: bookedIds.has(slot.id) })));
            } catch (err) {
                console.error("Error fetching slots:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchSlots();
    }, [active]);

    const markBooked = (id: string) =>
        setSlots(prev => prev.map(s => s.id === id ? { ...s, booked: true } : s));

    return { slots, loading, markBooked };
}
