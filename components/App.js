import Head from 'next/head';

export default ({ children }) => (
    <div>
        <Head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
            <title>Secret</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:300&amp;subset=cyrillic" rel="stylesheet" />
            <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
            <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
        </Head>
        { children }
    </div>
);