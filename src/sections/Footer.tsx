import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import GithubIcon from "@/assets/icons/github.svg";
import LinkedInIcon from "@/assets/icons/linkedin.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import TwitterIcon from "@/assets/icons/twitter.svg";

const footerLinks = [
  {
    title: "Github",
    href: "https://github.com/devambarbhaya",
    Icon: GithubIcon,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/devam-barbhaya/",
    Icon: LinkedInIcon,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/devambarbhaya/",
    Icon: InstagramIcon,
  },
  {
    title: "Twitter",
    href: "https://x.com/BarbhayaDevam",
    Icon: TwitterIcon,
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-0 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2024. All rights reserved</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 z-10"
              >
                <link.Icon className="size-4" />
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRight className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
