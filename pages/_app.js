import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
 const [cart, setCart] =useState({})
 const [subTotal, setSubTotal] = useState(0)
  const saveCart =(myCart)=>{
    localStorage.setItem("cart", myCart)
  }

  useEffect(()=>{


  },[])

const  addCart =(itemCode, qty, price, name, size, variant)=>{

  let newCart =cart ;
  if (itemCode in cart){
    newCart[itemCode].qty = cart[itemCode].qty + qty

  }else{

newCart[itemCode]={qty:1, price, name , size, variant}
  }
  setCart(newCart)
  saveCart(newCart)
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
  <Navbar />
  <Component {...pageProps} />
  <Footer />
  </>
}

export default MyApp
