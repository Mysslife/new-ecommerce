import './Cart.scss';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
    const data = [
        {
            id: 1,
            img: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: "Long Sleeve Graphic T-shirt",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi facilis quibusdam quis! Ratione, maiores vel. Numquam laboriosam, deserunt, assumenda nemo ducimus saepe tenetur fugiat porro recusandae blanditiis delectus atque?",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: "Long Sleeve Graphic T-shirt",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi facilis quibusdam quis! Ratione, maiores vel. Numquam laboriosam, deserunt, assumenda nemo ducimus saepe tenetur fugiat porro recusandae blanditiis delectus atque?",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
    ]

  return (
    <div className='cart'>
        <h1>Product in your cart</h1>
        {data.map(item => (
            <div className='item' key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.description.substring(0, 100)}</p>
                    <div className="price">1 x {item.price}$</div>
                </div>
                <DeleteOutlinedIcon className='delete' />
            </div>
        ))}

        <div className="total">
            <span>SUBTOTAL</span>
            <span>$123</span>
        </div>

        <button>PROCEED TO CHECKOUT</button>
        <span className='reset'>Reset Cart</span>
    </div>
  )
}

export default Cart