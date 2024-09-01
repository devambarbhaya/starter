import Image from "next/image";
import disclosure from "@/assets/disclosure.png";
import lingo from "@/assets/lingo.png";
import shoeMarshal from "@/assets/shoe-marshal.png";
import figma from "@/assets/figma.png";
import gericht from "@/assets/gericht.png";
import gpt from "@/assets/gpt.png";
import techfest from "@/assets/techfest.png";
import moodIndigo from "@/assets/mood-indigo.png";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

const portfolioProjects = [
  {
    company: "TSS Consultancy",
    year: "2024",
    title: "Disclosure360",
    results: [
      { title: "Developed a production-ready app" },
      { title: "Implemented user-friendly interfaces" },
      { title: "Ensured Business objective were met" },
    ],
    link: "https://disclosure360.in/",
    image: disclosure,
  },
  {
    company: "Techfest, IIT Bombay",
    year: "2024",
    title: "Competitions Manager",
    results: [
      { title: "Orchestrated competition logistics" },
      { title: "Facilitated interdivisional coordination" },
      { title: "Scheduled and executed event fluidly" },
    ],
    link: "https://techfest.org/competitions",
    image: techfest,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "Lingo",
    results: [
      { title: "Next.js 14, React, Tailwind, Stripe" },
      { title: "PostgresDB provided by NeonDB" },
      { title: "Deployed and hosted on Vercel" },
    ],
    link: "https://lingo-devam.vercel.app/",
    image: lingo,
  },
  // {
  //   company: "Personal Project",
  //   year: "2023",
  //   title: "Shoe Marshal",
  //   results: [{ title: "1" }, { title: "2" }, { title: "3" }],
  //   link: "https://shoe-marshal-devam.vercel.app/",
  //   image: shoeMarshal,
  // },
  // {
  //   company: "Personal Project",
  //   year: "2023",
  //   title: "FigPro",
  //   results: [{ title: "1" }, { title: "2" }, { title: "3" }],
  //   link: "https://figma-clone-phi.vercel.app/",
  //   image: figma,
  // },
  // {
  //   company: "Personal Project",
  //   year: "2023",
  //   title: "Gericht Restaurant",
  //   results: [{ title: "1" }, { title: "2" }, { title: "3" }],
  //   link: "https://devambarbhaya.github.io/gericht-restaurant/",
  //   image: gericht,
  // },
  // {
  //   company: "Personal Project",
  //   year: "2022",
  //   title: "GPT-3 Explain",
  //   results: [{ title: "1" }, { title: "2" }, { title: "3" }],
  //   link: "https://devambarbhaya.github.io/gpt-3-explain/",
  //   image: gpt,
  // },
  // {
  //   company: "Mood Indigo",
  //   year: "2022",
  //   title: "Events Manager",
  //   results: [{ title: "1" }, { title: "2" }, { title: "3" }],
  //   link: "https://moodi.org/events",
  //   image: moodIndigo,
  // },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent text-center">
            Real-World Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center text-white/60 mt-4 max-w-md mx-auto md:text-lg lg:text-xl">
          See how I transformed concepts into engaging digital experiences.
        </p>
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:mt-16 lg:px-20 after:pointer-events-none"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRight className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
