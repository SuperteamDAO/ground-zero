import { Disclosure, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Sidebar({ contentList, viewType }) {
	const router = useRouter();
	const {
		asPath: url,
		query: { path },
	} = router;
	const sortedContent = contentList
		?.filter((page) => !page.hide)
		.sort((a, b) => a.order - b.order);
	return (
		<div className={`${viewType === 'nav' ? 'pl-0' : 'pl-8'} pr-6 py-6`}>
			{sortedContent?.map((page) => (
				<Disclosure
					as='div'
					defaultOpen={path === page.url}
					key={page.name}
					className='space-y-1'>
					{({ open }) => (
						<>
							<Disclosure.Button
								className={classNames(
									open ? 'text-secondary' : 'text-white',
									'hover:text-secondary cursor-pointer w-full flex items-center justify-between pt-8 text-xl font-medium font-heading'
								)}>
								<div className='flex'>
									<span className='w-10'>{page.logo}</span>
									<p>{page.name}</p>
								</div>
								<div>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className={classNames(
											open ? 'rotate-90' : 'rotate-0',
											'h-5 w-5 transition-transform ease-in duration-150'
										)}
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M9 5l7 7-7 7'
										/>
									</svg>
								</div>
							</Disclosure.Button>
							<Transition
								enter='transition duration-100 ease-out'
								enterFrom='transform scale-95 opacity-0'
								enterTo='transform scale-100 opacity-100'
								leave='transition duration-75 ease-out'
								leaveFrom='transform scale-100 opacity-100'
								leaveTo='transform scale-95 opacity-0'>
								<Disclosure.Panel className='pl-6 border-l border-accent mb-6'>
									{page?.pages?.map((subPage) => {
										const subPath = `/${subPage?.path?.replace('.md', '')}`;
										return (
											<a
												key={subPage?.name}
												href={subPath}
												className={classNames(
													subPath === url
														? 'text-secondary'
														: 'text-white',
													'hover:text-secondary cursor-pointer flex items-center pt-6 text-sm font-light font-heading'
												)}>
												<p className='w-8'>{subPage?.logo}</p>
												<p className='min-width-0 basis-0 grow'>
													{subPage?.name}
												</p>
											</a>
										);
									})}
								</Disclosure.Panel>
							</Transition>
						</>
					)}
				</Disclosure>
			))}
		</div>
	);
}
