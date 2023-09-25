import { json, LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import React from 'react';
import { PolicyCard } from '~/features';
import { useDisclosure } from '~/hooks';
import SearchInput from '~/lib/Inputs/SearchInput/SearchInput';
import { catalogService } from '~/services';
import { CatalogItem, CatalogRule } from '~/types';

export const loader: LoaderFunction = async ({ params }) => {
	const catalogForm = await catalogService.getCatalogForm(params.catalogId as string);

	return json(catalogForm);
};

const __layoutPoliciesNode = () => {
	const loaderData = useLoaderData<typeof loader>();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [currentRule, setCurrentRule] = React.useState<React.ReactNode>(null);

	return (
		<div className="flex py-8 flex-col w-max gap-12 ">
			<SearchInput width="10rem" variant="underlined" />
			{loaderData?.map((item: CatalogItem) => (
				<section key={item._id} className="flex flex-col ">
					<h1 className="text-4xl font-bold">{item.name}</h1>
					<div className="flex gap-8 p-2 overflow-x-scroll" style={{ width: '90vw' }}>
						{item.rules.map((rule) => <PolicyCard key={rule.metadata.alertName} rule={rule} />)}
					</div>
				</section>
			))}
		</div>
	);
};

export default __layoutPoliciesNode;
