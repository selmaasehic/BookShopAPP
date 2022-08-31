import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faTruck, faCaretDown, faCaretUp, faAngleLeft, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { Link } from "react-router-dom";

const books = [
    {
        image: 'https://upload.wikimedia.org/wikipedia/hr/4/4a/HP1.jpg',
        name: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        publicationDate: "1997",
        genre: "Fantasy",
        price: '25 KM',
        pages: '442',
        isbn: '1021021023564'
    },
    /*  {
         image: 'https://images-na.ssl-images-amazon.com/images/I/51cWQIhRUTL._SX344_BO1,204,203,200_.jpg',
         name: "Harry Potter and the Deathly Hallows",
         author: "J.K. Rowling",
         publicationDate: "2007",
         genre: "Fantasy",
         price: '25 KM'
     },
     {
         image: 'https://almabooks.com/wp-content/uploads/2016/10/9781847493699.jpg',
         name: "Pride and Prejudice",
         author: "Jane Austin",
         publicationDate: "1813",
         genre: "Romance",
         price: '24 KM'
     },
     {
         image: 'https://images-na.ssl-images-amazon.com/images/I/91jkmtBEyoL.jpg',
         name: "Morning Glory",
         author: " LaVyrle Spencer",
         publicationDate: "1989",
         genre: "Romance",
         price: '20 KM'
     },
     {
         image: 'https://images-na.ssl-images-amazon.com/images/I/51FQOnAbvDL._SX332_BO1,204,203,200_.jpg',
         name: "Indigo",
         author: "Beverly Jenkins",
         publicationDate: "1996",
         genre: "Romance",
         price: '20 KM'
     },
     {
         image: 'https://m.media-amazon.com/images/I/51s6MfbUtkL.jpg',
         name: "Devil in Winter",
         author: "Lisa Kleypas",
         publicationDate: "2006",
         genre: "Romance",
         price: '20 KM'
     },
     {
         image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1509938141l/5598113._SX318_.jpg',
         name: "Vision in White",
         author: "Nora Roberts",
         publicationDate: "2009",
         genre: "Romance",
         price: '15 KM'
     },
     {
         image: 'https://m.media-amazon.com/images/I/51dMIzT01fL.jpg',
         name: "The Snapper",
         author: "Roddy Doyle",
         publicationDate: "1990",
         genre: "Comedy",
         price: '20 KM'
     },
     {
         image: 'https://kbimages1-a.akamaihd.net/695eb39e-9405-4c4b-8267-302344f0f5f7/1200/1200/False/hamlet-15.jpg',
         name: "Hamlet",
         author: "William Shakespeare",
         publicationDate: "1786",
         genre: "Tragedy",
         price: '24 KM'
     },
     {
         image: 'https://images-na.ssl-images-amazon.com/images/I/61urB+bw1UL.jpg',
         name: "Romeo and Juliet",
         author: "William Shakespeare",
         publicationDate: "1597",
         genre: "Tragedy",
         price: '24 KM'
     },
     {
         image: 'https://m.media-amazon.com/images/I/51TrWpIwMfL.jpg',
         name: "David Copperfield",
         author: "Charles Dickens",
         publicationDate: "1849",
         genre: "Novel",
         price: '15 KM'
     },
     {
         image: 'https://kbimages1-a.akamaihd.net/d1d264bb-edf9-4405-ab53-eb13f82342ab/1200/1200/False/great-expectations-398.jpg',
         name: "Great Expectations",
         author: "Charles Dickens",
         publicationDate: "1861",
         genre: "Drama",
         price: '15 KM'
     } */
]

const users = [
    {
        firstName: 'Selma',
        lastName: 'Sehic',
        address: 'Gradac 1',
        zipCode: '71240',
        country: 'Bosnia and Herzegovina',
    }
]
function CartPage({cartItems, setCartItems}) {
    //const [price, setPrice] = useState(0);
    const [count, setCount] = useState(0);
    const [open, setOpen] = useState(false);
    /*const handleRemove = (id) => {
        const arr = cartItems.filter((item) => item.id != id);
        setCartItems(arr);
    }*/
    const cancelButtonRef = useRef(null)
    const click = () => {
        setOpen(true)
    }
    const click2 = () => {
        setOpen(false)
    }

    return (
        <>
            <button onClick={click} type="button" className="mr-4 mt-8">
                <FontAwesomeIcon className="text-black" icon={faCartShopping} />
            </button>

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="relative inline-block align-bottom rounded-lg text-left overflow-hidden  transform transition-all sm:my-8 sm:align-middle sm:max-w-fit sm:w-full">
                                <div className="min-h-full flex items-center justify-center  sm:px-6 lg:px-4">
                                    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                                        <div style={{width:'800px'}} className="border rounded-2xl bg-white space-y-8">
                                            <div className=" relative">
                                                <div className="p-4 flex justify-between rounded-t-xl">
                                                    <h2 className="text-left ml-4 mt-1 text-xl font-extrabold text-gray-900">Your Cart</h2>
                                                    <button onClick={click2} type="button" className=" p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 focus:outline-none ">
                                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div style={{marginLeft:'28px', marginRight:'28px', marginBottom:'20px', padding:'10px'}} className="bg-orange-100">
                                                {cartItems.map((item) => (
                                                    <div className="font-assistant flex mt-0 justify-between">
                                                        <div>{item.nazivKnjige}</div>
                                                        <div>{item.idautor}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}

export default CartPage;