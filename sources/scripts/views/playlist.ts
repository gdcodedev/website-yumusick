import scope from '../scope';
import Base from './baseView';

scope.views.Playlist = Base.extend({
    template: require('templates/pages/playlist.hbs'),
    name: 'playlist'
});

export default scope.views.Playlist;
