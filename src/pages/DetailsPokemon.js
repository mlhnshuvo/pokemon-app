import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allPokemon } from "../store/actions/pokemonAction";
import { useParams, Link } from "react-router-dom";

const DetailsPokemon = () => {
  const pokemon = useSelector((state) => state.pokemonReducer);
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(allPokemon());
  }, [dispatch]);

  return (
    <div>
      {pokemon.finalEachPokemon.map((el) => {
        return (
          // eslint-disable-next-line eqeqeq
          el.id == id && (
            <div className="pokemon__layout">
              <div className="pokemon__card">
                <img
                  src={el.sprites.other.dream_world.front_default}
                  alt=""
                  className="pokemon__card-img"
                />
                <h2 className="pokemon__card-name">Name: {el.name}</h2>
                <div className="pokemon__card-hw">
                  <h4>Height: {el.height}</h4>
                  <h4>Weight: {el.weight}</h4>
                </div>
                <div className="pokemon__card-abilities">
                  <h3>Abilities</h3>
                  <hr />
                  <div className="pokemon__card-abilities-layout">
                    {el.abilities.map((li) => (
                      <div className="pokemon__card-abilities-li">
                        <p>Name: {li.ability.name}</p>
                        <p>Hidden: {li.is_hidden ? "True" : "False"}</p>
                        <p>Slot: {li.slot}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h3>Other detilas</h3>
                    <hr />
                    <p>Base experience : {el.base_experience}</p>
                    <p>Base experience : {el.is_default ? "True" : "False"}</p>
                    <p>Order : {el.order}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        );
      })}

      <Link to="/">
        <button className="pokemon__back-btn">Back to Home</button>
      </Link>
    </div>
  );
};

export default DetailsPokemon;
