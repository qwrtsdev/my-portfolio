import Image from "next/image";
import GlassPad from "@/components/glasspad";
import Heart from "@/components/heart";

export default function Home() {
    return (
        <div className="flex justify-center">
            <div className="max-w-[460px] w-[90%] md:w-[100%]  text-center">
                <p className="font-sfb text-white">hello there <span>,</span></p>
                <p className="font-sfb text-white">strangers.</p>
                {/* Card Container */}
                <div>
                    <GlassPad>
                        <div className="flex flex-row justify-between w-full">
                            <div className="flex flex-row">
                                {/* Profile Image Display */}
                                <div>
                                    <Image
                                        src="/qwrtsirllogo.jpg"
                                        width="100"
                                        height="100"
                                        className="rounded-md"
                                        alt="profile image display"
                                    />
                                </div>
                                {/* Profile Name & Informations */}
                                <div className="">
                                    <p>NUTTAPONG NAKAWIROT</p>
                                    <div className="">
                                        <p>Junior Frontend Developer</p>
                                        <p>Songkhla, Thailand.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Heart Button */}
                            <div className="flex justify-end">
                                <Heart />
                            </div>
                        </div>
                    </GlassPad>
                </div>
            </div>
        </div>
    );
}
