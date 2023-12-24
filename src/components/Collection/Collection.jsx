import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

function Collection() {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    getCollection();
  }, []);

  async function getCollection() {
    const { data } = await supabase.from("collection").select();
    setCollection(data);
  }

  return (
    <ul>
      {collection.map((book) => (
        <li key={book.title}>{book.title}</li>
      ))}
    </ul>
  );
}

export default Collection;
