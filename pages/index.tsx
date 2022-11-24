import Head from 'next/head';
import { css } from '@emotion/react';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Hello, World!</title>
            </Head>
            <div
                css={css`
                    font-size: 2em;
                `}
            >
                Hello, World!
            </div>
        </div>
    );
}
