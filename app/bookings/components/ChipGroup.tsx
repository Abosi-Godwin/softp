

interface ChipGroupProps {
    options: string[];
    value: string[];
    onChange: (v: string[]) => void;
}

export function ChipGroup({ options, value, onChange }: ChipGroupProps) {
    const toggle = (opt: string) =>
        onChange(value.includes(opt) ? value.filter(v => v !== opt) : [...value, opt]);

    return (
        <div className="flex flex-wrap gap-3 mt-3">
            {options.map(opt => (
                <button
                    key={opt}
                    type="button"
                    onClick={() => toggle(opt)}
                    className={`px-5 py-2 text-[10px] font-bold tracking-widest uppercase transition-all duration-300 border ${
                        value.includes(opt)
                            ? "border-gold text-gold bg-gold/10"
                            : "border-white/10 text-white/40 hover:border-white/30 hover:text-white"
                    }`}
                >
                    {opt}
                </button>
            ))}
        </div>
    );
}
