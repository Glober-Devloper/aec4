import React from 'react';

interface NavigationProps {
  pages: Array<{
    id: string;
    title: string;
    icon: React.ComponentType<any>;
    component: React.ComponentType;
  }>;
  currentPage: string;
  setCurrentPage: (page: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  pages,
  currentPage,
  setCurrentPage,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  const handlePageChange = (pageId: string) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <nav className={`
        fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white shadow-xl border-r border-gray-200 z-40
        transform transition-transform duration-300 ease-in-out
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
        <div className="p-4">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Course Contents</h2>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full w-3/4"></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">Progress: 75%</p>
          </div>

          <ul className="space-y-2">
            {pages.map((page) => {
              const Icon = page.icon;
              const isActive = currentPage === page.id;
              
              return (
                <li key={page.id}>
                  <button
                    onClick={() => handlePageChange(page.id)}
                    className={`
                      w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left
                      transition-all duration-200 hover:scale-105
                      ${isActive 
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg' 
                        : 'text-gray-700 hover:bg-gray-100'
                      }
                    `}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{page.title}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 p-4 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl">
            <h3 className="font-semibold text-gray-800 mb-2">Exam Pattern</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <div>• MCQs: 10 questions (10 marks)</div>
              <div>• Short Answers: 2 out of 4 (10 marks)</div>
              <div>• Long Answers: 3 out of 6 (30 marks)</div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;