import Image from "next/image";

const FEATURES_MAP = [
    {
        label: "Fast-Connection",
        description: "Stable & high-speed internet",
        icon: "/assets/images/icons/home-trend-up.svg",
    },
    {
        label: "Secure-Network",
        description: "Protected with advanced firewall",
        icon: "/assets/images/icons/shield-check.svg",
    },
    {
        label: "24/7-Support",
        description: "Always-on technical assistance",
        icon: "/assets/images/icons/headset-support.svg",
    },
];



const OfficeFeatures = ({ features }: { features: string[] }) => {
    return (
        <div className="grid grid-cols-3 gap-x-5 gap-y-[30px]">

            {features.map((feature) => {
                const matched = FEATURES_MAP.find((f) => f.label === feature);

                if (!matched) return null;
                return (
                    <div key={feature} className="flex items-center gap-4" >
                        <Image
                            src={matched.icon}
                            className="w-[34px] h-[34px]"
                            alt="icon"
                            width={34}
                            height={34}
                        />
                        <div className="flex flex-col gap-[2px]">
                            <p className="font-bold text-lg leading-[24px]">{matched.label}</p>
                            <p className="text-sm leading-[21px]">{matched.description}</p>
                        </div>
                    </div>
                );
            })}

        </div >
    );
}

export default OfficeFeatures;