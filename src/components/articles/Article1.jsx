import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Article1() {
  const [data, setData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/articles');
        setData(response.data);
        console.log(response.data);
     
      } catch (error) {
        console.error(error);
      }
    };

    // Call the function to fetch data
    fetchData();
  }, []); 

  
  return (
    <>

    </>
  );
}

export default Article1;