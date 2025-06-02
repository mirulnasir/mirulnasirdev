'use client'
import Image from 'next/image'
import Link from 'next/link'

type Props = {

}

const LeftSticky = ({ }: Props) => {
    // const lenis = useLenis()
    const handleClick = (target: string) => {
        // lenis.scrollTo(target)
    }
    return (
        <div className="pb-0 md:sticky top-0">
            <div
                className="relative parallax-menu w-fit px-4 lg:px-12 mx-auto -translate-x-8 md:translate-x-0 text-foreground"
            >
                <div className="w-32 h-44"></div>

                <div
                    data-depth="0.2"
                    className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
                >
                    <div
                        className="menu-item-hi -top-4 absolute -left-3 w-16 h-fit !leading-tight text-lg -rotate-6 bg-foreground border border-rose-600 hover:bg-rose-500 transition-all text-background hover:scale-125 p-2 rounded-md pointer-events-auto cursor-pointer"
                    >
                        hi, i&rsquo;m mirul
                    </div>
                </div>
                <Link
                    href="/#top"
                    onClick={() => handleClick('#top')}
                    className="menu-logo w-32 h-44 absolute top-0 left-12 overflow-hidden"
                >
                    <Image
                        className="menu-logo-avatar z-[1] w-32 h-44 absolute overflow-hidden rounded-2xl object-cover"
                        src={'/handsome-mirul-nasir.jpg'}
                        width={128}
                        height={176}
                        alt="Mirul Nasir"
                    />
                    <div
                        className="menu-logo-text font-medium bg-black text-white text-2xl p-3 absolute top-0 left-0 w-36 h-48 flex items-center justify-center opacity-0"
                    >
                        mn
                    </div>
                </Link>

                <div
                    data-depth="0.8"
                    className="absolute top-0 left-0 w-full h-full z-[2] pointer-events-none"
                >
                    <Link
                        href="/#contact"
                        onClick={() => handleClick('#contact')}
                        className="menu-item-contact absolute bottom-3 w-fit h-fit text-lg -left-6 rotate-6 bg-foreground border border-indigo-600 hover:bg-indigo-500 transition-all text-background hover:scale-125 p-2 rounded-md pointer-events-auto cursor-pointer"
                    >
                        get in touch
                    </Link>
                </div>
                <div
                    data-depth="0.6"
                    className="z-[2] absolute top-0 left-0 w-full h-full pointer-events-none"
                >
                    <Link
                        href="/#about"
                        onClick={() => handleClick('#about')}
                        className="menu-item-about absolute bottom-32 -right-20 md:-right-12 text-lg -rotate-6 w-fit h-fit bg-foreground border border-yellow-600 hover:bg-yellow-500 transition-all text-background hover:scale-125 p-2 rounded-md pointer-events-auto cursor-pointer"
                    >
                        about me
                    </Link>
                </div>
                <div
                    data-depth="0.5"
                    className="z-[2] absolute top-0 left-0 w-full h-full pointer-events-none"
                >
                    <Link
                        href="/#work"
                        onClick={() => handleClick('#work')}
                        className="menu-item-work absolute -bottom-2 -right-24 md:-right-12 w-fit h-fit text-lg -rotate-6 bg-foreground border border-teal-600 hover:bg-teal-500 transition-all text-background hover:scale-125 p-2 rounded-md pointer-events-auto cursor-pointer"
                    >
                        see my work here
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LeftSticky