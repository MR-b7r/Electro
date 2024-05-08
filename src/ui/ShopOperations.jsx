import React from "react";
import Filter from "./Filter";

const ShopOperations = () => {
  return (
    <div className="flex items-center justify-end mb-7">
      <Filter
        filterField="model"
        options={[
          { value: "All", label: "All" },
          { value: "Apple", label: "Apple" },
          { value: "Huawei", label: "Huawei" },
          { value: "Oppo", label: "Oppo" },
          { value: "Samsung", label: "Samsung" },
          { value: "Realme", label: "Realme" },
          { value: "Xiaomi", label: "Xiaomi" },
        ]}
      />
    </div>
  );
};

export default ShopOperations;
