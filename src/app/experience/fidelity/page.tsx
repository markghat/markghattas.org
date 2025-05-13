"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, MapPin, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { ScrollFade } from "../../../components/animations/scroll-fade"
import { StaggerChildren, StaggerItem } from "../../../components/animations/stagger-children"

export default function FidelityExperiencePage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-12">
          <Link href="/#projects" className="inline-flex items-center text-sky-600 hover:text-sky-800 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Experience
          </Link>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
            <div className="bg-green-100 p-6 rounded-xl">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/fidelitylogo.png"
                  alt="Fidelity Investments Logo"
                  width={120}
                  height={120}
                  className="rounded-lg"
                />
              </motion.div>
            </div>

            <div>
              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Fidelity Investments
              </motion.h1>
              <motion.p
                className="text-xl text-gray-700 mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Software Engineering Intern, Data Architecture
              </motion.p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>June 2023 - August 2023</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Durham, NC</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab("overview")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "overview"
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("responsibilities")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "responsibilities"
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Responsibilities
              </button>
              <button
                onClick={() => setActiveTab("achievements")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "achievements"
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Achievements
              </button>
              <button
                onClick={() => setActiveTab("technologies")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "technologies"
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Technologies
              </button>
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === "overview" && (
            <ScrollFade>
              <div className="prose prose-lg max-w-none">
                <p>
                  During my internship at Fidelity Investments, I worked with the Data Architecture team as a Full Stack
                  Engineer Intern. My primary focus was developing a proprietary search engine for data engineers to
                  access Fidelity's extensive database ecosystem, containing over 300,000 datasets.
                </p>

                <p>
                  I implemented advanced techniques including embedding methods and PageRank algorithms to significantly
                  improve search result accuracy. Additionally, I developed optimized SQL queries for Snowflake
                  database, which reduced query execution time by 40%.
                </p>

                <p>
                  A key part of my contribution was implementing filter and query-suggestion features using Python,
                  which enhanced the usability and efficiency of the search engine for data engineers across the
                  organization.
                </p>

                <div className="my-8 bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4">Key Highlights</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>
                        Developed proprietary search engine for data engineers to access Fidelity Databases (300,000+
                        datasets)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>
                        Implemented embedding techniques and PageRank algorithms, sharpening search result accuracy
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Developed SQL queries for Snowflake database, reducing query execution time by 40%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Implemented filter and query-suggestion features using Python</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollFade>
          )}

          {activeTab === "responsibilities" && (
            <StaggerChildren className="space-y-6">
              <StaggerItem>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-green-700">Search Engine Development</h3>
                  <p className="text-gray-700">
                    Developed a proprietary search engine for data engineers to access Fidelity's extensive database
                    ecosystem containing over 300,000 datasets. Designed the architecture to handle complex queries and
                    large volumes of data efficiently.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-green-700">Algorithm Implementation</h3>
                  <p className="text-gray-700">
                    Implemented advanced embedding techniques and PageRank algorithms to significantly improve search
                    result accuracy. Optimized the algorithms to handle the specific requirements of financial data and
                    database metadata.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-green-700">Database Optimization</h3>
                  <p className="text-gray-700">
                    Developed optimized SQL queries for Snowflake database, reducing query execution time by 40%.
                    Implemented efficient indexing strategies and query patterns to improve overall database
                    performance.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-green-700">Feature Development</h3>
                  <p className="text-gray-700">
                    Implemented filter and query-suggestion features using Python to enhance the usability and
                    efficiency of the search engine. Created intuitive interfaces that improved the search experience
                    for data engineers.
                  </p>
                </div>
              </StaggerItem>
            </StaggerChildren>
          )}

          {activeTab === "achievements" && (
            <ScrollFade>
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-green-50 to-white p-6 rounded-xl border border-green-100">
                  <h3 className="text-xl font-semibold mb-4 text-green-700">Large-Scale Search Engine</h3>
                  <p className="text-gray-700 mb-4">
                    Successfully developed a proprietary search engine capable of indexing and searching through over
                    300,000 datasets, significantly improving data discovery for engineers across the organization.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-green-100">
                    <p className="text-sm text-gray-600 italic">
                      "The search engine Mark developed has transformed how our data engineers discover and access
                      datasets, making them significantly more productive." - Data Architecture Lead
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-white p-6 rounded-xl border border-green-100">
                  <h3 className="text-xl font-semibold mb-4 text-green-700">Query Performance Optimization</h3>
                  <p className="text-gray-700 mb-4">
                    Optimized SQL queries for Snowflake database, achieving a 40% reduction in query execution time and
                    improving overall system performance.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-green-100">
                    <p className="text-sm text-gray-600 italic">
                      "Mark's query optimization work has had a measurable impact on our database performance, allowing
                      us to handle more complex queries with faster response times." - Database Administrator
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-white p-6 rounded-xl border border-green-100">
                  <h3 className="text-xl font-semibold mb-4 text-green-700">Advanced Search Algorithms</h3>
                  <p className="text-gray-700 mb-4">
                    Implemented embedding techniques and PageRank algorithms that significantly improved search result
                    accuracy, making it easier for users to find relevant datasets.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-green-100">
                    <p className="text-sm text-gray-600 italic">
                      "The advanced algorithms Mark implemented have dramatically improved the relevance of search
                      results, making our search engine a truly valuable tool for the organization." - Engineering
                      Manager
                    </p>
                  </div>
                </div>
              </div>
            </ScrollFade>
          )}

          {activeTab === "technologies" && (
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StaggerItem>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-green-700">Programming Languages</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                      <span>Python</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                      <span>SQL</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                      <span>JavaScript</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                      <span>HTML/CSS</span>
                    </li>
                  </ul>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-green-700">Data Technologies</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                      <span>Snowflake</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                      <span>SQL Optimization</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                      <span>Database Indexing</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                      <span>Data Modeling</span>
                    </li>
                  </ul>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-green-700">Search Technologies</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                      <span>Embedding Techniques</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                      <span>PageRank Algorithms</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                      <span>Query Suggestion</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                      <span>Search Filtering</span>
                    </li>
                  </ul>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-green-700">Tools & Frameworks</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                      <span>NumPy</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                      <span>Pandas</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                      <span>Git/GitHub</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                      <span>REST APIs</span>
                    </li>
                  </ul>
                </div>
              </StaggerItem>
            </StaggerChildren>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full transition-colors"
          >
            <span className="mr-2">Contact Me</span>
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
