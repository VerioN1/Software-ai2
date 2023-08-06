import type { Nullable, Nullish } from '~/types';

const DEFAULT_REDIRECT = '/';

export function safeRedirect(to: FormDataEntryValue | string | null | undefined, defaultRedirect: string = DEFAULT_REDIRECT) {
	if (!to || typeof to !== 'string') {
		return defaultRedirect;
	}

	if (!to.startsWith('/') || to.startsWith('//')) {
		return defaultRedirect;
	}

	return to;
}

export const isFalsy = <T>(value: Nullable<T>): value is Nullish => value === undefined || value === null || value === '';

export const isTruthy = <T>(value: Nullable<T>): value is T => !isFalsy(value);
