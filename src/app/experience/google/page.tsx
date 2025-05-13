"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, MapPin, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { ScrollFade } from "../../../components/animations/scroll-fade"
import { StaggerChildren, StaggerItem } from "../../../components/animations/stagger-children"

export default function GoogleExperiencePage() {
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
            <div className="bg-orange-100 p-6 rounded-xl">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/googlelogo.png"
                  alt="Google Logo"
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
                Google
              </motion.h1>
              <motion.p
                className="text-xl text-gray-700 mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Software Engineering Intern, Google Cloud
              </motion.p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>May 2025 - August 2025</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Washington D.C.</span>
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
                    ? "border-sky-500 text-sky-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("responsibilities")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "responsibilities"
                    ? "border-sky-500 text-sky-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Responsibilities
              </button>
              <button
                onClick={() => setActiveTab("achievements")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "achievements"
                    ? "border-sky-500 text-sky-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Achievements
              </button>
              <button
                onClick={() => setActiveTab("technologies")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "technologies"
                    ? "border-sky-500 text-sky-600"
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
                  During my internship at Google, I worked with the Google Cloud Platform team on enhancing data
                  analytics services. I collaborated with a team of experienced engineers to develop features that
                  improved the performance and usability of cloud-based data processing tools.
                </p>

                <p>
                  My primary project focused on optimizing query performance for BigQuery, Google's enterprise data
                  warehouse. I implemented backend improvements that resulted in a 30% reduction in query processing
                  time for complex analytical workloads.
                </p>

                <p>
                  Working at Google provided me with invaluable experience in developing scalable solutions for
                  enterprise-level cloud services. I gained deep insights into distributed systems, data processing at
                  scale, and collaborative software development in a large tech organization.
                </p>

                <div className="my-8 bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4">Key Highlights</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-sky-500 mr-2">•</span>
                      <span>
                        Developed backend APIs using Java and Go for Google Cloud Platform's data analytics services
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sky-500 mr-2">•</span>
                      <span>Improved query performance by 30% through optimization of data processing pipelines</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sky-500 mr-2">•</span>
                      <span>Collaborated with cross-functional teams to design and implement new features</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sky-500 mr-2">•</span>
                      <span>Created comprehensive test suites to ensure code quality and reliability</span>
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
                  <h3 className="text-xl font-semibold mb-3 text-sky-700">Backend Development</h3>
                  <p className="text-gray-700">
                    Developed and maintained backend APIs for Google Cloud Platform's data analytics services.
                    Implemented efficient data processing algorithms and optimized existing code for better performance.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-sky-700">Feature Implementation</h3>
                  <p className="text-gray-700">
                    Designed and implemented new features for BigQuery, focusing on improving query performance and user
                    experience. Worked closely with product managers to ensure features met user requirements.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-sky-700">Testing and Quality Assurance</h3>
                  <p className="text-gray-700">
                    Created comprehensive test suites for new features and existing functionality. Performed code
                    reviews and ensured all code met Google's high standards for quality and reliability.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-sky-700">Cross-team Collaboration</h3>
                  <p className="text-gray-700">
                    Collaborated with engineers from different teams to integrate new features with existing systems.
                    Participated in design discussions and contributed ideas for improving the overall architecture.
                  </p>
                </div>
              </StaggerItem>
            </StaggerChildren>
          )}

          {activeTab === "achievements" && (
            <ScrollFade>
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-orange-50 to-white p-6 rounded-xl border border-orange-100">
                  <h3 className="text-xl font-semibold mb-4 text-orange-700">Performance Optimization</h3>
                  <p className="text-gray-700 mb-4">
                    Improved query performance by 30% by optimizing data processing pipelines and implementing more
                    efficient algorithms for data retrieval and analysis.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-orange-100">
                    <p className="text-sm text-gray-600 italic">
                      "Mark's optimization work significantly improved the performance of our analytics platform,
                      resulting in better user experience and reduced computational costs." - Team Lead
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-white p-6 rounded-xl border border-orange-100">
                  <h3 className="text-xl font-semibold mb-4 text-orange-700">Feature Development</h3>
                  <p className="text-gray-700 mb-4">
                    Successfully designed and implemented a new feature for data visualization that was included in the
                    product roadmap for the next release.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-orange-100">
                    <p className="text-sm text-gray-600 italic">
                      "The data visualization feature Mark developed provides valuable insights to our users and has
                      received positive feedback during beta testing." - Product Manager
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-white p-6 rounded-xl border border-orange-100">
                  <h3 className="text-xl font-semibold mb-4 text-orange-700">Code Quality</h3>
                  <p className="text-gray-700 mb-4">
                    Developed comprehensive test suites that increased code coverage by 15% and reduced the number of
                    bugs in production.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-orange-100">
                    <p className="text-sm text-gray-600 italic">
                      "Mark's attention to testing and code quality set a high standard for the team and contributed to
                      a more stable and reliable product." - Engineering Manager
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
                  <h3 className="text-xl font-semibold mb-3 text-sky-700">Languages</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-sky-500 mr-2"></span>
                      <span>Java</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-sky-500 mr-2"></span>
                      <span>Go</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-sky-500 mr-2"></span>
                      <span>Python</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-sky-500 mr-2"></span>
                      <span>SQL</span>
                    </li>
                  </ul>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-sky-700">Frameworks & Tools</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-sky-500 mr-2"></span>
                      <span>Google Cloud Platform</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-sky-500 mr-2"></span>
                      <span>BigQuery</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-sky-500 mr-2"></span>
                      <span>Kubernetes</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-sky-500 mr-2"></span>
                      <span>Docker</span>
                    </li>
                  </ul>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-sky-700">Development Practices</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-sky-500 mr-2"></span>
                      <span>Agile/Scrum</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-sky-500 mr-2"></span>
                      <span>CI/CD</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-sky-500 mr-2"></span>
                      <span>Test-Driven Development</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-sky-500 mr-2"></span>
                      <span>Code Reviews</span>
                    </li>
                  </ul>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-sky-700">Data Technologies</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-sky-500 mr-2"></span>
                      <span>Distributed Systems</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-sky-500 mr-2"></span>
                      <span>Data Processing Pipelines</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-sky-500 mr-2"></span>
                      <span>Analytics Frameworks</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-sky-500 mr-2"></span>
                      <span>Data Visualization</span>
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
            className="inline-flex items-center justify-center bg-sky-600 hover:bg-sky-700 text-white py-3 px-6 rounded-full transition-colors"
          >
            <span className="mr-2">Contact Me</span>
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
