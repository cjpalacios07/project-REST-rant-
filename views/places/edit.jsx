const React = require('react')
const Def = require('../default')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
            <form method="POST" action={`/places/${data.index}?_method=PUT`}>
<<<<<<< HEAD
                <div className="row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" id="name" name="name" value={data.place.name} required />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" id="pic" name="pic" value={data.place.pic} />
                    </div>
=======
                <div className="form-group">
                    <label htmlFor="name">Place Name</label>
                    <input className="form-control" id="name" name="name" value={data.place.name} required />
                </div>
                <div className="form-group">
                    <label htmlFor="pic">Place Picture</label>
                    <input className="form-control" id="pic" name="pic" value={data.place.pic}/>
>>>>>>> a4058469a450cd0028c0d8ff97faff975a3fda9f
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input className="form-control" id="city" name="city" value={data.place.city}/>
                </div>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input className="form-control" id="state" name="state" value={data.place.state}/>
                </div>
                <div className="form-group">
                    <label htmlFor="cuisines">Cuisines</label>
                    <input className="form-control" id="cuisines" name="cuisines" value={data.place.cuisines} required />
                </div>
<<<<<<< HEAD
                <div className="form-group">
                        <label htmlFor="founded">Year Founded</label>
                        <input className="form-control" name="founded" id="founded" value={data.place.founded} />
                    </div>
                <input className="btn btn-primary" type="submit" value="Update Place" />
=======
                <input className="btn btn-primary" type="submit" value="Edit Place" />
>>>>>>> a4058469a450cd0028c0d8ff97faff975a3fda9f
            </form>
          </main>
        </Def>
    )
}

module.exports = edit_form