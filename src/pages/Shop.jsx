import React from "react";
import ShopOperations from "../ui/ShopOperations";
import useLatest from "../features/phones/useLatest";
import useTopByInterest from "../features/phones/useTopByInterest";
import { Spinner } from "@chakra-ui/react";
import ProductItem from "../ui/ProductItem";
import { useSearchParams } from "react-router-dom";
import { filterByModel, getUniqueData } from "../utils/helpers";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const { isLoading: isLoadingLatest, latest } = useLatest();
  const { isLoading: isLoadingInterest, topByInterest } = useTopByInterest();
  if (isLoadingLatest || isLoadingInterest)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="yellow.500"
        size="xl"
        className="absolute top-1/2 left-1/2"
      />
    );

  // concat both api from LATEST and TopByInterest
  const finalData = latest
    ?.concat(topByInterest)
    .map((item) => [item.detail, item.slug]);
  // get FILTER value from URL
  const filterValue = searchParams.get("model") || "All";

  // Filtering Phones by MODEL
  const filteredData = filterByModel(filterValue, finalData);

  // prevent DUPLICATED phones
  const uniqueData = getUniqueData(filteredData);

  return (
    <div className="flex flex-col">
      <ShopOperations />

      {!filteredData.length && (
        <p className="text-[30px] dark:text-white-01 self-center">
          There is no data to show
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-5">
        {uniqueData.map(([detailLink, slug], i) => (
          <ProductItem detailLink={detailLink} slug={slug} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
