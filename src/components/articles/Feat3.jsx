import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import {config, server} from '../../config';


function Feat3() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const location = useLocation();

    const getContent = () => {
        axios.get(`${server}/articles/1`, config)
         .then(response => {
           const featData = response.data.data.attributes;
           setTitle(featData.title);
           setImage(featData.imgLink);
           setContent(featData.content);
           setCategory(featData.category);
           setLoading(false);
         })
         .catch(error => {
           console.error('There was an error fetching the images!', error);
         });
    };

    const processContent = (content) => {
        let processedText = content
            .replace(/Playstation 2/gi, '<strong>XBOX</strong>')
            .replace(/highlight/gi, '<b>highlight</b>');
        return processedText
    };
     
    useEffect(() => {
      getContent();
    }, [location]);

    useEffect(() =>{
      processContent(content);
    }, [content])

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

  return (
    <>
      <Link to={'/'}>Back to Home</Link>
      <h2>{title}</h2>
      <img src={image} id='content-img' alt=""/>
       
      <div className='table-of-contents' id={category}>
        <h2>Example text</h2>
      </div>
      <div dangerouslySetInnerHTML={{ __html: processContent(content) }} />
    </>
  );
}

export default Feat3;