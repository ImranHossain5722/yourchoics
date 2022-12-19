import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
 const [cart, setCart] =useState({})
 const [subTotal, setSubTotal] = useState(0)
 const [user, setUser]=useState({value:null})
 const [key, setKey] = useState()
 const router =useRouter()


 const saveCart =(myCart)=>{
    localStorage.setItem("cart", JSON.stringify(myCart))

    let subt =0;
    let keys = Object.keys(myCart)
    for(let i=0; i < keys.length;i++){
      subt += myCart[keys[i]]['price'] * myCart[keys[i]].qty
    }
    setSubTotal(subt)
  }

  useEffect(()=>{

     try {

      if (localStorage.getItem('cart')){
        setCart(JSON.parse(localStorage.getItem('cart')))
        saveCart(JSON.parse(localStorage.getItem('cart')))
      }
      
     } catch (error) {
      console.error(error)
      localStorage.clear()
     }
    const token = localStorage.getItem('token')
    if(token){
      setUser({value:token})
      setKey(Math.random())
    }

  },[router.query])

const  addCart =(itemCode, qty, price, name, size, variant)=>{

  let newCart =cart ;
  if (itemCode in cart){
    newCart[itemCode].qty = cart[itemCode].qty + qty

  }else{

newCart[itemCode]={qty:1, price, name , size, variant}
  }
  setCart(newCart)
  saveCart(newCart)
  toast.info('Product add to cart successfully', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}

// buy now button
const buyNow = (itemCode, qty, price, name, size, variant)=>{
let newCart ={itemCode:{qty:1 , price, name, size, variant}}
  
  setCart(newCart)
  saveCart(newCart)
  router.push('/checkout')
}

const  removeFromCart =(itemCode, qty, price, name, size, variant)=>{

  let newCart =cart ;
  if (itemCode in cart){
    newCart[itemCode].qty = cart[itemCode].qty - qty

  }
   if(newCart[itemCode]['qty']<=0){
    delete newCart[itemCode]

   }
  setCart(newCart)
  saveCart(newCart)
}

const clearCart =()=>{
  setCart({})
  saveCart({})
}

  return <>
  <Navbar user={user} key={key} cart={cart} addCart={addCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
  <Component {...pageProps} buyNow={buyNow} cart={cart} addCart={addCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
  <Footer  />
  </>
}

export default MyApp
