import AppRouter from 'marionette.approuter/lib/marionette.approuter.min';
import scope from '../scope';

import Home from '../views/home';
import Links from '../views/links';
import Listen from '../views/listen';
import Playlist from '../views/playlist';
import Store from '../views/store';

const AppController = {
    index: () => scope.app.go(new Home()),
    listen: () => scope.app.go(new Listen()),
    links: () => scope.app.go(new Links()),
    store: () => scope.app.go(new Store()),
    playlist: () => scope.app.go(new Playlist())
};

scope.routes.Main = AppRouter.extend({
    controller: AppController,
    appRoutes: {
        '(/)(index.html)': 'index',
        '(/)listen(/)(index.html)': 'listen',
        '(/)links(/)(index.html)': 'links',
        '(/)store(/)(index.html)': 'store',
        '(/)playlist(/)(index.html)': 'playlist'
    }
});

export default scope.routes.Main;
