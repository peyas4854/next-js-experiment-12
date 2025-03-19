import Header from "../components/Headers";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Header />
        <Component {...pageProps} />
      </>
  );
}
export default MyApp;
