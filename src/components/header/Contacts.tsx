import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import calling from "../../assets/calling.svg";
import message from "../../assets/message.svg";
interface LoginForm {
  user: string;
  password: number;
  email: string
}

let initialState: LoginForm = {
  name: "",
  email:"",
};

const Contacts: FC = () => {
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

    

      <div className="w-full h-screen">
        <div className="w-9/12 bg-green-50 rounded-xl flex items-center gap-x-7 justify-between mx-auto mt-10">
          <div className="w-full flex items-start pt-10 pl-9  flex-col">
            <div className="flex flex-col items-start gap-y-2">
              <h1 className="font-bold text-3xl">Contact us</h1>
              <p>
                Send for us your request and we <br /> will get in touch with
                you as <br /> soon as possible
              </p>
            </div>
            <div className="w-full flex flex-col gap-y-5 py-20">
              <div className="flex w-full  items-center gap-x-3">
                <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-white">
                  <img src={calling} alt="" />
                </div>
                <h2 className="text-xl font-bold">+380 98 782 82 23</h2>
              </div>
              <div className="flex w-full items-center gap-x-3">
                <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-white">
                  <img src={message} alt="" />
                </div>
                <h2 className="text-xl font-bold">+stx@gmail.com</h2>
              </div>
            </div>
          </div>
          <div className="w-full p-5 ">
            <div className="w-full h-full rounded-xl border bg-white">
              <form
                onSubmit={handleSubmit}
                className="p-5 flex flex-col gap-y-3"
                action=""
              >
                <div className="flex flex-col gap-y-2">
                  <label className="font-semibold" htmlFor="">
                    Name
                  </label>
                  <input
                    className="w-full px-5 p-2 border outline-none rounded"
                    onChange={handleChange}
                    name="name"
                    placeholder="Your Name"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <label className="font-semibold" htmlFor="">
                    Email
                  </label>
                  <input
                  onChange={handleChange}
                  name="email"
                    className="w-full px-5 p-2 border outline-none rounded"
                    placeholder="Your Email"
                    type="email"
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  
                  
                </div>
                <div className="w-full flex items-center gap-x-5 justify-start">
                  <button className="p-1.5 text-sm px-5 bg-green-600 rounded text-white">
                    Send request
                  </button>
                  <p className="text-sm font-medium text-zinc-600">
                    By sending request you agree to <br /> out Pivacy&Policy
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
