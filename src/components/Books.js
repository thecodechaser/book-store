import React from "react";

const Books = () =>{
    return(
        <main>
            <div>

            </div>
            <h2 class="add-book-h2">ADD NEW BOOK</h2>
            <form class="form">
                <input className="book-title" type="text" placeholder="Book title"></input>
                <input type="text" placeholder="Category"></input>
                <button type="submit">Add Book</button>
            </form>
        </main>
    );
}

export default Books;