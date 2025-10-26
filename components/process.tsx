const steps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "We deep dive into your requirements, understand your business goals, and create a comprehensive project roadmap.",
  },
  {
    number: "02",
    title: "Design & Prototype",
    description: "Our design team creates intuitive wireframes, stunning UI mockups, and interactive prototypes.",
  },
  {
    number: "03",
    title: "Development & Testing",
    description: "Expert developers write clean, scalable code while our QA team performs rigorous testing.",
  },
  {
    number: "04",
    title: "Deployment & Support",
    description: "We handle the complete deployment process and provide ongoing maintenance and 24/7 support.",
  },
]

export default function Process() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">Our Development Process</h2>
          <p className="text-lg text-foreground/60">
            A proven methodology that ensures quality, efficiency, and client satisfaction
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent"></div>
              )}
              <div className="relative z-10 bg-card p-8 rounded-xl border border-border hover:border-accent transition-all">
                <div className="text-4xl font-serif font-bold text-accent mb-4">{step.number}</div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
