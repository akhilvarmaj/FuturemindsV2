import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveLessons } from './components/InteractiveLessons';
import { StudentDashboard } from './components/StudentDashboard';
import { CourseCatalog } from './components/CourseCatalog';
import { CampusAnanthNagar } from './components/CampusAnanthNagar';
import { Footer } from './components/Footer';
import { EnrollmentModal } from './components/EnrollmentModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [selectedCourseTitle, setSelectedCourseTitle] = useState<string>('Future Minds STEM Triple Masterclass');
  const [activeSection, setActiveSection] = useState<string>('hero');

  const handleOpenEnroll = (courseTitle?: string) => {
    if (courseTitle) {
      setSelectedCourseTitle(courseTitle);
    }
    setIsEnrollModalOpen(true);
  };

  const handleNavigateSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'root') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Sticky Header with Navigation & Quick Actions */}
      <Navbar
        onEnrollClick={() => handleOpenEnroll()}
        onNavigateSection={handleNavigateSection}
        activeSection={activeSection}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onEnrollClick={() => handleOpenEnroll()}
          onExploreLessons={() => handleNavigateSection('interactive-lessons')}
        />

        {/* Courses & Curriculum (Ages 6 to 16) */}
        <CourseCatalog
          onSelectCourseToEnroll={(title) => handleOpenEnroll(title)}
        />

        {/* Interactive Lesson Modules (Playable Rover & AI Playground) */}
        <InteractiveLessons
          onEnrollClick={() => handleOpenEnroll('Interactive Coding & Robotics Masterclass')}
        />

        {/* Real-time Student Growth & Engagement Dashboard */}
        <StudentDashboard
          onEnrollClick={() => handleOpenEnroll()}
        />

        {/* Physical Campus & Location: Ananth Nagar */}
        <CampusAnanthNagar
          onEnrollClick={() => handleOpenEnroll('Ananth Nagar Lab Campus Visit')}
        />
      </main>

      {/* Footer with FAQ & Contact */}
      <Footer
        onEnrollClick={() => handleOpenEnroll()}
      />

      {/* Persistent Floating WhatsApp Assistance Widget */}
      <FloatingWhatsApp
        onOpenEnrollModal={() => handleOpenEnroll()}
      />

      {/* Enrollment & WhatsApp Lead Modal */}
      <EnrollmentModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        defaultCourseTitle={selectedCourseTitle}
      />
    </div>
  );
}
