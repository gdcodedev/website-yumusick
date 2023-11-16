import data from '../data/default.json';
import scope from '../scope';
import Base from './baseView';

scope.views.Store = Base.extend({
    template: require('templates/pages/store.hbs'),
    name: 'store',
    templateContext: {
        products: data.products
    }
});

export default scope.views.Store;
