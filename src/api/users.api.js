export const getData = async () => {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const resJson = await respuesta.json();
  return resJson;
};
