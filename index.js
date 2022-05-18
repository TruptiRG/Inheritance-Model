//Object.create
const obj={
    Engine:"IC/EC",
    Wheels:4,
    Airbags:2,
    MusicSystem:"radio/USB/AUX",
    Doorlocking:"Central",
};

const car=Object.create(obj);
car.windows="Glass/Sunroof"
console.log("car",car);

//array constructor function

function Car(e,w,a,m,d){
    this.Engine=e;
    this.Wheels=w;
    this.Airbags=a;
    this.MusicSystem=m;
    this.Doorlocking=d;

}

let a2=new Car("IC/EC",4,2,"radio/USB/AUX","Central");
console.log("a2:",a2);
