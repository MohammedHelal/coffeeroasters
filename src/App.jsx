import { useState, useEffect } from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About.jsx";
import Subscribe from "./pages/subscribe/Subscribe";
import RootLayout from "./components/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

function App() {
  const [screenSize, setScreenSize] = useState(screen.width);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(screen.width);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout screenSize={screenSize} />,
      errorElement: (
        <div className="error-page">
          <h1>Error 404: Page not found</h1>
        </div>
      ),
      children: [
        { index: true, element: <Home screenSize={screenSize} /> },
        {
          path: "/about",
          element: <About screenSize={screenSize} />,
        },
        {
          path: "/subscribe",
          element: <Subscribe screenSize={screenSize} />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
