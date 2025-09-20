import React, { useState } from 'react';
import { BookOpen, User, Calendar, Quote, Lightbulb, FileText, ChevronDown, ChevronUp } from 'lucide-react';

const PoetrySection = () => {
  const [expandedPoem, setExpandedPoem] = useState<string | null>(null);

  const poems = [
    {
      id: 'leisure',
      title: 'Leisure',
      author: 'W. H. Davies',
      year: '1911',
      theme: 'The importance of taking time to appreciate simple pleasures in life',
      summary: 'This poem reflects on modern life\'s hustle and emphasizes the need to slow down and appreciate the beauty around us. Davies argues that without leisure time, we miss the essence of living.',
      literaryDevices: [
        'Rhetorical Questions: "What is this life if, full of care, We have no time to stand and stare?"',
        'Imagery: Vivid descriptions of nature and simple pleasures',
        'Repetition: "No time" repeated throughout to emphasize the theme',
        'Metaphor: Life compared to a journey that moves too fast'
      ],
      keyQuotes: [
        '"What is this life if, full of care, We have no time to stand and stare?"',
        '"A poor life this if, full of care, We have no time to stand and stare."'
      ],
      analysis: 'Davies criticizes the fast-paced modern lifestyle and advocates for moments of contemplation and appreciation of natural beauty. The poem serves as a reminder that true richness in life comes from taking time to observe and enjoy simple pleasures.',
      contextualMeaning: 'Written during the Industrial Revolution, this poem reflects concerns about urbanization and the loss of connection with nature. It remains relevant today in our digital age.',
      examPoints: [
        'Central theme of leisure versus busy life',
        'Use of rhetorical questions for emphasis',
        'Imagery of nature and simple pleasures',
        'Social commentary on modern lifestyle',
        'Structure and rhyme scheme analysis'
      ]
    },
    {
      id: 'machines',
      title: 'The Secret of the Machines',
      author: 'Rudyard Kipling',
      year: '1911',
      theme: 'The relationship between humans and machines, and the power of technology',
      summary: 'Kipling personifies machines and gives them a voice to speak about their relationship with humans. The machines describe how they serve humanity while warning about their potential power.',
      literaryDevices: [
        'Personification: Machines are given human characteristics and voice',
        'Repetition: "We" repeated to emphasize collective machine identity',
        'Metaphor: Machines as servants and masters',
        'Alliteration: Various examples throughout the poem'
      ],
      keyQuotes: [
        '"We were taken from the ore-bed and the mine,"',
        '"Remember, please, the Law by which we live, We are not built to comprehend a lie."'
      ],
      analysis: 'The poem explores the dual nature of machines - as helpful servants and potentially dangerous masters. Kipling presents machines as honest and straightforward, contrasting them with human complexity and dishonesty.',
      contextualMeaning: 'Written during the height of industrialization, the poem reflects both optimism about technological progress and caution about its potential consequences.',
      examPoints: [
        'Personification of machines as main literary device',
        'Theme of technology and human relationship',
        'Warning about machine dependence',
        'Industrial Revolution context',
        'Moral and ethical implications'
      ]
    },
    {
      id: 'water',
      title: 'Water',
      author: 'Ralph Waldo Emerson',
      year: '1847',
      theme: 'The essential nature and symbolic significance of water',
      summary: 'Emerson celebrates water as a fundamental element of life, exploring its various forms and functions in nature. The poem presents water as both literal and metaphorical.',
      literaryDevices: [
        'Symbolism: Water represents life, purity, and renewal',
        'Imagery: Vivid descriptions of water in various forms',
        'Metaphor: Water as teacher and guide',
        'Alliteration: Musical quality through repeated sounds'
      ],
      keyQuotes: [
        '"The water understands civilization well;"',
        '"It went up the sunbeam, and it went down through the cavern."'
      ],
      analysis: 'Emerson presents water as a wise entity that understands both nature and civilization. The poem reflects transcendentalist philosophy, emphasizing the interconnectedness of all natural elements.',
      contextualMeaning: 'Part of the Transcendentalist movement, this poem reflects 19th-century American philosophy that emphasized the inherent goodness of nature and the individual.',
      examPoints: [
        'Transcendentalist philosophy in the poem',
        'Water as symbol of life and wisdom',
        'Imagery and its effectiveness',
        'Connection between nature and civilization',
        'Philosophical themes and their relevance'
      ]
    },
    {
      id: 'casey',
      title: 'Casey at the Bat',
      author: 'Ernest Lawrence Thayer',
      year: '1888',
      theme: 'Pride, expectation, and the reality of failure',
      summary: 'This narrative poem tells the story of Casey, a legendary baseball player who fails to deliver in a crucial moment. It explores themes of pride, expectation, and human fallibility.',
      literaryDevices: [
        'Narrative structure: Tells a complete story',
        'Dramatic irony: Reader expects Casey to succeed',
        'Imagery: Vivid descriptions of the baseball game',
        'Rhythm: Matches the excitement of a baseball game'
      ],
      keyQuotes: [
        '"There is no joy in Mudville—mighty Casey has struck out."',
        '"But Casey still ignored it, and the umpire said, \'Strike two.\'"'
      ],
      analysis: 'The poem builds suspense through Casey\'s confidence and the crowd\'s expectations, only to deliver an anti-climactic ending. It serves as a commentary on pride and the unpredictability of life.',
      contextualMeaning: 'Written during baseball\'s rise in American culture, the poem captures the sport\'s emotional impact and its role in American identity.',
      examPoints: [
        'Narrative poem structure and effectiveness',
        'Theme of pride before a fall',
        'Building of suspense and dramatic tension',
        'American cultural context and baseball',
        'Character of Casey and his symbolism'
      ]
    },
    {
      id: 'indian',
      title: 'Very Indian Poem in Indian English',
      author: 'Nissim Ezekiel',
      year: '1976',
      theme: 'Cultural identity, language, and the Indian experience with English',
      summary: 'A satirical poem that mimics Indian English speech patterns while commenting on cultural identity, tradition versus modernity, and the complexity of post-colonial Indian experience.',
      literaryDevices: [
        'Satire: Gentle mockery of Indian English',
        'Irony: Title itself is ironic',
        'Code-switching: Mix of Indian and English expressions',
        'Vernacular: Authentic representation of Indian English'
      ],
      keyQuotes: [
        '"I am standing for peace and non-violence."',
        '"You want one cup, two cup, three cup tea?"'
      ],
      analysis: 'Ezekiel uses humor to explore serious themes about language, identity, and cultural authenticity. The poem questions what makes something "Indian" while celebrating the unique Indian English variety.',
      contextualMeaning: 'Written by an Indian Jewish poet, it reflects the complex multicultural reality of post-independence India and the role of English in Indian society.',
      examPoints: [
        'Satirical treatment of Indian English',
        'Questions of cultural authenticity',
        'Post-colonial linguistic identity',
        'Humor as a literary device',
        'Social commentary on Indian society'
      ]
    }
  ];

  const toggleExpansion = (poemId: string) => {
    setExpandedPoem(expandedPoem === poemId ? null : poemId);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="flex items-center mb-4">
          <BookOpen className="w-8 h-8 mr-4" />
          <div>
            <h1 className="text-3xl font-bold">UNIT I - Poetry</h1>
            <p className="text-xl opacity-90">1 Credit • 25 Marks</p>
          </div>
        </div>
        <p className="text-lg opacity-90 max-w-4xl">
          Explore five carefully selected poems that showcase different themes, styles, and perspectives. 
          Each poem offers unique insights into human experience, nature, technology, and cultural identity.
        </p>
      </div>

      {/* Study Guide */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
          Poetry Study Guide
        </h2>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">Reading Strategy</h3>
            <p className="text-blue-700">Read each poem multiple times - first for understanding, then for literary devices and themes.</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Analysis Focus</h3>
            <p className="text-green-700">Pay attention to imagery, metaphors, themes, and the poet's message or social commentary.</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-800 mb-2">Exam Preparation</h3>
            <p className="text-purple-700">Practice identifying literary devices and explaining their significance in context.</p>
          </div>
        </div>
      </div>

      {/* Poems */}
      <div className="space-y-6">
        {poems.map((poem) => (
          <div key={poem.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Poem Header */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{poem.title}</h3>
                  <div className="flex items-center space-x-6 text-gray-600 mb-3">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span className="font-medium">{poem.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{poem.year}</span>
                    </div>
                  </div>
                  <div className="bg-indigo-100 inline-block px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-indigo-800">{poem.theme}</span>
                  </div>
                </div>
                <button
                  onClick={() => toggleExpansion(poem.id)}
                  className="ml-4 p-2 rounded-lg hover:bg-white transition-colors"
                >
                  {expandedPoem === poem.id ? (
                    <ChevronUp className="w-6 h-6 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Poem Content */}
            <div className="p-6">
              {/* Summary - Always visible */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-blue-500" />
                  Summary
                </h4>
                <p className="text-gray-700 leading-relaxed">{poem.summary}</p>
              </div>

              {/* Expanded content */}
              {expandedPoem === poem.id && (
                <div className="space-y-6 border-t border-gray-100 pt-6">
                  {/* Key Quotes */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <Quote className="w-5 h-5 mr-2 text-green-500" />
                      Key Quotes
                    </h4>
                    <div className="space-y-2">
                      {poem.keyQuotes.map((quote, index) => (
                        <div key={index} className="bg-green-50 border-l-4 border-green-400 pl-4 py-2">
                          <p className="text-gray-700 italic">{quote}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Literary Devices */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Literary Devices</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {poem.literaryDevices.map((device, index) => (
                        <div key={index} className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                          <p className="text-gray-700 text-sm">{device}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Analysis */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Detailed Analysis</h4>
                    <p className="text-gray-700 leading-relaxed bg-blue-50 p-4 rounded-lg">{poem.analysis}</p>
                  </div>

                  {/* Contextual Meaning */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Historical & Cultural Context</h4>
                    <p className="text-gray-700 leading-relaxed bg-yellow-50 p-4 rounded-lg">{poem.contextualMeaning}</p>
                  </div>

                  {/* Exam Points */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Important Exam Points</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {poem.examPoints.map((point, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 text-sm">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Study Tips */}
      <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl p-8 border border-orange-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Poetry Analysis Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">First Reading</h3>
            <p className="text-sm text-gray-600">Read for overall understanding and emotional response</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Second Reading</h3>
            <p className="text-sm text-gray-600">Identify literary devices, structure, and rhyme scheme</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Third Reading</h3>
            <p className="text-sm text-gray-600">Analyze themes, symbolism, and deeper meanings</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Context Research</h3>
            <p className="text-sm text-gray-600">Understand the poet's background and historical context</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Compare & Contrast</h3>
            <p className="text-sm text-gray-600">Find connections and differences between poems</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Practice Writing</h3>
            <p className="text-sm text-gray-600">Write analysis paragraphs and practice exam answers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoetrySection;