import { useUsers } from "../hook/useUsers";
import { User } from "../interfaces/reqRes";

export const Users = () => {
  const { users, loadBack, loadNext } = useUsers();

  /**
   * It takes a User object as an argument and returns a JSX.Element
   * @param {User}  - `id` - the id of the user
   * @returns A table row with three table data elements.
   */
  const renderItem = ({ id, avatar, first_name, email }: User): JSX.Element => {
    return (
      <tr key={id.toString()}>
        <td>
          <img
            src={avatar}
            alt="first_name"
            style={{ width: 40, borderRadius: 100 }}
          />
        </td>
        <td>{first_name}</td>
        <td>{email}</td>
      </tr>
    );
  };
  return (
    <>
      <h3>Users:</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{users.map((users) => renderItem(users))}</tbody>
      </table>
      <button className="btn btn-primary" onClick={loadBack}>
        Back
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={loadNext}>
        Next
      </button>
    </>
  );
};
