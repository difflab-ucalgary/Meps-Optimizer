class Electrode {
    constructor(x, y, size, area, type, shape, id) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.area= area;
        this.type = type;
        this.shape = shape;
        this.id = id;

    }
    get GetX(){
        return this.x;
    }

    get GetY(){
        return this.y;
    }

    get GetSize(){
        return this.size;
    }
    // Getter
    get GetArea() {
        if(this.shape == "circle"){
            return 3.14 * this.size * this.size;
        }else if(this.shape == "square"){
            return this.size * this.size;
        }
    }

}

