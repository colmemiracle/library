$(document).ready(function(){
    let index = -1;

    let arrBooks = [ 
        {
            "id": 1,
            "name": "Тень и кость",
            "author":"Ли Бардуго",
            "year": 2000,
            "publisher": "«Эксмо»",
            "pages": 504,
            "quantity":5
        },
        {
            "id": 2,
            "name": "Оно",
            "author":"Стивен Кинг",
            "year": 1988,
            "publisher": "«Вильямс» ",
            "pages": 1000,
            "quantity":5
        },
        {
            "id": 3,
            "name": "Гарри Поттер: Кубок огня",
            "author":"Дж. К. Роулинг",
            "year": 2004,
            "publisher": "«Добрая книга»",
            "pages": 872,
            "quantity":5
        },
        {
            "id": 4,
            "name": "Рубиновая книга",
            "author":"",
            "year": 2003,
            "publisher": "«Москва»",
            "pages": 654,
            "quantity":5
        },
        {
            "id": 5,
            "name": "Орудия смерти",
            "author":"Кассандра Клэр",
            "year": 2007,
            "publisher": "«Москва»",
            "pages": 1458,
            "quantity":5
        },
        {
            "id": 6,
            "name": "Хроники Нарнии",
            "author":"К. С. Льюис",
            "year": 1967,
            "publisher": "«Москва»",
            "pages": 456,
            "quantity":5
        },
        {
            "id": 7,
            "name": "Коралина",
            "author":"Н. Гейман",
            "year": 1982,
            "publisher": "«Эксмо»",
            "pages": 897,
            "quantity":5
        },
        {
            "id": 8,
            "name": "Чародей",
            "author":"Джеральд Патчер",
            "year": 2010,
            "publisher": "«Альянс»",
            "pages": 564,
            "quantity":5
        },
        {
            "id": 9,
            "name": "Маскарад",
            "author":"Терри Пратчетт",
            "year": 1978,
            "publisher": "«Альянс»",
            "pages": 687,
            "quantity":5
        },
        {
            "id": 10,
            "name": "На иных ветрах",
            "author":"Урсула Крёбер Ле Гуин",
            "year": "«Полено»",
            "publisher": 1964,
            "pages": 657,
            "quantity":5
        },
        {
            "id": 11,
            "name": "Последняя битва",
            "author":"Клайв Стейплз Льюис",
            "year": 1956,
            "publisher": "«Питер»",
            "pages": 966,
            "quantity":5
        },
        {
            "id": 12,
            "name": "Братство Кольца",
            "author":"Джон Рональд Руэл Толкин",
            "year": 2001,
            "publisher": "«Питер»",
            "pages": 985,
            "quantity":5
        },
        {
            "id": 13,
            "name": "Эрагон",
            "author":"Кристофер Паолини",
            "year": 2002,
            "publisher": "«Росмэн»",
            "pages": 698,
            "quantity":9
        },
        {
            "id": 14,
            "name": "Американские боги",
            "author":"Нил Гейман",
            "year": 2001 ,
            "publisher": "«Хьюго»",
            "pages": 982,
            "quantity":13
        },
        {
            "id": 15,
            "name": "Лабиринт",
            "author":"Макс Фрай",
            "year": 1996,
            "publisher": "«Росмэн»",
            "pages": 608,
            "quantity":10
        }
    ]
    // localStorage.setItem("books", JSON.stringify(arrBooks))

    // let arrBooks = JSON.parse(localStorage.getItem("books"));
  
    $("#books").on("click", function(){
        $("main").toggle()
        $("#holder").empty();
        $("#h2").empty();

        let search = $("<input>");
        search.css({
            position: "absolute",
            top: "20%",
            right: "10%"
        })
        let searchBtn = $("<button>поиск</button>");
        searchBtn.css({
            position: "absolute",
            top: "20%",
            right: "6%"
        })
        searchBtn.on("click", function(){
            $(".bookList").show()
            $(".bookList").map(function(){
                let bookStr = $(this).text().toLowerCase()
                let searchStr = search.val().toLowerCase()
                if (bookStr.indexOf(searchStr) < 0) {
                    $(this).hide()
                }
            })
        })

        let addBook = $("<button>добавить книгу</button>");
        addBook.css({
            position: "absolute",
            top: "24%",
            right: "2%"
        })
        addBook.on("click", function(){
            $("#new").empty()
            let newId = $("<input type=number placeholder =ID>");
            let newName = $("<input type=text placeholder =Название>");
            let newAuthor = $("<input type=text placeholder = Автор>");
            let newYear = $("<input type=number placeholder = Год>");
            let newPublisher = $("<input type=text placeholder =Издание>");
            let newPages = $("<input type=number placeholder =Кол-во страниц>");
            let newQuantity = $("<input type=number placeholder =Количество>"); 
            let add = $("<button>добавить</button>");

            $("#new").toggle()        
            $("#new").append(newId, newName, newAuthor, newYear, newPublisher, newPages, newQuantity,add);

            add.on("click", function(){
                let obj = {
                    id: newId.val(),
                    name: newName.val(),
                    author: newAuthor.val(),
                    year: newYear.val(),
                    publisher: newPublisher.val(),
                    pages: newPages.val(),
                    quantity: newQuantity.val()
                }
                arrBooks.push(obj)
                localStorage.setItem("books", JSON.stringify(arrBooks))
            })            
        })

        let h2 = $("<h2>ALL BOOKS</h2>");

        $("#h2").addClass("h2B");
        $("#h2").append(h2, search,searchBtn, addBook);

        for (let i =0; i<arrBooks.length; i++){

            let bookList = $("<div></div>");
            bookList.addClass("bookList");
            bookList.css({
                border: "solid 2px cadetblue",
                width: "400px",
                margin: "20px",
                backgroundColor: "rgb(247, 242, 236)"
            })

            let deleteBook = $("<button></button>")
            let delImg = $("<img></img>")
            deleteBook.append(delImg)
            delImg.attr('src', "delete.png")
            delImg.css("height", "20px")

            deleteBook.on("click", function(){
                this.parentElement.remove()
                arrBooks.splice(i, 1)
                localStorage.setItem("books", JSON.stringify(arrBooks))
            })


            let editBook = $("<button></button>")
            let ediImg = $("<img></img>")
            editBook.append(ediImg)
            ediImg.attr('src', "edit.webp")
            ediImg.css("height", "20px")
            editBook.css("marginRight","-80%")

            editBook.on("click", function(){
                $("#new"). empty()
                $("#new"). toggle()

                console.log("editing book")

                let editedId = $("<input type=number placeholder = ID>");
                let editedName = $("<input type=text placeholder = Название>");
                let editedAuthor = $("<input type=text placeholder = Автор>");
                let editedYear = $("<input type=number placeholder = Год>");
                let editedPublisher = $("<input type=text placeholder = Извание>");
                let editedPages = $("<input type=number placeholder = Кол-во страниц>");
                let editedQuantity = $("<input type=number placeholder = Количество>");
                        
                let edit = $("<button>изменить</button>");

                edit.on("click", function(){
                    $("#new").toggle()       
                    arrBooks[i].id = editedId.val()
                    arrBooks[i].name = editedName.val()
                    arrBooks[i].author = editedAuthor.val()
                    arrBooks[i].year = editedYear.val()
                    arrBooks[i].publisher = editedPublisher.val()
                    arrBooks[i].pages = editedPages.val()
                    arrBooks[i].quantity = editedQuantity.val()

                    console.log(arrBooks.id) 
                                    
                    localStorage.setItem("books", JSON.stringify(arrBooks))
                })       

                $("#new").append(editedId, editedName, editedAuthor, editedYear, editedPublisher, editedPublisher, editedPages, editedQuantity, edit)

                // localStorage.setItem("books", JSON.stringify(arrBooks))
            })


            let bookId = $("<p></p>")
            bookId.text("ID:    " + arrBooks[i].id)

            let bookName = $("<p></p>")
            bookName.text("Название:    " +arrBooks[i].name)

            let bookAuthor = $("<p></p>")
            bookAuthor.text("Автор:    " +arrBooks[i].author)

            let bookYear = $("<p></p>")
            bookYear.text("Год:    " + arrBooks[i].year)

            let bookPublisher = $("<p></p>")
            bookPublisher.text("Издатель:  " +arrBooks[i].publisher)

            let bookPages = $("<p></p>")
            bookPages.text("Кол-ва страниц:  " +arrBooks[i].pages)

            let bookQuantity = $("<p></p>")
            bookQuantity.text("Количество:    " +arrBooks[i].quantity)

            bookList.append(bookId, bookName, bookAuthor, bookYear, bookPublisher, bookPages, bookQuantity, deleteBook, editBook)

            $("#holder").addClass("holderGrid")

            $("#holder").append(bookList)
        }
    })


    let arrVisitor = [
        {
            "id": 1,
            "name": "Соколов Ярослав",
            "phone":"8706456018"
        },
        {
            "id": 2,
            "name": "Миронова Ульяна",
            "phone":"5410545432132"
        },
        {
            "id": 3,
            "name": "Николаева Ксения",
            "phone": "456797189"
        },
        {
            "id": 4,
            "name": "Савельева Елена",
            "phone":"7456747479"
        },
        {
            "id": 5,
            "name": "Колесов Артём ",
            "phone":"602872741"
        },
        {
            "id": 6,
            "name": "Тимофеев Илья",
            "phone":"357487874545"
        },
        {
            "id": 7,
            "name": "Федотов Михаил ",
            "phone":"03354607487"
        },
        {
            "id": 8,
            "name": "Григорьева Вероника ",
            "phone":"06546874687"
        },
        {
            "id": 9,
            "name": "Михайлова Ева ",
            "phone":"65432416817"
        },
        {
            "id": 10,
            "name": "Иванова Анна ",
            "phone":"9854164654"
        }
    ]
    // let arrVisitor = JSON.parse(localStorage.getItem("visitors"));
    // localStorage.setItem("visitors", JSON.stringify(arrVisitor))
    
    $("#visitors").on("click", function(){
        $("main").toggle()
        $("#h2").empty()
        $("#holder").empty()

        let h2 = $("<h2></h2>")
        h2.text("VISITORS")
        h2.css({ display: "inline"})

        let addVisitor = $("<button>New visitor</button>")
        addVisitor.addClass("addVisitor")

        addVisitor.on("click", function(){       
            $("#new").empty()
            addVisitor.on("click", function(){$("#new").toggle()})

            let newId = $("<input type=number placeholder =ID>");
            let newName = $("<input type=text placeholder =Ф.И.О>");
            let newPhone = $("<input type=number placeholder = Номер телефона>");
    
            let add = $("<button>добавить</button>");

            $("#new").show()        
            $("#new").append(newId, newName, newPhone, add);

            add.on("click", function(){
                let obj = {
                    id: newId.val(),
                    name: newName.val(),
                    phone: newPhone.val(),
                }
                arrVisitor.push(obj)
                localStorage.setItem("visitors", JSON.stringify(arrVisitor))
            })            
        })

        $("#h2").append(h2,addVisitor)
        $("#h2").addClass("h2V")

        let mainer = $("<div></div>")
        mainer.css({
            margin: "0 auto",
            width:"55%"
        })
        
        let searchVisitor = $("<div></div>")
        let search = $("<input>")
        let searchBtn = $("<button>поиск</button>")

        searchBtn.on("click", function(){
            $(".visitorList").show()
            $(".visitorList").map(function(){
                let visStr = $(this).text().toLowerCase()
                let searchStr = search.val().toLowerCase()
                if (visStr.indexOf(searchStr) < 0) {
                    $(this).hide()
                }
            })
        })

        searchVisitor.append(search, searchBtn)
        $("#holder").append(searchVisitor, mainer)

        let head4p = $("<div></div>")
        head4p.css({
            display: "flex",
            width: "100%",
            border: "groove 1px",
            backgroundColor: " rgb(116, 171, 173)",
            color: "rgb(70, 70, 70)"
        })

        let p1 = $("<h4>ID</h4>")
        p1.css("width", "10%")

        let p2 = $("<h4>NAME</h4>")
        p2.css("width", "35%")

        let p3 = $("<h4>PHONE</h4>")
        p3.css("width", "35%")

        let p4 = $("<h4>EDIT</h4>")
        p4.css("width", "20%")

        head4p.append(p1,p2,p3,p4)
        mainer.append(head4p)
           
        for (let i =0; i<arrVisitor.length; i++){
            
            let visitorList = $("<div></div>")
            visitorList.addClass("visitorList")

            let div1 = $("<div></div>")
            div1.css("width", "10%")

            let div2 = $("<div></div>")
            div2.css("width", "35%")

            let div3 = $("<div></div>")
            div3.css("width", "35%")

            let div4 = $("<div></div>")
            div4.css("width", "20%")

            visitorList.css({
                display: "flex",
                width: "100%",
                border: "groove 1px"
            })

            let visitorId = $("<p></p>")
            visitorId.text( arrVisitor[i].id)

            let visitorName = $("<p></p>")
            visitorName.text(arrVisitor[i].name)

            let visitorPhone = $("<p></p>")
            visitorPhone.text(arrVisitor[i].phone)

            let p4 = $("<img></img>")
            div4.addClass("editVisitor")
            div4.on("click", function(){
                index = i;
                console.log(i)
            })
            p4.attr('src', "edit.webp")
            p4.css({
                height: "20px",
                paddingLeft: "5%",
                marginTop: "10%"
            })

            div1.append(visitorId)
            div2.append(visitorName)
            div3.append(visitorPhone)
            div4.append(p4)
            visitorList.append(div1,div2,div3,div4)
            
            mainer.append(visitorList)
        }

        $(".editVisitor").on("click", function(){
            let box = this.parentElement
            console.log(box.parentElement)

            $("#new").empty()
          
            let editedId = $("<input type=number placeholder = ID>");
            let editedName = $("<input type=text placeholder = Ф.И.О>");
            let editedPhone = $("<input type=number placeholder = Номер телефона>");
    
            let edit = $("<button>изменить</button>");
            let deleteVis = $("<button>удалить</button>");

            $("#new").toggle()        
            $("#new").append(editedId, editedName, editedPhone, edit, deleteVis);

            edit.on("click", function(){
                $("#new").toggle()        
                arrVisitor[index].id = editedId.val()
                arrVisitor[index].name = editedName.val()
                arrVisitor[index].phone = editedPhone.val()
                                
                localStorage.setItem("visitors", JSON.stringify(arrVisitor))
            })       

            deleteVis.on("click", function(){  
                $("#new").toggle()        
                console.log(box.parentElement)
                $(box.parentElement).remove()
                arrVisitor.splice(index, 1)
                localStorage.setItem("visitors", JSON.stringify(arrVisitor))
            })        
        })
    })



        let arrCards = [
        {
            "id": 1,
            "name": "Иванова Анна ",
            "book":"Оно"
        },
        {
            "id": 2,
            "name": "Иванова Анна ",
            "book":"Гарри Поттер"
        },
        {
            "id": 3,
            "name": "Николаева Ксения",
            "book": "Гарри Поттер"
        },
        {
            "id": 4,
            "name": "Савельева Елена",
            "book":"Оно"
        },
        {
            "id": 5,
            "name": "Федотов Михаил",
            "book":"Рубиновая книга"
        },
        {
            "id": 6,
            "name": "Федотов Михаил",
            "book":"Рубиновая книга"
        },
        {
            "id": 7,
            "name": "Федотов Михаил ",
            "book":"Хроники Нарнии"
        },
        {
            "id": 8,
            "name": "Григорьева Вероника ",
            "book":"Каролина"
        },
        {
            "id": 9,
            "name": "Савельева Елена",
            "book":"Чародей"
        },
        {
            "id": 10,
            "name": "Иванова Анна ",
            "book":"Чародей"
        }
    ]
//    let arrCards = JSON.parse(localStorage.getItem("cards"));
    // localStorage.setItem("cards", JSON.stringify(arrCards))
    
    $("#cards").on("click", function(){
        $("main").toggle()
        $("#h2").empty()
        $("#holder").empty()

        let h2 = $("<h2></h2>")
        h2.text("ALL CARDS")
        h2.css({
            display: "inline"
        })

        let addCard = $("<button>New card</button>")
        addCard.addClass("addCard")
        addCard.on("click", function(){       
            $("#new").empty()
            addCard.on("click", function(){   
            $("#new").toggle()
            })

            let newId = $("<input type=number placeholder =ID>");
            let newName = $("<input  type=text placeholder =Ф.И.О>");
            let newBorrowedBook = $("<input type=text placeholder = Книга>");
            let add = $("<button>добавить</button>");
            $("#new").show()        
            $("#new").append(newId, newName, newBorrowedBook, add);

            add.on("click", function(){
                let nc = {
                    id: newId.val(),
                    name: newName.val(),
                    book: newBorrowedBook.val()
                }
                arrCards.push(nc)
                localStorage.setItem("cards", JSON.stringify(arrCards))
            })            
            // localStorage.setItem("cards", JSON.stringify(arrCards))
        })

        $("#h2").append(h2,addCard)
        $("#h2").addClass("h2V")

        let mainer = $("<div></div>")
        mainer.css({
            margin: "0 auto",
            width:"55%"
        })
        
        let searchCard = $("<div></div>")
        let search = $("<input>")
        let searchBtn = $("<button>поиск</button>")
        searchBtn.on("click", function(){
            $(".CardsList").show()
            $(".CardsList").map(function(){
                let cardStr = $(this).text().toLowerCase()
                let searchStr = search.val().toLowerCase()
                if (cardStr.indexOf(searchStr) < 0) {
                    $(this).hide()
                }
            })
        })
        searchCard.append(search, searchBtn)
        $("#holder").append(searchCard, mainer)

        let head4p = $("<div></div>")
        head4p.css({
            display: "flex",
            width: "100%",
            border: "groove 1px",
            backgroundColor: " rgb(116, 171, 173)",
            color: "rgb(70, 70, 70)"
        })
        let p1 = $("<h4>ID</h4>")
        p1.css("width", "10%")

        let p2 = $("<h4>VISITOR</h4>")
        p2.css("width", "35%")

        let p3 = $("<h4>BOOK</h4>")
        p3.css("width", "35%")

        let p4 = $("<h4>BORROW DATE</h4>")
        p4.css("width", "20%")

        let p5 = $("<h4>RETURN DATE</h4>")
        p5.css("width", "20%")

        head4p.append(p1,p2,p3,p4, p5)
        mainer.append(head4p)
           
        for (let i =0; i<arrCards.length; i++){
            
            let CardsList = $("<div></div>")
            CardsList.addClass("CardsList")

            let div1 = $("<div></div>")
            div1.css("width", "10%")

            let div2 = $("<div></div>")
            div2.css("width", "35%")

            let div3 = $("<div></div>")
            div3.css("width", "35%")

            let div4 = $("<div></div>")
            div4.css("width", "20%")

            let div5 = $("<div></div>")
            div5.css("width", "20%")

            CardsList.css({
                display: "flex",
                width: "100%",
                border: "groove 1px"
            })

            let visitorId = $("<p></p>")
            visitorId.text( arrCards[i].id)

            let visitorName = $("<p></p>")
            visitorName.text(arrCards[i].name)

            let borrowedBook = $("<p></p>")
            borrowedBook.text(arrCards[i].book)

            let borrowDate = $("<p></p>")
            div4.on("click", function(){
                let rightNow = Date().toLocaleString();
                borrowDate.text(rightNow)
            })

            let returnDate = $("<p></p>")
            div5.on("click", function(){
                let rightNow = Date().toLocaleString()
                returnDate.text(rightNow)
                console.log(rightNow)
            })
           
            div1.append(visitorId)
            div2.append(visitorName)
            div3.append(borrowedBook)
            div4.append(borrowDate)
            div5.append(returnDate)

            CardsList.append(div1,div2,div3,div4, div5)
            mainer.append(CardsList)
        }
    })

    $("#statistics").on("click", function(){
        // $("main").show()
        $("#h2").empty()
        $("#holder").empty()

        let h2 = $("<h2></h2>")
        h2.text("STATISTICS")
    
        $("#h2").addClass("h2S")
        $("#h2").append(h2)

        let div1 = $("<div></div>")
        div1.addClass("div1")
        let div1h = $("<h3>MOST POPULAR VISITORS</h3>")

        let div2 = $("<div></div>")
        div2.addClass("div2")
        let div2h = $("<h3>MOST POPULAR BOOKS</h3>")

        div1.append(div1h)
        div2.append(div2h)

        let statisticList = $("<div></div>")
        statisticList.addClass("statisticList")

    
        for (let i = 0; i<arrCards.length; i++){

            for (let book of arrBooks){
                if (arrCards[i].book == book.name){
                    book.count = book.count ? book.count+1 : 1
                    
                console.log(arrBooks)
                
                let popularVisitors = $("<div></div>")
                popularVisitors.addClass("popularVisitors")

                let popularBooks = $("<div></div>")
                popularBooks.addClass("popularBooks")

                let noV = $("<p></p>")
                noV.text()

                let PopVisitor = $("<p></p>")
                PopVisitor.text()

                let noB = $("<p></p>")
                noB.text(book.count)

                let PopBook = $("<p></p>")
                PopBook.text()

                popularVisitors.append(noV,PopVisitor)
                popularBooks.append(noB, PopBook)

                div1.append(popularVisitors)
                div2.append(popularBooks)
            }
        }
    }

        statisticList.append(div1,div2)
        $("#holder").append(statisticList)
    })

    for (let user of arrVisitor){
        console.log(user.name)
        $("<option></option>").text(user.name).appendTo("#users")
    }
})