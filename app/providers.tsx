'use client';

// eslint-disable-next-line import/no-extraneous-dependencies
import { NextUIProvider } from '@nextui-org/react';

export const Providers = ({ children }: { children: React.ReactNode }) => <NextUIProvider>{children}</NextUIProvider>;
