import { useQuery } from "@tanstack/react-query";
import { getLatest } from "../../service/apiPhones";

const useLatest = () => {
  const {
    data: latest,
    isLoading,
    error,
  } = useQuery({ queryKey: ["shop"], queryFn: getLatest });
  return { isLoading, error, latest };
};

export default useLatest;
