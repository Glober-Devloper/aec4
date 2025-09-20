import React, { useState } from 'react';
import { Brain, CheckCircle, X, RotateCcw, Award, Clock, Target, BookOpen } from 'lucide-react';

const ExamPrep = () => {
  const [currentSection, setCurrentSection] = useState('mcq');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const mcqQuestions = [
    {
      id: 1,
      question: "Who wrote the poem 'Leisure'?",
      options: ["W. H. Davies", "Rudyard Kipling", "Ralph Waldo Emerson", "Ernest Lawrence Thayer"],
      correct: "W. H. Davies",
      explanation: "W. H. Davies wrote 'Leisure' in 1911, emphasizing the importance of taking time to appreciate life's simple pleasures."
    },
    {
      id: 2,
      question: "What is the central theme of 'The Secret of the Machines'?",
      options: ["Nature's beauty", "Human-machine relationship", "Love and romance", "War and peace"],
      correct: "Human-machine relationship",
      explanation: "Kipling's poem explores the relationship between humans and machines, personifying machines to discuss their role in society."
    },
    {
      id: 3,
      question: "In 'Casey at the Bat', what happens to Casey in the end?",
      options: ["He hits a home run", "He strikes out", "He gets injured", "He walks"],
      correct: "He strikes out",
      explanation: "The poem ends with Casey striking out, despite everyone's expectations, showing the unpredictability of life."
    },
    {
      id: 4,
      question: "What literary device is prominently used in 'Very Indian Poem in Indian English'?",
      options: ["Metaphor", "Satire", "Alliteration", "Personification"],
      correct: "Satire",
      explanation: "Nissim Ezekiel uses satire to gently mock Indian English while exploring themes of cultural identity."
    },
    {
      id: 5,
      question: "In 'Witches' Loaves', what is Miss Martha's profession?",
      options: ["Teacher", "Bakery owner", "Artist", "Writer"],
      correct: "Bakery owner",
      explanation: "Miss Martha Meacham owns a bakery and becomes interested in a customer who buys stale bread."
    },
    {
      id: 6,
      question: "What does Nunez expect in 'The Country of the Blind'?",
      options: ["To be cured", "To rule over the blind", "To escape quickly", "To find treasure"],
      correct: "To rule over the blind",
      explanation: "Nunez expects to rule based on the saying 'In the country of the blind, the one-eyed man is king,' but finds this isn't true."
    },
    {
      id: 7,
      question: "Who is the author of 'The Boy Who Broke the Bank'?",
      options: ["O. Henry", "H. G. Wells", "Ruskin Bond", "Ambai"],
      correct: "Ruskin Bond",
      explanation: "Ruskin Bond wrote this story about how rumors can spread and cause unexpected consequences."
    },
    {
      id: 8,
      question: "What causes the bank to fail in 'The Boy Who Broke the Bank'?",
      options: ["Theft", "Fire", "Rumors", "Natural disaster"],
      correct: "Rumors",
      explanation: "A misunderstood complaint by Nathu spreads as rumors, causing panic and a bank run."
    },
    {
      id: 9,
      question: "What is the main literary technique in 'Water' by Emerson?",
      options: ["Irony", "Symbolism", "Satire", "Allusion"],
      correct: "Symbolism",
      explanation: "Emerson uses water as a symbol for life, wisdom, and the interconnectedness of all natural elements."
    },
    {
      id: 10,
      question: "Which story features the character Medina-saroté?",
      options: ["Witches' Loaves", "The Country of the Blind", "The Boy Who Broke the Bank", "The Squirrel"],
      correct: "The Country of the Blind",
      explanation: "Medina-saroté is the blind woman Nunez falls in love with in H. G. Wells' story."
    },
    {
      id: 11,
      question: "What does the squirrel symbolize in Ambai's story?",
      options: ["Freedom", "Human nature aspects", "Wealth", "Time"],
      correct: "Human nature aspects",
      explanation: "In 'The Squirrel', Ambai uses the squirrel as a metaphor to explore various aspects of human relationships and behavior."
    },
    {
      id: 12,
      question: "What happens to the customer's blueprint in 'Witches' Loaves'?",
      options: ["It's stolen", "It's ruined by butter", "It's lost", "It's completed"],
      correct: "It's ruined by butter",
      explanation: "Miss Martha's well-intentioned addition of butter to the bread ruins the architect's important blueprint."
    },
    {
      id: 13,
      question: "What is the setting of 'The Country of the Blind'?",
      options: ["African desert", "South American valley", "Asian mountains", "European forest"],
      correct: "South American valley",
      explanation: "The story is set in an isolated valley in South America where blindness has been universal for generations."
    },
    {
      id: 14,
      question: "Who spreads the first rumor in 'The Boy Who Broke the Bank'?",
      options: ["Nathu", "Sitaram", "Mrs. Srivastava", "Bank manager"],
      correct: "Sitaram",
      explanation: "Sitaram, the washerman, misunderstands Nathu's complaint and spreads the first version of the rumor."
    },
    {
      id: 15,
      question: "What does the phrase 'What is this life if, full of care' emphasize in 'Leisure'?",
      options: ["Life's problems", "Need for relaxation", "Work importance", "Time's value"],
      correct: "Need for relaxation",
      explanation: "This opening line emphasizes the poem's central theme about the need to slow down and appreciate life's simple pleasures."
    },
    {
      id: 16,
      question: "What type of narrative technique does O. Henry typically use?",
      options: ["Stream of consciousness", "Surprise endings", "Multiple perspectives", "Flashbacks"],
      correct: "Surprise endings",
      explanation: "O. Henry is famous for his surprise endings, which he uses effectively in 'Witches' Loaves'."
    },
    {
      id: 17,
      question: "What does Kipling warn about in 'The Secret of the Machines'?",
      options: ["Machine rebellion", "Human laziness", "Environmental damage", "Economic collapse"],
      correct: "Machine rebellion",
      explanation: "The machines in Kipling's poem warn that they could turn against humans if not properly respected and maintained."
    },
    {
      id: 18,
      question: "What literary movement is associated with Emerson's 'Water'?",
      options: ["Romanticism", "Realism", "Transcendentalism", "Modernism"],
      correct: "Transcendentalism",
      explanation: "Emerson was a key figure in the Transcendentalist movement, emphasizing the inherent goodness of nature."
    },
    {
      id: 19,
      question: "What sport is featured in 'Casey at the Bat'?",
      options: ["Football", "Basketball", "Baseball", "Cricket"],
      correct: "Baseball",
      explanation: "The poem is about a baseball game and captures the emotional investment Americans had in the sport."
    },
    {
      id: 20,
      question: "What does the title 'Very Indian Poem in Indian English' suggest?",
      options: ["Pride in Indian culture", "Criticism of English", "Irony about authenticity", "Celebration of diversity"],
      correct: "Irony about authenticity",
      explanation: "The title is ironic, questioning what makes something 'Indian' and exploring issues of cultural authenticity."
    },
    {
      id: 21,
      question: "What profession was the customer in 'Witches' Loaves' actually in?",
      options: ["Artist", "Writer", "Architect", "Teacher"],
      correct: "Architect",
      explanation: "Contrary to Miss Martha's assumption, the customer was an architect working on important blueprints."
    },
    {
      id: 22,
      question: "How do the blind villagers view Nunez's claims about sight?",
      options: ["With curiosity", "As mental illness", "With fear", "With admiration"],
      correct: "As mental illness",
      explanation: "The villagers consider Nunez's claims about 'seeing' as symptoms of mental illness that needs to be cured."
    },
    {
      id: 23,
      question: "What triggers the bank run in Bond's story?",
      options: ["Theft report", "Manager's absence", "Spread of rumors", "Economic crisis"],
      correct: "Spread of rumors",
      explanation: "The misunderstood complaint by Nathu spreads as rumors through the town, triggering panic and a bank run."
    },
    {
      id: 24,
      question: "What does Ambai's writing style represent?",
      options: ["Classical Indian literature", "Contemporary women's writing", "Historical fiction", "Science fiction"],
      correct: "Contemporary women's writing",
      explanation: "Ambai represents contemporary Indian women's writing with focus on everyday life and psychological depth."
    },
    {
      id: 25,
      question: "What is the total weightage for Unit I and Unit II combined?",
      options: ["25 marks", "40 marks", "50 marks", "75 marks"],
      correct: "50 marks",
      explanation: "Unit I (Poetry) and Unit II (Short Stories) each carry 25 marks, totaling 50 marks for the course."
    }
  ];

  const shortAnswerQuestions = [
    {
      id: 1,
      question: "Explain the central theme of 'Leisure' by W. H. Davies.",
      answer: "The central theme of 'Leisure' is the importance of taking time to appreciate life's simple pleasures. Davies criticizes modern life's constant busyness and argues that without leisure time to 'stand and stare,' we miss the essence of living. The poem emphasizes that true wealth lies not in material success but in having time to observe and appreciate the beauty around us - watching cows, streams, and nature's wonders.",
      points: ["Theme of leisure vs. busy life", "Criticism of modern lifestyle", "Importance of nature appreciation", "Quality of life over quantity"]
    },
    {
      id: 2,
      question: "How does O. Henry use irony in 'Witches' Loaves'?",
      answer: "O. Henry employs situational irony masterfully in 'Witches' Loaves.' Miss Martha's well-intentioned act of kindness - adding butter to the bread to help what she assumes is a struggling artist - actually destroys the customer's important architectural blueprint and ruins his career opportunity. The irony lies in the fact that her attempt to help causes exactly the opposite result, demonstrating how assumptions and good intentions can lead to harmful consequences.",
      points: ["Situational irony definition", "Miss Martha's good intentions", "Actual harmful consequences", "Theme of assumptions"]
    },
    {
      id: 3,
      question: "Analyze the significance of the title 'The Country of the Blind'.",
      answer: "The title refers both to the literal setting - a valley where all inhabitants are blind - and to the metaphorical concept of different perspectives on reality. Wells challenges the proverb 'In the country of the blind, the one-eyed man is king' by showing that the blind community has created a perfect society adapted to their condition. The title suggests that what we consider 'blindness' might actually be a different, equally valid way of experiencing the world.",
      points: ["Literal meaning - blind community", "Metaphorical meaning - different perspectives", "Challenge to common proverb", "Theme of relativity of truth"]
    },
    {
      id: 4,
      question: "Discuss the role of rumors in 'The Boy Who Broke the Bank'.",
      answer: "Rumors serve as the driving force of the plot and central theme in Bond's story. Starting from Nathu's innocent complaint about unpaid wages, the rumor transforms and amplifies as it spreads through the community - from Sitaram to Mrs. Srivastava and beyond. Each person adds their own interpretation, making it more dramatic. The story demonstrates how quickly misinformation can spread in close-knit communities and how economic institutions depend entirely on public trust and confidence.",
      points: ["Chain of rumor spread", "Amplification and distortion", "Community psychology", "Economic implications"]
    },
    {
      id: 5,
      question: "What is the symbolic significance of water in Emerson's poem?",
      answer: "In Emerson's 'Water,' water symbolizes the fundamental essence of life and wisdom that transcends human civilization. Water represents the interconnectedness of all natural elements, moving freely between earth and sky, understanding both nature and human society. As a transcendentalist, Emerson presents water as a teacher and guide, embodying the divine presence in nature that humans can learn from if they remain connected to the natural world.",
      points: ["Symbol of life and wisdom", "Interconnectedness theme", "Transcendentalist philosophy", "Nature as teacher"]
    },
    {
      id: 6,
      question: "How does Nissim Ezekiel use humor in 'Very Indian Poem in Indian English'?",
      answer: "Ezekiel uses gentle satirical humor to explore serious themes about cultural identity and language. He mimics the patterns of Indian English - grammar structures, expressions, and cultural references - but does so with affection rather than mockery. The humor lies in the recognition of familiar speech patterns while simultaneously questioning what makes something authentically 'Indian.' The title itself is humorous and ironic, highlighting the complexity of post-colonial identity.",
      points: ["Satirical but affectionate humor", "Mimicry of Indian English patterns", "Cultural identity questions", "Ironic title"]
    }
  ];

  const longAnswerQuestions = [
    {
      id: 1,
      question: "Compare and contrast the themes of 'Leisure' by W. H. Davies and 'The Secret of the Machines' by Rudyard Kipling in the context of modern life and technology.",
      answer: "Both poems address the relationship between humans and modernity, but from different perspectives. Davies in 'Leisure' advocates for slowing down and reconnecting with nature, criticizing the fast pace of modern life that prevents us from appreciating simple pleasures. He emphasizes the human need for contemplation and natural beauty.\n\nKipling's 'The Secret of the Machines' takes a different approach, personifying machines to explore the human-technology relationship. While Davies sees modern life as problematic, Kipling presents a more nuanced view where machines serve humanity but also warn of potential consequences if misused.\n\nBoth poets share concerns about modern life's direction but offer different solutions - Davies suggests returning to nature and leisure, while Kipling advocates for responsible use of technology. Both poems remain relevant today as we grapple with work-life balance and our relationship with technology.",
      points: ["Comparison of themes", "Different perspectives on modernity", "Nature vs. technology focus", "Contemporary relevance", "Poetic techniques used", "Social commentary aspects"]
    },
    {
      id: 2,
      question: "Analyze the character development and motivations of Miss Martha in 'Witches' Loaves' and discuss how O. Henry uses her character to convey larger themes about assumptions and social class.",
      answer: "Miss Martha Meacham is portrayed as a well-meaning but presumptuous middle-class woman whose character embodies the dangers of making assumptions based on appearance and social class. O. Henry develops her character through detailed psychological insight, showing her romantic fantasies about the shabby customer whom she assumes to be a struggling artist.\n\nHer motivations stem from loneliness, romantic idealism, and a desire to help, but these are filtered through class-based assumptions. She sees poverty and immediately categorizes the man as an artist, reflecting society's stereotypes about creative professions and economic status.\n\nThrough Miss Martha, O. Henry critiques the middle class tendency to romanticize poverty and make charitable gestures without truly understanding the recipient's situation. Her character demonstrates how good intentions, when based on false assumptions, can cause more harm than indifference. The story uses her character to explore themes of social class misunderstanding, the gap between appearance and reality, and the complexity of human motivation.",
      points: ["Character analysis of Miss Martha", "Psychological motivations", "Class-based assumptions", "Romantic idealism vs. reality", "Social commentary", "Unintended consequences theme"]
    },
    {
      id: 3,
      question: "Examine H. G. Wells' use of the isolated valley setting in 'The Country of the Blind' and explain how it serves as an allegory for broader social and philosophical themes.",
      answer: "Wells uses the isolated valley setting as more than mere backdrop - it functions as a carefully constructed allegorical space that enables exploration of fundamental questions about perception, truth, and social adaptation. The physical isolation of the valley mirrors the conceptual isolation of different worldviews and ways of experiencing reality.\n\nThe valley's unique history - fifteen generations of blindness caused by a disease - creates a society perfectly adapted to non-visual existence. This setting allows Wells to examine how societies define normalcy and how they treat those who differ from the norm. The geographical isolation enables the development of a complete alternative civilization with its own values, customs, and understanding of reality.\n\nAllegorically, the valley represents any closed society or system of thought that has developed its own internal logic and rejects outside perspectives. Nunez's experience mirrors that of innovators, reformers, or outsiders who challenge established ways of thinking. The setting emphasizes themes about the relativity of truth, the danger of assuming superiority based on perceived advantages, and the question of whether adaptation to specific circumstances might be more valuable than abstract capabilities.\n\nThe valley thus serves as a microcosm for examining larger questions about civilization, progress, and the nature of human knowledge.",
      points: ["Allegorical function of setting", "Physical vs. conceptual isolation", "Alternative civilization development", "Themes of normalcy and difference", "Outsider perspective challenges", "Relativity of truth and knowledge"]
    }
  ];

  const handleMCQAnswer = (answer: string) => {
    setUserAnswers({ ...userAnswers, [currentQuestionIndex]: answer });
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < mcqQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const finishQuiz = () => {
    let correctAnswers = 0;
    mcqQuestions.forEach((question, index) => {
      if (userAnswers[index] === question.correct) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const getScoreColor = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreMessage = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return 'Excellent! You have a strong grasp of the material.';
    if (percentage >= 60) return 'Good work! Review the topics you missed.';
    return 'Keep studying! Focus on understanding the key concepts.';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
        <div className="flex items-center mb-4">
          <Brain className="w-8 h-8 mr-4" />
          <div>
            <h1 className="text-3xl font-bold">Exam Preparation</h1>
            <p className="text-xl opacity-90">Practice Tests & Study Materials</p>
          </div>
        </div>
        <p className="text-lg opacity-90 max-w-4xl">
          Test your knowledge with comprehensive MCQs and practice questions designed to help you 
          excel in your AEC-IV Literature examination. Build confidence and identify areas for improvement.
        </p>
      </div>

      {/* Navigation */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => setCurrentSection('mcq')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
              currentSection === 'mcq' 
                ? 'bg-green-500 text-white shadow-lg' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Target className="w-5 h-5" />
            <span>MCQ Practice (25 Questions)</span>
          </button>
          <button
            onClick={() => setCurrentSection('short')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
              currentSection === 'short' 
                ? 'bg-green-500 text-white shadow-lg' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Clock className="w-5 h-5" />
            <span>Short Answers (6 Questions)</span>
          </button>
          <button
            onClick={() => setCurrentSection('long')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
              currentSection === 'long' 
                ? 'bg-green-500 text-white shadow-lg' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            <span>Long Answers (3 Questions)</span>
          </button>
        </div>
      </div>

      {/* MCQ Section */}
      {currentSection === 'mcq' && (
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          {!showResults ? (
            <>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Multiple Choice Questions</h2>
                <div className="text-sm text-gray-600">
                  Question {currentQuestionIndex + 1} of {mcqQuestions.length}
                </div>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
                <div 
                  className="bg-green-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / mcqQuestions.length) * 100}%` }}
                ></div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  {mcqQuestions[currentQuestionIndex].question}
                </h3>
                
                <div className="grid gap-3">
                  {mcqQuestions[currentQuestionIndex].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleMCQAnswer(option)}
                      className={`p-4 text-left rounded-lg border-2 transition-all ${
                        userAnswers[currentQuestionIndex] === option
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <span className="font-medium text-gray-800">{option}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={prevQuestion}
                  disabled={currentQuestionIndex === 0}
                  className="px-6 py-2 bg-gray-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors"
                >
                  Previous
                </button>
                
                <div className="flex space-x-4">
                  {currentQuestionIndex === mcqQuestions.length - 1 ? (
                    <button
                      onClick={finishQuiz}
                      className="px-8 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
                    >
                      Finish Quiz
                    </button>
                  ) : (
                    <button
                      onClick={nextQuestion}
                      className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Next
                    </button>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="text-center">
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="w-12 h-12 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Quiz Completed!</h2>
                <p className={`text-6xl font-bold mb-4 ${getScoreColor(score, mcqQuestions.length)}`}>
                  {score}/{mcqQuestions.length}
                </p>
                <p className="text-xl text-gray-600 mb-6">
                  {getScoreMessage(score, mcqQuestions.length)}
                </p>
                <button
                  onClick={resetQuiz}
                  className="flex items-center space-x-2 mx-auto px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <RotateCcw className="w-5 h-5" />
                  <span>Retake Quiz</span>
                </button>
              </div>

              <div className="text-left space-y-6">
                <h3 className="text-xl font-bold text-gray-800">Detailed Results</h3>
                {mcqQuestions.map((question, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start space-x-3 mb-3">
                      {userAnswers[index] === question.correct ? (
                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                      )}
                      <div className="flex-1">
                        <p className="font-medium text-gray-800 mb-2">{question.question}</p>
                        <div className="text-sm space-y-1">
                          <p>
                            <span className="text-gray-600">Your answer:</span> 
                            <span className={userAnswers[index] === question.correct ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
                              {' '}{userAnswers[index] || 'No answer selected'}
                            </span>
                          </p>
                          {userAnswers[index] !== question.correct && (
                            <p>
                              <span className="text-gray-600">Correct answer:</span>
                              <span className="text-green-600 font-medium"> {question.correct}</span>
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="ml-9 bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                      <p className="text-sm text-gray-700">{question.explanation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Short Answer Questions */}
      {currentSection === 'short' && (
        <div className="space-y-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Short Answer Questions (5 marks each)</h2>
            <p className="text-gray-600 mb-8">
              Answer any TWO out of the following questions in about 100-150 words each. 
              Focus on key points and provide specific examples from the texts.
            </p>
            
            {shortAnswerQuestions.map((question) => (
              <div key={question.id} className="mb-12 border-b border-gray-200 pb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Q{question.id}. {question.question}
                </h3>
                
                <div className="bg-blue-50 rounded-lg p-6 mb-4">
                  <h4 className="font-semibold text-blue-800 mb-3">Sample Answer:</h4>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{question.answer}</p>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Key Points to Include:</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    {question.points.map((point, index) => (
                      <li key={index}>• {point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Long Answer Questions */}
      {currentSection === 'long' && (
        <div className="space-y-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Long Answer Questions (10 marks each)</h2>
            <p className="text-gray-600 mb-8">
              Answer any THREE out of the following questions in about 300-400 words each. 
              Provide detailed analysis with examples and critical insights.
            </p>
            
            {longAnswerQuestions.map((question) => (
              <div key={question.id} className="mb-12 border-b border-gray-200 pb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Q{question.id}. {question.question}
                </h3>
                
                <div className="bg-indigo-50 rounded-lg p-6 mb-4">
                  <h4 className="font-semibold text-indigo-800 mb-3">Sample Answer:</h4>
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">{question.answer}</div>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Assessment Criteria:</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    {question.points.map((point, index) => (
                      <li key={index}>• {point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Study Tips */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-2xl p-8 border border-yellow-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Exam Success Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Clock className="w-8 h-8 text-orange-500 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Time Management</h3>
            <p className="text-sm text-gray-600">Allocate 1 minute per MCQ, 7-8 minutes per short answer, and 15-20 minutes per long answer.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Target className="w-8 h-8 text-green-500 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Answer Strategy</h3>
            <p className="text-sm text-gray-600">Start with questions you're most confident about, then return to challenging ones.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <BookOpen className="w-8 h-8 text-blue-500 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Text References</h3>
            <p className="text-sm text-gray-600">Always support your answers with specific examples and quotes from the texts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <CheckCircle className="w-8 h-8 text-purple-500 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Review Process</h3>
            <p className="text-sm text-gray-600">Review your answers, check for grammatical errors, and ensure you've addressed all parts of each question.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Brain className="w-8 h-8 text-red-500 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Critical Analysis</h3>
            <p className="text-sm text-gray-600">Show understanding of themes, literary devices, and contextual significance in your responses.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Award className="w-8 h-8 text-teal-500 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Quality Writing</h3>
            <p className="text-sm text-gray-600">Write clearly, organize your thoughts logically, and maintain academic tone throughout.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamPrep;