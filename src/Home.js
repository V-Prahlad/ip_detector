import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [ip, setIp] = useState("");
  useEffect(() => {
    axios
      .get("https://api.ipify.org/?format=json")
      .then((res) => {
        setIp(res.data.ip);
      })
      .catch((err) => {
        setIp(` ${err}`);
      });
  }, []);

  return (
    <div className="home">
      <h1 className="home__ip">{ip}</h1>
    </div>
  );
}

export default Home;
