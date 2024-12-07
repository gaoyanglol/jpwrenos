import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        const parallaxScroll = () => {
            const bannerBg = document.getElementById('bannerBg');
            const scrollValue = window.scrollY;
            if (scrollValue <= 1000) {
                bannerBg.style.transform = `translateY(${scrollValue * 0.2}px)`;
            }
        }
        window.addEventListener('scroll', parallaxScroll);

        return () => {
            window.removeEventListener('scroll', parallaxScroll);
        }
        
    }, []);

    return (
        <main>
            {/* Banner Section */}
            <div className="h-[535px] md:h-[737px] lg:h-[939px] relative">
                <div id="bannerBg" className="h-full w-full absolute bg-[url(./images/banner_bg.webp)] bg-cover bg-center"></div>
                <div className="h-full w-full pt-28 md:pt-0 absolute flex flex-col justify-center gap-4 bg-neutral-800/60 will-change-transform">
                    <h1 className="font-logo 2xl:text-6xl lg:text-5xl text-4xl text-center text-white">JPW</h1>
                    <h2 className="font-medium 2xl:text-4xl lg:text-3xl text-2xl text-center text-white">General Home Renovation</h2>
                    <p className="px-4 sm:px-0 font-extralight 2xl:text-3xl lg:text-2xl text-xl text-center text-white">Transforming Spaces, Exceeding Expectations</p>
                </div>
            </div>
            {/* Content Section */}
            <div className="bg-neutral-800 relative">
                <div className="max-w-[1920px] mx-auto grid gap-0 md:pb-14 md:px-0 lg:p-14 xl:p-20">
                    {/* Our Service Section */}
                    <div id="services" className="bg-primary">
                        <div className="h-[700px] md:h-[500px] lg:h-[500px] xl:h-[700px] flex flex-col-reverse md:flex-row gap-px lg:mx-px">
                            <div className="basis-1/2 md:my-px bg-[url(./images/main_workers_1.avif)] bg-cover bg-center"></div>
                            <div className="basis-1/2 mt-px md:my-px bg-neutral-800 flex flex-col gap-4 lg:gap-7 justify-center items-start *:ml-[15%] lg:*:ml-[25%]">
                                <h3 className="font-medium 2xl:text-[40px] lg:text-3xl md:text-2xl text-2xl text-white">Our Services</h3>
                                <ul className="list-disc text-white">
                                    <li className="font-extralight leading-loose ml-6">Interior Renovation</li>
                                    <li className="font-extralight leading-loose ml-6">Drywall Installation</li>
                                    <li className="font-extralight leading-loose ml-6">Deck & Fences</li>
                                    <li className="font-extralight leading-loose ml-6">Flooring</li>
                                    <li className="font-extralight leading-loose ml-6">Painting</li>
                                    <li className="font-extralight leading-loose ml-6">Tiling</li>
                                </ul>
                                {/* <button className="px-10 py-3 lg:px-20 lg:py-5 text-sm bg-primary hover:bg-secondary font-light transition-all duration-300 ease-ease">MORE INFO</button> */}
                            </div>
                        </div>
                    </div>

                    {/* Feature Section */}
                    <div className="bg-primary">
                        <div className="my-px lg:mx-px md:my-0 flex flex-col md:flex-row gap-px h-[456px] md:h-[287px] *:basis-1/2">

                            <div className="flex md:gap-px *:basis-1/2 md:mb-px *:bg-neutral-800">
                                <div className="flex flex-col justify-center items-center gap-6">
                                    <div className="w-20 h-20 flex justify-center items-center">
                                        <svg preserveAspectRatio="xMidYMid meet" data-bbox="20.005 16.396 160 167.324" viewBox="20.005 16.396 160 167.324" height="64" width="64" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="">
                                            <g><path fill="#978673" d="M162.524 183.72H37.486V81.18h3.746v98.793h117.545V81.18h3.747v102.54z" data-color="1"></path><path fill="#978673" d="M177.356 99.045L99.995 21.694 22.654 99.045l-2.649-2.649 79.99-80 80.01 80-2.649 2.649z" data-color="1"></path></g>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-extralight text-center text-white">Vast Experience</h4>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center items-center gap-6">
                                    <div className="w-20 h-20 flex justify-center items-center">
                                        <svg preserveAspectRatio="xMidYMid meet" data-bbox="20 20 160 160" viewBox="20 20 160 160" height="64" width="64" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="">
                                            <g>
                                                <path d="M180 180H20V20h160v160zm-156.098-3.902h152.195V23.902H23.902v152.196z" fill="#978673" data-color="1"></path>
                                                <path d="M101.951 100h-3.902V75.824h-7.531c-7.823-.012-14.185-6.384-14.185-14.204 0-7.822 6.363-14.185 14.185-14.185h7.531V21.951h3.902v29.385H90.517c-5.67 0-10.283 4.613-10.283 10.283 0 5.672 4.614 10.293 10.286 10.302h11.431V100z" fill="#978673" data-color="1"></path>
                                                <path d="M178.049 101.951h-29.385V90.517c0-5.67-4.613-10.283-10.284-10.283s-10.293 4.614-10.303 10.286v11.431H100v-3.902h24.175v-7.531c.013-7.823 6.385-14.185 14.205-14.185 7.822 0 14.186 6.363 14.186 14.185v7.531h25.482v3.902z" fill="#978673" data-color="1"></path>
                                                <path d="M61.62 123.727h-.045a14.096 14.096 0 01-10.026-4.196 14.284 14.284 0 01-4.115-10.057v-7.523H21.951v-3.902h29.385v11.435a10.367 10.367 0 002.983 7.3 10.22 10.22 0 007.268 3.041h.032c5.656 0 10.275-4.592 10.302-10.253V98.138l28.086.106-.015 3.901-24.168-.09v7.525c-.037 7.815-6.406 14.147-14.204 14.147z" fill="#978673" data-color="1"></path>
                                                <path d="M101.951 178.049h-3.902v-29.385h11.435c5.669 0 10.282-4.613 10.282-10.284s-4.613-10.293-10.286-10.303H98.049V100h3.902v24.175h7.532c7.822.013 14.184 6.385 14.184 14.205 0 7.822-6.362 14.186-14.184 14.186h-7.532v25.483z" fill="#978673" data-color="1"></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-extralight text-center text-white">Professional Team</h4>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex md:gap-px *:basis-1/2 md:mb-px *:bg-neutral-800">
                                <div className="flex flex-col justify-center items-center gap-6">
                                    <div className="w-20 h-20 flex justify-center items-center">
                                        <svg preserveAspectRatio="xMidYMid meet" data-bbox="20 20 160 160" viewBox="20 20 160 160" height="64" width="64" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="">
                                            <g>
                                                <path d="M178 20H22a2 2 0 00-2 2v156a2 2 0 002 2h156a2 2 0 002-2V22a2 2 0 00-2-2zm-2 76.92h-48.74V24H176v72.92zM75.64 63.44h47.62v73.5H75.64v-73.5zm47.62-4H75.64V24h47.62v35.44zm-47.62 81.5h47.62V176H75.64v-35.06zM71.64 24v36.9a1.762 1.762 0 00-.12.54c.009.185.05.368.12.54v34.94H24V24h47.64zM24 100.92h47.64v37.48a1.282 1.282 0 000 1.08V176H24v-75.08zM127.26 176v-75.08H176V176h-48.74z" fill="#978673" data-color="1"></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-extralight text-center text-white">High Finish</h4>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center items-center gap-6">
                                    <div className="w-20 h-20 flex justify-center items-center">
                                        <svg preserveAspectRatio="xMidYMid meet" data-bbox="20 23.185 160 153.629" viewBox="20 23.185 160 153.629" height="64" width="64" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="">
                                            <g>
                                                <path d="M180 176.814H20l7.464-27.792h145.073L180 176.814zm-154.737-4.035h149.476l-5.296-19.721H30.559l-5.296 19.721z" fill="#978673" data-color="1"></path>
                                                <path d="M34.863 58.062c-5.983 0-12.54-3.49-13.964-11.627l-.031-.348c0-.155-.039-.312-.069-.473a8.93 8.93 0 01-.115-.794 10.497 10.497 0 01-.017-1.215l.009-.432a19.75 19.75 0 015.756-14.098 19.748 19.748 0 0114.056-5.89H159.59c10.953.013 19.861 8.932 19.861 19.882v1.468c0 .606-.104 1.165-.187 1.615-1.551 8.841-8.945 12.101-15.197 11.466-6.526-.666-13.424-5.554-13.15-14.715v-.684h4.035v.744c-.199 6.642 4.798 10.158 9.525 10.64 4.601.482 9.702-1.814 10.778-7.967l.041-.223c.053-.287.12-.58.12-.876v-1.468c0-8.728-7.101-15.836-15.828-15.847H40.496A15.747 15.747 0 0029.3 31.914a15.748 15.748 0 00-4.588 11.247l-.01.56c-.008.248-.019.498.002.746.013.143.042.289.068.434.059.328.109.654.126.973 1.226 6.608 6.676 8.512 10.976 8.106 4.837-.44 10.018-3.985 9.962-10.727v-1.037h4.035v1.021C49.949 52.515 42.86 57.397 36.24 58c-.453.041-.914.062-1.377.062z" fill="#978673" data-color="1"></path>
                                                <path fill="#978673" d="M166.927 153.058H33.097l3.788-90.784 4.031.167-3.612 86.582h125.414l-3.675-88.008 4.032-.167 3.852 92.21z" data-color="1"></path>
                                                <path fill="#978673" d="M141.919 46.941v4.035H55.106v-4.035h86.813z" data-color="1"></path>
                                                <path fill="#978673" d="M102.018 60.932v79.518h-4.035V60.932h4.035z" data-color="1"></path>
                                                <path fill="#978673" d="M132.664 60.932v79.518h-4.035V60.932h4.035z" data-color="1"></path>
                                                <path fill="#978673" d="M72.457 60.932v79.518h-4.035V60.932h4.035z" data-color="1"></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-extralight text-center text-white">Sustainable & Accountable</h4>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    {/* About Us Section */}
                    <div className="bg-primary">
                        <div className="h-[700px] md:h-[500px] lg:h-[500px] xl:h-[651px] flex flex-col-reverse md:flex-row gap-px lg:mx-px">
                            <div className="basis-1/2 mb-px bg-neutral-800 flex justify-center items-center ">
                                <div className="flex flex-col gap-4 md:gap-6 mx-8 md:mx-10 lg:mx-16 xl:mx-20 2xl:mx-24 text-white font-extralight">
                                    <h3 className="font-medium 2xl:text-[40px] lg:text-3xl md:text-2xl text-2xl">About Us</h3>
                                    <h4 className="font-medium 2xl:text-[30px] lg:text-2xl md:text-xl text-xl text-primary">JWP General Home Renovation</h4>
                                    <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                                </div>
                            </div>
                            <div className="basis-1/2 md:mb-px bg-[url(./images/main_workers_2.avif)] bg-cover bg-center"></div>
                        </div>
                    </div>

                    {/* Recent Projects Section */}
                    <div id="projects" className="2xl:mt-12 xl:mt-10 lg:mt-8 md:mt-6 mt-4">
                        <h3 className="font-medium text-2xl 2xl:text-3xl my-4 lg:my-6 xl:my-8 2xl:my-10 text-white text-center">Recent Projects</h3>
                        <div className="aspect-[10/16] md:aspect-[67/25] flex flex-col md:flex-row gap-0.5 border-y border-y-primary lg:border-y-0 lg:*:my-0 lg:bg-transparent lg:gap-[40px] 2xl:gap-[60px] lg:*:gap-[40px] 2xl:*:gap-[60px]">

                            <div className="basis-[62%] md:basis-[38%] flex gap-0.5 *:gap-0.5 lg:*:gap-[40px] 2xl:*:gap-[60px]">
                                <div className="basis-1/2 flex flex-col lg:*:border lg:*:border-primary">
                                    <div className="basis-[65%] *:relative *:hover:before:absolute *:before:w-full *:before:h-full *:before:bg-secondary *:before:opacity-30">
                                        <a className="block w-full h-full bg-[url(./images/projects_demo1.webp)] bg-cover bg-center hover:cursor-pointer"></a>
                                    </div>
                                    <div className="basis-[35%] *:relative *:hover:before:absolute *:before:w-full *:before:h-full *:before:bg-secondary *:before:opacity-30">
                                        <a className="block w-full h-full bg-[url(./images/projects_demo2.webp)] bg-cover bg-center hover:cursor-pointer"></a>
                                    </div>
                                </div>

                                <div className="basis-1/2 flex flex-col lg:*:border lg:*:border-primary">
                                    <div className="basis-[45%] *:relative *:hover:before:absolute *:before:w-full *:before:h-full *:before:bg-secondary *:before:opacity-30">
                                        <a className="block w-full h-full bg-[url(./images/projects_demo3.webp)] bg-cover bg-center hover:cursor-pointer"></a>
                                    </div>
                                    <div className="basis-[55%] *:relative *:hover:before:absolute *:before:w-full *:before:h-full *:before:bg-secondary *:before:opacity-30">
                                        <a className="block w-full h-full bg-[url(./images/projects_demo4.webp)] bg-cover bg-center hover:cursor-pointer"></a>
                                    </div>
                                </div>
                            </div>

                            <div className="basis-[38%] md:basis-[62%] lg:border lg:border-primary *:relative *:hover:before:absolute *:before:w-full *:before:h-full *:before:bg-secondary *:before:opacity-30">
                                <a className="block w-full h-full bg-[url(./images/projects_demo5.webp)] bg-cover bg-center hover:cursor-pointer"></a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </main>
    )
}

export default Home;