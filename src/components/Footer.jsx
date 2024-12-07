import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="contact" className="py-10 md:px-0 lg:px-14 bg-neutral-800">
            <div className="flex flex-col sm:flex-row">
                <div className="sm:ml-6 basis-1/2 flex justify-center sm:justify-start">
                    <div className="flex flex-col gap-8 text-center sm:text-left justify-start text-primary">
                        <h3 className="font-medium text-center sm:text-left 2xl:text-[40px] lg:text-3xl md:text-2xl text-2xl text-primary">Contact Us</h3>
                        <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row items-center font-light">
                            <div className="flex justify-center w-16">
                                <svg preserveAspectRatio="xMidYMid meet" data-bbox="20.36 20 159.28 160" viewBox="20.36 20 159.28 160" height="32" width="32" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label=""><defs></defs>
                                    <g><path d="M179.64 180H20.36V83.717L99.476 20l80.164 63.706V180zm-154.142-5.138h149.004V86.185L99.496 26.578 25.498 86.175v88.687z" fill="#9A8A78" data-color="1"></path></g>
                                </svg>
                            </div>
                            <span>398 Mclean Street, Sudbury, ON P3A 1V3</span>
                        </div>
                        <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row items-center font-light">
                            <div className="flex justify-center w-16">
                                <svg preserveAspectRatio="xMidYMid meet" data-bbox="20 50.968 160 98.064" viewBox="20 50.968 160 98.064" height="36" width="36" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="">
                                    <g><path d="M180 149.032H20V50.968h160v98.064zm-154.839-5.161h149.677V56.129H25.161v87.742z" fill="#9A8A78" data-color="1"></path><path fill="#9A8A78" d="M100 118.79L20.968 55.565l3.226-4.033L100 112.177l75.806-60.645 3.226 4.033L100 118.79z" data-color="1"></path></g>
                                </svg>
                            </div>
                            <a href="mailto:justpaintworks@hotmail.com">justpaintworks@hotmail.com</a>
                        </div>
                        <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row items-center font-light">
                            <div className="flex justify-center w-16">
                                <svg preserveAspectRatio="xMidYMid meet" data-bbox="50.968 20 98.064 160" viewBox="50.968 20 98.064 160" height="36" width="36" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="">
                                    <g><path d="M135.615 180H64.388c-7.399 0-13.42-6.018-13.42-13.417V33.42c0-7.651 5.769-13.42 13.42-13.42h71.227c7.399 0 13.417 6.021 13.417 13.42v133.163c0 7.399-6.018 13.417-13.417 13.417zM64.388 25.161c-4.786 0-8.259 3.473-8.259 8.259v133.163c0 4.94 4.269 8.256 8.259 8.256h71.227c4.94 0 8.256-4.269 8.256-8.256V33.42c0-4.94-4.269-8.259-8.256-8.259H64.388z" fill="#9A8A78" data-color="1"></path><path fill="#9A8A78" d="M146.451 147.999v5.161H53.548v-5.161h92.903z" data-color="1"></path></g>
                                </svg>
                            </div>
                            <span>(705) 521-2300</span>
                        </div>
                    </div>
                </div>
                <div className="sm:mr-6 basis-1/2 flex justify-center sm:justify-end my-10 sm:my-0">
                    <div className="flex flex-col items-center sm:items-start gap-4 text-primary">
                        <h1 className="font-logo text-2xl text-primary">JPW</h1>
                        <ul className="flex flex-col *:leading-8 *:text-center *:sm:text-left *:text-sm *:font-light *:transition-all *:duration-300 *:ease-ease">
                            <li className=" hover:text-secondary ">
                                <a href="/" className="inline-block">Home</a>
                            </li>
                            <li className=" hover:text-secondary ">
                                <a href="#services" className="inline-block">Services</a>
                            </li>
                            <li className=" hover:text-secondary ">
                                <a href="#projects" className="inline-block">Projects</a>
                            </li>
                            <li className=" hover:text-secondary ">
                                <a href="#contact" className="inline-block">Contact</a>
                            </li>
                        </ul>
                        <a  href="tel:(705) 521-2300"
                            className="px-11 sm:px-7 py-3 text-sm font-light text-neutral-800 bg-primary hover:bg-secondary transition-all duration-300 ease-ease"
                        >
                            CALL NOW
                        </a>
                    </div>
                </div>
            </div>
            <p className="mt-[40px] sm:mt-[160px] font-light text-center text-sm text-primary">© 2024 by JPW General Home Renovaion.</p>
        </footer>
    );
}

export default Footer;