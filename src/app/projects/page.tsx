import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import { Button } from "../../components/ui/button"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description:
        "A detailed description of the first project, including the technologies used, challenges faced, and solutions implemented.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "TypeScript", "Node.js", "MongoDB"],
      github: "https://github.com/markghat",
      demo: "#",
    },
    {
      id: 2,
      title: "Project Two",
      description:
        "A detailed description of the second project, including the technologies used, challenges faced, and solutions implemented.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "Tailwind CSS", "Supabase"],
      github: "https://github.com/markghat",
      demo: "#",
    },
    {
      id: 3,
      title: "Project Three",
      description:
        "A detailed description of the third project, including the technologies used, challenges faced, and solutions implemented.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "Django", "PostgreSQL", "Docker"],
      github: "https://github.com/markghat",
      demo: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-sky-600 hover:text-sky-800 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            A collection of projects I've worked on, showcasing my skills and interests in software development.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project) => (
            <div key={project.id} className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gray-100 rounded-xl overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h2>
                <p className="text-gray-700 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2 rounded-full">
                      <Github className="h-4 w-4" />
                      <span>GitHub</span>
                    </Button>
                  </Link>
                  <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="gap-2 rounded-full">
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
