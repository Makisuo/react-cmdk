import ListItem, { ButtonProps, LinkProps } from './ListItem'
import React, { useContext } from 'react'
import { SearchContext } from '../lib/context'
import { Search as SearchIcon } from '@mui/icons-material'
interface FreeSearchActionProps extends Omit<ButtonProps & LinkProps, 'index'> {
	index?: number
	label?: string
}

export default function FreeSearchAction({ label = 'Search for', ...props }: FreeSearchActionProps) {
	const { search } = useContext(SearchContext)

	return (
		<ListItem
			index={0}
			icon={<SearchIcon className='w-5 h-5 text-gray-500'></SearchIcon>}
			showType={false}
			{...props}
		>
			<span className='max-w-md truncate dark:text-white'>
				{label} <span className='font-semibold'>"{search}"</span>
			</span>
		</ListItem>
	)
}
