export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 rounded-2xl blur-2xl"></div>
          <div className="relative bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-12 sm:p-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can help transform your ideas into reality with cutting-edge technology and expert
              development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary-foreground text-primary rounded-lg hover:opacity-90 transition font-medium text-lg">
                Get Free Consultation
              </button>
              <button className="px-8 py-4 border-2 border-primary-foreground text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition font-medium text-lg">
                View Our Services
              </button>
            </div>

            <div className="mt-12 pt-12 border-t border-primary-foreground/20 grid grid-cols-3 gap-8">
              <div>
                <div className="text-2xl font-serif font-bold text-primary-foreground mb-1">100%</div>
                <p className="text-sm text-primary-foreground/80">Secure & Scalable</p>
              </div>
              <div>
                <div className="text-2xl font-serif font-bold text-primary-foreground mb-1">24/7</div>
                <p className="text-sm text-primary-foreground/80">Support Available</p>
              </div>
              <div>
                <div className="text-2xl font-serif font-bold text-primary-foreground mb-1">50+</div>
                <p className="text-sm text-primary-foreground/80">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
