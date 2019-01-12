import lizardFixture from './lizardFixture';
import fishFixture from './fishFixture';
import formBuilder from '../formBuilder';

export default {
  lizard: {
    fixture: lizardFixture,
    form: formBuilder(lizardFixture),
    screenName: 'Lizard',
    route: '/lizard',
    id: 'lizard',
  },
  fish: {
    fixture: fishFixture,
    form: formBuilder(fishFixture),
    screenName: 'Fish',
    route: '/fish',
    id: 'fish',
  },
};
