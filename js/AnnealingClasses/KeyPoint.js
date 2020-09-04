class KeyPoint {
    /* constructor(x, y, size) {
         this.x = x;
         this.y = y;
         this.size = size;
     }*/

    constructor(x, y, size, type, id){
        this.x = x;
        this.y = y;
        this.size = size;
        this.type = type;
        this.id = id;
    }
    get GetX(){
        return this.x;
    }

    get GetY(){
        return this.y;
    }

    get getType(){
        return this.type;
    }
    // Getter
    get getId() {
        return this.id();
    }

    // Method
    /*  calcArea() {
          if(this.shape == "square")
              return this.size* this.size;
          else if(this.shape == "circle")
              return 3.14 * this.size * this.size;
        //  return this.height * this.width;
      }*/
}