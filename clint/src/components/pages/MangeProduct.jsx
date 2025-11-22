
import ProductInput from "../common/ProductInput";
import Item from "../common/Item";
import { useProduct } from "../../context/ProductContext";

const MangeProduct = () => {
  const { product, setProduct } = useProduct();

  return (
    <div className="bg-[#ffffff] rounded-lg shadow-sm w-[70%]  p-6">
      <h1 className="text-xl font-semibold py-5">Mange Product</h1>
      <ProductInput />
      <section className="p-5 border-t-2">
        {Array.isArray(product) && product.length > 0 ? (
          product.map(
            ({
              prod_id,
              rate,
              unit,
              wps_1to5,
              wps_6to8,
              pps_1to5,
              pps_6to8,
              product_name,
            }) => (
              <Item
                id={prod_id}
                key={prod_id}
                rate={rate}
                unit={unit}
                wps_1to5={wps_1to5}
                wps_6to8={wps_6to8}
                pps_1to5={pps_1to5}
                pps_6to8={pps_6to8}
                name={product_name}
              />
            )
          )
        ) : (
          <h1>Empty....</h1>
        )}
      </section>
    </div>
  );
};

export default MangeProduct;
