class Cache {
    constructor(name, list) {
        this.name = name;
        this.list = list;
    }

    static test (){
        console.log(this);
        
    }
}

export { Cache }