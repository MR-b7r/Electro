import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../service/apiAuth";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const toast = useToast();
  const { isPending, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueriesData(["user", user]);
      navigate("/home");
    },
    onError: (err) => {
      console.error(`Error type ${err}, from Login in`);
      toast({
        position: "top",
        description: "email or Password is Incorrect",
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
  return { isPending, login };
};

export default useLogin;
