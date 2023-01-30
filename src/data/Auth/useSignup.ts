import axios from "axios";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { User } from "@types";

export const useSignup = () => {
  const signup = async (email: string, password: string, optIn: boolean) => {
    const resp = await axios.post("auth/signup", {
      email,
      password,
      optIn,
    });
    if (resp.status === 200) {
      const token: User = jwtDecode(resp.data.token);
      Cookies.set("auth", resp.data.token, {
        sameSite: "strict",
        expires: token.exp,
      });
      return token;
    }
  };
  return { signup };
};
