import { useForm } from "../hook/useForm";

export const Forms = () => {
  const { onChange, form } = useForm({ password: "", email: "" });
  const { password, email } = form;
  return (
    <>
      <h3>forms</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={({ target }) => onChange(target.value, "email")}
      />
      <input
        type="password"
        className="form-control mt-2 mb-5"
        placeholder="Password"
        value={password}
        onChange={({ target }) => onChange(target.value, "password")}
      />

      <code>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </code>
    </>
  );
};
