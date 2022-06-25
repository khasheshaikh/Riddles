import React, { useState, useEffect } from "react";
import axios from "axios";

import './Complete.css'
import { Button, Card,Container } from "react-bootstrap";

export const Home = () => {
  const [joke, setJoke] = useState("");
  const [fetching, setFetching] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/general"
      );
      console.log(result.data)
      setJoke(`${result.data[0].setup}${result.data[0].punchline}`);
    };
    fetchData();
  }, [fetching]);

  return (
    <>
    <Card className="back">
      <Card className="main">
        
        <h2>{joke}</h2>
        <Button variant="primary" onClick={()=>setFetching(!fetching)}>next joke</Button>
      </Card>
    </Card>
    </>
  );
};
