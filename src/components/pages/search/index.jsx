import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Search = () => {
  const { name } = useParams();
  const [search, setSearch] = useState([]);
  const getAll = async () => {
    try {
      const { data } = await axios.get(
        `https://api-crud.elcho.dev/api/v1/9ab31-01c61-cc880/book`
      );
      setSearch(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  let filterSearch = search.filter((el) => {
    return el.book_name.toLowerCase().includes(name.toLowerCase());
  });

  console.log(filterSearch);

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div>
      {filterSearch.length ? (
        <>
          {filterSearch.map((el) => (
            <div className="" key={el.id}>
              <img width={400} src={el.book_photo} alt="" />
              <h1>{el.book_name}</h1>
            </div>
          ))}
        </>
      ) : (
        <h1
          style={{
            textAlign: "center",
            margin: "20px 0",
          }}
        >
          Нет такое данные!!!
        </h1>
      )}
    </div>
  );
};

export default Search;
