import AddToCartButton from "../add-to-cart-button/add-to-cart-button.tsx";
import {formatPrice} from "../../utils/helpers.ts";

interface ProductCardProps {
    product: {
        image: {
            thumbnail: string
            mobile: string
            tablet: string
            desktop: string
        }
        name: string
        category: string
        price: number
    },
    addToCart: () => void,
}

const ProductCard = ({product, addToCart}: ProductCardProps) => {
    const formattedPrice = formatPrice(product.price)

    return (
        <div>
            <div className="relative">
                <picture>
                    <source media="(min-width: 900px)" srcSet={product.image.desktop} />
                    <img className="h-60 rounded-lg " src={product.image.mobile} alt={product.name}/>
                </picture>

                <div className="absolute z-20 -bottom-5 left-1/2 -translate-x-1/2"><AddToCartButton onClick={addToCart} /></div>
            </div>

            <div className="mt-8 text-plwc-rose-500 text-[0.875rem] leading-[150%]">{product.category}</div>
            <h2 className="font-semibold leading-[150%]">{product.name}</h2>
            <div className="font-semibold leading-[150%] text-plwc-red">{formattedPrice}</div>
        </div>
    );
}

export default ProductCard;