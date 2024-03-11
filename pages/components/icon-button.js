import GithubIcon from "./github-button";
import TwitterIcon from "./twitter-button";

const IconButton = ({ url }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <button className="p-2 rounded-full text-black">
        {url.includes("github.com") && <GithubIcon />}
        {url.includes("x.com") && <TwitterIcon />}
      </button>
    </a>
  );
};

export default IconButton;
