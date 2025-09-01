import logoHero from"../public/hero-image.png"

const Hero = () => {
    return (  
        <section id="Hero" className="centerDiv">
            <div className="hero__container">
                <div className="hero__text">
                    <h1>Discover <br/> Most Suitable Property
                    </h1>
                    <p> 
                        Find a variety of properties that suit you very easilty
                        Forget all difficulties in finding a residence for you
                    </p>
                    <div className="heroInput centerDiv">
                        <i class="fa-solid fa-location-dot icon"></i>
                        <input type="text" placeholder="search location..."/>
                        <button className="hero__btn">
                            Search
                        </button>
                    </div>
                    <div className="info">
                        <div className="item">
                            <h3>9,000 <span>+</span></h3>
                            Premium Product
                        </div>
                        <div className="item">
                            <h3>2,000 <span>+</span></h3>
                            Happy Custome
                        </div>
                        <div className="item">
                            <h3>28 <span>+</span></h3>
                           Awards Winning
                        </div>
                    </div>
                </div>
                <div className="hero__img">
                    <img src={logoHero}  alt="hero banner"/>
                </div>
            </div>
        </section>
    );
}
 
export default Hero;