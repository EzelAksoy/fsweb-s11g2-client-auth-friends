import axios from "axios";

export const LOGIN = "LOGIN";
export const ADDFRIEND = "ADDFRIEND";
export const LOGOUT = "LOGOUT";
export const FRIENDSLIST = "FRIENDLIST";

export function log_in(token) {
  return { type: LOGIN, payload: token };
}

export function friend_list(list) {
  return { type: FRIENDSLIST, payload: list };
}

export function add_friend(list) {
  return { type: ADDFRIEND, payload: list };
}
const axiosWithAuth = (token) => {
  return axios.create({
    headers: {
      Authorization: token,
    },
  });
};

export const fetchLogin = (log) => (dispatch) => {
  axios.post("http://localhost:9000/api/login", log).then((res) => {
    dispatch(log_in(res.data.token));
    localStorage.setItem("token", res.data.token);
  });
};

export const fetchFriends = () => (dispatch) => {
  axiosWithAuth(localStorage.getItem("token"))
    .get("http://localhost:9000/api/friends")
    .then((res) => {
      dispatch(friend_list(res.data));
    });
};

export const fetchAddFriend = (newFriend) => (dispatch) => {
  axiosWithAuth(localStorage.getItem("token"))
    .post("http://localhost:9000/api/friends", newFriend)
    .then((res) => dispatch(add_friend(res.data)));
};
