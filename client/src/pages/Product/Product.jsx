import './Product.scss';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
    const [selectedImg, setSelectedImg] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const productId = +useParams().id;

    const images = [
        "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&sc=tinysrgb&w=1600&lazy=load",
        "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&sc=tinysrgb&w=1600&lazy=load",
    ]

    return (
        <div className='product'>
            <div className="left">
                <div className="images">
                    {images.map((img, index) => (
                        <img onClick={() => setSelectedImg(index)} src={images[index]} alt="" key={index} />    
                    ))}
                </div>
                <div className="mainImg">
                    <img src={images[selectedImg]} alt="" />
                </div>
            </div>

            <div className="right">
                <h1>Title</h1>
                <span className='price'>$199</span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, consequatur voluptate atque dicta aut reprehenderit culpa facere aperiam vero nihil laboriosam non quam veniam ratione obcaecati! Nulla facere voluptates nam!</p>
                <div className="quantity">
                    <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev-1)}>-</button>
                        {quantity}
                    <button onClick={() => setQuantity(prev => prev+1)}>+</button>
                </div>

                <button className='add'>
                    <AddShoppingCartIcon /> ADD TO CART
                </button>

                <div className="links">
                    <div className="item">
                        <FavoriteBorderIcon /> ADD TO WISH LIST
                    </div>
                    <div className="item">
                        <BalanceIcon /> ADD TO COMPAGE
                    </div>
                </div>
                <hr />
                <div className="info">
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-Shirt</span>
                    <span>Tag: T-Shirt, Women, Top</span>
                </div>
                <hr />
                <div className="info">
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    )
}

export default Product