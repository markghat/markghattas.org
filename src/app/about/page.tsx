import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-sky-600 hover:text-sky-800 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gradient-to-br from-sky-100 to-sky-50 rounded-2xl shadow-lg overflow-hidden p-1">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Profile Image"
                  width={400}
                  height={400}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="prose prose-lg max-w-none">
              <p>
                Hello! I'm Mark Ghattas, a software engineer with a passion for building innovative solutions to complex
                problems. I specialize in full-stack development, with expertise in both frontend and backend
                technologies.
              </p>

              <h2>My Journey</h2>
              <p>
                My journey in software development began with a curiosity about how technology works. This curiosity led
                me to pursue a degree in Computer Science, where I developed a strong foundation in algorithms, data
                structures, and software design principles.
              </p>
              <p>
                Throughout my career, I've had the opportunity to work on a diverse range of projects, from web
                applications to backend services, each presenting unique challenges and learning opportunities. I've
                collaborated with talented teams and contributed to products that have made a positive impact.
              </p>

              <h2>My Approach</h2>
              <p>
                I believe in writing clean, maintainable code that solves real problems. I'm committed to continuous
                learning and staying up-to-date with the latest technologies and best practices. I approach each project
                with a focus on user experience, performance, and scalability.
              </p>

              <h2>Beyond Coding</h2>
              <p>
                When I'm not coding, I enjoy exploring new technologies, contributing to open source projects, and
                sharing my knowledge with the community. I'm also passionate about mentoring and helping others grow in
                their technical careers.
              </p>
              <p>
                Outside of technology, I enjoy outdoor activities, reading, and spending time with family and friends.
              </p>

              <h2>Let's Connect</h2>
              <p>
                I'm always open to new opportunities, collaborations, and conversations. Whether you have a project in
                mind, want to discuss technology, or just want to say hello, feel free to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
