import { useQuery } from "@tanstack/react-query";
import { getFakePhone } from "../../service/apiPhones";

const useFakePhone = () => {
  const {
    data: phones,
    isLoading,
    error,
  } = useQuery({ queryKey: ["landing"], queryFn: getFakePhone });
  return { isLoading, error, phones };
};

export default useFakePhone;
