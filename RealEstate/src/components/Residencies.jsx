import realty from "../public/realty.png"
import tower from "../public/tower.png"
import prologis from "../public/prologis.png"
import equinix from "../public/equinix.png"
import r1 from "../public/r1.png"
import r2 from "../public/r2.png"
import r3 from "../public/r3.png"
import Item from "./Item"
const Residencies = () => {
    let count = 0;

    const next = () =>{
        const nested =  document.querySelector(".nested__item")
        count -= 300;
        if(count < -600){
            count = 0;
        }
        nested.style.transform = `translateX(${count}px)`
        console.log(count)
    }

    const back = () =>{
        const nested =  document.querySelector(".nested__item")
        count += 300;
        console.log( count)
        if(count  > 0){
            count = -600
        }
        nested.style.transform = `translateX(${count}px)`
        console.log(count)
    }
    return (  
        <section id="Residencies">
            <div className="Residencies__list__img">
                <img src={realty} alt="aside banner" />
                <img src={tower} alt="aside banner" />
                <img src={prologis} alt="aside banner" />
                <img src={equinix} alt="aside banner" />
            </div>
            <div className="Residencies__header">
                <div className="Residencies__header__title">
                    <h4>Best Choices</h4>
                    <h3>Popular Residencies</h3>
                </div>
                <div className="Residencies__header__button">
                    <button className="next" onClick={()=>{back()}} > {"<"}</button>
                    <button className="backward"onClick={()=>{next()}}> {">"}</button>
                </div>
            </div>
            <div className="Residencies__list__item">
                <div className="nested__item">
                    <Item
                        img={r1}
                        price="47,043"
                        title="Aliva Priva Jardin"
                        desc="Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta"
                    />
                    <Item
                        img={r2}
                        price="66,353"
                        title="Asatti Garden City"
                        desc="Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat"
                    />
                    <Item
                        img={r3}
                        price="35,853"
                        title="Citralan Puri Serang"
                        desc="Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten"
                    />
                    <Item
                        img={r1}
                        price="47,043"
                        title="Aliva Priva Jardin"
                        desc="Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta"
                    />
                    <Item
                        img={r2}
                        price="66,353"
                        title="Asatti Garden City"
                        desc="Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat"
                    />
                    <Item
                        img={r3}
                        price="35,853"
                        title="Citralan Puri Serang"
                        desc="Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten"
                    />
                </div>
                
            </div>
        </section>
    );
}
 
export default Residencies;