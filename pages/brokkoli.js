import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    // useEffect is only executed in the browser, not the server
    console.log(document.body);
  }, []);
  return <h1>My About Page</h1>;
}
