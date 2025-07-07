import React, { useEffect, useState } from 'react';
import '../App.css';

// particles.js configuration
const particlesConfig = {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true,
    "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
    }
};

// --- components/Header.jsx ---
const Header = () => (
    <header className="z-10 pointer-events-none flex items-center justify-between w-full px-4 mt-4 max-w-screen-xl mx-auto">
        {/* Logo SVG */}
        <svg width="70" height="70" viewBox="0 0 406 368" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M314.516 203.174L314.516 349.104L162.117 208.727M314.516 203.174L282.653 203.26M314.516 203.174L337.498 203.26L380.617 170.782L314.516 170.782M162.117 208.727L117.661 170.634L157.117 170.782M162.117 208.727L65.1165 301.139L20.176 301.139L137.099 188.83M200.117 170.782L282.653 96.1739L282.653 170.782M200.117 170.782L282.653 170.782M200.117 170.782L157.117 170.782M282.653 203.26L210.462 202.796L282.653 270.76L282.653 203.26ZM282.653 170.782L314.516 170.782M157.117 170.782L315.751 20.1061L314.516 170.782" stroke="currentColor" strokeWidth="10" />
        </svg>
        <div className="flex gap-4 pointer-events-auto">
            {/* Sun Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="feather feather-sun cursor-pointer z-10">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>

            {/* Moon Icon (hidden) */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="hidden">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>

            {/* Phone Icon */}
            <a href="tel:9824989238">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="feather feather-phone">
                    <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                    </path>
                </svg>
            </a>

            {/* WhatsApp Icon */}
            <a href="https://wa.me/9824989238?text=Hi, How are you?" target="_blank" rel="noopener noreferrer">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp"
                    className="svg-inline--fa fa-whatsapp fa-w-14 w-6 h-6 hover:text-white" role="img"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor"
                        d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
            </a>
        </div>
    </header>
);

// --- components/AboutMeModal.jsx ---
const AboutMeModal = ({ isOpen, onClose }) => {
    // Conditional rendering based on isOpen prop for modal visibility
    const modalClass = isOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible';

    return (
        <div
            className={`container mx-auto max-w-4xl p-4 sm:p-6 lg:p-8 transition-opacity duration-500 ease-in-out fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75 ${modalClass}`}
        >
            <div className="resume-container p-6 sm:p-10 rounded-xl relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200 font-inter"
                >
                    Close
                </button>
                {/* Header Section - Split into two columns */}
                <header className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
                    {/* Left Column: Profile Picture */}
                    <div className="flex-shrink-0">
                        {/* Placeholder for image - replace with actual path if available */}
                        <img src="https://placehold.co/150x150/2d3748/e2e8f0?text=Profile"
                            alt="Ripan Pramanick" className="profile-pic" />
                    </div>

                    {/* Right Column: Name, Title, Contact Info */}
                    <div className="flex-grow text-center md:text-left">
                        <h1 className="text-5xl font-bold text-white tracking-tight mb-2 font-inter">RIPAN
                            PRAMANICK</h1>
                        <p className="text-xl font-medium text-amber-400 mt-2 font-inter">Front-End Developer
                        </p>

                        {/* Contact Information Block */}
                        <div
                            className="contact-info-block flex flex-col items-center md:items-start gap-2 font-inter mt-4 text-slate-300">
                            <a href="mailto:ripan.pramanick.dev@example.com"
                                className="flex items-center gap-1.5 hover:text-white transition-colors duration-200">
                                {/* Mail icon SVG */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round"
                                    className="lucide lucide-mail">
                                    <rect width="20" height="16" x="2" y="4" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                                ripan.pramanick.dev@example.com
                            </a>
                            <a href="tel:+919641897167"
                                className="flex items-center gap-1.5 hover:text-white transition-colors duration-200">
                                {/* Phone icon SVG */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round"
                                    className="lucide lucide-phone">
                                    <path
                                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                +91 9641897167
                            </a>
                            <a href="#"
                                className="flex items-center gap-1.5 hover:text-white transition-colors duration-200">
                                {/* MapPin icon SVG */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round"
                                    className="lucide lucide-map-pin">
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                Shantipur, West Bengal, India 741404
                            </a>
                            <a href="https://github.com/yourusername" target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 hover:text-white transition-colors duration-200">
                                {/* Github icon SVG */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round"
                                    className="lucide lucide-github">
                                    <path
                                        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.44-.78-3.46 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.55 1.02-.9 2.2-.72 3.46 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                    <path d="M9 18c-4.51 2-5-2-7-2" />
                                </svg>
                                github.com/yourusername
                            </a>
                            <a href="https://linkedin.com/in/yourusername" target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 hover:text-white transition-colors duration-200">
                                {/* Linkedin icon SVG */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round"
                                    className="lucide lucide-linkedin">
                                    <path
                                        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect width="4" height="12" x="2" y="9" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                                linkedin.com/in/yourusername
                            </a>
                        </div>
                    </div>
                </header>

                {/* Professional Summary Section */}
                <section className="mb-10">
                    <h2 className="text-2xl section-title font-inter">Professional Summary</h2>
                    <p className="text-base leading-relaxed text-slate-300 font-inter">
                        A detail-oriented Front-End Developer specializing in creating dynamic and
                        responsive user interfaces with <strong
                            className="font-semibold text-white">React.js</strong> and <strong
                            className="font-semibold text-white">Tailwind CSS</strong>. Proficient in
                        translating design mockups into high-quality, scalable, and cross-browser compatible
                        code. Eager to apply problem-solving skills and a passion for clean web design to
                        contribute to a forward-thinking development team.
                    </p>
                </section>

                {/* Professional Experience Section */}
                <section className="mb-10">
                    <h2 className="text-2xl section-title font-inter">Professional Experience</h2>
                    <div>
                        <div className="flex justify-between items-start mb-1">
                            <h3 className="text-lg font-semibold text-white font-inter">Front-End Developer
                                (Self-Directed Projects)</h3>
                            <p className="text-sm font-medium text-slate-400 text-right font-inter">Jan 2024 –
                                Present</p>
                        </div>
                        <p className="text-md text-slate-400 mb-3 font-inter">Remote</p>
                        <ul className="list-disc list-inside space-y-2 text-base text-slate-300 font-inter">
                            <li>Developed and launched responsive, user-facing features for mobile, tablet,
                                and desktop platforms using React.js and Tailwind CSS, <strong
                                    className="font-semibold text-amber-300">improving user experience and
                                    accessibility across various devices.</strong></li>
                            <li>Translated UI/UX design wireframes into high-quality, reusable code with a
                                focus on performance and scalability, <strong
                                    className="font-semibold text-amber-300">reducing load times by 20% on a key
                                    project.</strong></li>
                            <li>Actively contributed to an Agile/Scrum development process, participating in
                                sprint planning, daily stand-ups, and code reviews to ensure project
                                milestones were met and <strong className="font-semibold text-amber-300">code
                                    quality was consistently high.</strong></li>
                            <li>Ensured cross-browser compatibility and optimized web applications for
                                maximum speed and responsiveness, <strong
                                    className="font-semibold text-amber-300">achieving a Lighthouse performance
                                    score of 90+ on multiple projects.</strong></li>
                            <li>Refactored existing codebases to enhance maintainability and implement
                                modern web development best practices, <strong
                                    className="font-semibold text-amber-300">reducing technical debt and
                                    simplifying future development.</strong></li>
                        </ul>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="mb-10">
                    <h2 className="text-2xl section-title font-inter">Projects</h2>
                    <div className="space-y-6">
                        {/* Project 1 */}
                        <div>
                            <h3 className="text-lg font-semibold text-white font-inter">E-commerce Product Page
                                (React & Tailwind CSS)</h3>
                            <p className="text-slate-300 mb-2 font-inter">Developed a fully responsive
                                e-commerce product display page, featuring dynamic product details, image
                                carousel, and add-to-cart functionality. Optimized for various screen sizes.
                            </p>
                            <p className="text-sm text-slate-400 mb-2 font-inter">Technologies: React.js,
                                Tailwind CSS, JavaScript (ES6+), DummyJSON API</p>
                            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-inter">
                                <a href="https://your-ecommerce-project-demo.com" target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-amber-400 hover:underline">
                                    {/* ExternalLink icon SVG */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        className="lucide lucide-external-link">
                                        <path
                                            d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        <path d="M15 3h6v6" />
                                        <path d="M10 14 21 3" />
                                    </svg>
                                    Live Demo
                                </a>
                                <a href="https://github.com/yourusername/your-ecommerce-project-repo"
                                    target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-amber-400 hover:underline">
                                    {/* Github icon SVG */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        className="lucide lucide-github">
                                        <path
                                            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.44-.78-3.46 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.55 1.02-.9 2.2-.72 3.46 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                        <path d="M9 18c-4.51 2-5-2-7-2" />
                                    </svg>
                                    GitHub Repo
                                </a>
                            </div>
                        </div>
                        {/* Project 2 */}
                        <div>
                            <h3 className="text-lg font-semibold text-white font-inter">Interactive To-Do
                                Application (React)</h3>
                            <p className="text-slate-300 mb-2 font-inter">Built a feature-rich to-do application
                                with capabilities to add, delete, mark as complete, and filter tasks.
                                Implemented local storage for persistent data.</p>
                            <p className="text-sm text-slate-400 mb-2 font-inter">Technologies: React.js,
                                JavaScript, CSS3</p>
                            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-inter">
                                <a href="https://your-todo-app-demo.com" target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-amber-400 hover:underline">
                                    {/* ExternalLink icon SVG */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        className="lucide lucide-external-link">
                                        <path
                                            d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        <path d="M15 3h6v6" />
                                        <path d="M10 14 21 3" />
                                    </svg>
                                    Live Demo
                                </a>
                                <a href="https://github.com/yourusername/your-todo-app-repo" target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-amber-400 hover:underline">
                                    {/* Github icon SVG */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        className="lucide lucide-github">
                                        <path
                                            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.44-.78-3.46 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.55 1.02-.9 2.2-.72 3.46 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                        <path d="M9 18c-4.51 2-5-2-7-2" />
                                    </svg>
                                    GitHub Repo
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical Skills Section */}
                <section className="mb-10">
                    <h2 className="text-2xl section-title font-inter">Technical Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        <div>
                            <h3 className="font-semibold text-white mb-2 font-inter">Languages & Frameworks</h3>
                            <div className="flex flex-wrap gap-2">
                                <span
                                    className="skill-tag text-sm font-medium px-3 py-1 font-inter">HTML5</span>
                                <span className="skill-tag text-sm font-medium px-3 py-1 font-inter">CSS3</span>
                                <span className="skill-tag text-sm font-medium px-3 py-1 font-inter">JavaScript
                                    (ES6+)</span>
                                <span
                                    className="skill-tag text-sm font-medium px-3 py-1 font-inter">React.js</span>
                                <span className="skill-tag text-sm font-medium px-3 py-1 font-inter">Tailwind
                                    CSS</span>
                                <span
                                    className="skill-tag text-sm font-medium px-3 py-1 font-inter">Bootstrap</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-2 font-inter">Tools & Concepts</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="skill-tag text-sm font-medium px-3 py-1 font-inter">Git</span>
                                <span className="skill-tag text-sm font-medium px-3 py-1 font-inter">Responsive
                                    Design</span>
                                <span className="skill-tag text-sm font-medium px-3 py-1 font-inter">Web
                                    Components</span>
                                <span
                                    className="skill-tag text-sm font-medium px-3 py-1 font-inter">Agile/Scrum</span>
                                <span className="skill-tag text-sm font-medium px-3 py-1 font-inter">RESTful
                                    APIs</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Education & Certifications Section */}
                <section>
                    <h2 className="text-2xl section-title font-inter">Education & Certifications</h2>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between items-start">
                                <h3 className="font-semibold text-white font-inter">Diploma in Web Development
                                    (DWD)</h3>
                                <p className="text-sm font-medium text-slate-400 text-right font-inter">Sept
                                    2023 – Expected Aug 2025</p>
                            </div>
                            <p className="text-slate-300 font-inter">Indira Gandhi Computer Academy, Santipur
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-between items-start">
                                <h3 className="font-semibold text-white font-inter">Advanced Diploma in Computer
                                    Application (ADCA)</h3>
                                <p className="text-sm font-medium text-slate-400 text-right font-inter">Sept
                                    2023 – April 2024</p>
                            </div>
                            <p className="text-slate-300 font-inter">Indira Gandhi Computer Academy, Santipur
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-between items-start">
                                <h3 className="font-semibold text-white font-inter">High School Diploma</h3>
                                <p className="text-sm font-medium text-slate-400 text-right font-inter">March
                                    2019</p>
                            </div>
                            <p className="text-slate-300 font-inter">Ravindra Vidyapeth High School, Santipur
                            </p>
                        </div>
                    </div>
                </section>

                {/* Optional Footer */}
                <footer
                    className="text-center text-sm text-slate-400 mt-12 pt-6 border-t border-slate-700 font-inter">
                    &copy; 2025 Ripan Pramanick. All rights reserved.
                </footer>
            </div>
        </div>
    );
};

// --- components/HeroSection.jsx ---
const HeroSection = ({ onAboutMeClick }) => (
    <div className="relative ml-4 md:ml-12">
        {/* SVG graphic */}
        <svg viewBox="0 0 406 368" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none absolute top-0 left-1/2 -translate-y-[80px] sm:-translate-y-[180px] -translate-x-1/2 w-[300px] sm:w-[400px] md:w-[650px]">
            <path
                d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109"
                stroke="#1F2667" strokeOpacity="0.9" strokeWidth="10" />
            <path
                d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109"
                stroke="url(#paint0_linear)" strokeWidth="10" />
            <defs>
                <linearGradient id="paint0_linear" x1="205.549" y1="20.0169" x2="204.338" y2="342.461"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1595B6" />
                    <stop offset="1" stopColor="#1595B6" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
        <h1 className="pointer-events-none text-4xl md:text-[64px] font-['Spartan'] mr-12">
            Master Zed
        </h1>
        <p className="pointer-events-none font-['Merriweather'] italic my-4 md:my-8">
            Front-End Developer
        </p>
        <button
            className="gradient-button py-2 px-5 rounded font-extrabold relative hover:scale-110 ease-in-out duration-100 group"
            onClick={onAboutMeClick}
        >
            About Me
            {/* Arrow SVG for About Me button */}
            <svg version="1.1" x="0px" y="0px" width="44" height="44" viewBox="0 0 100 100"
                className="absolute top-1/2 -translate-y-1/2 -right-7 group-hover:-right-8 ease-in-out duration-100"
                xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(0,-952.36218)">
                    <path
                        style={{ textIndent: 0, textTransform: 'none', direction: 'ltr', blockProgression: 'tb', baselineShift: 'baseline', color: '#000000', enableBackground: 'accumulate' }}
                        d="m 88.999835,1002.3621 c 0,-0.4628 -0.2799,-1.0773 -0.5639,-1.3755 l -15.9997,-17.00026 c -0.747,-0.7723 -1.9572,-0.8618 -2.8281,-0.078 -0.7786,0.7007 -0.798,2.0673 -0.078,2.8282 l 12.8435,13.62516 -69.37347,0 c -1.1046,0 -2,0.8954 -2,2 0,1.1046 0.8954,2.0001 2,2.0001 l 69.37347,0 -12.8435,13.6252 c -0.7199,0.7608 -0.6688,2.0938 0.078,2.8281 0.7885,0.7752 2.0925,0.7062 2.8281,-0.078 l 15.9997,-17.0002 c 0.4701,-0.4611 0.556,-0.9052 0.5639,-1.3748 z"
                        fill="#fff" fillOpacity="1" stroke="white" strokeWidth="2" marker="none"
                        visibility="visible" display="inline" overflow="visible" />
                </g>
            </svg>
        </button>
    </div>
);

// --- components/SocialMediaIcons.jsx ---
const SocialMediaIcons = () => (
    <ul className="ml-auto space-y-6 text-[#b0b2c3] absolute right-8">
        <li>
            <a href="https://www.linkedin.com/in/anuragsinghbam/" target="_blank" rel="noopener noreferrer">
                <svg className="w-7 hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor"
                        d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
            </a>
        </li>
        <li>
            <a href="https://twitter.com/anuragsinghbam" target="_blank" rel="noopener noreferrer">
                <svg className="w-7 hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor"
                        d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com/procodrr/" rel="noopener noreferrer">
                <svg className="w-7 hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor"
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
            </a>
        </li>
        <li>
            <a href="mailto:anuragsinghbam@gmail.com" target="_blank" rel="noopener noreferrer">
                <svg className="w-7 hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor"
                        d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                </svg>
            </a>
        </li>
        <li>
            <a href="https://www.youtube.com/@procodrr" rel="noopener noreferrer">
                <svg className="w-7 hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                    fill="currentColor">
                    <path
                        d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                </svg>
            </a>
        </li>
    </ul>
);

// --- components/LatestWorksButton.jsx ---
const LatestWorksButton = () => (
    <div
        className="relative self-center after:content-[''] after:absolute after:w-[2px] after:h-5 after:bg-[#444] after:left-1/2 after:-translate-x-1/2 after:top-[100px]">
        <button
            className="gradient-button py-2 px-5 rounded font-extrabold relative hover:scale-110 ease-in-out duration-100 group mb-20">
            Latest Works
            {/* Arrow SVG for Latest Works button */}
            <svg version="1.1" x="0px" y="0px" width="44" height="44" viewBox="0 0 100 100"
                className="absolute rotate-90 left-1/2 -translate-x-1/2 top-11 group-hover:top-12 ease-in-out duration-100"
                xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(0,-952.36218)">
                    <path
                        style={{ textIndent: 0, textTransform: 'none', direction: 'ltr', blockProgression: 'tb', baselineShift: 'baseline', color: '#000000', enableBackground: 'accumulate' }}
                        d="m 88.999835,1002.3621 c 0,-0.4628 -0.2799,-1.0773 -0.5639,-1.3755 l -15.9997,-17.00026 c -0.747,-0.7723 -1.9572,-0.8618 -2.8281,-0.078 -0.7786,0.7007 -0.798,2.0673 -0.078,2.8282 l 12.8435,13.62516 -69.37347,0 c -1.1046,0 -2,0.8954 -2,2 0,1.1046 0.8954,2.0001 2,2.0001 l 69.37347,0 -12.8435,13.6252 c -0.7199,0.7608 -0.6688,2.0938 0.078,2.8281 0.7885,0.7752 2.0925,0.7062 2.8281,-0.078 l 15.9997,-17.0002 c 0.4701,-0.4611 0.556,-0.9052 0.5639,-1.3748 z"
                        fill="#fff" fillOpacity="1" stroke="white" strokeWidth="2" marker="none"
                        visibility="visible" display="inline" overflow="visible" />
                </g>
            </svg>
        </button>
    </div>
);

const FirstContent = () => {
    // State to control the visibility of the "About Me" modal
    const [isAboutMeModalOpen, setIsAboutMeModalOpen] = useState(false);

    // useEffect hook to initialize particles.js when the component mounts
    useEffect(() => {
        // Load particles.js script dynamically
        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
        script.async = true;
        document.body.appendChild(script);

        // Once particles.js script is loaded, initialize it
        script.onload = () => {
            if (window.particlesJS) {
                window.particlesJS('particles-js', particlesConfig);
            }
        };

        // Cleanup function: remove the script when the component unmounts
        return () => {
            // Check if the script exists before trying to remove it
            const existingScript = document.querySelector(`script[src="${script.src}"]`);
            if (existingScript) {
                document.body.removeChild(existingScript);
            }
        };
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <div className="portfolio-section min-h-screen relative z-1 flex flex-col justify-between overflow-hidden">
            {/* Particles.js container */}
            <div id="particles-js" className="absolute inset-0 md:block z-0"></div>

            <Header /> {/* Render the Header component */}

            {/* Main content section */}
            <div className="flex -mt-10 relative">
                <div className="w-full px-4 max-w-screen-xl mx-auto">
                    <HeroSection onAboutMeClick={() => setIsAboutMeModalOpen(true)} /> {/* Pass handler to HeroSection */}
                </div>

                <SocialMediaIcons /> {/* Render the SocialMediaIcons component */}
            </div>

            <LatestWorksButton /> {/* Render the LatestWorksButton component */}

            {/* About Me Modal - controlled by state */}
            <AboutMeModal isOpen={isAboutMeModalOpen} onClose={() => setIsAboutMeModalOpen(false)} />

            {/* Custom styles are inline or defined in a separate CSS file which should be imported */}
            
        </div>
    );
};

export default FirstContent;
