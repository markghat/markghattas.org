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
                Software Engineer Intern, AI Engineering
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
                  During my internship at Google in the AI Engineering team, I worked on building RAG-based AI Agents 
                  to revolutionize how researchers discover and apply for grants. My work directly impacted over 10,000 researchers 
                  by helping them match with relevant grants, generate applications, and find potential co-authors.
                </p>

                <p>
                  I engineered sophisticated hybrid search and re-ranking algorithms that leveraged grant metadata, user queries, 
                  and researcher profiles to deliver highly personalized recommendations across a database of over 80,000 grants. 
                  This system significantly improved the grant discovery process for academic researchers.
                </p>

                <p>
                  My role involved building scalable cloud infrastructure using Terraform and BigQuery, developing Python-based 
                  agentic tools for data retrieval and processing, and architecting custom MLOps evaluation pipelines. The 
                  solutions I built handled over 20,000 daily requests while reducing agent-workflow latency by 40%.
                </p>

                <div className="my-8 bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4">Key Highlights</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-sky-500 mr-2">•</span>
                      <span>
                        Built RAG-based AI Agents serving 10,000+ researchers for grant matching and application generation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sky-500 mr-2">•</span>
                      <span>Engineered hybrid search algorithms delivering personalized recommendations across 80,000+ grants</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sky-500 mr-2">•</span>
                      <span>Built scalable APIs handling 20,000+ daily requests with 40% latency reduction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sky-500 mr-2">•</span>
                      <span>Architected MLOps evaluation pipeline using Vertex AI LLM-as-a-judge for 100+ daily validations</span>
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
                  <h3 className="text-xl font-semibold mb-3 text-sky-700">RAG-based AI Agent Development</h3>
                  <p className="text-gray-700">
                    Built sophisticated RAG-based AI Agents to help 10,000+ researchers match with grants, generate applications, 
                    and find co-authors. Developed intelligent systems that understood researcher profiles and grant requirements 
                    to provide personalized recommendations and automated application assistance.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-sky-700">Hybrid Search & Re-ranking Systems</h3>
                  <p className="text-gray-700">
                    Engineered advanced hybrid search and re-ranking algorithms using grant metadata, query analysis, and 
                    researcher profiles to deliver highly personalized recommendations across 80,000+ grants. Implemented 
                    sophisticated matching algorithms that significantly improved grant discovery accuracy.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-sky-700">Python-based Agentic Tools</h3>
                  <p className="text-gray-700">
                    Built comprehensive Python-based agentic tools to retrieve author data, scrape 200,000+ author publications, 
                    and compile relevant news. Developed automated data collection and processing systems that kept researcher 
                    profiles and grant databases up-to-date with the latest information.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-sky-700">MLOps & Infrastructure</h3>
                  <p className="text-gray-700">
                    Architected custom MLOps agent evaluation pipeline using Vertex AI LLM-as-a-judge, validating 100+ daily pushes. 
                    Provisioned scalable cloud infrastructure using Terraform and BigQuery, supporting daily ingestion of 80,000+ 
                    grant records and built APIs handling 20,000+ daily requests.
                  </p>
                </div>
              </StaggerItem>
            </StaggerChildren>
          )}

          {activeTab === "achievements" && (
            <ScrollFade>
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-orange-50 to-white p-6 rounded-xl border border-orange-100">
                  <h3 className="text-xl font-semibold mb-4 text-orange-700">AI Agent Impact & Scale</h3>
                  <p className="text-gray-700 mb-4">
                    Successfully built and deployed RAG-based AI Agents that served over 10,000 researchers, helping them 
                    match with relevant grants, generate applications, and find co-authors. The system processed queries 
                    across 80,000+ grants with high accuracy and personalization.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-orange-100">
                    <p className="text-sm text-gray-600 italic">
                      "Mark's AI agents revolutionized how our researchers discover and apply for grants, significantly 
                      improving their success rates and reducing time-to-application." - AI Engineering Team Lead
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-white p-6 rounded-xl border border-orange-100">
                  <h3 className="text-xl font-semibold mb-4 text-orange-700">Performance & Scalability</h3>
                  <p className="text-gray-700 mb-4">
                    Built scalable APIs handling 20,000+ daily requests while reducing agent-workflow latency by 40%. 
                    Architected cloud infrastructure supporting daily ingestion of 80,000+ grant records with automated 
                    data processing and real-time updates.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-orange-100">
                    <p className="text-sm text-gray-600 italic">
                      "The performance improvements Mark achieved were exceptional - 40% latency reduction while handling 
                      massive scale is a testament to his engineering excellence." - Infrastructure Team
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-white p-6 rounded-xl border border-orange-100">
                  <h3 className="text-xl font-semibold mb-4 text-orange-700">MLOps & Data Processing</h3>
                  <p className="text-gray-700 mb-4">
                    Architected custom MLOps evaluation pipeline using Vertex AI LLM-as-a-judge, validating 100+ daily pushes. 
                    Built Python-based agentic tools that scraped 200,000+ author publications and compiled relevant research data 
                    for enhanced matching algorithms.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-orange-100">
                    <p className="text-sm text-gray-600 italic">
                      "Mark's MLOps pipeline and data processing tools set a new standard for our AI evaluation processes, 
                      ensuring consistent quality across all deployments." - ML Engineering Manager
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
                  <h3 className="text-xl font-semibold mb-3 text-sky-700">Languages & Core Technologies</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-sky-500 mr-2"></span>
                      <span>Python</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-sky-500 mr-2"></span>
                      <span>SQL</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-sky-500 mr-2"></span>
                      <span>RAG (Retrieval-Augmented Generation)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-sky-500 mr-2"></span>
                      <span>LLM Integration</span>
                    </li>
                  </ul>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-sky-700">Google Cloud & AI Platforms</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-sky-500 mr-2"></span>
                      <span>Vertex AI</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-sky-500 mr-2"></span>
                      <span>BigQuery</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-sky-500 mr-2"></span>
                      <span>Google Cloud Platform</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-sky-500 mr-2"></span>
                      <span>LLM-as-a-Judge</span>
                    </li>
                  </ul>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-sky-700">Infrastructure & DevOps</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-sky-500 mr-2"></span>
                      <span>Terraform</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-sky-500 mr-2"></span>
                      <span>MLOps Pipelines</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-sky-500 mr-2"></span>
                      <span>API Development</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-sky-500 mr-2"></span>
                      <span>Cloud Infrastructure</span>
                    </li>
                  </ul>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-sky-700">AI & Data Processing</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-sky-500 mr-2"></span>
                      <span>Hybrid Search Algorithms</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-sky-500 mr-2"></span>
                      <span>Re-ranking Systems</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-sky-500 mr-2"></span>
                      <span>Web Scraping & Data Mining</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-sky-500 mr-2"></span>
                      <span>Agentic Tool Development</span>
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
