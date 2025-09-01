import { useEffect } from "react"
import banner from "../public/value.png"

const Value = () => {

    const display = (index) => {
        const item = document.querySelectorAll(".value__text__content")
        const itemP = document.querySelectorAll(".value__text__content p")
        item.forEach((element,i)=>{
            element.style.height = "80px"
            itemP[i].style.display = "none"
            itemP[i].style.opacity = "0"
        })
        item[index].style.height = "200px"
        itemP[index].style.display = "block"
        itemP[index].style.opacity = "1"

    }

    useEffect(()=>{
        display(0)
    },[])

    return (  
        <section id="Value" className="centerDiv">
            <div className="nested__value">
                <div className="value__img">
                    <img src={banner} alt="value banner" />

                </div>
                <div className="value__text">
                    <div className="value__text__header">
                        <h4>Our Value</h4>
                        <h3> 
                            Value We Give to You
                        </h3>
                        <p>
                            We always ready to help by providijng the best services for you.<br/>
                            We beleive a good blace to live can make your life better
                        </p>
                    </div>
                    <div className="value__text__content first" onClick={()=>{display(0)}}>
                        <div className="value__text__content__header">
                                <div className="value__text__content__icon">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                </div>
                                <h3>Best interest rates on the market</h3>
                                <div className="value__text__content__icon">
                                     <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M7 10l5 5 5-5H7z"></path></svg>
                                </div>
                            </div>
                            <p>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.</p>
                        </div>

                    <div className="value__text__content"  onClick={()=>{display(1)}}>
                        <div className="value__text__content__header">
                            <div className="value__text__content__icon">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            </div>
                            <h3>Prevent unstable prices</h3>
                            <div className="value__text__content__icon">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M7 10l5 5 5-5H7z"></path></svg>
                            </div>
                        </div>
                        <p>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.</p>
                    </div>
                    <div className="value__text__content"  onClick={()=>{display(2)}}>
                        <div className="value__text__content__header">
                            <div className="value__text__content__icon">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            </div>
                            <h3>Best price on the market</h3>
                            <div className="value__text__content__icon">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M7 10l5 5 5-5H7z"></path></svg>
                            </div>
                        </div>
                        <p>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Value;