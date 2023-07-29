//const axios = require('axios/dist/browser/axios.cjs'); 

geocode()
function geocode(){
    var location1="dayanad sagar college of enginnering"
    var location2="the hub, safina plaza"
    axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
        params: {
            address: location1,
            key : 'AIzaSyBbxSPOwU2XDitmol2L2yEWu3fhXq11eH4'
        }
    }).then(function(response){

        console.log(response)
        
    }).catch(function(error){
        console.log(error)
    })
    
    

    
}
/*
axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
    params:{
        address: location2,
        key:'AIzaSyBbxSPOwU2XDitmol2L2yEWu3fhXq11eH4'
    }
})
*/