import { heros } from '../data/heros';

export const getHeroByPublisher = (publisher) => {
  const validPublishers = ['DC Comics', 'Marvel Comics'];
  if (!validPublishers)
    throw new Error(`${publisher} is not a valid publisher.`);

  return heros.filter((hero) => hero.publisher === publisher);
};
