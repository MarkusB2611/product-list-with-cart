import {CartType} from "../../App.tsx";

interface CartProps {
    cart: CartType
}

const Cart = ({cart}: CartProps) => {
    return (
        <div className="w-96 bg-white h-fit rounded-xl p-6">
            <h2 className="text-plwc-red text-[1.5rem] font-bold leading-[125%]">Your Cart ({cart.count})</h2>
            <div className="flex flex-col items-center h-48 p-4">
                <img src="/assets/images/illustration-empty-cart.svg" alt=""/>
                <div className="text-plwc-rose-500 font-semibold text-[0.875rem] leading-[150%]">Your added items will appear here</div>
            </div>
        </div>
    );
}

export default Cart;