const React = require('react')
const Def = require('../default')

<<<<<<< HEAD

function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div key="places" className="col-sm-6">
          <h2>
            <a href={`/places/${place.id}`} >
              {place.name}
            </a>
          </h2>
          <p className="text-center">
            {place.cuisines}
          </p>
          <img id="image" src={place.pic} alt={place.name} />
          <p className="text-center">
            Located in {place.city}, {place.state}
          </p>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>Places to Rant or Rave About</h1>
              <div key="new" className="row">
=======
function places (data) {
  console.log(data)
  let placesFormatted = data.places.map((place) => {
    return (
      <div className="col-sm-6">
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
              <h1>PLACES INDEX PAGE</h1>
              <div className='row'>
>>>>>>> a4058469a450cd0028c0d8ff97faff975a3fda9f
                {placesFormatted}
              </div>
          </main>
      </Def>
    )
  }

module.exports = places