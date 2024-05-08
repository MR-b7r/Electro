import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../service/apiAuth";
import { useToast } from "@chakra-ui/react";

const useSignup = () => {
  const toast = useToast();

  const { mutate: signup, isPending } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      signupApi({ fullName, email, password }),
    onSuccess: (user) => {
      toast({
        position: "top",
        title: `Account successfully created!`,
        description: "Plaese verify the new account from user's email address",
        status: "success",
        duration: 4000,
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
      console.error(err);
      toast({
        position: "top",
        description: "Invalid email address or Password",
        status: "error",
        duration: 4000,
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
  return { signup, isPending };
};

export default useSignup;
