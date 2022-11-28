import './Navbar.scss';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cart from '../Cart/Cart';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className="left">
                    <div className="item">
                        <img src="/img/en.png" alt="" />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <Link className='link' to={"/products/1"}>
                            Women
                        </Link>
                    </div>
                    <div className="item">
                        <Link className='link' to={"/products/2"}>
                            Man
                        </Link>
                    </div>
                    <div className="item">
                        <Link className='link' to={"/products/3"}>
                            Children
                        </Link>
                    </div>
                </div>
                <div className="center">
                    <Link className='link' to={"/"}>
                        Mysslife Store
                    </Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className='link' to={"/"}>
                            Homepage
                        </Link>
                    </div>
                    <div className="item">
                        <Link className='link' to={"/about"}>
                            About
                        </Link>
                    </div>
                    <div className="item">
                        <Link className='link' to={"/contact"}>
                            Contact
                        </Link>
                    </div>
                    <div className="item">
                        <Link className='link' to={"/stores"}>
                            Stores
                        </Link>
                    </div>
                    <div className="icons">
                        <SearchIcon />
                        <PersonOutlineOutlinedIcon />
                        <FavoriteBorderOutlinedIcon />

                        <div className="cartIcon" onClick={() => setOpen(!open)}>
                            <ShoppingCartOutlinedIcon />
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>

            {open && <Cart />}
        </div>
    )
}

export default Navbar