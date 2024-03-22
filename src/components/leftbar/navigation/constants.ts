import { Home, HomeOutlined, SearchOutlined, YoutubeSearchedFor } from '@mui/icons-material';

export const items = [
  {
    title: 'Home',
    path: '/',
    activePaths: ['/', '/home/music', '/home/podcasts'],
    Icon: HomeOutlined,
    IconActive: Home,
  },
  {
    title: 'Search',
    path: '/search',
    activePaths: ['/search'],
    Icon: SearchOutlined,
    IconActive: YoutubeSearchedFor,
  },
];
