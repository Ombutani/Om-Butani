
import { Github, Linkedin, Mail, Globe } from "lucide-react";

interface Props {
  direction?: "row" | "col";
}

const socials = [
  {
    icon: Github,
    url: "https://github.com/janedoe",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    url: "https://linkedin.com/in/janedoe",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    url: "mailto:jane.smith@email.com",
    label: "Email",
  },
  {
    icon: Globe,
    url: "https://janesmith.dev",
    label: "Website",
  },
];

const SocialLinks = ({ direction = "row" }: Props) => (
  <div
    className={`flex ${direction === "row" ? "flex-row gap-4" : "flex-col gap-6"} justify-center items-center`}
  >
    {socials.map((s) => (
      <a
        key={s.label}
        href={s.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={s.label}
        className="group hover-scale transition-all p-3 rounded-full shadow-card hover:bg-primary/20"
      >
        <s.icon className="w-7 h-7 text-gray-300  group-hover:text-primary transition-colors" />
      </a>
    ))}
  </div>
);

export default SocialLinks;
