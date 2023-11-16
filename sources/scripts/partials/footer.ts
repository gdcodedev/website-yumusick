import scope from '../scope';
import Base from './basePartial';

scope.partials.Footer = Base.extend({
    name: 'footer',
    template: require('templates/components/footer.hbs')
});

export default scope.partials.Footer;
