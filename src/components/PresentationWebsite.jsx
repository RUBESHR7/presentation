import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ChallengesSection from './ChallengesSection';
import EcosystemSection from './EcosystemSection';
import WebsitePrototype from './WebsitePrototype';
import TeacherAppPrototype from './TeacherAppPrototype';
import ParentAppPrototype from './ParentAppPrototype';
import StudentAppPrototype from './StudentAppPrototype';
import AdminDashboard from './AdminDashboard';
import PaymentFlow from './PaymentFlow';
import SecuritySection from './SecuritySection';
import BenefitsSection from './BenefitsSection';
import TimelineSection from './TimelineSection';
import SupportSection from './SupportSection';
import InvestmentSection from './InvestmentSection';
import PriceComparison from './PriceComparison';
import FeatureComparison from './FeatureComparison';
import HostingComparison from './HostingComparison';
import KeyAdvantages from './KeyAdvantages';
import CompetitorLimitation from './CompetitorLimitation';
import FinancialSummary from './FinancialSummary';
import ClosingSection from './ClosingSection';
import ScrollProgressButton from './ScrollProgressButton';

const PresentationWebsite = () => {
    const [activeSection, setActiveSection] = useState(0);

    const sections = [
        { id: 'hero', label: 'Home' },
        { id: 'about', label: 'About Us' },
        { id: 'challenges', label: 'Challenges' },
        { id: 'ecosystem', label: 'Ecosystem' },
        { id: 'website', label: 'Website Demo' },
        { id: 'teacher-app', label: 'Teacher App' },
        { id: 'parent-app', label: 'Parent App' },
        { id: 'student-app', label: 'Student App' },
        { id: 'admin', label: 'Admin Dashboard' },
        { id: 'payment', label: 'Payment System' },
        { id: 'security', label: 'Security' },
        { id: 'benefits', label: 'Benefits' },
        { id: 'timeline', label: 'Timeline' },
        { id: 'support', label: 'Support' },
        { id: 'investment', label: 'Investment' },
        { id: 'price-comparison', label: 'Price Comparison' },
        { id: 'feature-comparison', label: 'Feature Comparison' },
        { id: 'hosting-comparison', label: 'Hosting Options' },
        { id: 'advantages', label: 'Key Advantages' },
        { id: 'limitations', label: 'Market Limitations' },
        { id: 'financial-summary', label: 'Financial Summary' },
        { id: 'closing', label: 'Closing' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            sections.forEach((section, index) => {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(index);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="w-full overflow-x-hidden">
            <Navigation sections={sections} activeSection={activeSection} />

            <section id="hero">
                <HeroSection />
            </section>

            <section id="about">
                <AboutSection />
            </section>

            <section id="challenges">
                <ChallengesSection />
            </section>

            <section id="ecosystem">
                <EcosystemSection />
            </section>

            <section id="website">
                <WebsitePrototype />
            </section>

            <section id="teacher-app">
                <TeacherAppPrototype />
            </section>

            <section id="parent-app">
                <ParentAppPrototype />
            </section>

            <section id="student-app">
                <StudentAppPrototype />
            </section>

            <section id="admin">
                <AdminDashboard />
            </section>

            <section id="payment">
                <PaymentFlow />
            </section>

            <section id="security">
                <SecuritySection />
            </section>

            <section id="benefits">
                <BenefitsSection />
            </section>

            <section id="timeline">
                <TimelineSection />
            </section>

            <section id="support">
                <SupportSection />
            </section>

            <section id="investment">
                <InvestmentSection />
            </section>

            <section id="price-comparison">
                <PriceComparison />
            </section>

            <section id="feature-comparison">
                <FeatureComparison />
            </section>

            <section id="hosting-comparison">
                <HostingComparison />
            </section>

            <section id="advantages">
                <KeyAdvantages />
            </section>

            <section id="limitations">
                <CompetitorLimitation />
            </section>

            <section id="financial-summary">
                <FinancialSummary />
            </section>

            <section id="closing">
                <ClosingSection />
            </section>

            <ScrollProgressButton />
        </div>
    );
};

export default PresentationWebsite;
