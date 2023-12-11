import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Sidebar from '/components/sidebar/sidebar';

export default function Layout({ contentList, children }) {
	return (
		<>
			<div className='bg-black'>
				<div className='min-h-screen bg-black max-w-[1400px] mx-auto'>
					<Popover className='relative bg-black border-b border-gray-700 '>
						<div
							className='absolute inset-0 shadow z-30 pointer-events-none'
							aria-hidden='true'
						/>
						<div className='relative z-20'>
							<div className=' mx-auto flex justify-between items-center py-5 sm:py-4 px-5 md:px-0 md:justify-start md:space-x-10'>
								<div>
									<a href='/' className='flex items-center justify-start md:mx-8'>
										<img
											src='/images/logo.png'
											alt='Ground Zero'
											width='30'
											height='30'
											className='img-responsive mr-3'
										/>
										<h1 className='logo-text text-white font-heading font-extrabold text-3xl bg-clip-text'>
											Ground Zero
										</h1>
									</a>
								</div>
								<div className='hidden md:flex-1 md:flex md:items-center md:justify-end'>
									<div className='flex items-center ml-8 mx-8'>
										<a
											href='https://github.com/superteamdao/ground-zero'
											target='_blank'
											className='text-base font-medium text-secondary hover:text-accent font-heading'
											rel='noreferrer'>
											Contribute to Docs
										</a>
										<a
											href='https://superteam.fun/'
											target='_blank'
											className='ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-button  font-medium rounded-full shadow-sm text-black bg-secondary hover:bg-accent focus:outline-none transition-transform duration-200 ease-in hover:-translate-y-0.5'
											rel='noreferrer'>
											Join SuperteamDAO
										</a>
									</div>
								</div>
								<div className='-mr-2 -my-2 md:hidden'>
									<Popover.Button className='bg-black border border-gray-400 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary'>
										<span className='sr-only'>Open menu</span>
										<MenuIcon className='h-6 w-6' aria-hidden='true' />
									</Popover.Button>
								</div>
							</div>
						</div>
						<Transition
							as={Fragment}
							enter='duration-200 ease-out'
							enterFrom='opacity-0 scale-95'
							enterTo='opacity-100 scale-100'
							leave='duration-100 ease-in'
							leaveFrom='opacity-100 scale-100'
							leaveTo='opacity-0 scale-95'>
							<Popover.Panel
								focus
								className='absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
								<div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-black border-b border-gray-700 divide-y-2 divide-gray-50'>
									<div className='pt-5 pb-6 px-5 sm:pb-8'>
										<div className='flex items-center justify-between'>
											<div>
												<a
													href='/'
													className='flex items-center justify-start'>
													<img
														src='/images/logo.png'
														alt='Ground Zero'
														width='30'
														height='30'
														className='img-responsive mr-3'
													/>
													<h1 className='logo-text text-white font-heading font-extrabold text-3xl bg-clip-text'>
														Ground Zero
													</h1>
												</a>
											</div>
											<div className='-mr-2'>
												<Popover.Button className='bg-black border border-gray-400 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
													<span className='sr-only'>Close menu</span>
													<XIcon className='h-6 w-6' aria-hidden='true' />
												</Popover.Button>
											</div>
										</div>
										<div className='top-6 divide-y divide-gray-300'>
											<Sidebar contentList={contentList} viewType='nav' />
										</div>
									</div>
								</div>
							</Popover.Panel>
						</Transition>
					</Popover>
					<div>
						<div className='md:grid md:grid-cols-12'>
							<div className='hidden md:block md:col-span-3 bg-black border-r border-gray-700'>
								<nav
									aria-label='Sidebar'
									className='sticky top-6 divide-y divide-gray-300'>
									<Sidebar contentList={contentList} viewType='main' />
								</nav>
							</div>
							<main className='sm:px-6 md:px-8 col-span-12 md:col-span-9 bg-black min-h-screen'>
								{children}
							</main>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
