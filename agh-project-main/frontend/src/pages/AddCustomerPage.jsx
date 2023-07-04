import { MainNav } from "@/components/MainNav";
import { navigationLinks } from "../config/navigationLinks";
import { UserNav } from "./CustomersPage/components/UserNav";
import { useState } from "react";

export const AddCustomerPage = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const getName = (event) => {
    setName(event.target.value);
  };

  const getSurname = (event) => {
    setSurname(event.target.value);
  };
  const getEmail = (event) => {
    setEmail(event.target.value);
  };
  const getNumber = (event) => {
    setNumber(event.target.value);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (name === "") return;
    if (surname === "") return;
    if (email === "") return;
    if (number === "") return;

    const customerData = {
      name: name,
      surname: surname,
      email: email,
      phone_number: number,
    };

    const response = fetch("http://127.0.0.1:8000/customers", {
      method: "POST",
      body: JSON.stringify(customerData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setName("");
    setSurname("");
    setEmail("");
    setNumber("");

    console.log("Dodano klienta.");
    alert("Dodano klienta.");
  };
  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" links={navigationLinks} />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Add customer</h2>
        </div>
        <div className="hidden h-full flex-1 flex-col space-y-8 md:flex"></div>
      </div>
      <form onSubmit={submit} className="newCustomer">
        <label>Imię</label>
        <input
          onChange={getName}
          value={name}
          type="text"
          placeholder="Filip"
        ></input>
        <label>Nazwisko</label>
        <input
          onChange={getSurname}
          value={surname}
          type="text"
          placeholder="Kosiński"
        ></input>
        <label>Email</label>
        <input
          onChange={getEmail}
          value={email}
          type="text"
          placeholder="filip.kosinski@example.com"
        ></input>
        <label>Numer telefonu</label>
        <input
          onChange={getNumber}
          value={number}
          type="text"
          placeholder="000-000-000"
        ></input>
        <button type="submit">Dodaj</button>
      </form>
    </div>
  );
};
