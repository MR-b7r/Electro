import { useQuery } from "@tanstack/react-query";
import { getTopByInterest } from "../../service/apiPhones";

const useLatest = () => {
  const {
    data: topByInterest,
    isLoading,
    error,
  } = useQuery({ queryKey: ["shop"], queryFn: getTopByInterest });
  return { isLoading, error, topByInterest };
};

export default useLatest;
