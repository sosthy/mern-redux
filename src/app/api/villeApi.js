export function getVilles() {
  return fetch("http://127.0.0.1:8080/villes?projection=customVille").then(
    (response) => {
      return response.json().then((data) => {
        return data._embedded.villes;
      });
    }
  );
}
