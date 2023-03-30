import React from "react";
import Card from "./Card";
import Header from "./Header";
import { useState, useEffect } from "react";
import Skeleton from "./Skeleton";

let arr = new Array(20).fill(-1);

const Home = () => {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(true);

  async function getData() {
    setLoader(true);
    try {
      const data = await fetch(
        `https://randomuser.me/api/?page=${page}&results=9&seed=abc`
      );
      let users = await data.json();
      users = users.results;
      console.log(users[0]);
      setTimeout(() => {
        setUser((prev) => [...prev, ...users]);
        setLoader(false);
      }, 1000);
    } catch (error) {
      console.log("Error fetching users", error);
    }
  }

  const handleInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      )
        setPage((prev) => prev + 1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoader(true);

    setTimeout(() => {
      getData();
    }, 1000);
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);

    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  return (
    <div className="">
      <Header />
      <div className=" flex flex-wrap justify-center">
        {user.map((person) => {
          return <Card key={person?.login?.uuid} person={person} />;
        })}
        {loader && arr.map((key) => <Skeleton key={key} />)}
      </div>
    </div>
  );
};

export default Home;
