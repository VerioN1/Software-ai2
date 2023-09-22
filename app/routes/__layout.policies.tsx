import { json, LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import React from 'react';
import { PolicyCard } from '~/features';
import { useDisclosure } from '~/hooks';
import SearchInput from '~/lib/Inputs/SearchInput/SearchInput';
import { catalogService } from '~/services';
import { CatalogRule } from '~/types';

export const loader: LoaderFunction = async ({ params }) => {
	const catalogForm = await catalogService.getCatalogForm(params.catalogId as string);

	return json(catalogForm);
};

const __LayoutPolicies = () => {
	const loaderData = useLoaderData<typeof loader>();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [currentRule, setCurrentRule] = React.useState<React.ReactNode>(null);

	return (
		<div className="flex flex-col w-max">
			<div className="py-8">
				<SearchInput width="10rem" variant="underlined" />
				<div className="flex gap-8 p-2 overflow-x-scroll" style={{ width: '90vw' }}>
					{loaderData?.rules.map((rule: CatalogRule) => <PolicyCard key={rule.metadata.alertName} rule={rule} />)}
				</div>
			</div>
		</div>
	);
};

export default __LayoutPolicies;
