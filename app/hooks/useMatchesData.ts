/**
 * This base hook is used in other hooks to quickly search for specific data
 * across all loader data using useMatches.
 * @param {string} id The route id
 * @returns {JSON|undefined} The router data or undefined if not found
 */
import { useMemo } from 'react';
import { useMatches } from '@remix-run/react';

export function useMatchesData(id: string): Record<string, unknown> | undefined {
	const matchingRoutes = useMatches();

	const resultedRoute = useMemo(() => matchingRoutes.find((route) => route.id === id), [matchingRoutes, id]);

	return resultedRoute?.data;
}
