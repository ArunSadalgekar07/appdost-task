export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6">About AppDost</h2>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              AppDost is your trusted partner for complete digital transformation. We are a dynamic, innovation-driven
              IT solutions provider specializing in turning visionary ideas into powerful, market-ready products.
            </p>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Our mission is to empower businesses with cutting-edge technology solutions that drive growth, enhance
              user experiences, and create lasting digital impact.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">✓</span>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-foreground mb-1">Complete Lifecycle Expertise</h4>
                  <p className="text-sm text-foreground/60">From ideation to deployment and beyond</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">✓</span>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-foreground mb-1">Cutting-Edge Technology</h4>
                  <p className="text-sm text-foreground/60">We work with the latest tools and frameworks</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">✓</span>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-foreground mb-1">Client-Centric Focus</h4>
                  <p className="text-sm text-foreground/60">Your success is our success</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-accent/10 to-transparent p-12 rounded-2xl border border-accent/20">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-serif font-bold text-accent mb-2">2025</div>
                  <p className="text-foreground/60">Founded Year</p>
                </div>
                <div className="h-px bg-border"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-serif font-bold text-foreground">50+</div>
                    <p className="text-sm text-foreground/60">Clients Trusted</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-serif font-bold text-foreground">24/7</div>
                    <p className="text-sm text-foreground/60">Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
