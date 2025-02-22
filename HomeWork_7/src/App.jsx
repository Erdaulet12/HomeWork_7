function ProductCard() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white mx-auto mt-8">
      <img
        className="w-full h-48 object-cover"
        src="https://lafoy.ru/photo_l/foto-4311-0.jpg"
        alt="Product"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Название продукта</div>
        <p className="text-gray-700 text-base">
          Краткое описание продукта, которое сообщает его основные преимущества.
        </p>
        <p className="text-gray-700 text-base mt-2">Цена: $99.99</p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
          Купить
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Добавить в корзину
        </button>
      </div>
      <div className="px-6 py-4">
        <form className="w-full">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Введите ваш email:
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            type="submit"
            className="mt-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductCard;
