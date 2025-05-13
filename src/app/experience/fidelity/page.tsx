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
                  <span>May 2023 - August 2023</span>
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
                  During my internship at Fidelity Investments, I worked with the Data Architecture team to design and
                  implement data pipelines for financial analytics systems. I collaborated with data engineers and
                  scientists to improve the accuracy and efficiency of data processing for investment analysis.
                </p>

                <p>
                  My primary project focused on creating visualization dashboards using Python and D3.js for internal
                  stakeholders. These dashboards provided valuable insights into investment trends and market analysis,
                  helping financial advisors make more informed decisions.
                </p>

                <p>
                  Working at Fidelity provided me with valuable experience in financial technology and data engineering.
                  I gained insights into how large financial institutions manage and analyze vast amounts of data to
                  drive investment strategies and business decisions.
                </p>

                <div className="my-8 bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4">Key Highlights</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Designed and implemented data pipelines for financial analytics systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Created visualization dashboards using Python and D3.js for internal stakeholders</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Collaborated with data scientists to improve machine learning model accuracy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Documented architecture patterns and best practices for the team</span>
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
                  <h3 className="text-xl font-semibold mb-3 text-green-700">Data Pipeline Development</h3>
                  <p className="text-gray-700">
                    Designed and implemented data pipelines for processing financial data from various sources. Ensured
                    data quality and consistency throughout the ETL process, and optimized pipelines for performance.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-green-700">Data Visualization</h3>
                  <p className="text-gray-700">
                    Created interactive dashboards and visualizations using Python and D3.js to present complex
                    financial data in an accessible format. Worked with stakeholders to understand their needs and
                    design effective visual representations.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-green-700">Machine Learning Support</h3>
                  <p className="text-gray-700">
                    Collaborated with data scientists to prepare and process data for machine learning models. Helped
                    improve model accuracy by implementing better data preprocessing techniques and feature engineering.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-green-700">Documentation and Knowledge Sharing</h3>
                  <p className="text-gray-700">
                    Documented architecture patterns, data flows, and best practices for the team. Created comprehensive
                    documentation for new data pipelines and visualization tools to facilitate knowledge sharing.
                  </p>
                </div>
              </StaggerItem>
            </StaggerChildren>
          )}

          {activeTab === "achievements" && (
            <ScrollFade>
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-green-50 to-white p-6 rounded-xl border border-green-100">
                  <h3 className="text-xl font-semibold mb-4 text-green-700">Data Pipeline Optimization</h3>
                  <p className="text-gray-700 mb-4">
                    Improved data processing efficiency by 20% through optimization of ETL pipelines and implementation
                    of parallel processing techniques.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-green-100">
                    <p className="text-sm text-gray-600 italic">
                      "Mark's optimization work significantly improved our data processing capabilities, allowing us to
                      handle larger datasets more efficiently." - Data Engineering Lead
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-white p-6 rounded-xl border border-green-100">
                  <h3 className="text-xl font-semibold mb-4 text-green-700">Visualization Dashboard</h3>
                  <p className="text-gray-700 mb-4">
                    Developed an interactive dashboard that provided valuable insights into investment trends, which was
                    adopted by multiple teams across the organization.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-green-100">
                    <p className="text-sm text-gray-600 italic">
                      "The visualization dashboard Mark created has become an essential tool for our financial advisors,
                      helping them make more informed investment decisions." - Product Manager
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-white p-6 rounded-xl border border-green-100">
                  <h3 className="text-xl font-semibold mb-4 text-green-700">Documentation Initiative</h3>
                  <p className="text-gray-700 mb-4">
                    Led an initiative to improve documentation of data architecture patterns, which was recognized by
                    senior management and adopted as a standard practice.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-green-100">
                    <p className="text-sm text-gray-600 italic">
                      "Mark's documentation initiative has significantly improved our team's knowledge sharing and
                      onboarding processes. His attention to detail and clear explanations have made complex systems
                      more accessible." - Team Lead
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
                      <span>Java</span>
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
                      <span>Apache Spark</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                      <span>Hadoop</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                      <span>PostgreSQL</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                      <span>AWS S3</span>
                    </li>
                  </ul>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-green-700">Visualization Tools</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                      <span>D3.js</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                      <span>Matplotlib</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                      <span>Plotly</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                      <span>Tableau</span>
                    </li>
                  </ul>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-green-700">Tools & Methodologies</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                      <span>Git/GitHub</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                      <span>Agile/Scrum</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                      <span>CI/CD</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                      <span>Data Modeling</span>
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
