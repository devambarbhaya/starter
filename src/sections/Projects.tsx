import Image from "next/image";
import disclosure from "@/assets/disclosure.png";
import lingo from "@/assets/lingo.png";
import shoeMarshal from "@/assets/shoe-marshal.png";
import gericht from "@/assets/gericht.png";
import gpt from "@/assets/gpt.png";
import techfest from "@/assets/techfest.png";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

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
    title: "Competitions Coordinator",
    results: [
      { title: "Orchestrated competition logistics" },
      { title: "Manage interdivisional coordination" },
      { title: "Scheduled, executed event fluidly" },
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
    githubLink: "https://github.com/devambarbhaya/lingo",
    image: lingo,
  },
  {
    company: "Personal Project",
    year: "2023",
    title: "Shoe Marshal",
    results: [
      { title: "E-Commerce Store: Next.js 14" },
      { title: "Prisma, UploadThing, Recharts" },
      { title: "Redis for Cart/Bag functionality" },
    ],
    link: "https://shoe-marshal-devam.vercel.app/",
    githubLink: "https://github.com/devambarbhaya/shoe-marshal",
    image: shoeMarshal,
  },
  {
    company: "Personal Project",
    year: "2023",
    title: "Gericht Restaurant",
    results: [
      { title: "React-based frontend" },
      { title: "Leveraged Figma to design and build" },
      { title: "Addressed the responsiveness" },
    ],
    link: "https://devambarbhaya.github.io/gericht-restaurant/",
    githubLink: "https://github.com/devambarbhaya/gericht-restaurant",
    image: gericht,
  },
  {
    company: "Personal Project",
    year: "2022",
    title: "GPT-3 Explain",
    results: [
      { title: "React-based frontend" },
      { title: "Leveraged Figma to design and build" },
      { title: "Addressed the responsiveness" },
    ],
    link: "https://devambarbhaya.github.io/gpt-3-explain/",
    githubLink: "https://github.com/devambarbhaya/gpt-3-explain",
    image: gpt,
  },
];

interface ProjectsProps {
  id: string;
}

export const ProjectsSection = ({ id }: ProjectsProps) => {
  return (
    <section id={id}>
      <section className="py-16">
        <div className="container">
          <SectionHeader
            eyebrow="Real-World Results"
            title="Featured Projects"
            description="See how I transformed concepts into engaging digital experiences."
          />
          <div className="flex flex-col mt-10 gap-20 md:mt-20">
            {portfolioProjects.map((project, index) => (
              <Card
                key={index}
                className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:mt-16 lg:px-20 sticky"
                style={{
                  top: `calc(64px + ${index * 10}px)`,
                }}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-3xl">
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
                    <div className="flex items-center justify-between">
                      <a href={project.link} target="_blank">
                        <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                          <span>Visit Live Site</span>
                          <ArrowUpRight className="size-4" />
                        </button>
                      </a>
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank">
                          <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                            <span className="flex gap-2">
                              <Image
                                src={"/github.svg"}
                                width={20}
                                height={20}
                                alt="Github"
                              />
                              Github
                            </span>
                            <ArrowUpRight className="size-4" />
                          </button>
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};
