import { useEffect, useState } from "react";
import { getIndices } from "../services/api";

export const useFetchIndices = () =>{

  const [indices, setIndices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const data = await getIndices();
    setIndices(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

    return {
        indices,
        isLoading
    }
}