import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import WishList from "./pages/WishList";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ShoppingCart from "./pages/ShoppingCart";

import { DarkModeProvider } from "./context/DarkModeContext";
import { CartProvider } from "./context/CartContext";
import { WishListProvider } from "./context/WishListContext";

import { ChakraProvider } from "@chakra-ui/react";
import Checkout from "./pages/Checkout";
import ForgetPassword from "./pages/ForgetPassword";
import Landing from "./pages/Landing";
import Settings from "./pages/Settings";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <AppLayout />,
        // path: "/",
        children: [
          {
            path: "/home",
            element: <Home />,
          },
          {
            path: "/shop",
            element: <Shop />,
          },
          {
            path: "/wishlist",
            element: <WishList />,
          },
          {
            path: "/cart",
            element: <ShoppingCart />,
          },
          {
            path: "details/:slug",
            element: <ProductDetails />,
          },
          { path: "/settings", element: <Settings /> },
        ],
      },
      { path: "/checkout", element: <Checkout /> },
    ],
  },

  { element: <Landing />, path: "/" },
  { element: <Login />, path: "/login" },
  { element: <Signup />, path: "/signup" },
  { element: <ForgetPassword />, path: "/forget-password" },
]);
const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 3000,
      },
    },
  });
  return (
    <DarkModeProvider>
      <CartProvider>
        <WishListProvider>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <ChakraProvider>
              <RouterProvider router={router} />
            </ChakraProvider>
          </QueryClientProvider>
        </WishListProvider>
      </CartProvider>
    </DarkModeProvider>
  );
};

export default App;
