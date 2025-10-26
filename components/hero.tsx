export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background gradient accent */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="mb-6 inline-block">
          <span className="text-sm font-medium text-accent bg-accent/10 px-4 py-2 rounded-full">
            🚀 Digital Transformation
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
          Transform Your Ideas Into Digital Reality
        </h1>

        <p className="text-lg sm:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
          Your trusted partner for comprehensive IT solutions. From mobile apps to enterprise software, we bring
          innovation and excellence to every project.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium text-lg">
            Explore Our Services
          </button>
          <button className="px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition font-medium text-lg">
            Get Free Consultation
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
          <div>
            <div className="text-3xl font-serif font-bold text-accent mb-2">10+</div>
            <p className="text-sm text-foreground/60">Web Projects</p>
          </div>
          <div>
            <div className="text-3xl font-serif font-bold text-accent mb-2">4+</div>
            <p className="text-sm text-foreground/60">Mobile Apps</p>
          </div>
          <div>
            <div className="text-3xl font-serif font-bold text-accent mb-2">100%</div>
            <p className="text-sm text-foreground/60">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}
