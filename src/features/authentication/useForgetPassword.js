import { useMutation } from "@tanstack/react-query";
import { forgetPassword as forgetPasswordApi } from "../../service/apiAuth";
import { useToast } from "@chakra-ui/react";

const useForgetPassword = () => {
  const toast = useToast();
  const { mutate: forgetPassword, isPending } = useMutation({
    mutationFn: forgetPasswordApi,
    onSuccess: () => {
      toast({
        position: "top",
        description: "Verfication Link has been sent to your email address",
        status: "success",
        duration: 3000,
        isClosable: false,
        colorScheme: "green",
        variant: "solid",
        containerStyle: {
          display: "flex",
          width: "650px",
          maxWidth: "100%",
          alignItems: "center",
          justifyContent: "center",
        },
      });
    },
    onError: (err) => {
      toast({
        position: "top",
        description: "Email address is Incorrect",
        status: "error",
        duration: 3000,
        isClosable: false,
        colorScheme: "red",
        variant: "solid",
        containerStyle: {
          display: "flex",
          width: "650px",
          maxWidth: "100%",
          alignItems: "center",
          justifyContent: "center",
        },
      });
    },
  });
  return { forgetPassword, isPending };
};

export default useForgetPassword;
