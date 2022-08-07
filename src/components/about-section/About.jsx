import prototype_1 from '../../assets/img/prototype-1-abt.png'
import prototype_2 from '../../assets/img/prototype-2-abt.png'
import prototype_3 from '../../assets/img/prototype-3-abt.png'
import './About.css'
 
const About = () => {
    return ( 
        <section id="about-section" className="container about-container">
            <h3>How the app works</h3>
            <div className="row row--1-about">
                <div className="row--1-col-1">
                    <img src={prototype_1} alt=""  className='img-pro'/>
                </div>
                <div className="row--1-col-2  col-content">
                    <h4>Create an account</h4>
                    <h2>
                        Create/login to an existing account to get started
                    </h2>
                    <p>
                        An account is created with your email and a desired password.
                    </p>
                </div>
            </div>
            <div className="row row--2-about col-content-i">
                <div className="row--2-col-2 ">
                    <h4>Create an account</h4>
                    <h2>
                        Create/login to an existing account to get started
                    </h2>
                    <p>
                        An account is created with your email and a desired password.
                    </p>
                </div>
                <div className="row--2-col-1">
                    <img src={prototype_2} alt=""  className='img-pro'/>
                </div>
            </div>
            <div className="row row--3-about">
                <div className="row--3-col-2">
                    <img src={prototype_3} alt="" className='img-pro'/>
                </div>
                <div className="row--3-col-1 col-content">
                    <h4>Create an account</h4>
                    <h2>
                        Create/login to an existing account to get started
                    </h2>
                    <p>
                        An account is created with your email and a desired password.
                    </p>
                </div>
            </div>
        </section>
    );
}
 
export default About;