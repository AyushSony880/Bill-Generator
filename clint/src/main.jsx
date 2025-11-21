import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ProductContextProvider } from "./context/ProductContext.jsx";
import { SchoolContextProvider } from "./context/SchoolContext.jsx";
import { RecordContextProvider } from "./context/RecordContext.jsx";

createRoot(document.getElementById("root")).render(
  <RecordContextProvider>
    <SchoolContextProvider>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </SchoolContextProvider>
  </RecordContextProvider>
);
