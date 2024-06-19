import React, { useState, ChangeEvent, FormEvent } from "react";

interface LoginForm {
  username: string;
  password: number;
}

let initialState: LoginForm = {
  username: "",
  password: "",
};

const Header: React.FC = () => {
  const [formData, setFormData] = useState<LoginForm>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h2>Header</h2>

      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          name="username"
          placeholder="username"
        />
        <input
          type="password"
          onChange={handleChange}
          name="password"
          placeholder="password"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Header;
