import React from 'react';
import { BookOpen, Users, Target, Lightbulb, CheckCircle, Clock, Award, TrendingUp } from 'lucide-react';

const HomePage = () => {
  const objectives = [
    {
      icon: BookOpen,
      title: "Literature as Learning Medium",
      description: "Use literature to teach grammar, reading, spelling, vocabulary, writing mechanics, and creative writing skills"
    },
    {
      icon: Target,
      title: "Contextual Understanding", 
      description: "Strengthen contextual understanding through texts relevant to specific disciplines"
    },
    {
      icon: Lightbulb,
      title: "21st Century Skills",
      description: "Stimulate interest in acquiring modern skills for contemporary learning"
    },
    {
      icon: Users,
      title: "Self-Assessment",
      description: "Engage in self-assessment activities for personal development and growth"
    },
    {
      icon: Award,
      title: "Values & Ethics",
      description: "Absorb values, ethics, and attitudes of life and culture expressed in literature"
    }
  ];

  const stats = [
    { label: "Study Units", value: "2", icon: BookOpen },
    { label: "Literary Works", value: "9", icon: Target },
    { label: "Practice Questions", value: "25+", icon: CheckCircle },
    { label: "Total Credits", value: "2", icon: Award }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-2xl p-8 text-white">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">
            AEC-IV: Language Through Literature - II
          </h1>
          <p className="text-xl opacity-90 mb-6">
            Explore the rich world of poetry and short stories while developing essential language skills 
            for the 21st century. This comprehensive course combines literary appreciation with practical 
            language learning.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="font-semibold">Semester IV</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="font-semibold">2 Credits • 50 Marks</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="font-semibold">ESE Pattern</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
                <Icon className="w-8 h-8 text-indigo-500" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Course Objectives */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <Target className="w-6 h-6 mr-3 text-indigo-500" />
          Course Objectives
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((objective, index) => {
            const Icon = objective.icon;
            return (
              <div key={index} className="group p-6 border border-gray-200 rounded-xl hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-3 rounded-lg group-hover:bg-indigo-200 transition-colors">
                    <Icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2">{objective.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{objective.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Course Units */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Unit I - Poetry */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-lg mr-4">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">UNIT I - Poetry</h3>
              <p className="text-gray-600">1 Credit • 25 Marks</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-800">"Leisure" by W. H. Davies</p>
                <p className="text-sm text-gray-600">A reflection on the importance of taking time to appreciate life's simple pleasures</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-800">"The Secret of the Machines" by Rudyard Kipling</p>
                <p className="text-sm text-gray-600">An exploration of humanity's relationship with technology and machinery</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-800">"Water" by Ralph Waldo Emerson</p>
                <p className="text-sm text-gray-600">A philosophical meditation on nature's most essential element</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-800">"Casey at the Bat" by Ernest Lawrence Thayer</p>
                <p className="text-sm text-gray-600">A beloved narrative poem about baseball and the nature of heroism</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-800">"Very Indian Poem in Indian English" by Nissim Ezekiel</p>
                <p className="text-sm text-gray-600">A satirical look at Indian English and cultural identity</p>
              </div>
            </div>
          </div>
        </div>

        {/* Unit II - Short Stories */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg mr-4">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">UNIT II - Short Stories</h3>
              <p className="text-gray-600">1 Credit • 25 Marks</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-800">"Witches' Loaves" by O. Henry</p>
                <p className="text-sm text-gray-600">A touching story about assumptions, kindness, and unintended consequences</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-800">"The Country of the Blind" by H. G. Wells</p>
                <p className="text-sm text-gray-600">A philosophical tale about perspective, adaptation, and the nature of truth</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-800">"The Boy Who Broke the Bank" by Ruskin Bond</p>
                <p className="text-sm text-gray-600">A story about rumors, panic, and their impact on a small community</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-800">"The Squirrel" by Ambai</p>
                <p className="text-sm text-gray-600">A contemporary Indian story exploring human nature and relationships</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Study Tips */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-2xl p-8 border border-yellow-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <Lightbulb className="w-6 h-6 mr-3 text-yellow-600" />
          Study Tips for Success
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex items-start space-x-3">
            <Clock className="w-5 h-5 text-yellow-600 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">Regular Reading</h4>
              <p className="text-sm text-gray-600">Read each text multiple times to understand themes, style, and literary devices</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <TrendingUp className="w-5 h-5 text-yellow-600 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">Practice Questions</h4>
              <p className="text-sm text-gray-600">Regularly attempt MCQs and practice writing detailed answers</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Users className="w-5 h-5 text-yellow-600 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">Group Discussions</h4>
              <p className="text-sm text-gray-600">Discuss themes and interpretations with classmates for deeper understanding</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;