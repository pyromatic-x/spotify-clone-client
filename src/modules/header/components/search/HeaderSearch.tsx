import { Box, Grid, IconButton, InputAdornment, Tooltip } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import {
	HomeOutlined as HomeOutlinedIcon,
	Home as HomeFilledIcon,
	SpaceDashboardOutlined as BrowseOutlinedIcon,
	SpaceDashboard as BrowseIcon,
	Search as SearchIcon,
	Close as ClearIcon,
} from '@mui/icons-material/';
import { useRef, useState } from 'react';
import {
	StyledHeaderHomeButton,
	StyledHeaderSearchInput,
} from './HeaderSearch.styled';

export const HeaderSearch = () => {
	const inputRef = useRef<HTMLInputElement | null>(null);

	const [search, setSearch] = useState('');

	const location = useLocation();
	const navigate = useNavigate();

	const handleSearchIconClick = () => {
		if (inputRef.current) inputRef.current.focus();
	};

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	};

	return (
		<Grid
			container
			alignItems='center'
			justifyContent='center'
			width='100%'
			wrap='nowrap'
			gap={1}
		>
			<Tooltip title='Home'>
				<StyledHeaderHomeButton onClick={() => navigate('/')}>
					{location.pathname === '/' ? (
						<HomeFilledIcon />
					) : (
						<HomeOutlinedIcon color='secondary' />
					)}
				</StyledHeaderHomeButton>
			</Tooltip>
			<StyledHeaderSearchInput
				fullWidth
				inputRef={inputRef}
				placeholder='What do you want to play?'
				value={search}
				onChange={handleSearch}
				InputProps={{
					startAdornment: (
						<InputAdornment
							position='start'
							onClick={handleSearchIconClick}
						>
							<SearchIcon color='secondary' />
						</InputAdornment>
					),
					endAdornment: !search ? (
						<Grid
							container
							alignItems='center'
							width='max-content'
							wrap='nowrap'
							ml={1}
						>
							<Box
								width='1px'
								height='24px'
								bgcolor='secondary.light'
							/>
							<InputAdornment position='end'>
								{location.pathname === '/browse' ? (
									<BrowseIcon />
								) : (
									<BrowseOutlinedIcon color='secondary' />
								)}
							</InputAdornment>
						</Grid>
					) : (
						<Tooltip title='Clear search field'>
							<InputAdornment position='end'>
								<IconButton
									variant='scalable'
									onClick={() => setSearch('')}
								>
									<ClearIcon />
								</IconButton>
							</InputAdornment>
						</Tooltip>
					),
				}}
			/>
		</Grid>
	);
};
