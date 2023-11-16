import scope from '../scope';
import Base from './baseView';

scope.views.Intro = Base.extend({
    template: require('templates/pages/intro.hbs'),
    name: 'intro'
});

export default scope.views.Intro;
