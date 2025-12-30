import { Github, Linkedin, Mail, MoveUpRight } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/kenryalonzo", label: "GitHub", icon: <Github /> },
  { href: "https://www.linkedin.com/in/nathanael-fotie-fotie-740807324/", label: "LinkedIn", icon: <Linkedin /> },
  { href: "mailto:nathanaelfotiefotie@gmail.com", label: "Email", icon: <Mail /> },
];

const footerLinks = [
  { title: "Navigation", links: ["Home", "About", "Skills", "Projects", "Contact"] },
  { title: "Expertise", links: ["Full-Stack Dev", "Mobile Apps", "React / Next.js", "Node.js"] },
];

const Footer = () => {
  return (
    <footer className="relative w-screen bg-black py-10 text-white overflow-hidden">
      {/* Neon Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-blue-900/10 pointer-events-none z-0" />
      <div className="absolute -bottom-40 left-1/2 h-96 w-[800px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[100px] pointer-events-none z-0" />

      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="container relative z-10 mx-auto px-6 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between py-12">

          {/* Brand & Socials */}
          <div className="flex flex-col gap-6 max-w-sm">
            <h2 className="special-font font-zentry text-6xl md:text-[8rem] leading-none text-blue-50 opacity-80 mix-blend-overlay">
              NATH
            </h2>
            <p className="font-circular-web text-sm text-white/60">
              Développeur Full-Stack passionné, je transforme vos idées en solutions digitales performantes.
            </p>
            <div className="flex gap-4 mt-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-all hover:bg-white hover:text-black"
                  aria-label={link.label}
                >
                  <div className="transition-transform group-hover:scale-110">
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-12 md:gap-24">
            {footerLinks.map((column, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h3 className="font-general text-xs uppercase tracking-widest text-white/40">
                  {column.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        className="group flex items-center gap-2 font-circular-web text-sm text-white/80 transition-colors hover:text-blue-500"
                      >
                        {link}
                        <MoveUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 mt-8 md:flex-row text-xs font-circular-web text-white/40">
          <p>© 2025 Nathanael Fotie. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
