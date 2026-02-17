import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ sections, activeSection }) => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300">
            <div className="w-full px-8 py-4">
                <div className="flex items-center justify-between relative">
                    {/* Logo */}
                    {/* Logo */}
                    <div className="flex items-center space-x-3 cursor-pointer z-20" onClick={() => scrollToSection('hero')}>
                        <img
                            src="images/logo.png"
                            alt="Creatzion Technology"
                            className="h-20 w-auto object-contain"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-blue-500 rounded-full px-10 py-3 shadow-lg">
                        {sections.slice(0, 8).map((section, index) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={`text-base font-medium transition-colors ${activeSection === index
                                    ? 'text-blue-600 font-bold'
                                    : 'text-gray-600 hover:text-blue-500'
                                    }`}
                            >
                                {section.label}
                            </button>
                        ))}
                        <div className="relative group">
                            <button className="text-base font-medium text-gray-600 hover:text-blue-500 flex items-center">
                                More ▾
                            </button>
                            <div className="absolute right-0 mt-4 w-48 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all p-2">
                                {sections.slice(8).map((section, index) => (
                                    <button
                                        key={section.id}
                                        onClick={() => scrollToSection(section.id)}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                                    >
                                        {section.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 z-20"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden mt-4 pb-4 space-y-2">
                        {sections.map((section, index) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeSection === index
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                {section.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>


        </nav>
    );
};

export default Navigation;
