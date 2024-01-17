import Image from "next/image";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

const Cart = () => {
  return (
    <main className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div className="space-y-6">
            {/* <!-- Cart Item --> */}
            <div className="cartCard">
              <div className="flex items-center col-span-6 space-x-6">
                {/* <!-- cart image --> */}
                <Image
                  className="lws-cartImage"
                  width={600}
                  height={600}
                  src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="product"
                />
                {/* <!-- cart item info --> */}
                <div className="space-y-2">
                  <h4 className="lws-cartName">
                    Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptop
                  </h4>
                  <p className="lws-cartCategory">Men{"'"}s clothing</p>
                  <p>
                    BDT <span className="lws-cartPrice">1100</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                {/* <!-- amount buttons --> */}
                <div className="flex items-center space-x-4">
                  <button className="lws-incrementQuantity">
                    <FaPlus size={20} />
                  </button>
                  <span className="lws-cartQuantity">2</span>
                  <button className="lws-decrementQuantity">
                    <FaMinus size={20} />
                  </button>
                </div>
                {/* <!-- price --> */}
                <p className="text-lg font-bold">
                  BDT <span className="lws-calculatedPrice">2200</span>
                </p>
              </div>
              {/* <!-- delete button --> */}
              <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                <button className="lws-removeFromCart">
                  <FaTrash size={20} />
                </button>
              </div>
            </div>
            {/* <!-- Cart Items Ends --> */}
          </div>

          {/* <!-- Bill Details --> */}
          <div>
            <div className="billDetailsCard">
              <h4 className="mt-2 mb-8 text-xl font-bold text-center">
                Bill Details
              </h4>
              <div className="space-y-4">
                {/* <!-- sub total --> */}
                <div className="flex items-center justify-between">
                  <p>Sub Total</p>
                  <p>
                    BDT <span className="lws-subtotal">8800</span>
                  </p>
                </div>
                {/* <!-- Discount --> */}
                <div className="flex items-center justify-between">
                  <p>Discount</p>
                  <p>
                    BDT <span className="lws-discount">0</span>
                  </p>
                </div>
                {/* <!-- VAT --> */}
                <div className="flex items-center justify-between">
                  <p>VAT</p>
                  <p>
                    BDT <span className="vat">0</span>
                  </p>
                </div>
                {/* <!-- Total --> */}
                <div className="flex items-center justify-between pb-4">
                  <p className="font-bold">TOTAL</p>
                  <p className="font-bold">
                    BDT <span className="lws-total">8800</span>
                  </p>
                </div>
                <button className="placeOrderbtn">place order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
