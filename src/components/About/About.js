import aboutImage from "../../images/aboutImage.png";

function About() {

  return (
    <div>
      <section className="about">
        <img src={aboutImage} alt="woman meditating" className="about__image" />
        <h2 className="about__title">About the author</h2>
        <p className="about__text">This block describes the project author. Here you should indicate your name,
        what you do, and which development technologies you know. You can also talk about your experience with Practicum,
        what you learned there, and how you can help potential customers.</p>
      </section>
    </div>
  );
}

export default About;