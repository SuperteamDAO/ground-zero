import { Fragment } from 'react';
import { DefaultSeo } from 'next-seo';
import '../assets/styles/index.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="Ground Zero"
        description="Learn basics of the crypto ecosystem for free!"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://groundzero.superteam.fun/',
          site_name: 'Ground Zero',
          images: [
            {
              url: 'https://groundzero.superteam.fun/images/bg-image.jpeg',
              width: 800,
              height: 600,
              alt: 'Ground Zero',
              type: 'image/jpeg',
            }
          ]
        }}
        twitter={{
          handle: '@SuperteamDAO',
          site: '@SuperteamDAO',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}
