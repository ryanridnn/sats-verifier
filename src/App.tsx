import { useEffect } from "react";
import operationData from "./operations.json";
import { Viewer } from "./comps/Viewer";

export default function App() {
  useEffect(() => {
    console.log(operationData);
  }, []);
  return (
    <div className="container mx-auto">
      <Viewer operations={operationData} />
    </div>
  );
}
