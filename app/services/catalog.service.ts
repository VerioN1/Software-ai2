import type { AxiosError } from 'axios';
import axios from 'axios';

import { DefaultConfig } from '~/config';
import { catalogMock } from '../../mock';
import type { CatalogItem } from '~/types/catalog.type';

const getCatalogOptions = async () => {
	try {
		const response = await axios.get(`${DefaultConfig.commonAPI}/catalog/`, {
			timeout: 19_000
		});

		return response.data;
	} catch (error) {
		const axiosError = error as AxiosError;
		console.log(axiosError.response?.data);
		console.log(axiosError.response?.status);
		console.log(axiosError.response?.headers);
		return null;
	}
};

const getCatalogForm = async (id: string): Promise<CatalogItem> => {
	try {
		const response = await axios.get(`${DefaultConfig.commonAPI}/catalog/`, {
			params: {
				id
			},
			timeout: 1_000
		});

		return response.data[0];
	} catch (error) {
		// const axiosError = error as AxiosError;
		return catalogMock.currentCatalog;
	}
};

export default {
	getCatalogForm,
	getCatalogOptions
};
