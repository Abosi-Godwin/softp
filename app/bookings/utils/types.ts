export type ServiceKey = "acting" | "music" | "animation";
export type FieldType = "chips" | "text" | "textarea";
export type Step = "service" | "details" | "slot" | "contact" | "done";

export interface FormField {
    id: string;
    label: string;
    type: FieldType;
    options?: string[];
    placeholder?: string;
}

export interface Service {
    label: string;
    tag: string;
    fields: FormField[];
}

export interface TimeSlot {
    id: string;
    date: Date;
    label: string;
    dateLabel: string;
    booked: boolean;
}

export interface ContactInfo {
    name: string;
    email: string;
    message: string;
}
