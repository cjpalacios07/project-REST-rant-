const React = require('react');
const Default = require('../Default');

function Show({place}) {
    let comments = (
        <h3 className="inactive">No comments yet!</h3>
    )

    if (place.comments.length) {
        comments = place.comments.map(comment => {
            return (
                <div className="border  col-sm-4">
                    <h2 className="rant">{comment.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
                    <h4>{comment.content}</h4>
                    <h3><strong>- {comment.author}</strong></h3>
                    <h4>Rating: {comment.stars}</h4>
                </div>
            )
        })
    }

<<<<<<< HEAD
    return (
        <Default>
            <main>
                <div className="row place-info">
                    <div className="col-sm-6">
                        <img id="image" src={place.pic} className="img-fluid" alt={place.name}></img>
                        <h3 className="text-left">Located in {place.city}, {place.state}</h3>
                    </div>
                    <div className="col-sm-6">
                        <h1>{place.name}</h1>
                        <h2>Rating</h2>
                        <p>Not Rated</p>
                        <h2>Description</h2>
                        <h3>{place.showEstablished()}</h3>
                        <h4>Serving {place.cuisines}</h4>
                        <span>
                            <a href={`/places/${place.id}/edit`} className="btn btn-warning">Edit</a>  
                            
                            <form method="POST" action={`/places/${place.id}?_method=DELETE`}> 
                                <button type="submit" className="btn btn-danger">Delete</button>
                            </form>
                        </span>     
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div className="place-rant">
                    <h3>Comments</h3>
                    <div className="row">
                        {comments}
                    </div>
                    
                </div>
                
                <h1>Got Your Own Rant or Rave?</h1>
                <form method="POST" action={`/places/${place.id}/comment`}>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="author">Author</label>
                            <input className="form-control" type="text" id="author" name="author" required />
                        </div>
                        <div className="form-group col-sm-3">
                            <label className="form-label" htmlFor="stars">Star Rating</label>
                            <input className="form-range" type="range" id="stars" name="stars" step="0.5" min="1" max="5"/>
                        </div>
                        <div className="form-group col-sm-3">
                            <input type="radio" id="rant" name="rant" value="true"/>
                            <label htmlFor="rant">Rant</label><br/>
                            <input type="radio" id="rave" name="rant" value="false" defaultChecked/>
                            <label htmlFor="rave">Rave</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-12">
                            <label htmlFor="content">Content</label>
                            <textarea className="form-control" id= "content" name="content"></textarea>
                        </div>
                    </div>    
                    <input className="btn btn-primary" type="submit" value="Add Comment" />
                </form>
            </main>
        </Default>
=======
function show (data) {
  let comments = (
    <h3 className='inactive'>
      No Comments yet!
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
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
            <div className="row">
              <h2>Comments</h2>
                {comments}
            </div>
            <h3>
              {data.place.showEstablished()}
            </h3>
            <h4>
              Serving {data.place.cuisines}
            </h4>
            </div>
            <div>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                    Edit
                </a>{` `}       
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>    
            </div>
            
          </main>
        </Def>
>>>>>>> 8fe84074a363ab07fd7318383552aef2ed336f2d
    )
}

module.exports = Show