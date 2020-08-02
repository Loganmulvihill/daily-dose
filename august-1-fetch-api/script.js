fetch('https://reqres.in/api/users/', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'User 1'
      })
})
  .then( res => {

    return res.json();
    //Below is an example of an if else conditional you can implement to handle a 404 error

    // if(res.ok) {
    //   console.log('success')
    // } else {
    //   console.log("Not Successful")
    // }
  })
  .then(data => console.log(data))
  .catch(error => console.log('error'))
