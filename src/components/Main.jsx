import { useState } from "react";
import posts from "../data/posts"
import Card from "./Card"
import tagsStyle from "../style/Tags.module.css"
import TagsList from "./TagsList";
import Button from "./Button"

function Main() {

    //DELETE
    const [myPosts, setMyPosts] = useState(posts);

    function deleteItem(id) {

        setMyPosts(
            myPosts.filter((post) => post.id !== id)
        )
    }
    // ADD POST

    const initialNewPost = {
        id: crypto.randomUUID(),
        title: "",
        description: "",
        image: "",
        category: ""

    };
    const [newPost, setNewPost] = useState(initialNewPost);
    const [postList, setPostList] = useState([]);
    const options = ["Cinema", "Calcio", "Viaggi"]

    function deleteNewItem(id) {

        setPostList(
            postList.filter((post) => post.id !== id)
        )
    }

    function handleInput(event) {

        const { value, name } = event.target;
        console.log(value);
        console.log(name);

        setNewPost({ ...newPost, [name]: value });

    }
    function handleSubmit(event) {
        event.preventDefault();
        setPostList([...postList, newPost]);
        setNewPost(initialNewPost);
        console.log(postList)

    }

    return (
        <main className="d-flex flex-column">

            <TagsList />

            <ul className="d-flex flex-wrap gap-5">
                {myPosts.map(post => (
                    post.published === true &&
                    <Card title={post.title}
                        description={post.content}
                        image={post.image}
                        key={post.id}
                        tags={post.tags}
                        onDelete={() => deleteItem(post.id)}
                    />
                ))}

                {postList.map((post, i) => {


                    return (
                        <li key={post.id} className="list-unstyled">

                            <div className="card" style={{
                                width: 15 + "rem"
                            }}>
                                <img className="card-img-top" src={post.image} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text">{post.description}</p>
                                    <div><b>Categoria: </b>{post.category}</div>
                                    <button onClick={() => deleteNewItem(post.id)}
                                        className="btn btn-primary">Delete</button>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <section className="my-4 ms-4">
                <h2>Aggiungi nuovo post</h2>
                <form onSubmit={handleSubmit} className="w-50">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                            Title
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            aria-describedby="titlelHelp"
                            onChange={handleInput}
                            value={newPost.title}
                            name="title"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                            Description
                        </label>
                        <input
                            type="textarea"
                            className="form-control"
                            id="description"
                            aria-describedby="descriptionlHelp"
                            onChange={handleInput}
                            value={newPost.description}
                            name="description"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">
                            Image
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="image"
                            aria-describedby="imagelHelp"
                            onChange={handleInput}
                            value="https://placehold.co/400"
                            name="image"

                        />
                    </div>
                    <select className="form-select mb-3" aria-label="Default select example" type="textarea"
                        id="category"
                        aria-describedby="categorylHelp"
                        onChange={handleInput}
                        value={newPost.category}
                        name="category">
                        <option defaultValue>Scegli la categoria</option>
                        {options.map((option, index) => {
                            return (<option key={crypto.randomUUID()} value={option}>{option}</option>)
                        })}

                    </select>





                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </section>


        </main>
    )
}
export default Main