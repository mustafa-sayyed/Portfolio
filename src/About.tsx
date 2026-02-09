import HorizontalLine from "./components/HorizontalLine";
import Title from "./components/Title";

function About() {
  return (
    <div>
      <div className="flex w-full flex-col">
        <div className="flex flex-col gap-4 font-light">
          <Title title="About me" />
          <p>
            Hey there 👋, I am Mustafa Sayyed, I love building real-world products using
            modern web technologies and enjoy diving deep into how things work rather than
            just making them work.
          </p>
          <p>
            I primarily work with JavaScript and TypeScript across the stack and enjoy
            designing systems that are scalable, secure, and maintainable.
          </p>
          <p>
            What sets me apart is how I learn. I don’t like treating technologies as black
            boxes — I prefer understanding things from first principles. I like
            experimenting, breaking things, fixing them, and then rebuilding them better.
          </p>
        </div>
      </div>
      <HorizontalLine />
    </div>
  );
}

export default About;
