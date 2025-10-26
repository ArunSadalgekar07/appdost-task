const projects = [
  {
    title: "AI-Powered Educational Platform",
    subtitle: "BEU Mate - Bihar Engineering",
    description:
      "An AI-powered study companion for B.Tech students offering personalized learning and career guidance.",
    tags: ["React Native", "Node.js", "AI/ML"],
    image: "/educational-platform-interface.png",
  },
  {
    title: "Devskillquest",
    subtitle: "Interactive Learning Platform",
    description: "An interactive learning platform designed for aspiring developers to master coding skills.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    image: "/coding-learning-platform.jpg",
  },
  {
    title: "The Weddings Chapter",
    subtitle: "Wedding Planning Portal",
    description: "A premium wedding planning platform connecting couples with top vendors and venues.",
    tags: ["PHP", "Laravel", "MySQL"],
    image: "/wedding-planning-interface.jpg",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-foreground/60">
            Real solutions for real businesses - explore our successful projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-accent hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 bg-muted overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-foreground mb-1">{project.title}</h3>
                <p className="text-sm text-accent mb-3">{project.subtitle}</p>
                <p className="text-foreground/60 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition font-medium">
            View All Projects →
          </button>
        </div>
      </div>
    </section>
  )
}
