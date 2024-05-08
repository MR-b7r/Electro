import { useQuery } from "@tanstack/react-query";
import { getTopByFans } from "../../service/apiPhones";

const useTopByFans = () => {
  const {
    isLoading,
    error,
    data: TopByFans,
  } = useQuery({ queryFn: getTopByFans, queryKey: ["popular"] });
  return { isLoading, error, TopByFans };
};

export default useTopByFans;
