import '../scss/scssComponents/about.scss';

const About = () => {
  return (
    <section className='about'>
      <div className="about__wrapper wrapper">
        <div className="about__leader">
          <div className="about__img"></div>
          <div className="about__text">
            <h2 className="about__title">
              The leader in interactive VR
            </h2>
            <p className='about__paragraph clr-very-gray'>
              Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About