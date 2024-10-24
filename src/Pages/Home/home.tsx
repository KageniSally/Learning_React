import { Link } from 'react-router-dom';
import { Products } from '../../Models/products'
import './home.css'
import { MouseEvent, useState } from 'react'


function Home() {
    // List of products available
    const products: Products[] = [
        { id: 1, image: 'https://images.unsplash.com/photo-1648737967267-f896a3cea436?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww', type: 'Electronics' }
        , { id: 1, image: 'https://plus.unsplash.com/premium_photo-1681487479203-464a22302b27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVkZGluZ3xlbnwwfHwwfHx8MA%3D%3D', type: 'Bedding' },
        { id: 1, image: 'https://images.unsplash.com/photo-1531156739609-b609e218df21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0Y2hlbiUyMHV0ZW5zaWxzfGVufDB8fDB8fHww', type: 'Kitchen' },
        { id: 1, image: 'https://images.unsplash.com/photo-1652497212456-cdf9a390fd2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BvcnRzJTIwZXF1aXBtZW50fGVufDB8fDB8fHww', type: 'Sports' },
        { id: 1, image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D', type: 'Fashion' },
        { id: 1, image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2FyZGVufGVufDB8fDB8fHww', type: 'Garden' },
        { id: 1, image: 'https://images.unsplash.com/photo-1526045478516-99145907023c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFrZXVwfGVufDB8fDB8fHww', type: 'Health & Beauty' }
    ]


    //Function that handles click events
    // const handleClick=(event:MouseEvent)=>console.log(event)
    const [selectedIndex, setSelectedIndex] = useState(-1);

    // Reduce Duplication
    // if (products.length === 0) {
    //     return (
    //         <><div className="wrapper">
    //             <div className="welcome">
    //                 <h1>Welcome to Shopify Website where you can find everything onder one roof!</h1>
    //             </div>
    //             <div className="products1">
    //                 <i>No products found!</i></div></div>
    //         </>)
    // }
    return (
        <>
            <div className="wrapper">
                <div className="welcome">
                    <h1>Welcome to Shopify Website where you can find everything onder one roof!</h1>
                </div>

                <div className="products1 ">
                    {/* Conditional rendering in case there are no products */}
                    {/* {products.length === 0 ? <i>No products Found!</i> : null} */}

                    {/* Remove Null and ternary operator */}
                    {products.length === 0 && <i>No Products Found!</i>}
                    {products.map((product, index) => (

                        <div className="product" style={{ height: '', width: '400px' }} >
                            <img src={product.image} className="item-image mx-auto my-3" style={{ height: '', width: '100%' }} />
                            <Link to={`/products/${product.type}`} className="productName">
                                
                                <p style={{ marginBottom: '-7px' }} className={selectedIndex === index ? 'active' : ''} onClick={() => { setSelectedIndex(index) }}>{product.type}</p>

                                {/* <p className="meal-time">{product.time}</p> */}

                            </Link>
                        </div>

                    ))}
                </div>

            </div>
        </>
    )
}


export default Home