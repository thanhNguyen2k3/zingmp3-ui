import Home from '~/pages/Home';
import MyMusic from '~/pages/MyMusic';
import Following from '~/pages/Following';

//Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/mymusic', component: MyMusic },
    { path: '/following', component: Following },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
