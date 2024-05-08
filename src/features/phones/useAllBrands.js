import { useQuery } from "@tanstack/react-query";
import { getAllBrands } from "../../service/apiPhones";

const useAllBrands = () => {
  const {
    data: brands,
    isLoading,
    error,
  } = useQuery({ queryKey: ["shop"], queryFn: getAllBrands });
  return { isLoading, error, brands };
};

export default useAllBrands;
