import React from "react";
import List from "./List";
import Form from "./Form";
import Post from "./Posts";
import SagaPosts from "./SagaPosts";

const App = () => (
    <>
    <div>
        <h2>Articles</h2>
        <List/>
    </div>
    <div>
        <h2>Add a new article</h2>
        <Form/>
    </div>
    <div>
        <h2>API posts</h2>
        <Post/>
    </div>
    <div>
        <h2>SAGA  posts by Saga API call</h2>
        <SagaPosts/>
    </div>
    </>
)
export default App;