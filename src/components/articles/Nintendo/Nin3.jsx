import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {config, server} from '../../../config';

function Nin3() {

  
  return (
    <>
      <Link to={'/'}>Back to Home</Link>
      <h2>This would be Article 1</h2>
    </>
  );
}

export default Nin3;