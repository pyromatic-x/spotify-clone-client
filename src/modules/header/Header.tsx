import { Grid } from '@mui/material';
import { HeaderNavigation } from './components/navigation/HeaderNavigation';
import { HeaderSearch } from './components/search/HeaderSearch';
import { HeaderControls } from './components/controls/HeaderControls';

export const Header = () => (
	<Grid
		container
		component='header'
		alignItems='center'
		justifyContent='space-between'
		gridArea='header'
		height='60px'
		padding='0 8px'
		wrap='nowrap'
	>
		<HeaderNavigation />
		<HeaderSearch />
		<HeaderControls />
	</Grid>
);
