const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <div className="row">
              <div className="col-sm-6"></div>
              <h3>
              Located in {data.place.city}, {data.place.state}
              </h3>
            <h1>{ data.place.name }</h1>
            <img src={data.place.pic} alt={data.place.name} width="400" height="400"/>
            <h2>Ratings</h2>
            <p>currently unrated</p>
            
            <h2>Comments</h2>
            <p>No comments yet!</p>
            <h3>
              {data.place.showEstablished()}
            </h3>
            <h4>
              Serving {data.place.cuisines}
            </h4>
            </div>
            <div>
                <a href={`/places/${data.index}/edit`} className="btn btn-warning"> 
                    Edit
                </a>{` `}       
                <form method="POST" action={`/places/${data.index}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>    
            </div>
            <hr />
            
            
          </main>
        </Def>
    )
}

module.exports = show