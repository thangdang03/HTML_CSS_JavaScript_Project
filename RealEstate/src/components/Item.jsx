import { useId } from "react";

const Item = (props) => {
    let itemID = useId()
    return (  
        <div className="item__Residencies" key={itemID}>
            <img src={props.img} alt="" />
            <h4 className="item__price"> <span>$</span> {props.price}</h4>
            <h3 className="item__price">{props.title}</h3>
            <p>{props.desc}</p>
        </div>
    );
}
 
export default Item;