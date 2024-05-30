import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { logout as logoutApi } from "../../service/apiAuth";

const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries(["user"]);
      navigate("/login", { replace: true });
    },
  });
  return { logout, isPending };
};

export default useLogout;
