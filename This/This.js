var admin={
    managePackage:"Managed",
    createackage:"Created Package",
    bookpackage:"Booked",
    update:function(){
        console.log("Remark=> "+this.remark);//undefined because it is not initialized if utilized it will throw error
        console.log(this.managePackage);
    }
}

var user={
    bookissue:"issue Booked",
    enquiry:"Make Enquiry",
    book:function() {
        console.log(admin.bookpackage);
        console.log(this.bookissue);//global will be used because this keyword is used
    }
}
admin.update()
user.book()