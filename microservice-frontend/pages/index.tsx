import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import axios from 'axios';
import clsx from 'clsx';

export default function Index() {
	const { isLoading, error, data } = useQuery(['healthCheck'], async() => {
		const { data } = await axios.get('http://localhost:3003/healthcheck');

		return { data }
	}, {
		initialData: () => ({})
	})

	const pointConnectionClassname = useMemo(() => {
		if(isLoading) return 'bg-yellow-500';
		if(error) return 'bg-red-500';

		return 'bg-green-500';

	}, [isLoading, error]);

	return (
		<main className="container mx-auto py-8">
			<h1 className="my-4">Hello world!</h1>
			<div className="flex items-center">
				<div className={clsx('w-4', 'h-4', 'rounded-full', pointConnectionClassname)} />
				<p className="ml-4 text-xs text-gray-500">
					{isLoading && <p>Loading...</p>}
					{error && <p>Some error!</p>}
					{!isLoading && !error && <p>{JSON.stringify(data)}</p>}
				</p>
			</div>
		</main>
	)
}