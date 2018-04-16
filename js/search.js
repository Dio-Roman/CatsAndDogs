"use strict";

class Api {
    constructor () {
        this.baseURL = "https://jsonplaceholder.typicode.com";
    }
    _get (path) {
        return fetch (`${this.baseURL}${path}`, {
            method: "get"
        })
    }
    _post (path) {
        return fetch (`${this.baseURL}${path}`, {
            // mode: "no-cors",
            method: "post",
            body: JSON.stringify({
                
                body: document.querySelector("#mail").value,
                userId: 1
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
            })
        
    }
    getPosts () {
        return this._get("/posts")
        .then (data => {
            return data.json()
        })
        .catch (err=>{
            console.error(err);
            return Promise.resolve([])
        })
    }
    sendPost () {
        return this. _post("/posts")
        .then(response => response.json())
        .then(json => console.log(json))
        .catch (err=>{
            console.error(err);
            return Promise.resolve([])
        })
    }
}

const createUl = ()=> document.createElement("ul")
const createLi = ()=> document.createElement("li")

const api = new Api ();

document.querySelector("#search").addEventListener("click", ()=>{
    api.getPosts()
    .then (data=> {
        const ul = createUl ()
        data.map(el=> {
            const li = createLi ()
            li.textContent = el.title
             ul.appendChild(li)
        })

        const head = document.createElement('h1');
        head.innerHTML = "The Missing Pets:";
        document.querySelector("#result").appendChild(head);
        document.querySelector("#result").appendChild(ul);
        document.querySelector("#resultBack").style.cssText ="display: block";
    })
    
});
// убрать всё
document.querySelector("#resultBack").addEventListener("click",()=>{
    document.querySelector("#resultBack").style.cssText ="display: none";
    document.querySelector("#result").innerHTML="";
})

document.querySelector("#send").addEventListener("click", ()=>{
    // console.log(JSON.stringify(document.querySelector("#search").value));
    api.sendPost ();
    document.querySelector('#subscribe').style.display= "none";
            document.querySelector('#subSpan').style.display= "block";

});

