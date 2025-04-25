import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Award, Briefcase, GraduationCap, Code, FileText, Book, User } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm z-10 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-blue-400">SM</a>
          <div className="flex space-x-4">
            <a href="#about" className="hover:text-blue-400 transition-colors duration-300">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors duration-300">Skills</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors duration-300">Experience</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors duration-300">Projects</a>
            <a href="#education" className="hover:text-blue-400 transition-colors duration-300">Education</a>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/sulaksh-malan/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
              <Github size={20} />
            </a>
            <a href="mailto:sulaksh.malan@gmail.com" className="hover:text-blue-400 transition-colors duration-300">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Sulaksh Malan</h1>
          <h2 className="text-2xl text-blue-400 mb-8">Data Analyst & Computer Science Engineer</h2>
          <p className="max-w-2xl mx-auto text-gray-300 mb-10">
            Passionate about transforming data into actionable insights and building innovative solutions.
            Specialized in data analysis, machine learning, and software development.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-colors duration-300">
              Contact Me
            </a>
            <a href="#projects" className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-md transition-colors duration-300">
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-800">
        <div className="container mx-auto">
          <div className="flex items-center mb-10">
            <User className="text-blue-400 mr-3" size={28} />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <p className="text-gray-300 mb-4">
              I am a Computer Science and Engineering student with a strong foundation in data analysis and programming.
              My journey in tech has equipped me with the skills to analyze complex datasets and develop efficient solutions.
            </p>
            <p className="text-gray-300">
              Throughout my academic and professional experience, I've worked on various projects involving data analysis,
              machine learning, and web development. I'm constantly exploring new technologies and methodologies to expand my skill set.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto">
          <div className="flex items-center mb-10">
            <Code className="text-blue-400 mr-3" size={28} />
            <h2 className="text-3xl font-bold">Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-700 px-3 py-1 rounded-full hover:bg-blue-500 transition-colors duration-300">Python</span>
                <span className="bg-gray-700 px-3 py-1 rounded-full hover:bg-blue-500 transition-colors duration-300">SQL</span>
                <span className="bg-gray-700 px-3 py-1 rounded-full hover:bg-blue-500 transition-colors duration-300">HTML</span>
                <span className="bg-gray-700 px-3 py-1 rounded-full hover:bg-blue-500 transition-colors duration-300">CSS</span>
                <span className="bg-gray-700 px-3 py-1 rounded-full hover:bg-blue-500 transition-colors duration-300">JavaScript</span>
                <span className="bg-gray-700 px-3 py-1 rounded-full hover:bg-blue-500 transition-colors duration-300">Java</span>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Data Analysis Tools</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-700 px-3 py-1 rounded-full hover:bg-blue-500 transition-colors duration-300">Pandas</span>
                <span className="bg-gray-700 px-3 py-1 rounded-full hover:bg-blue-500 transition-colors duration-300">NumPy</span>
                <span className="bg-gray-700 px-3 py-1 rounded-full hover:bg-blue-500 transition-colors duration-300">Matplotlib</span>
                <span className="bg-gray-700 px-3 py-1 rounded-full hover:bg-blue-500 transition-colors duration-300">Seaborn</span>
                <span className="bg-gray-700 px-3 py-1 rounded-full hover:bg-blue-500 transition-colors duration-300">Excel</span>
                <span className="bg-gray-700 px-3 py-1 rounded-full hover:bg-blue-500 transition-colors duration-300">Power BI</span>
                <span className="bg-gray-700 px-3 py-1 rounded-full hover:bg-blue-500 transition-colors duration-300">Tableau</span>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Other Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-700 px-3 py-1 rounded-full hover:bg-blue-500 transition-colors duration-300">Machine Learning</span>
                <span className="bg-gray-700 px-3 py-1 rounded-full hover:bg-blue-500 transition-colors duration-300">Data Visualization</span>
                <span className="bg-gray-700 px-3 py-1 rounded-full hover:bg-blue-500 transition-colors duration-300">Database Management</span>
                <span className="bg-gray-700 px-3 py-1 rounded-full hover:bg-blue-500 transition-colors duration-300">Statistical Analysis</span>
                <span className="bg-gray-700 px-3 py-1 rounded-full hover:bg-blue-500 transition-colors duration-300">Problem Solving</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-gray-800">
        <div className="container mx-auto">
          <div className="flex items-center mb-10">
            <Briefcase className="text-blue-400 mr-3" size={28} />
            <h2 className="text-3xl font-bold">Experience</h2>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h3 className="text-xl font-bold text-blue-400">Data Analyst Intern</h3>
              <span className="text-gray-400">2023</span>
            </div>
            <p className="text-gray-300 mb-4">
              As a Data Analyst Intern, I worked on analyzing large datasets and creating actionable insights.
              I developed dashboards and reports using Power BI and performed statistical analysis using Python.
            </p>
            <div className="mt-4">
              <h4 className="font-semibold text-gray-200 mb-2">Key Responsibilities:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Analyzed data using Python (Pandas, NumPy) and SQL to identify trends and patterns</li>
                <li>Created interactive dashboards and visualizations to communicate insights</li>
                <li>Collaborated with cross-functional teams to understand business requirements</li>
                <li>Performed data cleaning and preprocessing to ensure data quality</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto">
          <div className="flex items-center mb-10">
            <Code className="text-blue-400 mr-3" size={28} />
            <h2 className="text-3xl font-bold">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg group transition-all duration-300 hover:shadow-blue-400/20">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Sales Dashboard</h3>
              <p className="text-gray-300 mb-4">
                Developed an interactive sales dashboard using Power BI to visualize sales performance across different regions and product categories.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-700 px-2 py-1 text-sm rounded-full">Power BI</span>
                <span className="bg-gray-700 px-2 py-1 text-sm rounded-full">Data Analysis</span>
                <span className="bg-gray-700 px-2 py-1 text-sm rounded-full">SQL</span>
              </div>
              <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 group-hover:translate-x-1 transition-transform duration-300">
                View Project <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg group transition-all duration-300 hover:shadow-blue-400/20">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Customer Segmentation Analysis</h3>
              <p className="text-gray-300 mb-4">
                Implemented customer segmentation using K-means clustering to identify distinct customer groups for targeted marketing strategies.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-700 px-2 py-1 text-sm rounded-full">Python</span>
                <span className="bg-gray-700 px-2 py-1 text-sm rounded-full">Machine Learning</span>
                <span className="bg-gray-700 px-2 py-1 text-sm rounded-full">Pandas</span>
                <span className="bg-gray-700 px-2 py-1 text-sm rounded-full">Scikit-Learn</span>
              </div>
              <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 group-hover:translate-x-1 transition-transform duration-300">
                View Project <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg group transition-all duration-300 hover:shadow-blue-400/20">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Ecommerce Analytics Platform</h3>
              <p className="text-gray-300 mb-4">
                Built an analytics platform to track and analyze customer behavior, purchase patterns, and product performance for an e-commerce website.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-700 px-2 py-1 text-sm rounded-full">Python</span>
                <span className="bg-gray-700 px-2 py-1 text-sm rounded-full">SQL</span>
                <span className="bg-gray-700 px-2 py-1 text-sm rounded-full">Tableau</span>
                <span className="bg-gray-700 px-2 py-1 text-sm rounded-full">Data Visualization</span>
              </div>
              <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 group-hover:translate-x-1 transition-transform duration-300">
                View Project <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg group transition-all duration-300 hover:shadow-blue-400/20">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Sentiment Analysis Tool</h3>
              <p className="text-gray-300 mb-4">
                Developed a sentiment analysis tool to analyze customer reviews and feedback, providing insights into customer satisfaction and areas for improvement.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-700 px-2 py-1 text-sm rounded-full">Python</span>
                <span className="bg-gray-700 px-2 py-1 text-sm rounded-full">NLP</span>
                <span className="bg-gray-700 px-2 py-1 text-sm rounded-full">Machine Learning</span>
                <span className="bg-gray-700 px-2 py-1 text-sm rounded-full">NLTK</span>
              </div>
              <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 group-hover:translate-x-1 transition-transform duration-300">
                View Project <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 px-6 bg-gray-800">
        <div className="container mx-auto">
          <div className="flex items-center mb-10">
            <FileText className="text-blue-400 mr-3" size={28} />
            <h2 className="text-3xl font-bold">Certificates</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-blue-400/20 transition-all duration-300">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Data Science Professional Certificate</h3>
              <p className="text-gray-300 text-sm mb-2">Coursera</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-400 text-sm">2023</span>
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-blue-400/20 transition-all duration-300">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Machine Learning Specialization</h3>
              <p className="text-gray-300 text-sm mb-2">Stanford Online</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-400 text-sm">2022</span>
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-blue-400/20 transition-all duration-300">
              <h3 className="text-lg font-bold text-blue-400 mb-2">SQL for Data Analysis</h3>
              <p className="text-gray-300 text-sm mb-2">Udacity</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-400 text-sm">2022</span>
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto">
          <div className="flex items-center mb-10">
            <Award className="text-blue-400 mr-3" size={28} />
            <h2 className="text-3xl font-bold">Achievements</h2>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <ul className="space-y-6">
              <li className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center mr-4">
                  <Award size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-400">Hackathon Winner</h3>
                  <p className="text-gray-300">First place in the university hackathon for developing an innovative data analysis solution</p>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center mr-4">
                  <Award size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-400">Academic Excellence Award</h3>
                  <p className="text-gray-300">Recognized for outstanding performance in data science courses</p>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center mr-4">
                  <Award size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-400">Kaggle Competition Top 10%</h3>
                  <p className="text-gray-300">Ranked in the top 10% in a Kaggle machine learning competition</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-gray-800">
        <div className="container mx-auto">
          <div className="flex items-center mb-10">
            <GraduationCap className="text-blue-400 mr-3" size={28} />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="space-y-8">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold text-blue-400">Bachelor of Technology - Computer Science and Engineering</h3>
                <span className="text-gray-400">Since August 2022</span>
              </div>
              <p className="text-gray-300 mb-1">CGPA: 6.96</p>
              <p className="text-gray-300">
                Studying core computer science subjects including data structures, algorithms, database management, and software engineering.
                Focusing on data analysis and machine learning applications.
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold text-blue-400">Intermediate</h3>
                <span className="text-gray-400">April 2020 - March 2022</span>
              </div>
              <p className="text-gray-300">
                Completed intermediate education with a focus on Mathematics, Physics, and Computer Science.
                Developed strong foundation in analytical thinking and problem-solving skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto">
          <div className="flex items-center mb-10">
            <Mail className="text-blue-400 mr-3" size={28} />
            <h2 className="text-3xl font-bold">Contact</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <p className="text-gray-300 mb-6">
                I'm always open to new opportunities and collaborations. Feel free to reach out to me through any of the following channels:
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-blue-400 mr-3" size={20} />
                  <a href="mailto:sulaksh.malan@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">sulaksh.malan@gmail.com</a>
                </div>
                <div className="flex items-center">
                  <Linkedin className="text-blue-400 mr-3" size={20} />
                  <a href="https://www.linkedin.com/in/sulaksh-malan/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">linkedin.com/in/sulaksh-malan</a>
                </div>
                <div className="flex items-center">
                  <Github className="text-blue-400 mr-3" size={20} />
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">github.com/sulaksh-malan</a>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">&copy; 2024 Sulaksh Malan. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/sulaksh-malan/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="mailto:sulaksh.malan@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;