export class StudentService {

    constructor(  private url
                , private http
                , private headers){

    }

    getAll(){
        return this.http.get(this.url)
    }
    
    getOne(id){
        return this.http.get(this.url+id)
    }
    
    remove(id){
        return this.http.get(this.url+id)
    }
    
    create(student){
        return this.http.post(this.url,student,this.headers)
    }

    update(){}

}