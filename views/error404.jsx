const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <div>
              <img id="image" src="/images/james-barker-v3-zcCWMjgM-unsplash.jpeg" alt="dog"/>
                <div>
                Photo by <a href="https://unsplash.com/@barkernotbaker?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">James Barker</a> on <a href="https://unsplash.com/s/photos/dogs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
              </div>
              <p>Oops, sorry, we can't find this page!</p>
          </main>
      </Def>
    )
  }

module.exports = error404