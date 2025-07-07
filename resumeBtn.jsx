import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

const RipanPramanickResume = () => {
    // This useEffect is for dynamically rendering Lucide icons.
    // In a React setup, it's generally better to import them directly as components.
    // However, if you prefer the script-based approach for some reason,
    // you'd need to ensure the lucide script is loaded and then call createIcons.
    // For this example, we'll use the lucide-react package.
    useEffect(() => {
        // You might still want to call createIcons if you have dynamically added elements
        // that contain lucide icons in their data-lucide attributes,
        // but for components rendered directly like this, direct imports are better.
        // If you were using the global script, it would be:
        // if (window.lucide) {
        //     window.lucide.createIcons();
        // }
    }, []);

    return (
        <div className="container mx-auto max-w-4xl p-4 sm:p-6 lg:p-8">
            <div className="resume-container p-6 sm:p-10">

                {/* Header Section - Split into two columns */}
                <header className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
                    {/* Left Column: Profile Picture */}
                    <div className="flex-shrink-0">
                        <img src="https://placehold.co/150x150/fbbf24/1a202c?text=RP" alt="Ripan Pramanick" className="profile-pic" />
                    </div>

                    {/* Right Column: Name, Title, Contact Info */}
                    <div className="flex-grow text-center md:text-left">
                        <h1 className="text-5xl font-bold text-white tracking-tight mb-2 font-inter">RIPAN PRAMANICK</h1>
                        <p className="text-xl font-medium text-amber-400 mt-2 font-inter">Front-End Developer</p>

                        {/* Contact Information Block */}
                        <div className="contact-info-block flex flex-col items-center md:items-start gap-2 font-inter">
                            <a href="mailto:ripan.pramanick.dev@example.com" className="flex items-center gap-1.5 hover:text-gray-900 transition-colors">
                                <Mail className="w-4 h-4" />
                                ripan.pramanick.dev@example.com
                            </a>
                            <a href="tel:+919641897167" className="flex items-center gap-1.5 hover:text-gray-900 transition-colors">
                                <Phone className="w-4 h-4" />
                                +91 9641897167
                            </a>
                            <a href="#" className="flex items-center gap-1.5 hover:text-gray-900 transition-colors">
                                <MapPin className="w-4 h-4" />
                                Shantipur, West Bengal, India 741404
                            </a>
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-gray-900 transition-colors">
                                <Github className="w-4 h-4" />
                                github.com/yourusername
                            </a>
                            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-gray-900 transition-colors">
                                <Linkedin className="w-4 h-4" />
                                linkedin.com/in/yourusername
                            </a>
                        </div>
                    </div>
                </header>

                {/* Professional Summary Section */}
                <section className="mb-10">
                    <h2 className="text-2xl section-title font-inter">Professional Summary</h2>
                    <p className="text-base leading-relaxed text-slate-300 font-inter">
                        A detail-oriented Front-End Developer specializing in creating dynamic and responsive user interfaces with <strong className="font-semibold text-white">React.js</strong> and <strong className="font-semibold text-white">Tailwind CSS</strong>. Proficient in translating design mockups into high-quality, scalable, and cross-browser compatible code. Eager to apply problem-solving skills and a passion for clean web design to contribute to a forward-thinking development team.
                    </p>
                </section>

                {/* Professional Experience Section */}
                <section className="mb-10">
                    <h2 className="text-2xl section-title font-inter">Professional Experience</h2>
                    <div>
                        <div className="flex justify-between items-start mb-1">
                            <h3 className="text-lg font-semibold text-white font-inter">Front-End Developer (Self-Directed Projects)</h3>
                            <p className="text-sm font-medium text-slate-400 text-right font-inter">Jan 2024 – Present</p>
                        </div>
                        <p className="text-md text-slate-400 mb-3 font-inter">Remote</p>
                        <ul className="list-disc list-inside space-y-2 text-base text-slate-300 font-inter">
                            <li>Developed and launched responsive, user-facing features for mobile, tablet, and desktop platforms using React.js and Tailwind CSS, <strong className="font-semibold text-amber-300">improving user experience and accessibility across various devices.</strong></li>
                            <li>Translated UI/UX design wireframes into high-quality, reusable code with a focus on performance and scalability, <strong className="font-semibold text-amber-300">reducing load times by 20% on a key project.</strong></li>
                            <li>Actively contributed to an Agile/Scrum development process, participating in sprint planning, daily stand-ups, and code reviews to ensure project milestones were met and <strong className="font-semibold text-amber-300">code quality was consistently high.</strong></li>
                            <li>Ensured cross-browser compatibility and optimized web applications for maximum speed and responsiveness, <strong className="font-semibold text-amber-300">achieving a Lighthouse performance score of 90+ on multiple projects.</strong></li>
                            <li>Refactored existing codebases to enhance maintainability and implement modern web development best practices, <strong className="font-semibold text-amber-300">reducing technical debt and simplifying future development.</strong></li>
                        </ul>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="mb-10">
                    <h2 className="text-2xl section-title font-inter">Projects</h2>
                    <div className="space-y-6">
                        {/* Project 1 */}
                        <div>
                            <h3 className="text-lg font-semibold text-white font-inter">E-commerce Product Page (React & Tailwind CSS)</h3>
                            <p className="text-slate-300 mb-2 font-inter">Developed a fully responsive e-commerce product display page, featuring dynamic product details, image carousel, and add-to-cart functionality. Optimized for various screen sizes.</p>
                            <p className="text-sm text-slate-400 mb-2 font-inter">Technologies: React.js, Tailwind CSS, JavaScript (ES6+), DummyJSON API</p>
                            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-inter">
                                <a href="https://your-ecommerce-project-demo.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-amber-400 hover:underline">
                                    <ExternalLink className="w-4 h-4" /> Live Demo
                                </a>
                                <a href="https://github.com/yourusername/your-ecommerce-project-repo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-amber-400 hover:underline">
                                    <Github className="w-4 h-4" /> GitHub Repo
                                </a>
                            </div>
                        </div>
                        {/* Project 2 */}
                        <div>
                            <h3 className="text-lg font-semibold text-white font-inter">Interactive To-Do Application (React)</h3>
                            <p className="text-slate-300 mb-2 font-inter">Built a feature-rich to-do application with capabilities to add, delete, mark as complete, and filter tasks. Implemented local storage for persistent data.</p>
                            <p className="text-sm text-slate-400 mb-2 font-inter">Technologies: React.js, JavaScript, CSS3</p>
                            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-inter">
                                <a href="https://your-todo-app-demo.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-amber-400 hover:underline">
                                    <ExternalLink className="w-4 h-4" /> Live Demo
                                </a>
                                <a href="https://github.com/yourusername/your-todo-app-repo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-amber-400 hover:underline">
                                    <Github className="w-4 h-4" /> GitHub Repo
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
                                <span className="skill-tag text-sm font-medium px-3 py-1 rounded-full font-inter">HTML5</span>
                                <span className="skill-tag text-sm font-medium px-3 py-1 rounded-full font-inter">CSS3</span>
                                <span className="skill-tag text-sm font-medium px-3 py-1 rounded-full font-inter">JavaScript (ES6+)</span>
                                <span className="skill-tag text-sm font-medium px-3 py-1 rounded-full font-inter">React.js</span>
                                <span className="skill-tag text-sm font-medium px-3 py-1 rounded-full font-inter">Tailwind CSS</span>
                                <span className="skill-tag text-sm font-medium px-3 py-1 rounded-full font-inter">Bootstrap</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-2 font-inter">Tools & Concepts</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="skill-tag text-sm font-medium px-3 py-1 rounded-full font-inter">Git</span>
                                <span className="skill-tag text-sm font-medium px-3 py-1 rounded-full font-inter">Responsive Design</span>
                                <span className="skill-tag text-sm font-medium px-3 py-1 rounded-full font-inter">Web Components</span>
                                <span className="skill-tag text-sm font-medium px-3 py-1 rounded-full font-inter">Agile/Scrum</span>
                                <span className="skill-tag text-sm font-medium px-3 py-1 rounded-full font-inter">RESTful APIs</span>
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
                                <h3 className="font-semibold text-white font-inter">Diploma in Web Development (DWD)</h3>
                                <p className="text-sm font-medium text-slate-400 text-right font-inter">Sept 2023 – Expected Aug 2025</p>
                            </div>
                            <p className="text-slate-300 font-inter">Indira Gandhi Computer Academy, Santipur</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-start">
                                <h3 className="font-semibold text-white font-inter">Advanced Diploma in Computer Application (ADCA)</h3>
                                <p className="text-sm font-medium text-slate-400 text-right font-inter">Sept 2023 – April 2024</p>
                            </div>
                            <p className="text-slate-300 font-inter">Indira Gandhi Computer Academy, Santipur</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-start">
                                <h3 className="font-semibold text-white font-inter">High School Diploma</h3>
                                <p className="text-sm font-medium text-slate-400 text-right font-inter">March 2019</p>
                            </div>
                            <p className="text-slate-300 font-inter">Ravindra Vidyapeth High School, Santipur</p>
                        </div>
                    </div>
                </section>

                {/* Optional Footer */}
                <footer className="text-center text-sm text-slate-400 mt-12 pt-6 border-t border-slate-700 font-inter">
                    &copy; 2025 Ripan Pramanick. All rights reserved.
                </footer>
            </div>
        </div>
    );
};

export default RipanPramanickResume;