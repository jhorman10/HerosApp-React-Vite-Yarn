import { useMemo } from 'react';
import { getHeroByPublisher } from '../../helpers';
import { HeroCard } from '../HeroCard';

export const HeroList = ({ publisher }) => {
  const heros = useMemo(() => getHeroByPublisher(publisher), [publisher]);
  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {heros.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
