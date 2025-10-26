const services = [
  {
    icon: "💻",
    title: "Web Development",
    description: "Responsive and scalable web applications tailored to your business needs.",
    features: ["Responsive Design", "E-commerce Solutions", "Progressive Web Apps"],
  },
  {
    icon: "📱",
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that users love.",
    features: ["iOS & Android", "Cross-platform", "App Store Ready"],
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description: "Beautiful, intuitive user interfaces that enhance user experience.",
    features: ["User Research", "Wireframing", "Brand Identity"],
  },
  {
    icon: "💼",
    title: "CRM Software",
    description: "Comprehensive CRM solutions to manage customer relationships.",
    features: ["Custom Development", "Integration Services", "Training & Support"],
  },
  {
    icon: "☁️",
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services.",
    features: ["AWS, Azure, GCP", "Migration Services", "Performance Tuning"],
  },
  {
    icon: "🔒",
    title: "Cybersecurity",
    description: "Protect your business with robust security solutions.",
    features: ["Security Audits", "Penetration Testing", "Compliance"],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            We deliver end-to-end IT solutions that drive business growth and digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-xl border border-border hover:border-accent hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-foreground/60 mb-4 text-sm leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-sm text-foreground/50 flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
