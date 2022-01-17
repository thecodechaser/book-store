import React from "react";

const Books = () =>{
    return(
        <main>
            <div>

            </div>
            <h2 class="add-book-h2">ADD NEW BOOK</h2>
            <form class="form">
                <input className="input-title" type="text" placeholder="Book title"></input>
                <input className="input-category" type="text" placeholder="Category"></input>
                <button className="add-book-btn" type="submit">Add Book</button>
            </form>
        </main>
    );
}

export default Books;