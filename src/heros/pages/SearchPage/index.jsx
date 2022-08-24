import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../../hooks';
import { HeroCard } from '../../components';
import { getHeroByName } from '../../helpers';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  const heros = getHeroByName(q);

  const { searchHero, onInputChange } = useForm({
    searchHero: q, //inicializa el valor con '' cuando inicia el componente
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchHero}`);
  };

  const showAlertMessage = () => {
    if (q === '') {
      return <div className="alert alert-primary">Search a hero</div>;
    } else if (heros.length === 0) {
      return (
        <div className="alert alert-danger">
          No hero with <b>{q}</b>
        </div>
      );
    }
  };

  return (
    <>
      <h1>SearchPage</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchHero"
              autoComplete="off"
              value={searchHero}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {showAlertMessage()}
          {heros.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
