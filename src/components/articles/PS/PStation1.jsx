import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DOMPurify from 'dompurify';
import axios from 'axios';
import {config, server} from '../../../config';


function PStation1() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const location = useLocation();

    const getContent = () => {
        axios.get(`${server}/articles/PlayStation`, config)
         .then(response => {
           console.log(response.data);
          // setTitle(featData.title);
         //  setImage(featData.imgLink);
         //  setContent(featData.content);
         //  setCategory(featData.category);
         //  setLoading(false);
         })
         .catch(error => {
           console.error('There was an error fetching the images!', error);
         });
    };

    const processContent = (content) => {
        let processedText = content
            .replace(/Playstation 2/gi, '<strong>XBOX</strong>')
            .replace(/highlight/gi, '<b>highlight</b>');
        return DOMPurify(processedText)
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

export default PStation1;