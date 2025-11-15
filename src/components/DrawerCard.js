import React from "react";
import { MdDeleteForever, MdAdd, MdRemove } from "react-icons/md";

function DrawerCard({
  cart,
  isOpen,
  closeDrawer,
  onRemoveProduct,
  decreQuantityPro,
  increQuantityPro,
}) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300
    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="p-5 flex justufy-between items-center border-b">
        <h2 className="text-2xl font-bold">Carrito</h2>
        <button
          onClick={closeDrawer}
          className="text-red-500 font-bol  text-2xl"
        >
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
                <p className="text-sm">${item.price.toLocaleString("es-CO")}</p>

                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => decreQuantityPro(item.id)}
                    className="p-1 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center"
                  >
                    <MdRemove size={20} />
                  </button>
                  <span className="font-semibild w-6 text-center">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increQuantityPro(item.id)}
                    className="p-1 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center"
                  >
                    <MdAdd size={20} />
                  </button>
                </div>
              </div>

              <button
                onClick={() => onRemoveProduct(item.id)}
                className="ml-2 text-red-500 hover:text-red-700 relative group"
              >
                <MdDeleteForever
                  size={28}
                  className=" ml-3 mr-3 text-red-500 hover:text-red-700"
                />
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded px-3 py-1 text-center whitespace-nowrap">
                  Eliminar
                </span>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default DrawerCard;
