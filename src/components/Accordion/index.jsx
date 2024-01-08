import React, { useState } from 'react';
import { data } from './data';
import './../Accordion/styles.css';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSelection = currentId => {
    setSelected(currentId === selected ? null : currentId);
  };
  const handleMultiSelection = currentId => {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(currentId);
    if (findIndexOfCurrentId === -1) copyMultiple.push(currentId);
    else copyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(copyMultiple);
  };
  return (
    <div className='wrapper'>
      <button
        className='item'
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
      >
        Enable multi selection
      </button>
      {enableMultiSelection && <span>Multi-selection is enabled</span>}
      <div className='accordion'>
        {data && data.length > 0 ? (
          data.map(data => (
            <div className='item' key={data.id}>
              <div
                className='item-question'
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(data.id)
                    : () => handleSelection(data.id)
                }
              >
                <div>{data.question}</div>{' '}
                <span>
                  <FontAwesomeIcon icon={faChevronDown} />{' '}
                </span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(data.id) !== -1 && (
                    <div className='answer'>
                      <span>{data.content}</span>
                    </div>
                  )
                : selected === data.id && (
                    <div className='answer'>
                      <span>{data.content}</span>
                    </div>
                  )}
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
