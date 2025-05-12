import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, FileText, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "../components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex-1">
            <div className="mb-6">
              {/* <Image src="/logo.png" alt="Mark Ghattas Logo" width={80} height={80} priority /> */}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
              Hi,
              <br />
              I'm Mark
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-xl">
              Software engineer and technology enthusiast passionate about building innovative solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="https://www.linkedin.com/in/markghattas/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="gap-2 rounded-full">
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://github.com/markghattas" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="gap-2 rounded-full">
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </Button>
              </Link>
              <Link href="/resume.pdf" target="_blank">
                <Button variant="outline" size="lg" className="gap-2 rounded-full">
                  <FileText className="h-5 w-5" />
                  <span>Resume</span>
                </Button>
              </Link>
              <Link href="mailto:contact@markghattas.org">
                <Button variant="outline" size="lg" className="gap-2 rounded-full">
                  <Mail className="h-5 w-5" />
                  <span>Contact</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative w-[300px] h-[300px] bg-gradient-to-br from-sky-100 to-sky-50 rounded-2xl shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center">
                {/* <Image
                  src="/placeholder.svg?height=250&width=250"
                  alt="Profile Image"
                  width={250}
                  height={250}
                  className="rounded-xl"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              I'm a software engineer with expertise in building web applications and services. My passion lies in
              creating elegant solutions to complex problems and continuously learning new technologies.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With experience across the full stack, I enjoy working on everything from frontend interfaces to backend
              systems and infrastructure. I'm particularly interested in cloud technologies, performance optimization,
              and creating intuitive user experiences.
            </p>
            <p className="text-lg text-gray-700">
              When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or
              enjoying outdoor activities.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-sky-100 to-sky-200 flex items-center justify-center">
                <span className="text-sky-500 text-4xl font-bold">Project 1</span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Name</h3>
                <p className="text-gray-600 mb-4">
                  A brief description of the project, technologies used, and the problem it solves.
                </p>
                <Link href="#" className="text-sky-600 font-medium inline-flex items-center hover:text-sky-800">
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-orange-100 to-orange-200 flex items-center justify-center">
                <span className="text-orange-500 text-4xl font-bold">Project 2</span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Name</h3>
                <p className="text-gray-600 mb-4">
                  A brief description of the project, technologies used, and the problem it solves.
                </p>
                <Link href="#" className="text-sky-600 font-medium inline-flex items-center hover:text-sky-800">
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center">
                <span className="text-purple-500 text-4xl font-bold">Project 3</span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Name</h3>
                <p className="text-gray-600 mb-4">
                  A brief description of the project, technologies used, and the problem it solves.
                </p>
                <Link href="#" className="text-sky-600 font-medium inline-flex items-center hover:text-sky-800">
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Skill Category 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-sky-600">Frontend Development</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                  <span>React.js</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                  <span>Next.js</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                  <span>TypeScript</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                  <span>CSS/Tailwind</span>
                </li>
              </ul>
            </div>

            {/* Skill Category 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-sky-600">Backend Development</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                  <span>Node.js</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                  <span>Express</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                  <span>Python</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                  <span>RESTful APIs</span>
                </li>
              </ul>
            </div>

            {/* Skill Category 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-sky-600">Tools & Infrastructure</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                  <span>Git/GitHub</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                  <span>Docker</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                  <span>AWS/Cloud Services</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                  <span>CI/CD Pipelines</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="max-w-md mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8">
              Interested in working together or have a question? Feel free to reach out!
            </p>
            <Link href="mailto:contact@markghattas.org">
              <Button size="lg" className="gap-2 rounded-full">
                <Mail className="h-5 w-5" />
                <span>contact@markghattas.org</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              {/* <Image src="/logo.png" alt="Mark Ghattas Logo" width={40} height={40} /> */}
              <span className="ml-2 text-gray-700">© {new Date().getFullYear()} Mark Ghattas</span>
            </div>
            <div className="flex gap-4">
              <Link href="https://www.linkedin.com/in/markghattas/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-gray-600 hover:text-sky-600 transition-colors" />
              </Link>
              <Link href="https://github.com/markghattas" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 text-gray-600 hover:text-sky-600 transition-colors" />
              </Link>
              <Link href="/resume.pdf" target="_blank">
                <FileText className="h-5 w-5 text-gray-600 hover:text-sky-600 transition-colors" />
              </Link>
              <Link href="mailto:contact@markghattas.org">
                <Mail className="h-5 w-5 text-gray-600 hover:text-sky-600 transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
