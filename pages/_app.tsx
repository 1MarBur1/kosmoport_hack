import type { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';

import '@/styles/globals.css';
import '@/styles/typeface.css';
import '@/styles/font.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

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
