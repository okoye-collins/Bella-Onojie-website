import './Hero.css'

const Hero = () => {
    return ( 
        <section id="hero-section">
            <div className="container hero-container">
                <div className="hero-container-content">
                    <h3>Food app</h3>
                    <p>
                        Why stay hungry when <br /> 
                        you can order form Bella Onojie
                    </p>
                    <h4>Download the bella onoje’s food app now on</h4>
                </div>
                <div className='hero-btn'>
                    <button className="btn btn-active"><h3>Playstore</h3></button>
                    <button className="btn  btn-inactive"><h3>App store</h3></button>
                </div>
            </div>
        </section>
     );
}
 
export default Hero;