import { useState } from "react";
import "./styles.css";
import User from "./User";

//Take the Name and Gender of the user and add it to the below list. Also, user can delete it.
export default function App() {
  const [users, setUsers] = useState([]); // to store user date
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const handleClick = () => {
    const tempList = users.concat({
      id: users.length + 1,
      name: name,
      gender: gender
    });

    setUsers(tempList);
  };

  const handleRemove = (id) => {
    alert(id);
    const tempList = users.filter((item) => item.id !== id);

    setUsers(tempList);
  };

  return (
    <div className="App">
      <div>
        <label>Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Gender</label>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={(e) => setGender(e.target.value)}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={(e) => setGender(e.target.value)}
        />
        Female
      </div>
      <div>
        <button onClick={(e) => handleClick(e)}>Add</button>
      </div>

      <User users={users} handleRemove={handleRemove} />
    </div>
  );
}
