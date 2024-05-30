import { useQuery } from "@tanstack/react-query";
import { fetchProductDetail } from "../../utils/helpers";

const usePhoneLink = (detailLink, slug) => {
  const {
    data: details,
    isLoading,
    error,
  } = useQuery({
    queryKey: [slug],
    queryFn: () => fetchProductDetail(detailLink),
  });
  return { details, isLoading, error };
};

export default usePhoneLink;
