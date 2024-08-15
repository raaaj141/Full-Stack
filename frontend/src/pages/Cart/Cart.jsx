import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';


const Cart = () => {
    const {cartItems,food_list,removeFromCart,getTotalCartAmount,url}=useContext(StoreContext);
    const navigate=useNavigate()



  
    
    if(getTotalCartAmount()===0)
    {
        return (
        <div className="empty">
            <br /><br /><br /><br /><br />
            <img src={assets.empty} alt="" />
            <h2>Your Cart is Empty!</h2>
           
        </div>
        )
    }
    else
    {   
        return(

        <div className='cart'>
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br/>
                <hr/>
                {food_list.map((item,index)=>{
                    if(cartItems[item._id]>0)
                    {
                        return(
                            <div>
                                <div className="cart-items-title cart-items-item">
                                    <img src={url+"images/"+item.image} alt=''/>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>{item.price * cartItems[item._id]}</p>
                                    <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                                </div>
                                <hr/>
                            </div>
                        )
                    }
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Total</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>SubTotal</p>
                            
                            <p>₹{getTotalCartAmount()}</p>
                        </div>
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>₹{getTotalCartAmount()==0?0:20}</p>
                        </div>
                        <div className="cart-total-details">
                            <b>Grand Total</b>
                            <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+20}</b>
                        </div>
                    </div>
                    <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cart-promocode">
                    <div>
                        <p>If you have any promocode, Enter</p>
                        <div className="cart-promocode-input">
                            <input type="text" placeholder='Promo Code'/>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
   

}

export default Cart