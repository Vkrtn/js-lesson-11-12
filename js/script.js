// let button = document.getElementById("button");
// let buttonArea = document.getElementById("button-area");



let areasInfo = [
  { name: "Ivan", area: [50, 36] },
  { name: "Dyma", area: [68, 140] },
  { name: "Vasya", area: [151, 12] },
  { name: "Vasya", area: [151, 12] },b
];

let totalArea = 0;


for (i = 0; i < areasInfo.length; i++) {
  let areaInfo = areasInfo[i];
  let userName = areaInfo.name;
  let areaW = areaInfo.area[0];
  let areah = areaInfo.area[1];

  let area = getArea(userName, areaW,areah);

  totalArea += area;
}

  console.log(`Total Area: ${totalArea}`);


function getArea(name,a, b) {
    let area = a * b;
    console.log(name,':',area,'m2');
    return area;
  }
  

// button.onclick = newFunction;
// buttonArea.onclick = getArea;

// function getArea() {
//   let a = prompt("Enter the A side");
//   let b = prompt("Enter the B side");
//   let area = a * b;

//   alert(`Area: ${area} m2`);
// }

// function newFunction(e) {
//   alert("Hello");
// }


//   console.log(`Total Area: ${totalArea}`);
