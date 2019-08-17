/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/aaronverdine')
  .then(response => {
    console.log(response)
  })
  .catch(err => {
    console.log(err)
  })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach( item => {
  axios.get(`https://api.github.com/users/${followersArray[]}`)
    .then( response => {
      cardCreator(response.data)
    })
    .catch( err => {
      console.log(err)
    })
})


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function cardCreator(userObj) {
  const newDiv = document.createElement('div')
  newDiv.classList.add('card')

  const userImg = document.createElement('img') // Ask how to create `src`
  userImg.src = userObj.avatar_url
  newDiv.appendChild(userImg)

  const newDiv2 = document.createElement('div')
  newDiv2.classList.add('card-info')
  newDiv.appendChild(newDiv2)

  const h3 = document.createElement('h3')
  h3.classList.add('name')
  h3.textContent = userObj.name
  newDiv2.appendChild(h3)

  const userName = document.createElement('p')
  userName.classList.add('username')
  userName.textContent = userObj.login
  newDiv2.appendChild(userName)

  const userLocation = document.createElement('p')
  userLocation.textContent = userObj.location
  newDiv2.appendChild(userLocation)

  const userProfile = document.createElement('p')
  userProfile.textContent = 'Profile: '
  newDiv2.appendChild(userProfile)

  const userURL = document.createElement('a') // ask how to create `href`
  userURL.textContent = userObj.html_url
  userURL.href = userObj.html_url
  userProfile.appendChild(userURL) // make sure you're appending it to the right parent

  const followers = document.createElement('p')
  followers.textContent = userObj.followers
  newDiv2.appendChild(followers)

  const following = document.createElement('p')
  following.textContent = userObj.following
  newDiv2.appendChild(following)

  const userBio = document.createElement('p')
  userBio.textContent = userObj.bio
  newDiv2.appendChild(userBio)

const container = document.querySelector('.cards')
container.appendChild(newDiv)
}

axios.get('https://api.github.com/users/aaronverdine')
    .then(response => {
        cardCreator(response.data)
    })
    .catch(err => {
        console.log(err)
    })

/* 
List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
