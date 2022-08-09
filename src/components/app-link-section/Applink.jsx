import './Applink.css'

const Applink = () => {
    return ( 
        <section className="app-link-section">
            <div className="container app-loink-contianer">
                <h2>Download the app now.</h2>
                <h4>Available on your favorite store. Start your premium experience now</h4>
                <div className='hero-btn'>
                    <button className="btn btn-active"><h3>Playstore</h3></button>
                    <button className="btn  btn-inactive"><h3>App store</h3></button>
                </div>
            </div>
        </section>
     );
}
 
export default Applink;