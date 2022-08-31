import React from "react";
import './MainPage.css';
import { Link } from "react-router-dom";
import Filters from "../FilterLogin/Filters";

function MainPage() {
    return (
        <>
            <div style={{ marginTop: '30px' }} className="mr-9 text-right">
                <button>
                    <Filters />
                </button>
            </div>
            <div style={{ marginLeft: '555px', marginTop: '60px' }} className='font-moonrocks text-orange-200 text-8xl'>BookShop</div>
            <Link to="/firstPage"><img style={{ marginLeft: '600px', marginTop: '40px' }} className="w-80 h-80" src="/books.png" /></Link>
            <Link to="/firstPage">
                <div style={{ textAlign: 'center' }} className='font-assistant font-bold text-4xl text-orange-200'>
                    <div>Dobrodošli u BookShop.</div>
                    <div>Započnite svoju online kupovinu i uživajte u svijetu knjiga!</div>
                </div>
            </Link>
        </>
    );
}

export default MainPage;
