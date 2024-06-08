/* eslint-disable max-len */
import Head from 'next/head';
import PropTypes from 'prop-types';

const BaseLayout = ({ children }) => {
  return (
    <div id="main">
      <Head>
        <title>Deklan Malik Akbar | Web & Mobile developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#181818" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          key="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />

        <meta property="og:site_name" content="Deklan Malik Akbar | Web & Mobile developer" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Deklan Malik Akbar | Web & Mobile developer" />
        <meta property="og:locale" content="id" />
        <meta property="og:url" content="https://deklanma.vercel.app/" />
        <meta
          name="description"
          content="Hello!  I'm a software developer based in West Java, specializing in building amazing websites
      and mobile apps, and everything in between."
        />
        <meta
          name="keywords"
          content="Developer, Javascript, Freelancer, React, React native, PHP, Laravel Developer, Vue JS Developer, React Developer,Typescript"
        />
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/attachments/1092021496542666833/1248903346501193828/152021056-DeklanMalikAkbar.jpeg?ex=66655b61&is=666409e1&hm=95cf1d0f789639efb140ce0625c0c97ab6faf49b1a5de4cadab5d917870b5bd4&"
        />
        <meta
          property="twitter:image"
          content="https://cdn.discordapp.com/attachments/1092021496542666833/1248903346501193828/152021056-DeklanMalikAkbar.jpeg?ex=66655b61&is=666409e1&hm=95cf1d0f789639efb140ce0625c0c97ab6faf49b1a5de4cadab5d917870b5bd4&"
        />
      </Head>
      {children}
    </div>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default BaseLayout;
