import { useState } from "react";

const PostUser = () => {
  const [user, setUser] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);

    fetch("http://localhost:5001/api/user/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="flex justify-center items-center m-6">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label>
          Person Name:
          <br />
          <input
            type="text"
            name="name"
            placeholder="name"
            required
            onChange={handleChange}
          />
          <br /> <br />
          <input
            type="text"
            name="email"
            placeholder="email"
            required
            onChange={handleChange}
          />
          <br /> <br />
          <input
            type="text"
            name="address"
            placeholder="address"
            required
            onChange={handleChange}
          />
          <br /> <br />
          <input
            type="text"
            name="proffesion"
            placeholder="proffesion"
            onChange={handleChange}
          />
          <br />
        </label>
        <br />
        <button type="submit" className="bg-yellow-100">
          Add
        </button>
      </form>
    </div>
  );
};
export default PostUser;
