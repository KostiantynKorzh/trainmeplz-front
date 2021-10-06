export default function authHeader(): any {
  return {
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
}
