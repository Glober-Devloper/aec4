import React, { useState } from 'react';
import { FileText, User, Calendar, MapPin, Lightbulb, Quote, ChevronDown, ChevronUp } from 'lucide-react';

const StoriesSection = () => {
  const [expandedStory, setExpandedStory] = useState<string | null>(null);

  const stories = [
    {
      id: 'witches',
      title: "Witches' Loaves",
      author: 'O. Henry',
      year: '1906',
      setting: 'New York bakery, early 20th century',
      theme: 'Misunderstanding, assumptions, and unintended consequences of kindness',
      summary: 'A kind-hearted bakery owner, Miss Martha, becomes interested in a poor customer who buys stale bread daily. Assuming he is an artist, she decides to help him by putting butter in his bread, leading to unexpected and tragic consequences.',
      characters: [
        'Miss Martha Meacham - The bakery owner, kind but presumptuous',
        'The customer - A poor man buying stale bread, actually an architect',
        'Blumberger - The customer\'s German friend and business partner'
      ],
      plotSummary: 'Miss Martha notices a poor, shabby man who regularly buys stale bread. She assumes he is a struggling artist and develops romantic feelings. To help him, she secretly adds fresh butter to his bread. Later, she discovers he was actually an architect whose important blueprint was ruined by the butter, causing him to lose a significant opportunity.',
      themes: [
        'Assumptions and their dangers',
        'Unintended consequences of well-meaning actions',
        'Class differences and misunderstanding',
        'The gap between appearance and reality'
      ],
      literaryDevices: [
        'Irony: The "help" actually harms the recipient',
        'Characterization: Detailed portrayal of Miss Martha\'s thoughts',
        'Foreshadowing: Hints about the true profession',
        'Symbolism: Bread as sustenance and the butter as unwanted interference'
      ],
      analysis: 'O. Henry masterfully shows how assumptions can lead to harmful actions, even when motivated by kindness. The story critiques social class assumptions and highlights the importance of understanding before acting.',
      examPoints: [
        'Theme of assumptions and their consequences',
        'Character analysis of Miss Martha',
        'Use of irony in the story',
        'Social class commentary',
        'Narrative structure and surprise ending'
      ]
    },
    {
      id: 'blind',
      title: 'The Country of the Blind',
      author: 'H. G. Wells',
      year: '1904',
      setting: 'An isolated valley in South America',
      theme: 'Perspective, adaptation, and the nature of truth and reality',
      summary: 'Nunez, a mountaineer, discovers a hidden valley where all inhabitants are blind and have been for generations. He expects to rule them with his sight but finds they have adapted perfectly to their world and consider his sight a disability.',
      characters: [
        'Nunez - A seeing man from the outside world',
        'The blind villagers - Adapted to life without sight',
        'Medina-saroté - A young blind woman Nunez falls in love with',
        'The village elders - Leaders who reject Nunez\'s claims about sight'
      ],
      plotSummary: 'Nunez falls into an isolated valley where blindness has been universal for fifteen generations. He expects to become their king ("In the country of the blind, the one-eyed man is king"), but the villagers have created a perfect society without sight and view his claims about "seeing" as mental illness. They even suggest removing his eyes to cure him.',
      themes: [
        'Relativity of truth and normalcy',
        'Adaptation and evolution',
        'The danger of arrogance and assumptions',
        'Different ways of perceiving reality',
        'Civilization and its definitions'
      ],
      literaryDevices: [
        'Allegory: The story represents broader themes about society and perception',
        'Irony: The saying is proved wrong',
        'Symbolism: Sight vs. blindness as different ways of understanding',
        'Metaphor: Physical blindness as metaphor for different perspectives'
      ],
      analysis: 'Wells challenges the assumption that sight automatically confers superiority. The story explores how different societies define normality and shows that perceived disabilities might actually be adaptations to specific environments.',
      examPoints: [
        'Reversal of the proverb "In the country of the blind..."',
        'Theme of relativity of truth',
        'Character development of Nunez',
        'Social commentary on normalcy and disability',
        'Allegorical interpretation of the story'
      ]
    },
    {
      id: 'bank',
      title: 'The Boy Who Broke the Bank',
      author: 'Ruskin Bond',
      year: '1993',
      setting: 'Small Indian hill town (probably in Himachal Pradesh)',
      theme: 'Rumors, mass psychology, and how small incidents can have large consequences',
      summary: 'A young bank employee named Nathu is upset about not receiving his salary. His casual complaints are misinterpreted and spread as rumors, eventually causing a bank run that leads to the bank\'s actual collapse.',
      characters: [
        'Nathu - A young sweeper at the bank, innocent catalyst',
        'Sitaram - The washerman who spreads the first rumor',
        'Mrs. Srivastava - A customer who panics and spreads the rumor further',
        'The bank manager - Struggles to control the situation'
      ],
      plotSummary: 'Nathu, a bank sweeper, complains to the washerman Sitaram about not getting his salary. Sitaram misunderstands and tells others the bank is in trouble. The rumor spreads rapidly through the small town, growing more exaggerated with each telling, until people panic and rush to withdraw their money, ultimately causing the bank to fail.',
      themes: [
        'Power of rumors and misinformation',
        'Mass psychology and panic',
        'Communication breakdown',
        'Economic vulnerability of small institutions',
        'Innocent actions with serious consequences'
      ],
      literaryDevices: [
        'Irony: The boy doesn\'t actually break the bank in the expected way',
        'Chain narrative: Story follows the rumor as it spreads',
        'Characterization: Various townspeople represent different social types',
        'Realism: Authentic portrayal of small-town Indian life'
      ],
      analysis: 'Bond demonstrates how quickly misinformation can spread in close-knit communities and how economic institutions depend on public trust. The story serves as a commentary on mass psychology and the fragility of economic systems.',
      examPoints: [
        'Theme of rumors and their consequences',
        'Character analysis of Nathu as innocent catalyst',
        'Social commentary on small-town life',
        'Economic themes and bank runs',
        'Narrative technique of following rumor spread'
      ]
    },
    {
      id: 'squirrel',
      title: 'The Squirrel',
      author: 'Ambai (C.S. Lakshmi)',
      year: '1990s',
      setting: 'Contemporary urban India',
      theme: 'Human relationships, empathy, and the complexity of emotional connections',
      summary: 'A contemplative story exploring human nature through the metaphor of a squirrel. The narrator reflects on relationships, understanding, and the different ways people connect with each other and with nature.',
      characters: [
        'The narrator - Reflective observer of human nature',
        'Various family members and neighbors - Represent different attitudes',
        'The squirrel - Central metaphorical figure'
      ],
      plotSummary: 'The story follows the narrator\'s observations about a squirrel and uses this as a lens to examine human relationships and behavior. Through the squirrel\'s interactions and the human responses to it, deeper themes about empathy, understanding, and connection are explored.',
      themes: [
        'Human-animal relationships',
        'Empathy and understanding',
        'Different perspectives on life',
        'Contemporary Indian family dynamics',
        'The complexity of emotional connections'
      ],
      literaryDevices: [
        'Symbolism: The squirrel represents various aspects of human nature',
        'Metaphor: Animal behavior as mirror for human behavior',
        'Stream of consciousness: Reflective narrative style',
        'Contemporary realism: Modern Indian setting and concerns'
      ],
      analysis: 'Ambai uses the simple observation of a squirrel to delve into complex questions about human relationships and empathy. The story exemplifies contemporary Indian women\'s writing with its focus on everyday life and psychological depth.',
      examPoints: [
        'Symbolic significance of the squirrel',
        'Theme of human-animal relationships',
        'Contemporary Indian women\'s writing',
        'Narrative technique and perspective',
        'Exploration of empathy and understanding'
      ]
    }
  ];

  const toggleExpansion = (storyId: string) => {
    setExpandedStory(expandedStory === storyId ? null : storyId);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-8 text-white">
        <div className="flex items-center mb-4">
          <FileText className="w-8 h-8 mr-4" />
          <div>
            <h1 className="text-3xl font-bold">UNIT II - Short Stories</h1>
            <p className="text-xl opacity-90">1 Credit • 25 Marks</p>
          </div>
        </div>
        <p className="text-lg opacity-90 max-w-4xl">
          Dive into four compelling short stories from different eras and cultures. Each story offers 
          unique insights into human nature, society, and the complexities of life through masterful storytelling.
        </p>
      </div>

      {/* Study Guide */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
          Short Story Analysis Guide
        </h2>
        <div className="grid md:grid-cols-4 gap-4 text-sm">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-800 mb-2">Plot Analysis</h3>
            <p className="text-purple-700">Identify exposition, rising action, climax, falling action, and resolution.</p>
          </div>
          <div className="bg-pink-50 p-4 rounded-lg">
            <h3 className="font-semibold text-pink-800 mb-2">Character Study</h3>
            <p className="text-pink-700">Analyze main and supporting characters, their motivations and development.</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-semibold text-red-800 mb-2">Theme Exploration</h3>
            <p className="text-red-700">Identify central themes and how they're developed through the narrative.</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-semibold text-orange-800 mb-2">Literary Devices</h3>
            <p className="text-orange-700">Note use of irony, symbolism, foreshadowing, and other techniques.</p>
          </div>
        </div>
      </div>

      {/* Stories */}
      <div className="space-y-6">
        {stories.map((story) => (
          <div key={story.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Story Header */}
            <div className="bg-gradient-to-r from-gray-50 to-purple-50 p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{story.title}</h3>
                  <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-3">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span className="font-medium">{story.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{story.year}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{story.setting}</span>
                    </div>
                  </div>
                  <div className="bg-purple-100 inline-block px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-purple-800">{story.theme}</span>
                  </div>
                </div>
                <button
                  onClick={() => toggleExpansion(story.id)}
                  className="ml-4 p-2 rounded-lg hover:bg-white transition-colors"
                >
                  {expandedStory === story.id ? (
                    <ChevronUp className="w-6 h-6 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Story Content */}
            <div className="p-6">
              {/* Summary - Always visible */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-blue-500" />
                  Summary
                </h4>
                <p className="text-gray-700 leading-relaxed">{story.summary}</p>
              </div>

              {/* Expanded content */}
              {expandedStory === story.id && (
                <div className="space-y-6 border-t border-gray-100 pt-6">
                  {/* Plot Summary */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Detailed Plot</h4>
                    <p className="text-gray-700 leading-relaxed bg-blue-50 p-4 rounded-lg">{story.plotSummary}</p>
                  </div>

                  {/* Characters */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Main Characters</h4>
                    <div className="space-y-2">
                      {story.characters.map((character, index) => (
                        <div key={index} className="bg-green-50 border-l-4 border-green-400 pl-4 py-2">
                          <p className="text-gray-700">{character}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Themes */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Major Themes</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {story.themes.map((theme, index) => (
                        <div key={index} className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                          <p className="text-gray-700 text-sm font-medium">{theme}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Literary Devices */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Literary Devices</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {story.literaryDevices.map((device, index) => (
                        <div key={index} className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                          <p className="text-gray-700 text-sm">{device}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Analysis */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Critical Analysis</h4>
                    <p className="text-gray-700 leading-relaxed bg-indigo-50 p-4 rounded-lg">{story.analysis}</p>
                  </div>

                  {/* Exam Points */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Important Exam Points</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {story.examPoints.map((point, index) => (
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

      {/* Comparative Analysis */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-2xl p-8 border border-indigo-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Comparative Analysis</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-3">Common Themes Across Stories</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• <strong>Assumptions and Misunderstandings:</strong> Present in "Witches' Loaves" and "Country of the Blind"</li>
              <li>• <strong>Social Commentary:</strong> Each story critiques aspects of society</li>
              <li>• <strong>Unintended Consequences:</strong> Actions leading to unexpected results</li>
              <li>• <strong>Human Nature:</strong> Exploration of basic human tendencies and relationships</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-3">Different Narrative Techniques</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• <strong>O. Henry:</strong> Surprise endings and irony</li>
              <li>• <strong>H.G. Wells:</strong> Allegorical science fiction</li>
              <li>• <strong>Ruskin Bond:</strong> Chain narrative and social realism</li>
              <li>• <strong>Ambai:</strong> Reflective, symbolic contemporary style</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Writing Tips */}
      <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl p-8 border border-orange-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Short Story Analysis Writing Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Introduction</h3>
            <p className="text-sm text-gray-600">Start with author, title, and brief context. State your thesis clearly.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Body Paragraphs</h3>
            <p className="text-sm text-gray-600">Focus on one theme or technique per paragraph with specific examples.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibent text-gray-800 mb-2">Use Quotes</h3>
            <p className="text-sm text-gray-600">Support your analysis with relevant quotations from the text.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Connect Themes</h3>
            <p className="text-sm text-gray-600">Show how different elements work together to create meaning.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Cultural Context</h3>
            <p className="text-sm text-gray-600">Consider the social and historical background of each story.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Conclusion</h3>
            <p className="text-sm text-gray-600">Summarize your analysis and state the story's broader significance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesSection;