"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Github,
  Linkedin,
  FileText,
  Mail,
  ArrowRight,
  GraduationCap,
  Calendar,
  Award,
  Phone,
  MapPin,
  Send,
} from "lucide-react"
import { Card, CardContent } from "../components/ui/card"
import { FadeIn } from "../components/animations/fade-in"
import { ScrollFade } from "../components/animations/scroll-fade"
import { StaggerChildren, StaggerItem } from "../components/animations/stagger-children"
import { HoverCard } from "../components/animations/hover-card"
import { AnimatedButton } from "../components/ui/animated-button"
import { motion } from "framer-motion"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Button } from "../components/ui/button"
import emailjs from "emailjs-com"

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        "service_2tzb7du", // Replace with your EmailJS service ID
        "template_8387mwi", // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "w_At7QoAGHg0qNxY-" // Replace with your EmailJS user ID
      )

      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    } catch (error) {
      console.error("Failed to send email:", error)
      alert("Failed to send email. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex-1">
            <FadeIn delay={0.4}>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
                Hi,
                <br />
                I'm Mark
              </h1>
            </FadeIn>
            <FadeIn delay={0.6}>
              <p className="text-xl text-gray-700 mb-8 max-w-xl">
                Software engineer and technology enthusiast passionate about building innovative solutions.
              </p>
            </FadeIn>
            <StaggerChildren delay={0.8} className="flex flex-wrap gap-4">
              <StaggerItem>
                <Link href="https://www.linkedin.com/in/markghat/" target="_blank" rel="noopener noreferrer">
                  <AnimatedButton variant="outline" size="lg" className="gap-2 rounded-full">
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </AnimatedButton>
                </Link>
              </StaggerItem>
              <StaggerItem>
                <Link href="https://github.com/markghat" target="_blank" rel="noopener noreferrer">
                  <AnimatedButton variant="outline" size="lg" className="gap-2 rounded-full">
                    <Github className="h-5 w-5" />
                    <span>GitHub</span>
                  </AnimatedButton>
                </Link>
              </StaggerItem>
              <StaggerItem>
                <Link href="https://drive.google.com/file/d/1lTSVQa1I4Smv9AguEpodCUjgWtxiKGRK/view?usp=sharing" target="_blank">
                  <AnimatedButton variant="outline" size="lg" className="gap-2 rounded-full">
                    <FileText className="h-5 w-5" />
                    <span>Resume</span>
                  </AnimatedButton>
                </Link>
              </StaggerItem>
              <StaggerItem>
                <Link href="mailto:markag121@gmail.com">
                  <AnimatedButton variant="outline" size="lg" className="gap-2 rounded-full">
                    <Mail className="h-5 w-5" />
                    <span>Contact</span>
                  </AnimatedButton>
                </Link>
              </StaggerItem>
            </StaggerChildren>
          </div>
          <div className="hidden md:block">
            <FadeIn delay={1} direction="left">
              <motion.div
                className="relative w-[300px] h-[300px] bg-gradient-to-br from-sky-100 to-sky-50 rounded-2xl shadow-lg overflow-hidden"
                animate={{ rotate: [0, 1, -1, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image src="/pfp.jpg" alt="Profile Image" width={250} height={250} className="rounded-xl" />
                </motion.div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-50 py-16 md:py-24" id="skills">
        <div className="container mx-auto px-4">
          <ScrollFade>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
          </ScrollFade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Skill Category 1 */}
            <ScrollFade delay={0.1} direction="up">
              <motion.div
                className="bg-white p-6 rounded-xl shadow-md h-full"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-sky-600">Frontend Development</h3>
                <StaggerChildren staggerDelay={0.1} className="space-y-2">
                  <StaggerItem>
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full bg-sky-500"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      ></motion.div>
                      <span>React.js</span>
                    </motion.div>
                  </StaggerItem>
                  <StaggerItem>
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full bg-sky-500"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                      ></motion.div>
                      <span>Next.js</span>
                    </motion.div>
                  </StaggerItem>
                  <StaggerItem>
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full bg-sky-500"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                      ></motion.div>
                      <span>TypeScript</span>
                    </motion.div>
                  </StaggerItem>
                  <StaggerItem>
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full bg-sky-500"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
                      ></motion.div>
                      <span>CSS/Tailwind</span>
                    </motion.div>
                  </StaggerItem>
                </StaggerChildren>
              </motion.div>
            </ScrollFade>

            {/* Skill Category 2 */}
            <ScrollFade delay={0.2} direction="up">
              <motion.div
                className="bg-white p-6 rounded-xl shadow-md h-full"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-sky-600">Backend Development</h3>
                <StaggerChildren staggerDelay={0.1} className="space-y-2">
                  <StaggerItem>
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full bg-sky-500"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      ></motion.div>
                      <span>Node.js</span>
                    </motion.div>
                  </StaggerItem>
                  <StaggerItem>
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full bg-sky-500"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                      ></motion.div>
                      <span>Express</span>
                    </motion.div>
                  </StaggerItem>
                  <StaggerItem>
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full bg-sky-500"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                      ></motion.div>
                      <span>Python</span>
                    </motion.div>
                  </StaggerItem>
                  <StaggerItem>
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full bg-sky-500"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
                      ></motion.div>
                      <span>RESTful APIs</span>
                    </motion.div>
                  </StaggerItem>
                </StaggerChildren>
              </motion.div>
            </ScrollFade>

            {/* Skill Category 3 */}
            <ScrollFade delay={0.3} direction="up">
              <motion.div
                className="bg-white p-6 rounded-xl shadow-md h-full"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-sky-600">Tools & Infrastructure</h3>
                <StaggerChildren staggerDelay={0.1} className="space-y-2">
                  <StaggerItem>
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full bg-sky-500"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      ></motion.div>
                      <span>Git/GitHub</span>
                    </motion.div>
                  </StaggerItem>
                  <StaggerItem>
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full bg-sky-500"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                      ></motion.div>
                      <span>Docker</span>
                    </motion.div>
                  </StaggerItem>
                  <StaggerItem>
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full bg-sky-500"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                      ></motion.div>
                      <span>AWS/Cloud Services</span>
                    </motion.div>
                  </StaggerItem>
                  <StaggerItem>
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full bg-sky-500"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
                      ></motion.div>
                      <span>CI/CD Pipelines</span>
                    </motion.div>
                  </StaggerItem>
                </StaggerChildren>
              </motion.div>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24" id="projects">
        <div className="container mx-auto px-4">
          <ScrollFade>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experience</h2>
          </ScrollFade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <ScrollFade delay={0.1}>
              <HoverCard>
                <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow h-full">
                  <motion.div
                    className="h-48 bg-gradient-to-r from-sky-100 to-sky-200 flex items-center justify-center"
                    whileHover={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  >
                    <span className="text-sky-500 text-4xl font-bold">Auxiom AI</span>
                  </motion.div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Auxiom AI</h3>
                    <p className="text-gray-600 mb-4">Co-founder / CTO</p>
                    <Link
                      href="https://auxiomai.com"
                      className="text-sky-600 font-medium inline-flex items-center hover:text-sky-800 group"
                    >
                      Learn More{" "}
                      <motion.span
                        className="ml-1"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </Link>
                  </CardContent>
                </Card>
              </HoverCard>
            </ScrollFade>

            {/* Project 2 */}
            <ScrollFade delay={0.2}>
              <HoverCard>
                <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow h-full">
                  <motion.div
                    className="h-48 bg-gradient-to-r from-orange-100 to-orange-200 flex items-center justify-center"
                    whileHover={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  >
                    <span className="text-orange-500 text-4xl font-bold">Google</span>
                  </motion.div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Google</h3>
                    <p className="text-gray-600 mb-4">SWE Intern, Google Cloud</p>
                    <Link
                      href="/experience/google"
                      className="text-sky-600 font-medium inline-flex items-center hover:text-sky-800 group"
                    >
                      Learn More{" "}
                      <motion.span
                        className="ml-1"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </Link>
                  </CardContent>
                </Card>
              </HoverCard>
            </ScrollFade>

            {/* Project 3 */}
            <ScrollFade delay={0.3}>
              <HoverCard>
                <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow h-full">
                  <motion.div
                    className="h-48 bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center"
                    whileHover={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  >
                    <span className="text-purple-500 text-4xl font-bold">Yext</span>
                  </motion.div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Yext</h3>
                    <p className="text-gray-600 mb-4">SWE Intern, Reviews</p>
                    <Link
                      href="/experience/yext"
                      className="text-sky-600 font-medium inline-flex items-center hover:text-sky-800 group"
                    >
                      Learn More{" "}
                      <motion.span
                        className="ml-1"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </Link>
                  </CardContent>
                </Card>
              </HoverCard>
            </ScrollFade>

            {/* Project 4 */}
            <ScrollFade delay={0.4}>
              <HoverCard>
                <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow h-full">
                  <motion.div
                    className="h-48 bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center"
                    whileHover={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  >
                    <span className="text-green-500 text-4xl font-bold">Fidelity Investments</span>
                  </motion.div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Fidelity Investments</h3>
                    <p className="text-gray-600 mb-4">SWE Intern, Data Architecture</p>
                    <Link
                      href="/experience/fidelity"
                      className="text-sky-600 font-medium inline-flex items-center hover:text-sky-800 group"
                    >
                      Learn More{" "}
                      <motion.span
                        className="ml-1"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </Link>
                  </CardContent>
                </Card>
              </HoverCard>
            </ScrollFade>

            {/* Project 5 */}
            <ScrollFade delay={0.4}>
              <HoverCard>
                <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow h-full">
                  <motion.div
                    className="h-48 bg-gradient-to-r from-yellow-100 to-yellow-200 flex items-center justify-center"
                    whileHover={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  >
                    <span className="text-yellow-500 text-4xl font-bold">Nurse Alert</span>
                  </motion.div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Nurse Alert</h3>
                    <p className="text-gray-600 mb-4">Personal Project</p>
                    <Link
                      href="https://devpost.com/software/nurse-alert-d4cuha"
                      className="text-sky-600 font-medium inline-flex items-center hover:text-sky-800 group"
                    >
                      Learn More{" "}
                      <motion.span
                        className="ml-1"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </Link>
                  </CardContent>
                </Card>
              </HoverCard>
            </ScrollFade>

            {/* Project 6 */}
            <ScrollFade delay={0.4}>
              <HoverCard>
                <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow h-full">
                  <motion.div
                    className="h-48 bg-gradient-to-r from-pink-100 to-pink-200 flex items-center justify-center"
                    whileHover={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  >
                    <span className="text-pink-500 text-4xl font-bold">Webscribe</span>
                  </motion.div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Webscribe</h3>
                    <p className="text-gray-600 mb-4">Personal Project</p>
                    <Link
                      href="https://devpost.com/software/webscribe"
                      className="text-sky-600 font-medium inline-flex items-center hover:text-sky-800 group"
                    >
                      Learn More{" "}
                      <motion.span
                        className="ml-1"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </Link>
                  </CardContent>
                </Card>
              </HoverCard>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-gray-50 py-16 md:py-24" id="education">
        <div className="container mx-auto px-4">
          <ScrollFade>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Education</h2>
          </ScrollFade>

          <div className="max-w-3xl mx-auto">
            <ScrollFade>
              <motion.div
                className="bg-white rounded-xl shadow-md p-8 mb-8"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <motion.div
                      animate={{ rotate: [0, 5, 0, -5, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                    >
                      <GraduationCap className="h-8 w-8 text-sky-600" />
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">B.S. in Computer Science & Statistics</h3>
                    <h4 className="text-xl font-bold text-gray-800">Minor: Mathematics</h4>
                    <p className="text-xl text-gray-700 mt-1">Duke University</p>

                    <div className="flex items-center mt-4 text-gray-600">
                      <Calendar className="h-5 w-5 mr-2" />
                      <span>2022 – 2026</span>
                    </div>

                    <div className="mt-6">
                      <div className="flex items-center mb-3">
                        <Award className="h-5 w-5 text-sky-600 mr-2" />
                        <span className="font-semibold text-gray-800">Relevant Coursework:</span>
                      </div>

                      <StaggerChildren staggerDelay={0.05} className="ml-7">
                        <ul className="list-disc space-y-2">
                          <StaggerItem>
                            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }} className="text-gray-700">
                              Advanced Algorithm Analysis
                            </motion.li>
                          </StaggerItem>
                          <StaggerItem>
                            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }} className="text-gray-700">
                              Database Systems
                            </motion.li>
                          </StaggerItem>
                          <StaggerItem>
                            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }} className="text-gray-700">
                              Machine Learning
                            </motion.li>
                          </StaggerItem>
                          <StaggerItem>
                            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }} className="text-gray-700">
                              Computer Architecture
                            </motion.li>
                          </StaggerItem>
                          <StaggerItem>
                            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }} className="text-gray-700">
                              Constructing Virtual Realities
                            </motion.li>
                          </StaggerItem>
                          <StaggerItem>
                            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }} className="text-gray-700">
                              Mathematics of Regression
                            </motion.li>
                          </StaggerItem>
                          <StaggerItem>
                            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }} className="text-gray-700">
                              Bayesian Statistics
                            </motion.li>
                          </StaggerItem>
                          <StaggerItem>
                            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }} className="text-gray-700">
                              Probability
                            </motion.li>
                          </StaggerItem>
                          <StaggerItem>
                            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }} className="text-gray-700">
                              Linear Algebra
                            </motion.li>
                          </StaggerItem>
                          <StaggerItem>
                            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }} className="text-gray-700">
                              Multivariable Calculus
                            </motion.li>
                          </StaggerItem>
                        </ul>
                      </StaggerChildren>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollFade>

            {/* You can add more education entries here if needed */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-sky-50" id="contact">
        <div className="container mx-auto px-4">
          <ScrollFade>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Get in Touch</h2>
          </ScrollFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <ScrollFade delay={0.1}>
              <motion.div
                className="bg-white p-8 rounded-xl shadow-md"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <motion.div className="flex items-start gap-4" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <div className="mt-1">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        className="text-sky-600"
                      >
                        <Mail className="h-6 w-6" />
                      </motion.div>
                    </div>
                    <div>
                      <a
                        href="mailto:markag121@gmail.com"
                        className="text-gray-700 hover:text-sky-600 transition-colors"
                      >
                        markag121@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div className="flex items-start gap-4" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <div className="mt-1">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
                        className="text-sky-600"
                      >
                        <Phone className="h-6 w-6" />
                      </motion.div>
                    </div>
                    <div>
                      <a href="tel:+14434843766" className="text-gray-700 hover:text-sky-600 transition-colors">
                        +1 (443) 484-3766
                      </a>
                    </div>
                  </motion.div>

                  <motion.div className="flex items-start gap-4" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <div className="mt-1">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
                        className="text-sky-600"
                      >
                        <MapPin className="h-6 w-6" />
                      </motion.div>
                    </div>
                    <div>
                      <span className="text-gray-700">Conowingo, Maryland, USA</span>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <p className="text-gray-600">
                    Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities
                    to be part of your vision.
                  </p>
                </div>
              </motion.div>
            </ScrollFade>

            {/* Contact Form */}
            <ScrollFade delay={0.3}>
              <motion.div
                className="bg-white p-8 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="w-full"
                          required
                        />
                      </motion.div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email"
                          className="w-full"
                          required
                        />
                      </motion.div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        className="w-full"
                        required
                      />
                    </motion.div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        rows={6}
                        className="w-full"
                        required
                      />
                    </motion.div>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-md flex items-center justify-center gap-2"
                      disabled={isSubmitting || isSubmitted}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : isSubmitted ? (
                        <>Message Sent!</>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <FadeIn>
              <div className="flex items-center mb-4 md:mb-0">
                <Image src="/logo.png" alt="Mark Ghattas Logo" width={80} height={80} />
                <span className="ml-2 text-gray-700">© {new Date().getFullYear()} Mark Ghattas</span>
              </div>
            </FadeIn>
            <StaggerChildren className="flex gap-4">
              <StaggerItem>
                <Link href="https://www.linkedin.com/in/markghat/" target="_blank" rel="noopener noreferrer">
                  <motion.div whileHover={{ y: -3, color: "#0ea5e9" }} transition={{ duration: 0.2 }}>
                    <Linkedin className="h-5 w-5 text-gray-600 transition-colors" />
                  </motion.div>
                </Link>
              </StaggerItem>
              <StaggerItem>
                <Link href="https://github.com/markghat" target="_blank" rel="noopener noreferrer">
                  <motion.div whileHover={{ y: -3, color: "#0ea5e9" }} transition={{ duration: 0.2 }}>
                    <Github className="h-5 w-5 text-gray-600 transition-colors" />
                  </motion.div>
                </Link>
              </StaggerItem>
              <StaggerItem>
                <Link href="https://drive.google.com/file/d/1lTSVQa1I4Smv9AguEpodCUjgWtxiKGRK/view?usp=sharing" target="_blank">
                  <motion.div whileHover={{ y: -3, color: "#0ea5e9" }} transition={{ duration: 0.2 }}>
                    <FileText className="h-5 w-5 text-gray-600 transition-colors" />
                  </motion.div>
                </Link>
              </StaggerItem>
              <StaggerItem>
                <Link href="mailto:markag121@gmail.com">
                  <motion.div whileHover={{ y: -3, color: "#0ea5e9" }} transition={{ duration: 0.2 }}>
                    <Mail className="h-5 w-5 text-gray-600 transition-colors" />
                  </motion.div>
                </Link>
              </StaggerItem>
            </StaggerChildren>
          </div>
        </div>
      </footer>
    </div>
  )
}
