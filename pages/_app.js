import DefaultLayout from "../components/Layouts/DefaultLayout";

//css
import "../public/assets/css/bootstrap.css";
import "../public/assets/css/global.css";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout;

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
