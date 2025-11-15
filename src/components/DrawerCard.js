import React from "react";

function DrawerCard({ cart, isOpen, closeDrawer}) {
  return (
<div
  className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300
    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
>

      <div className="p-5 flex justufy-betwwen items-center border-b">
        <h2 className="text-2xl font-bold">Carrito</h2>
        <button onClick={closeDrawer} className="text-red-500 font-bol  text-2xl">
          x
        </button>
      </div>

      <div className="p-4 overflow-y-auto h-[calc(100%-64px)]">
        {cart.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">{item.marca}</p>
                <p className="text-sm">${item.price}</p>
                <p className="text-sm">Cantidad: {item.quantity}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default DrawerCard;
