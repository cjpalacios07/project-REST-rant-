const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <img src={data.place.pic} alt={data.place.name} width="400" height="400"/>
            <h2>Ratings</h2>
            <p>currently unrated</p>
            <h2>Comments</h2>
            <p>No comments yet!</p>
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