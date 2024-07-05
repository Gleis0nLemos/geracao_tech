export function Main (props) {
  const { list } = props
  const pokeList = [ ...list]

  return (
    <main className="cards-container">
        { pokeList?.map((pokemon, index) => (
          <div key={index} className='card'>
            <img src={pokemon.sprites.front_default} alt="" />
            <p>{pokemon.forms[0].name}</p>
            <div className="badge-container">
              {pokemon.types.map(({type: { name } }, index) => (
                <p key={index} className={`badge ${name}`}>{name}</p>
              ))}
            </div>
          </div>
        )) }
      </main>
  )
}