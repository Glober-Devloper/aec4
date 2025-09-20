import React from 'react';
import { BookOpen, Users, Target, Award, CheckCircle, Star, Clock, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Study Material",
      description: "Detailed notes covering all poems and short stories with analysis, themes, and literary devices"
    },
    {
      icon: Target,
      title: "Exam-Focused Content",
      description: "Content specifically designed to help you excel in your AEC-IV Literature examination"
    },
    {
      icon: Users,
      title: "Easy Language",
      description: "Complex literary concepts explained in simple, easy-to-understand language"
    },
    {
      icon: Award,
      title: "Practice Tests",
      description: "25+ MCQs and detailed practice questions with comprehensive solutions"
    },
    {
      icon: CheckCircle,
      title: "Interactive Learning",
      description: "Engaging interface with progress tracking and personalized study experience"
    },
    {
      icon: Star,
      title: "Quality Content",
      description: "Carefully curated content following the official syllabus and examination pattern"
    }
  ];

  const stats = [
    { label: "Literary Works Covered", value: "9" },
    { label: "Practice Questions", value: "25+" },
    { label: "Study Units", value: "2" },
    { label: "Total Marks Coverage", value: "50" }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
        <div className="flex items-center mb-4">
          <Users className="w-8 h-8 mr-4" />
          <div>
            <h1 className="text-3xl font-bold">About This Platform</h1>
            <p className="text-xl opacity-90">Your Complete Study Companion</p>
          </div>
        </div>
        <p className="text-lg opacity-90 max-w-4xl">
          This comprehensive e-learning platform is designed specifically for AEC-IV Language Through Literature - II students. 
          We provide detailed study materials, practice tests, and exam preparation tools to help you succeed in your literary studies.
        </p>
      </div>

      {/* Mission Statement */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Mission</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Comprehensive Learning</h3>
            <p className="text-gray-600 text-sm">Provide complete coverage of the syllabus with detailed explanations and examples</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Exam Excellence</h3>
            <p className="text-gray-600 text-sm">Help students achieve outstanding results in their examinations</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Accessible Education</h3>
            <p className="text-gray-600 text-sm">Make quality literary education accessible to all students</p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Platform Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group p-6 border border-gray-200 rounded-xl hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-3 rounded-lg group-hover:bg-indigo-200 transition-colors">
                    <Icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8 border border-purple-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Platform Statistics</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Overview */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Course Overview</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Unit I */}
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-blue-800 mb-4">UNIT I - Poetry</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                <span className="text-gray-700 text-sm">"Leisure" by W. H. Davies</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                <span className="text-gray-700 text-sm">"The Secret of the Machines" by Rudyard Kipling</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                <span className="text-gray-700 text-sm">"Water" by Ralph Waldo Emerson</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                <span className="text-gray-700 text-sm">"Casey at the Bat" by Ernest Lawrence Thayer</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                <span className="text-gray-700 text-sm">"Very Indian Poem in Indian English" by Nissim Ezekiel</span>
              </div>
            </div>
            <div className="mt-4 text-blue-700 text-sm">
              <strong>Weightage:</strong> 1 Credit • 25 Marks
            </div>
          </div>

          {/* Unit II */}
          <div className="bg-green-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-green-800 mb-4">UNIT II - Short Stories</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-gray-700 text-sm">"Witches' Loaves" by O. Henry</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-gray-700 text-sm">"The Country of the Blind" by H. G. Wells</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-gray-700 text-sm">"The Boy Who Broke the Bank" by Ruskin Bond</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-gray-700 text-sm">"The Squirrel" by Ambai</span>
              </div>
            </div>
            <div className="mt-4 text-green-700 text-sm">
              <strong>Weightage:</strong> 1 Credit • 25 Marks
            </div>
          </div>
        </div>
      </div>

      {/* Examination Pattern */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Examination Pattern</h2>
        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">End Semester Examination (ESE): 50 Marks</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <span className="font-medium text-gray-800">Group A: Ten Objective Type Questions (MCQs)</span>
              <span className="text-blue-600 font-semibold">10 Marks</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <span className="font-medium text-gray-800">Group B: Two Short Answer Questions (5×2)</span>
              <span className="text-green-600 font-semibold">10 Marks</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <span className="font-medium text-gray-800">Group C: Three Long Answer Questions (10×3)</span>
              <span className="text-purple-600 font-semibold">30 Marks</span>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <p>• Two questions to be answered out of a choice of Four (Short Answers)</p>
            <p>• Three questions to be answered out of a choice of Six (Long Answers)</p>
          </div>
        </div>
      </div>

      {/* Study Methodology */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-2xl p-8 border border-indigo-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Study Methodology</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <Clock className="w-8 h-8 text-indigo-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Step 1: Read</h3>
            <p className="text-sm text-gray-600">Comprehensive reading of all texts with context</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <BookOpen className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Step 2: Analyze</h3>
            <p className="text-sm text-gray-600">Deep analysis of themes, characters, and literary devices</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <Target className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Step 3: Practice</h3>
            <p className="text-sm text-gray-600">Extensive practice with MCQs and written answers</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <TrendingUp className="w-8 h-8 text-purple-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Step 4: Excel</h3>
            <p className="text-sm text-gray-600">Achieve excellence through comprehensive preparation</p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Get Started</h2>
        <div className="bg-gradient-to-r from-green-500 to-blue-500 p-6 rounded-xl text-white">
          <h3 className="text-xl font-semibold mb-4">Ready to Begin Your Literary Journey?</h3>
          <p className="mb-6 opacity-90">
            Navigate through our comprehensive study materials, practice with our extensive question bank, 
            and prepare thoroughly for your AEC-IV Literature examination. Success in literature studies 
            awaits you!
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="font-semibold">✓ Complete Syllabus Coverage</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="font-semibold">✓ Expert Analysis</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="font-semibold">✓ Exam-Ready Practice</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;