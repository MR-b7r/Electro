import { useQuery } from "@tanstack/react-query";
import { getPhoneDetails } from "../../service/apiPhones";
import { useParams } from "react-router-dom";

const usePhoneDetails = () => {
  const { slug } = useParams();
  const {
    data: phoneDetails,
    error,
    isLoading,
  } = useQuery({
    queryFn: () => getPhoneDetails(slug),
    queryKey: ["phoneDetails", slug],
  });
  return { isLoading, error, phoneDetails, slug };
};

export default usePhoneDetails;
