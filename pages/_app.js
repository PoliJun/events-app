import MainLayout from '@/src/components/layout/main-layout';
import '@/styles/general.sass';
import PropTypes from 'prop-types';

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};
