function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgbtohex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function extractRgb(rgb) {
  const result = rgb
    .substring(rgb.indexOf("(") + 1, rgb.indexOf(")"))
    .split(",");
  return result;
}
// const getUsers = async () => {
//   setStatus({ ...status, loading: true, found: false, error: false });
//   try {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
//     console.log(response.status);
//     if (response.status >= 200 && response.status < 300) {
//       const users = await response.json();
//       console.log(users);
//       setUsers([...users]);
//       setStatus({ ...status, loading: false, found: true, error: false });
//     }
//   } catch (e) {
//     setStatus({ ...status, loading: false, found: false, error: true });
//   }
// };
export { componentToHex, rgbtohex, extractRgb };
