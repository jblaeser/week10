var catsArray = [{
    name: "Kissa",
    age: 7,
    color: "Black & Orange",
    fluffLevel: 5,
    owned: true
}, {
    name: "Pico",
    age: 10,
    color: "Orange & Cream",
    fluffLevel: 1,
    owned: false 
}, {
    name: "Bear",
    age: 12,
    color: "Black",
    fluffLevel: 4,
    owned: false
},{
    name: "Olli",
    age: "10 Weeks",
    color: "White & Orange",
    fluffLevel: 2,
    owned: true
}, {
    name: "Osmo",
    age: "10 Weeks",
    color: "White & Orange",
    fluffLevel: 3,
    owned: true
}]

var vueApp = new Vue({
    el: "#catList",
    data: {
      cats: catsArray
    }
  });