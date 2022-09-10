const urlUsers = 'https://jsonplaceholder.typicode.com/users';

function getUsersList() {
    return new Promise ((resolve, reject) => {
        fetch(urlUsers) 
            .then(response => {
                if(response.ok){
                    resolve(response.json())}
                })
            .catch(error => reject(error))
    })
} 


function printUser(users) {
    console.log(users)
    users.forEach(({id, name}) => {
        console.log(id, name)
    });
}

document.addEventListener('DOMContentLoaded', () => {
    getUsersList()
        .then(users => printUser(users))
        .catch(error => new Error(error))
})