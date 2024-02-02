class Mamals{
  constructor(name){
    this.name = name;
    this.type = 'warm-blooded';
  }
  eat(){
    console.log('I am eating');
  }
}

class Dog extends Mamals{
  constructor(name){
    super(name)
  }
  sound(){
    console.log('wooooff');
  }
}

class Cat extends Mamals{
  constructor(name){
    super(name)
  }
  sound(){
    console.log('meow');
  }
}