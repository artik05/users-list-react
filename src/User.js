export default function User(props) {
  return (
    <div className="user">
      <h2>User List</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {props.users.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.gender}</td>
                  <td>
                    <button onClick={(e) => props.handleRemove(item.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
