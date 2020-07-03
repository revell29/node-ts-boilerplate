import fetch from "node-fetch";
import { API_URL, API_KEY } from "./constant";

class HTTP {
  public post(req: any, url: string, data: any) {
    return new Promise((resolve, reject) => {
      fetch(`${API_URL}/${url}`, {
        method: `POST`,
        headers: {
          key: API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          return resolve(response);
        })
        .catch((error) => reject(error));
    });
  }

  public get(req: any, url: string) {
    return new Promise((resolve, reject) => {
      fetch(`${API_URL}/${url}`, {
        method: `GET`,
        headers: {
          key: API_KEY,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          return resolve(response);
        })
        .catch((error) => reject(error));
    });
  }
}

export default new HTTP();
