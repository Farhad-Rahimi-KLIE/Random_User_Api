// 8933-LPT8-34FZ-Y0B6
let url =  'https://randomuser.me/api';
Avtar = document.getElementById('avtar');
Fullname = document.getElementById('fullname');
UserName = document.getElementById('username');
Email = document.getElementById('email');
City = document.getElementById('city');
let Btn = document.getElementById('btn');
let User = document.getElementById('user-profile')
Btn.addEventListener('click',()=>{
    fetch(url)
        .then(parseJSON)
        .then(updateprofile)
        .catch(printError)
});
function parseJSON(res) {
    return res.json();
}
function updateprofile(profile) {
    Avtar.src = profile.results[0].picture.medium;
    Fullname.innerHTML = profile.results[0].name.first + " " + profile.results[0].name.last;
    UserName.innerHTML = profile.results[0].login.username;
    Email.innerHTML = profile.results[0].email;
    City.innerHTML = profile.results[0].location.city;
    return 1
}
function printError(error) {
    console.log(error)
}