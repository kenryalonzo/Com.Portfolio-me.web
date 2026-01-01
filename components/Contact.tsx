import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-slate-950 py-24 text-blue-50 sm:overflow-hidden border border-white/10">
        {/* Lunar Neon Glow Background - Radiant & Alive */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#4c1d95_0%,_#0f172a_70%)] opacity-70" />
        <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-blue-500/30 blur-[100px] mix-blend-screen" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-[120px] mix-blend-screen" />

        {/* Floating Particles/Stars Effect */}
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

        {/* Floating Images - Restored Structure with Projects */}
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80"
            clipClass="contact-clip-path-1 grayscale transition-all duration-500 hover:grayscale-0"
          />
          <ImageClipBox
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60 grayscale transition-all duration-500 hover:grayscale-0"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80"
            clipClass="absolute md:scale-125 grayscale transition-all duration-500 hover:grayscale-0"
          />
          <ImageClipBox
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80"
            clipClass="sword-man-clip-path md:scale-125 grayscale transition-all duration-500 hover:grayscale-0"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase tracking-widest text-blue-50/50">
            Disponible pour freelance
          </p>

          <AnimatedTitle
            title="Envie de c<b>o</b>llaborer <br /> sur un i<b>d</b>ée f<b>o</b>lle ?"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <p className="mt-6 max-w-md text-center font-circular-web text-lg text-blue-50 opacity-70">
            Je suis toujours à la recherche de nouveaux défis et de projets innovants.
            Discutons de la manière dont je peux vous aider.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <a href="mailto:nathanaelfotiefotie@gmail.com">
              <Button
                id="email-btn"
                title="contacte moi"
                containerClass="cursor-pointer bg-white text-black hover:bg-blue-50"
                leftIcon={<span className="mr-2 text-xl">✉️</span>}
              />
            </a>
            <a href="tel:+237651345022" className="text-blue-50 hover:text-white transition-colors">
              +237 651 345 022
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
