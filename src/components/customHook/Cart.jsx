import { useCart } from "./hooks/useCart";

const Cart = () => {
  const { cartItems, addToCart, removeFormCart, totalPrice, clearCart } = useCart();

  const demoProducts = [
    { id: 1, name: "Laptop", price: 500 },
    { id: 2, name: "Phone", price: 300 },
    { id: 3, name: "Headphone", price: 200 }
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Shopping Cart</h1>

      <h2 className="text-2xl font-semibold mb-4">Products:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {demoProducts.map((product) => (
          <div key={product.id} className="p-4 border rounded-lg shadow-sm">
            <p className="text-lg font-medium">
              {product.name} - ${product.price}
            </p>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-colors"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Cart Items:</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your Cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="p-4 border rounded-lg shadow-sm">
              <p className="text-lg font-medium">
                {item.name} - ${item.price} x {item.quantity}
              </p>
              <button
                onClick={() => removeFormCart(item.id)}
                className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition-colors"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <h2 className="text-2xl font-semibold mt-6">
        Total Price: ${totalPrice()}
      </h2>
      <button
        onClick={clearCart}
        className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md transition-colors"
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
