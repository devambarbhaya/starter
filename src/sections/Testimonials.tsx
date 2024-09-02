import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Arman Khatri",
    position: "Marketing Manager @ Techfest",
    text: "Devam was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar3,
  },
  {
    name: "Jaskaran Singh",
    position: "Creatives Manager @ Techfest",
    text: "Working with Devam was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar1,
  },
  {
    name: "Rishi Setpal",
    position: "Front-end Engineer @ TSS Consultancy",
    text: "Devam's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar5,
  },
  {
    name: "Vedant Yadav",
    position: "UI / UX Designer @ Mood Indigo",
    text: "Devam is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar3,
  },
  {
    name: "Divyanshu Sahu",
    position: "Web Manager @ Techfest",
    text: "Devam's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar1,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What colleagues / clients say about me!"
          description="Don't just take my word for it. See what my colleagues have to say about my work!"
        />
      </div>
      <div className="container mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4">
        <div className="flex flex-none gap-8 pr-8 animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
          {[...new Array(2)].fill(0).map((_, index) => (
            <Fragment key={index}>
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="max-w-xs p-6 md:p-8 md:max-w-md hover:-rotate-3 transition duration-300"
                >
                  <div className="flex gap-4 items-center">
                    <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="max-h-full"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-white/40">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm md:text-base">
                    {testimonial.text}
                  </p>
                </Card>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
