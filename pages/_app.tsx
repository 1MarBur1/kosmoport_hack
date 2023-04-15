import type { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';

import '@/styles/globals.css';
import '@/styles/font.css';

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<QueryClientProvider client={queryClient}>
			<Head>
				<title>
					Космопорт
				</title>
			</Head>
			<Component {...pageProps} />
		</QueryClientProvider>
	);
};

export default App;
