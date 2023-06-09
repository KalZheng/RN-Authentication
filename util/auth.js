import axios from "axios";

const apiKey = "AIzaSyBFDg4Q9qZxRVloqHxyEosc_H3hbgcRu8s";

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${apiKey}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  //   console.log(response.data);
  const token = response.data.idToken;
  return token;
}

export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}

export function createUser(email, password) {
  return authenticate("signUp", email, password);
}
