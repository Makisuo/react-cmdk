import ListItem, { ButtonProps, LinkProps } from './ListItem'
import React, { useContext } from 'react'
import { SearchContext } from '../lib/context'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

interface FreeSearchActionProps extends Omit<ButtonProps & LinkProps, 'index'> {
	index?: number
	label?: string
}

export default function FreeSearchAction({ label = 'Search for', ...props }: FreeSearchActionProps) {
	const { search } = useContext(SearchContext)

	return (
		<ListItem
			index={0}
			icon={<MagnifyingGlassIcon className='w-5 h-5 text-gray-500'></MagnifyingGlassIcon>}
			showType={false}
			{...props}
		>
			<span className='max-w-md truncate dark:text-white'>
				{label} <span className='font-semibold'>"{search}"</span>
			</span>
		</ListItem>
	)
}
