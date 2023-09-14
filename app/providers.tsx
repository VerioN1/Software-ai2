'use client';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { NextUIProvider } from '@nextui-org/react';

export const Providers = ({ children }: { children: React.ReactNode }) => (
	<NextUIProvider>
		<NextThemesProvider attribute="class">{children}</NextThemesProvider>
	</NextUIProvider>
);
