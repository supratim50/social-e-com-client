import DefaultLayout from "../components/Layouts/DefaultLayout";

//css
import "../public/assets/css/bootstrap.css";
import "../public/assets/css/global.css";

// CONTEXTS
import { Datalayer } from "../contexts/profile-context";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout;

  return (
    <>
      <Datalayer>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Datalayer>
    </>
  );
}

export default MyApp;
