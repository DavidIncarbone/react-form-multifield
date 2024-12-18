import posts from "../data/posts"

const myPosts = [...posts]
const filteredTags = []
const myTags = myPosts.map((post) => post.tags)
console.log(myTags)
for (let i = 0; i < myTags.length; i++) {

    for (let j = 0; j < myTags[i].length; j++) {
        filteredTags.indexOf(myTags[i][j]) === -1 && filteredTags.push(myTags[i][j])
    }

}


function TagsList() {


    return (
        <div className="w-25 ms-5">
            <h2 className="ps-1">Lista dei Tags</h2>
            <ul>
                {filteredTags.map((tag, index) => {

                    return <li key={`card-tag-${index}xxx`}>{tag}</li>
                })}
            </ul>
        </div>
    )
}
export { TagsList, filteredTags }

console.log(filteredTags)

