import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const pillars = [
    {
        id: "build",
        label: "Build",
        description: "Establish robust GCC infrastructure with cutting-edge data architecture and AI capabilities",
        color: "bg-[#FBBF24]", // Amber/Yellow
        textColor: "text-white",
        position: "left-[28%]",
        side: "left"
    },
    {
        id: "operate",
        label: "Operate",
        description: "Streamline operations with intelligent automation and real-time monitoring systems",
        color: "bg-[#EF4444]", // Red
        textColor: "text-white",
        position: "left-[49%]",
        side: "top"
    },
    {
        id: "transfer",
        label: "Transfer",
        description: "Seamlessly migrate and integrate data across platforms with zero downtime",
        color: "bg-[#14B8A6]", // Teal/Green
        textColor: "text-white",
        position: "left-[71%]",
        side: "right"
    }
];

const PillarOverlays = () => {
    return (
        <TooltipProvider delayDuration={0}>
            <div className="absolute inset-0 pointer-events-none">
                {pillars.map((pillar) => (
                    <div
                        key={pillar.id}
                        className={cn(
                            "absolute top-[55%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto",
                            pillar.position
                        )}
                    >
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <button className="flex flex-col items-center group/btn relative">
                                    <span
                                        className={cn(
                                            "text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-tight opacity-90 transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:opacity-100 drop-shadow-2xl [writing-mode:vertical-lr] rotate-180",
                                            pillar.textColor
                                        )}
                                    >
                                        {pillar.label}
                                    </span>
                                </button>
                            </TooltipTrigger>
                            <TooltipContent
                                side={pillar.side as any}
                                className={cn(
                                    "max-w-[280px] p-4 rounded-xl shadow-2xl border-none animate-in zoom-in-95 duration-200",
                                    pillar.color,
                                    "text-white"
                                )}
                                sideOffset={20}
                            >
                                <div className="space-y-1">
                                    <h4 className="font-black text-xl leading-tight">{pillar.label}</h4>
                                    <p className="text-sm font-medium leading-relaxed opacity-95">
                                        {pillar.description}
                                    </p>
                                </div>
                                {/* Custom Pointer/Arrow can be added here if needed, but TooltipContent has default */}
                            </TooltipContent>
                        </Tooltip>
                    </div>
                ))}
            </div>
        </TooltipProvider>
    );
};

export default PillarOverlays;
