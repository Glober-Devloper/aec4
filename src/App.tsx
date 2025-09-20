import React, { useState } from 'react';
import { BookOpen, Home, FileText, Brain, Menu, X, Search, Star, Users } from 'lucide-react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import PoetrySection from './pages/PoetrySection';
import StoriesSection from './pages/StoriesSection';
import ExamPrep from './pages/ExamPrep';
import AboutPage from './pages/AboutPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pages = [
    { id: 'home', title: 'Home', icon: Home, component: HomePage },
    { id: 'poetry', title: 'Poetry (Unit I)', icon: BookOpen, component: PoetrySection },
    { id: 'stories', title: 'Short Stories (Unit II)', icon: FileText, component: StoriesSection },
    { id: 'exam', title: 'Exam Preparation', icon: Brain, component: ExamPrep },
    { id: 'about', title: 'About', icon: Users, component: AboutPage },
  ];

  const CurrentPageComponent = pages.find(page => page.id === currentPage)?.component || HomePage;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <div className="flex">
        <Navigation 
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        
        <main className="flex-1 lg:ml-64 transition-all duration-300">
          <div className="container mx-auto px-4 py-6">
            <CurrentPageComponent />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;