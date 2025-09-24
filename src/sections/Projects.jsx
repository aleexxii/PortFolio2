import GradientSpheres from "../components/GradientSpheres";
import TitleHeader from "../components/TitleHeader";
import Carousel from "../components/Carousel";

function Projects() {
  return (
    <section className="w-full h-full flex-center relative" id="projects">
      <GradientSpheres
        sphare1Class={"projects-gradient-sphere projects-spere-1"}
        sphare2Class={"projects-gradient-sphere projects-sphere-2"}
      />
      <div className="w-full md:my-40 my-20 relative z-10">
        <div className="container mx-auto md:p-0 px-5">
          <TitleHeader
            title={"My PROJECTS"}
            number={"03"}
            text={"Check my recent projects below for your Goal"}
          />
        </div>
        <div className="md:mt-20 mt-10">
          <Carousel />
        </div>
      </div>
    </section>
  );
}

export default Projects;
