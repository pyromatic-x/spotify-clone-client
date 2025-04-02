import { createRootRoute, Outlet } from '@tanstack/react-router';
import { AppContainer } from '@ui/common/common.styled';
import { Header } from '@ui/index';

export const Route = createRootRoute({
	component: () => {
		return (
			<AppContainer>
				<Header />
				{/* <Library />
				<MainContainer>
          <Outlet />
        </MainContainer>
				<RightSection />
				<AudioBar /> */}
			</AppContainer>
		);
	},
});
