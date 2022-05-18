module.exports = class restaurent{

    constructor(_name,_location,_contact,id){
        this._id = id  //because in db it saved as _id so we exchange the symbols in this case
        this.name = _name;
        this.location= _location;
        this.contact = _contact;
    }
}