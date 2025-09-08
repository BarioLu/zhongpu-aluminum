import productData from "../data/products.json";

const ProductList = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {productData.map((item) => (
        <div key={item.id} className="border p-4 rounded">
          <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
          <h3 className="text-lg font-bold mt-2">{item.name}</h3>
          <p className="text-sm">{item.description}</p>
          <ul className="text-xs mt-2">
            <li><strong>Finish:</strong> {item.finish}</li>
            <li><strong>Thickness:</strong> {item.thickness}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
