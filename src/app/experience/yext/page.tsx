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
                  src="/yextlogo.png"
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
                  <span>May 2024 - August 2024</span>
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
                  During my internship at Yext, I worked with the Reviews Product team to enhance the platform's data
                  processing capabilities and user interface. I focused on aggregating client review data across
                  third-party sites and developing new features to improve the review management experience.
                </p>

                <p>
                  My primary contributions included designing a customer-facing interface for LLM-generated review
                  responses using TypeScript and React, and developing APIs and webhooks to add automatic review labels
                  to the PostgreSQL reviews database.
                </p>

                <p>
                  I also implemented review monitoring maintenance checks using Terraform and Prometheus, enhancing the
                  reliability and performance of the review monitoring system.
                </p>

                <div className="my-8 bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4">Key Highlights</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>
                        Aggregated client review data across third-party sites (Yelp, Google, etc.) for 500+ client
                        companies using Java
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>
                        Designed customer-facing interface for LLM-generated review response feature using TypeScript
                        and React
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Developed API and Webhooks to add automatic review labels to PostgreSQL reviews database</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Developed review monitoring maintenance checks using Terraform and Prometheus</span>
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
                  <h3 className="text-xl font-semibold mb-3 text-purple-700">Data Aggregation</h3>
                  <p className="text-gray-700">
                    Aggregated client review data across third-party sites including Yelp, Google, and others for over
                    500 client companies using Java. Ensured data consistency and accuracy across different platforms.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-purple-700">UI Development</h3>
                  <p className="text-gray-700">
                    Designed and implemented a customer-facing interface for LLM-generated review response features
                    using TypeScript and React. Created intuitive user experiences that simplified the review management
                    process.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-purple-700">API Development</h3>
                  <p className="text-gray-700">
                    Developed APIs and Webhooks to add automatic review labels to PostgreSQL reviews database. Implemented
                    efficient data processing algorithms to handle large volumes of review data.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-purple-700">Monitoring & Maintenance</h3>
                  <p className="text-gray-700">
                    Developed review monitoring maintenance checks using Terraform and Prometheus. Ensured system
                    reliability and performance through automated monitoring and alerting.
                  </p>
                </div>
              </StaggerItem>
            </StaggerChildren>
          )}

          {activeTab === "achievements" && (
            <ScrollFade>
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-xl border border-purple-100">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700">Large-Scale Data Aggregation</h3>
                  <p className="text-gray-700 mb-4">
                    Successfully aggregated and processed review data for over 500 client companies from multiple
                    third-party platforms, creating a comprehensive review management system.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-purple-100">
                    <p className="text-sm text-gray-600 italic">
                      "The data aggregation system Mark developed has significantly improved our ability to provide
                      clients with comprehensive review insights across multiple platforms." - Engineering Manager
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-xl border border-purple-100">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700">
                    LLM-Generated Review Response Interface
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Designed and implemented a user-friendly interface for LLM-generated review responses, enhancing
                    client ability to efficiently manage customer feedback at scale.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-purple-100">
                    <p className="text-sm text-gray-600 italic">
                      "The interface Mark designed for our LLM-generated review responses has received excellent
                      feedback from clients and has become a key feature of our platform." - Product Manager
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-xl border border-purple-100">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700">Automated Review Labeling</h3>
                  <p className="text-gray-700 mb-4">
                    Developed API and Webhook systems for automatic review labeling, significantly reducing the manual
                    effort required for review categorization and analysis.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-purple-100">
                    <p className="text-sm text-gray-600 italic">
                      "The automated review labeling system has transformed our review management process, making it
                      much more efficient and accurate." - Team Lead
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
                      <span>JavaScript</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                      <span>HTML/CSS</span>
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
                      <span>PostgreSQL</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                      <span>RESTful APIs</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                      <span>Webhooks</span>
                    </li>
                  </ul>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-purple-700">Tools & Infrastructure</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                      <span>Terraform</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                      <span>Prometheus</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                      <span>Git/GitHub</span>
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
                  <h3 className="text-xl font-semibold mb-3 text-purple-700">AI & Data</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                      <span>LLM Integration</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                      <span>Data Aggregation</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                      <span>Data Processing</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                      <span>Automated Labeling</span>
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
