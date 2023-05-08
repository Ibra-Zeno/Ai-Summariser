import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumArIse Logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/ibra-zeno")}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarise Articles with <br className="max-md:hidden" />{" "}
        <span className="orange_gradient">Open AI GPT-4</span>
      </h1>
      <h2 className="desc">
        Our AI-powered tool summarises links using OpenAI. Paste a URL and get
        accurate and concise summaries of the content in seconds. Ideal for busy
        professionals, students, and anyone who wants to stay up-to-date on the
        latest news and information. Try it now and experience the power of
        OpenAI!
      </h2>
    </header>
  );
};

export default Hero;
