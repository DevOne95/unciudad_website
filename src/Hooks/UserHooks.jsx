import { create } from "zustand";
import api from "../Services/Api";

const USER_PATH = "user";

const useUserHooks = create((set) => ({
  user: {
    name: "Art Sambrano",
    address: "Tetual De Zamboanga",
    role: 1,
  },
  signIn: (form, callBack) => {
    api
      .post({ url: `${USER_PATH}/signin` }, form)
      .then((res) => {
        const { statusText } = res;

        if (statusText !== "OK") {
          throw new Error("Bad response.", { cause: res });
        }
        return res.data;
      })
      .then((res) => {
        set(() => ({ user: res.data }));
        callBack(200, "success");
      })
      .catch((err) => {
        callBack(500, err);
      });
  },
  signUp: (form, callBack) => {
    api
      .post({ url: `${USER_PATH}/signup` }, form)
      .then((res) => {
        const { statusText } = res;

        if (statusText !== "OK") {
          throw new Error("Bad response.", { cause: res });
        }
        return res.data;
      })
      .then(() => callBack(200, "success"))
      .catch((err) => {
        callBack(500, err);
      });
  },
  signOut: (callBack) => {
    api
      .delete({ url: `${USER_PATH}/signout` })
      .then((res) => {
        const { statusText } = res;

        if (statusText !== "OK") {
          throw new Error("Bad response.", { cause: res });
        }

        return res.data;
      })
      .then(() => callBack(200, "user signout."))
      .catch((err) => callBack(500, err));
  },
}));

export default useUserHooks;
