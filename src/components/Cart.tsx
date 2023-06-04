import React from 'react'
import logo from '../assets/logoDAYRO.png'

function Cart() {
  return (
      <div className="h-screen flex flex-col sm:flex-row bg-slate-300">
          <div className="h-16 sm:h-auto sm:w-2/3 bg-white m-5 p-5 rounded-lg">
              <h1 className="text-3xl ms-6 py-7">Tu carrito</h1>
              <div className="flex w-full p-5 bg-slate-400">
                  <img
                      className="flex-auto object-cover w-100% h-[340px]"
                      src={logo}
                      alt="Producto"
                  />
                  <div className="flex-auto mx-5 flex flex-col">
                      <h1 className="text-2xl mb-6">Nombre del producto</h1>
                      <label className="mb-3 me-4">Cantidad</label>
                      <input type="text" value={0} />
                      <button className="my-6">Eliminar del carrito</button>
                  </div>
                  <div className="flex-auto mx-6 items-center justify-between">
                      <div className="flex flex-col mb-5">
                          <p>Precio unitario</p>
                          <span> S/. 10.00</span>
                      </div>
                      <div className="flex flex-col">
                          <p>Precio al por mayor</p>
                          <span> S/. 10.00</span>
                      </div>
                  </div>
              </div>
              <hr className="my-6 border-gray-300 w-full" />
          </div>
          <div className="h-16 sm:h-auto sm:w-1/3 bg-white m-5 rounded-lg p-5">
              <div className="flex flex-col ms-3 pt-3">
                  <h1 className="text-3xl my-5">Total:</h1>
                  <p>S/. 100000.00</p>
                  <button className="w-full bg-green-300 mt-7 me-3">
                      Pagar
                  </button>
              </div>
          </div>
      </div>
  );
}

export default Cart