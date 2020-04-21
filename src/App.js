import React from "react";
import "./App.css";

const App = () => (
  <>
    <header>
      <div className="container">Header</div>
    </header>
    <main>
      <div className="container">
        <div className="row">
          <aside className="main-sidebar">
            <ul className="sidebar-navigation">
              <li>
                <a href="/">Profile</a>
              </li>
              <li>
                <a href="/">Messages</a>
              </li>
              <li>
                <a href="/">News</a>
              </li>
              <li>
                <a href="/">Music</a>
              </li>
              <li>
                <a href="/">Settings</a>
              </li>
            </ul>
          </aside>
          <section className="main-content">
            <p className="profile-background-image">
              <img
                src="https://w.wallhaven.cc/full/96/wallhaven-96w8e8.png"
                alt="Profile background image"
              />
            </p>
            <div>ava + description</div>
            <div>
              posts
              <div>post 1</div>
              <div>post 2</div>
            </div>
          </section>
        </div>
      </div>
    </main>
    <footer>
      <div className="container">Footer</div>
    </footer>
  </>
);

export default App;
