const myLibrary = [];
function newObj(title, author, numberPage, readStatus)
    {   this.title = title; 
        this.author=author; 
        this.numberPage=numberPage; 
        this.readStatus = readStatus; 
    }
    const button = document.querySelector(".submit-button");
    const form = document.querySelector("#formlabel");
    const dialog = document.querySelector(".data-add");
    const openModel = document.querySelector(".open");
    const displayButton = document.querySelector(".display");
    const closeModel = document.querySelector(".close");

    function validateForm(x, y, z, w){
      if(x === "" || y === "" || z === ""|| w === ""){
        alert("This form is not validate");
        return false;
      } else{
        return true;
      }
    }

    closeModel.addEventListener("click", ()=>{
        dialog.close();
    })


    openModel.addEventListener("click", ()=>{
    dialog.showModal();
    });


    button.addEventListener("click", (event) => {
           event.preventDefault();
    
            let titleEl = document.querySelector("#title").value;
            let authorEl = document.querySelector("#Author").value;
            let numberPagesEl = document.querySelector("#page").value;
            let readStatusV = document.querySelector(".readStatus-input").value;

            if (validateForm(titleEl,authorEl, numberPagesEl, readStatusV )){
                
                let newBooks = new newObj(titleEl, authorEl, numberPagesEl, readStatusV);
                console.log("Button is clicked!");
                myLibrary.push(newBooks);

    
                form.reset(); 
                dialog.close();    
            } 
        });



    function displayBooks() {

        const libraryList = document.querySelector(".add");
        libraryList.innerHTML = "";
         myLibrary.forEach((book) => {
              const bookItem = document.createElement("div");
             bookItem.classList.add("book-item");
             bookItem.innerHTML = `
             <li>
                 <h3> Title of the Book: ${book.title}</h3>
              <p><strong>Author:</strong> ${book.author}</p>
               <p><strong>Pages:</strong> ${book.numberPage}</p>
                <p><strong>Read:</strong> ${book.readStatus === "true" ? "Already read" : "Not read yet"}</p>
            </li>
          `;
        libraryList.appendChild(bookItem);
     });
     
    }

     displayButton.addEventListener("click", (event)=>{
        console.log(event);
        displayBooks();
     })
    
