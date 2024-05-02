import { Link, Route, Routes } from "react-router-dom";
import 'animate.css';
import '../App.css';
import Bio from "./Bio";
import Skill from "./Skill";
import Project from "./Project";
import Education from "./Education";
import Work from "./Work";
import Certification from "./Certification";

const Sidebar = () =>{
    return(
        <div>
            <aside
            x-ref="sidebar"
            tabindex="-1"
            class="h-screen inset-y-0 z-10 flex flex-shrink-0 border-r md:static overflow-y-auto bg-gradient-to-r from-navy_blue to-dark_blue dark:border-indigo-800 dark:bg-darker focus:outline-none"> 
            <nav class="fixed flex sidenavbar flex-col flex-shrink-0 h-full px-2 py-4 border-r bg-white bg-opacity-20">
            <div class="flex-shrink-0">
                <a
                href="https://kamona-wd.github.io/kwd-dashboard/"
                class="inline-block text-xl font-bold tracking-wider text-blue_picton uppercase dark:text-light"
                >
                K-WD
                </a>
            </div>
            <div class="flex flex-col items-center justify-center flex-1 space-y-4">
                            
                <Link to='/'>
                    <button
                    href="#"
                    class="p-2 text-blue_picton transition-colors duration-200 rounded-full bg-indigo-50 hover:text-slate-200 hover:bg-indigo-100 dark:hover:text-light dark:hover:bg-sky-600 dark:bg-dark focus:outline-none focus:bg-indigo-100 dark:focus:bg-sky-600 focus:ring-sky-500"
                    >
                    <span class="sr-only">Biography</span>
                    <svg
                        class="w-7 h-7"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                    </svg>
                    </button>
                </Link>
                <Link to='/Work'>
                    <button
                    class="p-2 text-blue_picton transition-colors duration-200 rounded-full bg-indigo-50 hover:text-slate-200 hover:bg-indigo-100 dark:hover:text-light dark:hover:bg-sky-600 dark:bg-dark focus:outline-none focus:bg-indigo-100 dark:focus:bg-sky-600 focus:ring-sky-500"
                    >
                    <span class="sr-only">Work</span>
                    <svg
                        class="w-7 h-7"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                    </svg>
                    </button>
                </Link>
                <Link to='/Education'>
                    <button
                    href="#"
                    class="p-2 text-blue_picton transition-colors duration-200 rounded-full bg-indigo-50 hover:text-slate-200 hover:bg-indigo-100 dark:hover:text-light dark:hover:bg-sky-600 dark:bg-dark focus:outline-none focus:bg-indigo-100 dark:focus:bg-sky-600 focus:ring-sky-500"
                    >
                    <span class="sr-only">Education</span>
                    <svg
                        class="w-7 h-7"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                        />
                    </svg>
                    </button>
                </Link>
                <Link to='/Project'>
                    <button class="p-2 text-blue_picton transition-colors duration-200 shadow-2xl rounded-full bg-indigo-50 hover:text-slate-200 hover:bg-indigo-100 dark:hover:text-light dark:hover:bg-sky-600 dark:bg-dark focus:outline-none focus:bg-indigo-100 dark:focus:bg-sky-600 focus:ring-sky-500">
                    <span class="sr-only">Skills</span>
                        <svg
                            class="w-7 h-7"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>
                    </button>
                </Link>
                <Link to='/Certification'>
                    <button class="p-2 text-blue_picton transition-colors duration-200 rounded-full bg-indigo-50 hover:text-slate-200 hover:bg-indigo-100 dark:hover:text-light dark:hover:bg-sky-600 dark:bg-dark focus:outline-none focus:bg-indigo-100 dark:focus:bg-sky-600 focus:ring-sky-500">
                    <span class="sr-only">Project</span>
                        <svg
                            class="w-7 h-7"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="nne"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>
                    </button>
                </Link>
                <Link to="/Skill">
                    <button class="p-2 text-blue_picton transition-colors duration-200 rounded-full bg-indigo-50 hover:text-slate-200 hover:bg-indigo-100 dark:hover:text-light dark:hover:bg-sky-600 dark:bg-dark focus:outline-none focus:bg-indigo-100 dark:focus:bg-sky-600 focus:ring-sky-500">
                    <span class="sr-only">Certification</span>
                        <svg
                            class="w-7 h-7"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>
                    </button>
                </Link>
            </div>
            <form action="#" class="flex items-center justify-center flex-shrink-0">
                <button
                class="p-2 text-blue_picton transition-colors duration-200 rounded-full bg-indigo-50 hover:text-slate-200 hover:bg-indigo-100 dark:hover:text-light dark:hover:bg-sky-600 dark:bg-dark focus:outline-none focus:bg-indigo-100 dark:focus:bg-indigo-700 focus:ring-indigo-800"
                >
                <span class="sr-only">Contact</span>
                <svg
                    class="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                </svg>
                </button>
            </form>
            </nav>
            <div class="w-full overflow-hidden">
              
                <Routes>
                    <Route path="/" element={<Bio />}/>
                    <Route path="/Skill" element={<Skill />}/>
                    <Route path="/Project" element={<Project />}/>
                    <Route path="/Education" element={<Education />}/>
                    <Route path="/Work" element={<Work />}/>
                    <Route path="/Certification" element={<Certification />}/>
                </Routes>
            </div>
            </aside>
        </div>
    )
}

export default Sidebar;