import data from '../data/default.json';
import scope from '../scope';
import Base from './baseView';

scope.views.Links = Base.extend({
    template: require('templates/pages/links.hbs'),
    name: 'links',
    templateContext: {
        links: data.links
    }
});

export default scope.views.Links;
