var catsArray = [{
    name: "Kissa",
    age: 7,
    color: "Black & Orange",
    fluffLevel: 5,
    mine: null,
    picture: "img/kissa.jpg"
}, {
    name: "Pico",
    age: 10,
    color: "Orange & Cream",
    fluffLevel: 1,
    mine: false,
    picture: "img/pico.jpg"
}, {
    name: "Bear",
    age: 12,
    color: "Black",
    fluffLevel: 4,
    mine: false,
    picture: "img/bear.jpg"
},{
    name: "Olli",
    age: "10 Weeks",
    color: "White & Orange",
    fluffLevel: 2,
    mine: true,
    picture: "img/olli.jpg"
}, {
    name: "Osmo",
    age: "10 Weeks",
    color: "White & Orange",
    fluffLevel: 3,
    mine: true,
    picture: "img/osmo.jpg"
}]

var vueApp = new Vue({
    el: "#catList",
    data: {
      cats: catsArray
    }
  });