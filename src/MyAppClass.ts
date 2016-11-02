
export class MyAppClass
{


    // constructor
    constructor(public name?: string) {}
    
    get_name() { return this.name; }
    static double(x: number):number { return 2*x; }
}
