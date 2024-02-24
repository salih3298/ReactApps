import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div >
      <div>
        <div>
          <div>
            <h3>Todo List Page</h3>
          </div>
          <div>
            <form >
              <input type="text" placeholder='Todo Giriniz' />
            </form> <br />
            <button type='submit' >Todo Ekleyin</button>
            <hr />

          </div>

          <div>
            <h3>Todo Listesi</h3>
            <form >
              <input type="text" placeholder='Todo Arayınız' />
              <hr />
            </form>
            <ul>

            </ul>
            <button><a href="#">Todoları Temizle</a></button>
          </div>
        </div>
      </div>
    </div>


  )
}

export default App
