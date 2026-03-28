import { ChipGroup } from "./ChipGroup";
import type { FormField } from "../utils/types";

interface FieldRendererProps {
    field: FormField;
    value: string | string[];
    onChange: (v: string | string[]) => void;
}

const inputClass = "w-full bg-transparent border-b border-white/20 py-3 text-lg text-letters-primary placeholder:text-white/20 focus:outline-none focus:border-gold transition-colors duration-300 rounded-none";

export function FieldRenderer({ field, value, onChange }: FieldRendererProps) {
    return (
        <div className="mb-10">
            <label className="block text-xs font-bold tracking-widest uppercase text-white/60 mb-2">
                {field.label}
            </label>

            {field.type === "chips" && (
                <ChipGroup
                    options={field.options!}
                    value={Array.isArray(value) ? value : []}
                    onChange={onChange}
                />
            )}
            {field.type === "text" && (
                <input
                    type="text"
                    placeholder={field.placeholder}
                    value={typeof value === "string" ? value : ""}
                    onChange={e => onChange(e.target.value)}
                    className={inputClass}
                />
            )}
            {field.type === "textarea" && (
                <textarea
                    rows={4}
                    placeholder={field.placeholder}
                    value={typeof value === "string" ? value : ""}
                    onChange={e => onChange(e.target.value)}
                    className={`${inputClass} resize-y`}
                />
            )}
        </div>
    );
}
