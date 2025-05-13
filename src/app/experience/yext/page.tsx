"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, MapPin, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { ScrollFade } from "../../../components/animations/scroll-fade"
import { StaggerChildren, StaggerItem } from "../../../components/animations/stagger-children"

export default function YextExperiencePage() {
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
            <div className="bg-purple-100 p-6 rounded-xl">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="Yext Logo"
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
                Yext
              </motion.h1>
              <motion.p
                className="text-xl text-gray-700 mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Software Engineering Intern, Reviews
              </motion.p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>May 2022 - August 2022</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>New York, NY</span>
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
                    ? "border-purple-500 text-purple-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("responsibilities")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "responsibilities"
                    ? "border-purple-500 text-purple-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Responsibilities
              </button>
              <button
                onClick={() => setActiveTab("achievements")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "achievements"
                    ? "border-purple-500 text-purple-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Achievements
              </button>
              <button
                onClick={() => setActiveTab("technologies")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "technologies"
                    ? "border-purple-500 text-purple-600"
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
                  During my internship at Yext, I worked with the Reviews team to enhance the platform's data processing
                  capabilities and user interface. I collaborated with a team of engineers to improve the efficiency and
                  user experience of the reviews management system.
                </p>

                <p>
                  My primary project focused on optimizing the reviews platform, resulting in a 25% improvement in data
                  processing efficiency. I also contributed to the development of new features for the customer-facing
                  dashboard using React and TypeScript.
                </p>

                <p>
                  Working at Yext provided me with valuable experience in full-stack development and database
                  optimization. I gained insights into how businesses manage their online presence and reputation
                  through customer reviews and feedback.
                </p>

                <div className="my-8 bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4">Key Highlights</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Enhanced the reviews platform, improving data processing efficiency by 25%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Built new features using React and TypeScript for the customer-facing dashboard</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Optimized database queries, reducing response time for high-traffic endpoints</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Participated in code reviews and contributed to team documentation</span>
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
                  <h3 className="text-xl font-semibold mb-3 text-purple-700">Frontend Development</h3>
                  <p className="text-gray-700">
                    Developed and maintained user interface components for the reviews management dashboard using React
                    and TypeScript. Implemented responsive designs and improved user experience through intuitive
                    interactions.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-purple-700">Backend Optimization</h3>
                  <p className="text-gray-700">
                    Optimized database queries and API endpoints to improve performance for high-traffic services.
                    Implemented caching strategies and efficient data processing algorithms to reduce response times.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-purple-700">Feature Implementation</h3>
                  <p className="text-gray-700">
                    Designed and implemented new features for the reviews platform, including enhanced filtering options
                    and improved analytics visualizations. Collaborated with product managers to ensure features met
                    user requirements.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-purple-700">Documentation and Testing</h3>
                  <p className="text-gray-700">
                    Created comprehensive documentation for new features and contributed to the team's knowledge base.
                    Developed unit and integration tests to ensure code quality and prevent regressions.
                  </p>
                </div>
              </StaggerItem>
            </StaggerChildren>
          )}

          {activeTab === "achievements" && (
            <ScrollFade>
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-xl border border-purple-100">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700">Performance Improvement</h3>
                  <p className="text-gray-700 mb-4">
                    Improved data processing efficiency by 25% through optimization of database queries and
                    implementation of more efficient algorithms for reviews analysis.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-purple-100">
                    <p className="text-sm text-gray-600 italic">
                      "Mark's optimization work significantly improved the performance of our reviews platform,
                      resulting in better user experience and faster data processing." - Engineering Manager
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-xl border border-purple-100">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700">UI Enhancement</h3>
                  <p className="text-gray-700 mb-4">
                    Developed new UI components for the customer dashboard that improved usability and received positive
                    feedback from clients during beta testing.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-purple-100">
                    <p className="text-sm text-gray-600 italic">
                      "The dashboard components Mark developed have made it much easier for our clients to manage and
                      analyze their reviews data." - Product Manager
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-xl border border-purple-100">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700">Technical Documentation</h3>
                  <p className="text-gray-700 mb-4">
                    Created comprehensive technical documentation that was adopted as a standard for the team, improving
                    knowledge sharing and onboarding processes.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-purple-100">
                    <p className="text-sm text-gray-600 italic">
                      "Mark's documentation has become a valuable resource for our team and has significantly improved
                      our onboarding process for new engineers." - Team Lead
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
                  <h3 className="text-xl font-semibold mb-3 text-purple-700">Frontend</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                      <span>React</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                      <span>TypeScript</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                      <span>Redux</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                      <span>CSS/SCSS</span>
                    </li>
                  </ul>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-purple-700">Backend</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                      <span>Java</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                      <span>Spring Boot</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                      <span>PostgreSQL</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                      <span>RESTful APIs</span>
                    </li>
                  </ul>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-purple-700">Tools & Practices</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                      <span>Git/GitHub</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                      <span>Jira</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                      <span>Agile/Scrum</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                      <span>CI/CD</span>
                    </li>
                  </ul>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-purple-700">Testing & Monitoring</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                      <span>Jest</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                      <span>JUnit</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                      <span>Datadog</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                      <span>Prometheus</span>
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
            className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-full transition-colors"
          >
            <span className="mr-2">Contact Me</span>
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
