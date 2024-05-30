import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { updateUser as updateUserApi } from "../../service/apiAuth";
import { useToast } from "@chakra-ui/react";

const useUpdateUser = () => {
  const toast = useToast();
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: (data) => {
      toast({
        position: "top",
        title: `User Updated successfully! `,
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
      // queryClient.setQueryData(["user"], data.user);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => {
      console.error(err);
      toast({
        position: "top",
        description: "Something went wrong, please try again ",
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
  return { updateUser, isPending };
};

export default useUpdateUser;
