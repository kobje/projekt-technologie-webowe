import { MainNav } from "@/components/MainNav";
import { useState, useEffect } from "react";
import { DataTable } from "./components/DataTable";
import { Columns } from "./components/Columns";
import { UserNav } from "./components/UserNav";
import { navigationLinks } from "../../config/navigationLinks";

export const CustomersPage = () => {
  const [customersData, setCustomersData] = useState([]);
  const fetchCustomers = () => {
    fetch("http://127.0.0.1:8000/customers")
      .then((res) => res.json())
      .then((data) => setCustomersData(data));
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

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
          <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
        </div>
        <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
          <ul className="customers">
            {customersData.map((customerData) => (
              <li key={customerData.id}>
                <p className="clientID">
                  <b>ID: </b>
                  {customerData.id}
                </p>
                <p>
                  <b>Imię: </b>
                  {customerData.name}
                </p>
                <p>
                  <b>Nazwisko: </b>
                  {customerData.surname}
                </p>
                <p>
                  <b>Email: </b>
                  {customerData.email}
                </p>
                <p>
                  <b>Numer telefonu: </b>
                  {customerData.phone_number}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
