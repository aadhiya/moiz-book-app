class Form{
    constructor(){
       
        this.text=createButton('type')
        this.scan=createButton('scan')
       // this.greeting=createElement('h2')
       this.title=createElement('h2')
       this.name=createInput("Book Name")
 
    this.button=createInput("author")
    this.con=createButton("continue")
        //this.standard=createInput("Standard")
       // this.age=createInput("Age")
       // this.mno=createInput("Mobile Number")
       // this.reset=createButton('next')
        // gamestate 4 buttons
      
    }
    hide(){
        this.button.hide()
        this.name.hide()
        this.scan.hide()
        //this.greeting.hide()
        this.title.hide()
        //this.age.hide()
       // this.nur.hide()
        //.sen.hide()
       // this.jun.hide()
        //this.mno.hide()
       // this.standard.hide()
    }
    display(){
       // var title=createElement('h2')
this.title.html("book recommendation and ratings")
this.title.position(displayWidth/2-50,0)
this.scan.position(displayWidth/2-40,displayHeight/2)
this.text.position(displayWidth/2+40,displayHeight/2)

//this.input.position(displayWidth/2-40,displayHeight/2-80)
//this.standard.position(displayWidth/2-40,displayHeight/2-60)
//this.age.position(displayWidth/2-40,displayHeight/2-40)
//this.mno.position(displayHeight/2-40,displayHeight/2-20)
//this.button.position(displayWidth/2+30,displayHeight/2)

//this.reset.position(displayWidth-100,20)
this.text.mousePressed(()=>{
    this.text.hide()
    this.scan.hide()
    this.title.hide()
    
    this.name.position(displayWidth/2,displayHeight/2-50)
    this.button.position(displayWidth/2,displayHeight/2+50)
    this.con.position(displayWidth/2,displayHeight/2+100)
    var book=database.ref('bookname')
    book.on("value",function(data){
      name1=data.val()  
    })
    var author=database.ref('authorname')
    author.on("value",function(data){
      name3=data.val()  
    })
    this.con.mousePressed(()=>{
       
       var name2=this.name.value()
        var n = name1.localeCompare(name2);
       
 var name4=this.button.value()
 var n1 = name4.localeCompare(name3);
 if(n1==0&&n==0)
 {
    text("this is "+name1,displayWidth/2,displayHeight/2)
    text("author is "+name4,displayWidth/2,displayHeight/2+100)
    window.open("https://www.commonsensemedia.org/book-reviews/the-jungle-book")
           }

})
})
this.scan.mousePressed(()=>{
    
    textSize(30)
    fill("blue")
    text("scan the front book of the image which has the bookName and the Author name",displayWidth/2,displayHeight/2-80)
    s=new Scan()
   s.scanToJpg()
})

    }

}
