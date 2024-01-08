import React, { useState } from 'react';
import { data } from './data';
import './../Accordion/styles.css';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  return (
    <div className='wrapper'>
      <div className='accordion'>
        {data && data.length > 0 ? (
          data.map(data => (
            <div className='item' key={data.id}>
              <div
                className='item-question'
                onClick={() => setSelected(data.id)}
              >
                <div>{data.question}</div>{' '}
                <span>
                  <FontAwesomeIcon icon={faChevronDown} />{' '}
                </span>
                {selected === data.id && (
                  <div className='answer'>
                    <span>{data.content}</span>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className='item'>No data found !</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
