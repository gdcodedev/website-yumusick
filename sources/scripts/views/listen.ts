import data from '../data/default.json';
import scope from '../scope';
import Base from './baseView';

scope.views.Listen = Base.extend({
    template: require('templates/pages/listen.hbs'),
    name: 'listen',
    templateContext: {
        musics: data.musics
    }
});

export default scope.views.Listen;
