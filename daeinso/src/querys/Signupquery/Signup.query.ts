import { useMutation, useQuery } from "react-query";

export const useSignup = () => {
  const mutation = useMutation(["user/register"]);
};
