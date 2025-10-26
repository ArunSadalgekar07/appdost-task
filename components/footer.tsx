export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">AppDost</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Delivering innovative IT solutions since 2025. We transform ideas into powerful digital experiences.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-primary-foreground transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-primary-foreground/70 hover:text-primary-foreground transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/70 hover:text-primary-foreground transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition">
                  Cloud Solutions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/70">contact@appdost.in</li>
              <li className="text-primary-foreground/70">+91 76350 75422</li>
              <li className="text-primary-foreground/70">Mon - Sat: 9:00 AM - 6:00 PM IST</li>
              <li className="text-primary-foreground/70">3 Offices: Banka, Motihari, Patna</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>© 2025 AppDost - Complete IT Solution. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-foreground transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-foreground transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary-foreground transition">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
