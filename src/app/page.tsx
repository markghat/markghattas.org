"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, FileText, Mail, ArrowRight } from "lucide-react"
import { Card, CardContent } from "../components/ui/card"
import { FadeIn } from "../components/animations/fade-in"
import { ScrollFade } from "../components/animations/scroll-fade"
import { StaggerChildren, StaggerItem } from "../components/animations/stagger-children"
import { HoverCard } from "../components/animations/hover-card"
import { AnimatedButton } from "../components/ui/animated-button"
import { motion } from "framer-motion"

export default function Home() {
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
                <Link href="/resume.pdf" target="_blank">
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
                  <Image
                    src="/pfp.jpg"
                    alt="Profile Image"
                    width={250}
                    height={250}
                    className="rounded-xl"
                  />
                </motion.div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-16 md:py-24" id="about">
        <div className="container mx-auto px-4">
          <ScrollFade>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
          </ScrollFade>
          <div className="max-w-3xl mx-auto">
            <ScrollFade delay={0.2}>
              <p className="text-lg text-gray-700 mb-6">
                I'm a software engineer with expertise in building web applications and services. My passion lies in
                creating elegant solutions to complex problems and continuously learning new technologies.
              </p>
            </ScrollFade>
            <ScrollFade delay={0.3}>
              <p className="text-lg text-gray-700 mb-6">
                With experience across the full stack, I enjoy working on everything from frontend interfaces to backend
                systems and infrastructure. I'm particularly interested in cloud technologies, performance optimization,
                and creating intuitive user experiences.
              </p>
            </ScrollFade>
            <ScrollFade delay={0.4}>
              <p className="text-lg text-gray-700">
                When I'm not coding, you can find me exploring new technologies, contributing to open source projects,
                or enjoying outdoor activities.
              </p>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24" id="projects">
        <div className="container mx-auto px-4">
          <ScrollFade>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
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
                    <span className="text-sky-500 text-4xl font-bold">Project 1</span>
                  </motion.div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Project Name</h3>
                    <p className="text-gray-600 mb-4">
                      A brief description of the project, technologies used, and the problem it solves.
                    </p>
                    <Link
                      href="#"
                      className="text-sky-600 font-medium inline-flex items-center hover:text-sky-800 group"
                    >
                      View Project{" "}
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
                    <span className="text-orange-500 text-4xl font-bold">Project 2</span>
                  </motion.div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Project Name</h3>
                    <p className="text-gray-600 mb-4">
                      A brief description of the project, technologies used, and the problem it solves.
                    </p>
                    <Link
                      href="#"
                      className="text-sky-600 font-medium inline-flex items-center hover:text-sky-800 group"
                    >
                      View Project{" "}
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
                    <span className="text-purple-500 text-4xl font-bold">Project 3</span>
                  </motion.div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Project Name</h3>
                    <p className="text-gray-600 mb-4">
                      A brief description of the project, technologies used, and the problem it solves.
                    </p>
                    <Link
                      href="#"
                      className="text-sky-600 font-medium inline-flex items-center hover:text-sky-800 group"
                    >
                      View Project{" "}
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

      {/* Contact Section */}
      <section className="py-16 md:py-24" id="contact">
        <div className="container mx-auto px-4">
          <ScrollFade>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          </ScrollFade>
          <div className="max-w-md mx-auto text-center">
            <ScrollFade delay={0.2}>
              <p className="text-lg text-gray-700 mb-8">
                Interested in working together or have a question? Feel free to reach out!
              </p>
            </ScrollFade>
            <ScrollFade delay={0.4}>
              <Link href="mailto:markag121@gmail.com">
                <AnimatedButton size="lg" className="gap-2 rounded-full">
                  <Mail className="h-5 w-5" />
                  <span>contact@markghattas.org</span>
                </AnimatedButton>
              </Link>
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
                <Link href="/resume.pdf" target="_blank">
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
