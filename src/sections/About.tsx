import StarIcon from "@/assets/icons/star.svg";
import Book from "@/assets/images/book-cover.png";
import Image from "next/image";
import NextJSIcon from "@/assets/icons/nextjs.svg";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import MySQLIcon from "@/assets/icons/mysql.svg";
import MongoDBIcon from "@/assets/icons/mongodb.svg";
import PrismaIcon from "@/assets/icons/prisma.svg";
import PostgreSQLIcon from "@/assets/icons/postgresql.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: "NextJS",
    iconType: NextJSIcon,
  },
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "TypeScript",
    iconType: TypeScriptIcon,
  },
  {
    title: "Tailwind",
    iconType: TailwindIcon,
  },
  {
    title: "MySQL",
    iconType: MySQLIcon,
  },
  {
    title: "MongoDB",
    iconType: MongoDBIcon,
  },
  {
    title: "Prisma",
    iconType: PrismaIcon,
  },
  {
    title: "PostgreSQL",
    iconType: PostgreSQLIcon,
  },
];

const hobbies = [
  {
    title: "Gaming",
    emoji: "🎮",
  },
  {
    title: "Sports",
    emoji: "⚽",
  },
  {
    title: "Movies",
    emoji: "🎥",
  },
  {
    title: "Running",
    emoji: "🏃",
  },
  {
    title: "Music",
    emoji: "🎧",
  },
  {
    title: "Fitness",
    emoji: "💪",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A glimpse Into My World"
          description="Learn more about who I am, what I do and who inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspectives."
            />
            <div className="w-40 mx-auto mt-8">
              <Image src={Book} alt="Book Cover" />
            </div>
          </Card>
          <Card className="h-[320px] p-0">
            <CardHeader
              title="My Toolbox"
              className="px-6 pt-6"
              description="Explore the technologies and tools I use to craft exceptional digital experiences."
            />
            <ToolboxItems items={toolboxItems} className="mt-6" />
            <ToolboxItems
              items={toolboxItems}
              className="mt-6"
              itemsWrapperClassName="-translate-x-1/2"
            />
          </Card>
          <Card>
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies beyond the digital realm."
            />
            <div>
              {hobbies.map((hobby, index) => (
                <div key={index}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={mapImage} alt="map" />
            <Image src={smileMemoji} alt="smile" />
          </Card>
        </div>
      </div>
    </div>
  );
};
