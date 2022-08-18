import React, { useState } from "react";

export default function Table({ contacts }) {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
    
  const onFilterChange = (e) => {
    setFilter(e.target.value);
    };
    
  const onSearchHandler = (e) => {
    setSearch(e.target.value);
    };
    
    let filterContacts = [];
    
  if (filter === "All") {
    filterContacts = contacts;
  } else {
    filterContacts = contacts.filter((contact) => contact.grope === filter);
    }
    
    if (search) {
        filterContacts = filterContacts.filter((contact) => (
            contact.name.toLowerCase().includes(search.toLowerCase()) || contact.email.toLowerCase().includes(search.toLowerCase())
        ))
    }
  return (
    <>
      <h3>Filter Grope</h3>
      <select name="grope" onChange={onFilterChange}>
        <option value="All">All</option>
        <option value="">None</option>
        <option value="Home">Home</option>
        <option value="Office">Office</option>
      </select>
      <input
        type="search"
        placeholder="Search"
        value={search}
        onChange={onSearchHandler}
      />
      <table width={600}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Grope</th>
          </tr>
        </thead>
        <tbody>
          {filterContacts.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.grope}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
