import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCirclePlus, faClock, faMagnifyingGlass, faTruck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CartPage from "../CartPage/CartPage";
import data from "../data";
import axios from 'axios';

function FirstPage() {

    const [cartItems, setCartItems] = useState([]);

    const handleClick = (book) => {
        setCartItems([...cartItems, book])
        console.log(cartItems);
    }

    const [item, setItem] = useState([]);
    useEffect(() => {
        async function ispis() {
            const response = await fetch('https://localhost:7230/api/Knjiga/getKnjiga',
                {
                    method: 'GET',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            if (!response.ok) throw Error('Did not recived expected data');
            const item = await response.json();
            console.log(item);
            setItem(item);
            for (let i = 0; i < item.length; i++) {
                setItem((arr) => [
                    ...arr,
                    {
                        nazivKnjige: item[i].nazivKnjige,
                        datumIzdavanja: item[i].datumIzdavanja,
                        idautor: item[i].idautor
                    }
                ])
            }
        }
        ispis()
    }, [])

    return (
        <>
            <style>{"body { background-color: #ffedd5; }"}</style>
            <header className="bg-orange-100" style={{ position: 'sticky', top: '0px', height: '100px', zIndex: '100' }}>
                <div className="flex">
                    <div className="font-moonrocks text-6xl ml-4 mt-5 text-orange-600">BookShop</div>
                </div>
                <div className="flex text-orange-600 justify-end" style={{ marginTop: '-94px' }}>
                    <div className="text-xl font-bold font-assistant" style={{ marginTop: '50px' }}>
                        Selma Šehić
                    </div>
                    <img src="/profilePicture.png" style={{ position: 'relative', top: '14px' }} className="w-24" />
                    {/*                     <Link to='/cartPage'><FontAwesomeIcon className="mt-10 mr-9 text-orange-600" style={{ marginTop: '55px' }} icon={faCartShopping} /></Link>
 */}
                    <button>
                        <CartPage cartItems={cartItems} setCartItems={setCartItems} />
                    </button>
                </div>
            </header>
            <div className="bg-orange-600 p-6 flex h-96">
                <div className="mt-16">
                    <div className="text-5xl font-bold font-assistant text-orange-100">Once you learn to read, <br />you'll be forever free.</div>
                    <input type="text" placeholder="Search..." className="m-auto w-96 h-12 rounded-3xl p-6 mt-9" />
                    <button style={{ position: 'relative', right: '48px' }}><FontAwesomeIcon className="text-gray-400" icon={faMagnifyingGlass} /></button>
                </div>
                <img src="/read.png" className="w-1/2" style={{ position: 'relative', top: '9px', left: '250px', height: '550px' }} />
            </div>
            <div className="font-bold text-3xl font-assistant ml-12 text-orange-800 mb-4 mt-72">IZDVOJENO</div>
            <div className="grid grid-cols-3 ml-12 mr-12 rounded-3xl gap-x-4 gap-y-12 bg-orange-50 pl-36 pt-10 pb-10 mb-16">
                {item.map((book) => (
                    <div>
                        <img style={{ width: '250px', height: '350px' }} src={book.image} />
                        <div className="font-bold font-assistant text-xl w-64 mt-4">{book.nazivKnjige}</div>
                        <div>{book.idautor}</div>
                        <div>{book.datumIzdavanja}</div>
                        <div className="flex justify-between w-64">
                            <div className="mt-4 font-bold text-red-500">{book.price}</div>
                            <button onClick={() => handleClick(book)} className="mt-2  text-red-500 font-bold"><FontAwesomeIcon className="text-red-500 mt-2 mr-1" icon={faCirclePlus} /> ADD</button>
                        </div>
                    </div>
                ))}
            </div>
            <footer className="bg-orange-600 text-orange-100 flex justify-between pl-16 pr-16 pt-6 pb-6">
                <div className="grid grid-cols-2 gap-x-9 font-assistant">
                    <div>
                        <div className="font-bold text-lg">E-mail:</div>
                        <div>bookshop@gmail.com</div>
                    </div>
                    <div>
                        <div className="font-bold text-lg">Telefon:</div>
                        <div>061/060-060</div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-x-9 mt-4">
                    <div className="text-lg">
                        <FontAwesomeIcon className="mr-2" icon={faClock} />
                        24h open
                    </div>
                    <div className="text-lg">
                        <FontAwesomeIcon className="mr-2" icon={faTruck} />
                        1000 cities
                    </div>
                </div>
            </footer>

        </>
    );
}

export default FirstPage;