const AddToCartButton: React.FC = () => {
    return (
        <button className="w-40 h-11 bg-white text-plwc-rose-900 border-plwc-rose-400 border rounded-full hover:border-plwc-red hover:text-plwc-red flex justify-center items-center gap-2">
            <img src="/assets/images/icon-add-to-cart.svg" alt="Add To Cart" />
            <span>Add to Cart</span>
        </button>
    );
}

export default AddToCartButton;