import './App.css'
import DATA from '../data.json'
import ProductCard from "./components/product-card/product-card.tsx";
import Cart from "./components/cart/cart.tsx";
import {useState} from "react";

interface CartItems {
    name: string,
    price: number,
    amount: number
}

export interface CartType {
    items: CartItems[]
    total: number,
    count: number

}

function App() {
    const [cart, setCart] = useState<CartType>({items: [], total: 0, count: 0});

  return (
      <div className="my-[5.5rem] mx-28 flex gap-8">
          <div>
              <h1 className="text-plwc-rose-900 font-bold text-[40px] leading-[120%] mb-8">Desserts</h1>
              <div className="grid grid-cols-3 gap-6">
                  {DATA.map(data => {
                      return <ProductCard key={data.name} product={data}/>
                  })}
              </div>
          </div>
          <Cart cart={cart}/>
      </div>
  )
}

export default App
