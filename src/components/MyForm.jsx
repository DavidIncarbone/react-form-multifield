import { useState } from "react";
const initialUser = {
    name: "",
    surname: "",
    premium: false,
};
function MyForm() {
    const [user, setUser] = useState(initialUser);
    const [userList, setUserList] = useState([]);

    function handleInput(e) {

        const value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setUser({ ...user, [e.target.name]: value });
    }
    function handleSubmit(e) {
        e.preventDefault();
        setUserList([...userList, user]);
        setUser(initialUser);
    }
    return (
        <section className="my-4 ms-4">
            <h2>Aggiungi nuovo post</h2>
            <form onSubmit={handleSubmit} className="w-50">
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        Your name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        aria-describedby="usernamelHelp"
                        value={user.name}
                        onChange={handleInput}
                        name="name"
                    />
                    <div id="usernamelHelp" className="form-text">
                        We&apos;ll never share your username with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="userSurname" className="form-label">
                        Your Surname
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="userSurname"
                        value={user.surname}
                        onChange={handleInput}
                        name="surname"
                    />
                </div>

                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="userPremium"
                        name="premium"
                        onChange={handleInput}
                    />
                    <label className="form-check-label" htmlFor="userPremium">
                        Check me out
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </section>
    );
}

export default MyForm;
