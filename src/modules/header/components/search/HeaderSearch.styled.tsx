import { ButtonBase, styled, TextField } from '@mui/material';

export const StyledHeaderHomeButton = styled(ButtonBase)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	width: '48px',
	height: '48px',
	borderRadius: '50%',
	padding: '7px',
	backgroundColor: theme.palette.hover.main,

	'& img': {
		borderRadius: '50%',
		objectFit: 'cover',
		width: '100%',
		height: '100%',
		apsectRatio: 1,
	},

	'& svg': {
		fontSize: '1.9rem',
	},

	':hover': {
		transform: 'scale(1.06)',
	},
}));

StyledHeaderHomeButton.defaultProps = { disableRipple: true };

export const StyledHeaderSearchInput = styled(TextField)(({ theme }) => ({
	width: '100%',
	maxWidth: '480px',

	'& .MuiInputBase-root': {
		borderRadius: '30px',
		backgroundColor: theme.palette.hover.main,

		'&.Mui-focused, &:hover': {
			backgroundColor: theme.palette.hover.track,

			'& .MuiOutlinedInput-notchedOutline': {
				borderColor: theme.palette.secondary.main,
			},
			'& .MuiInputAdornment-positionStart svg': {
				color: theme.palette.common.white,
			},
		},

		'& input': {
			height: '1rem',
		},
	},

	'& .MuiOutlinedInput-notchedOutline': {
		borderWidth: '1px !important',
		borderColor: theme.palette.hover.main,
	},

	'& .MuiInputAdornment-root:hover': {
		cursor: 'pointer',
	},
}));
