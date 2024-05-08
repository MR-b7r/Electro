import React from "react";
import ProductItem from "../../ui/ProductItem";
import useTopByFans from "./useTopByFans";
import { Spinner, useToast } from "@chakra-ui/react";
import { getUniqueData } from "../../utils/helpers";

const TopByFansComponent = () => {
  const { isLoading, error, TopByFans } = useTopByFans();
  const toast = useToast();

  if (error)
    return toast({
      position: "top",

      title: `Fetching failed!`,
      description: "Failed To get Top Rated SmartPhone",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  if (isLoading)
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

  const finalData = TopByFans.map((item) => [item.detail, item.slug]);
  const uniqueData = getUniqueData(finalData);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-5">
      {uniqueData.map(([detailLink, slug], i) => (
        <ProductItem key={i} detailLink={detailLink} slug={slug} />
      ))}
    </div>
  );
};

export default TopByFansComponent;
