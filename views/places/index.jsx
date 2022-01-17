const React = require('react')
const Def = require('../default')

function index (data) {
  console.log(data)
  let placesFormatted = data.places.map((place) => {
    return (
      <div key="places" className="col-sm-6">
        <h2>
          <a href={`/places/${place.id}`}>
            {place.name}
          </a>
        </h2>
        <p className="text-center">
          {place.cuisines}
        </p>
        <img src={place.pic} alt={place.name} width="400" height="400"/>
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    )
  })
    return (
      <Def>
          <main>
              <h1>PLACES To Rave and Rant About</h1>
              <div key="return" className='row'>
                {placesFormatted}
              </div>
          </main>
      </Def>
    )
  }

module.exports = index
