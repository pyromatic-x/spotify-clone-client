import { Grid, IconButton, SvgIconTypeMap, Tooltip } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import {
	Notifications as NewIcon,
	Groups as FriendsIcon,
} from '@mui/icons-material/';

const Button = ({
	title,
	Icon,
}: {
	title: string;
	Icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>>;
}) => (
	<Tooltip title={title}>
		<IconButton variant='scalable' sx={{ '& svg': { fontSize: '1.2rem' } }}>
			<Icon />
		</IconButton>
	</Tooltip>
);

export const HeaderControls = () => {
	// const user = useUnit($USER);

	return (
		<Grid
			container
			wrap='nowrap'
			width='max-content'
			alignItems='center'
			gap={1.3}
		>
			<Button title="What's New" Icon={NewIcon} />
			<Button title='Friend Activity' Icon={FriendsIcon} />
		</Grid>
	);
};
