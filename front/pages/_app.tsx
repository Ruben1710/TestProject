import NavBar from "@/components/Navbar";
import { RootStoreProvider } from "@/providers/RootStoreProvider";
import "@/styles/styles.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <RootStoreProvider hydrationData={pageProps.hydrationData}>
      <NavBar>
        <Component {...pageProps} />
      </NavBar>
    </RootStoreProvider>
  );
}
