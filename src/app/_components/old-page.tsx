import About from '@/components/About'
import Container from '@/components/Container'
import LeftSticky from '@/components/LeftSticky'
import PastWork from '@/components/Work'
import Image from 'next/image'
import HistorySection from '@/components/History'
import NoiseBg from '@/components/NoiseBg'
import dynamic from 'next/dynamic'
import Shift from '@/components/Shift'
export default function Home() {
    return (
        <div className='relative'>
            <Shift />
            <div>

                <div className="w-full">
                    <section id="top" className="pt-32 pb-12 lg:pt-52 xl:pt-64 lg:pb-32 xl:pb-44">
                        <Container>
                            <div className="max-w-[960px] mx-auto">
                                <div className="mb-24 lg:pb-24 xl:pb-32 flex justify-center items-center -mx-6">
                                    {/* <div className="grow px-6"> <div className="h-px bg-background "></div></div> */}
                                    <h2 className="text-6xl lg:text-8xl xl:text-9xl 2xl:text-[145px]  px-6 text-center">Mirul Nasir</h2>


                                </div>
                                <div className="flex flex-wrap items-center mx-auto">
                                    <div className="w-full md:w-1/4">
                                        <LeftSticky />
                                    </div>
                                    <div className="w-full md:w-3/4">
                                        <div className="lg:pl-12 mt-16 md:mt-0">
                                            <div
                                                className="text-3xl lg:text-6xl 2xl:text-5xl max-w-4xl mx-auto text-center !leading-none"
                                            >
                                                Front-End Developer.
                                            </div>
                                            <div
                                                className="text-3xl mt-1 lg:mt-3 lg:text-4xl 2xl:text-4xl max-w-4xl mx-auto text-center !leading-none"
                                            >
                                                Customer Experience Specialist.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </section>
                    <section id="work" className="py-16 lg:py-24">
                        <Container size="lg">
                            <div className="relative w-full h-full">
                                <PastWork />
                            </div>
                        </Container>
                    </section>
                    <section id="about" className="">
                        <Container>
                            <About />
                        </Container>
                    </section>
                    <section id="history" className="py-16 lg:py-20">
                        <Container>
                            <HistorySection />
                        </Container>
                    </section>
                </div>
            </div>
        </div>
    )
}
