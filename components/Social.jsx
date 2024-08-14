import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const socials = [
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/goyalmanisha/" },
  { icon: <FaGithub />, path: "https://github.com/manisha-goyal" },
  { icon: <FaEnvelope />, path: "mailto:manisha.goyal@nyu.edu" }, // Email icon
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.path}
          className={iconStyles}
          target={item.path.startsWith("mailto:") ? "_self" : "_blank"}
          rel={item.path.startsWith("mailto:") ? "" : "noopener noreferrer"}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
