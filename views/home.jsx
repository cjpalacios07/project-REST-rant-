const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>REST-Rant</h1>
              <div>
                <img src ="/images/rezel-apacionado-nLz2z-JvCe4-unsplash.jpeg" alt="blueberry oatmeal"/>
                <div>
                Photo by <a href="https://unsplash.com/@rezelkealoha?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rezel Apacionado</a> on <a href="https://unsplash.com/photos/MsTOg6rhRVk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
              </div>  
              <a href="/places">
              <button className="btn-primary">Places Page</button>
              </a>
          </main>
      </Def>
    )
  }

module.exports = home