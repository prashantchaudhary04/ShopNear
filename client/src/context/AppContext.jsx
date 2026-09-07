import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";


export const AppContext = createContext();

export const AppContextProvider =({children})=>{


    const currency = import.meta.env.VITE_CURRENCY;

    const navigate = useNavigate()
    const [user,setuser] = useState(null)
    const [isSeller,setIsSeller] = useState(null)
    const [showUserLogin, setShowUserLogin] = useState(false)
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState({})
    const [searchQuery,setSearchQuery]= useState({})

    //   fetching Products
     const fetchProducts = async () =>{
        setProducts(dummyProducts)
    }


    // Add product to cart

    const addToCart = (ItemId)=>{
        let cartData = structuredClone(cartItems)

        if(cartItems[ItemId]){
            cartData[ItemId] += 1
        }
        else{
            cartData[ItemId] = 1
        }
        setCartItems(cartData)
        toast.success("Added to Cart")
    }

    // update cart

    const updateCartItem = (ItemId,quantity)=>{
        let cartData = structuredClone(cartItems)
        cartData[ItemId] = quantity;
        setCartItems(cartData)
        toast.success("Cart Updated")

    }



//     const updateCartItem = (itemId, quantity) => {
//     let cartData = structuredClone(cartItems);

//     cartData[itemId] = quantity; // ✅ Update the cloned object

//     setCartItems(cartData);
//     toast.success("Cart Updated");
// };



    // Remove Product from Cart

    const removeFromCart = (ItemId)=>{
        let cartData = structuredClone(cartItems)
        if(cartData[ItemId]){
            cartData[ItemId] -=1;
            if(cartData[ItemId]===0){
                delete cartData[ItemId]
            }
        }
        toast.success("Remove from Cart")
        setCartItems(cartData)
    }
    

    // get Cart Item Count


    const getCartCount = () =>{
        let totalCount = 0 ;
        for(const item in cartItems){
            totalCount += cartItems[item]
        }
        return totalCount
    }


    // get Cart Total Price 

    const getCartAmount =()=>{
        let totalAmount = 0;
        for (const items in cartItems){
            let itemInfo = products.find((product)=> product._id === items)
            if(cartItems[items] > 0){
                totalAmount += itemInfo.offerPrice * cartItems[items]
            }
        }
        return Math.floor(totalAmount*100)/100;
    }





     useEffect(()=>{
        fetchProducts()
        console.log(products)
     },[products])


    const value ={navigate,user,setuser,setIsSeller,isSeller,showUserLogin,setShowUserLogin,products,currency,addToCart,updateCartItem,removeFromCart,cartItems,searchQuery,setSearchQuery,getCartCount,getCartAmount}
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
} 

export const useAppContext =()=>{
    return useContext(AppContext)
}

