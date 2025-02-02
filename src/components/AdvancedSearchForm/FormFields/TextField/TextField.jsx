import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function TextField ({ data, updateQuery, onChange, onCloseChoiceInputModal }) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const updateQueryString = () => {
    const trimmedValue = value.trim();

    // regex matching on DOIs
    const doiRegex = /(10\.\d{4,9}(?:[.][0-9]+)*\/[-._;()[\]/:A-Z0-9]+[^&";,)⟩?.\s])/gi;

    // The value entered by the user needs to be surrounded by double-quotes (") if it contains a space character
    // or a hyphen
    const quotedValue = (/[\s-]/.test(trimmedValue) || doiRegex.test(trimmedValue)) ? `"${trimmedValue}"` : trimmedValue;
    const valueToPutInQuery = quotedValue.replace(/""/g, '"');

    if (data.dataValue === '') {
      updateQuery(valueToPutInQuery, trimmedValue);
    } else {
      updateQuery(`${data.dataValue}:${valueToPutInQuery}`, trimmedValue);
    }
  };

  // Change the value in realtime inside search input
  useEffect(() => {
    onChange(value);
  }, [value, onChange]);

  return (
    <div className='flex flex-col justify-between'>
      <div className='mb-2'>
        <textarea
          name={data.dataValue}
          placeholder='Entrez la valeur à rechercher'
          onChange={event => handleChange(event)}
          value={value}
          type='text'
          cols='40'
          rows='1'
          className='border-[1px] border-istcolor-green-dark p-2 placeholder:text-istcolor-grey-medium focus:outline-none'
        />
      </div>

      <div className='text-center font-montserrat font-medium'>
        <button
          type='button'
          className={`p-2 ml-2 text-white bg-istcolor-blue border focus:ring-4 focus:outline-none ${value === '' ? 'bg-istcolor-grey-medium cursor-not-allowed' : 'border-istcolor-blue cta1'}`}
          disabled={value === ''}
          onClick={(e) => {
            e.preventDefault();
            updateQueryString();
          }}
        >
          Valider
        </button>
        <button
          type='button'
          className='p-2 ml-2 text-white bg-istcolor-red border border-istcolor-red cta2 focus:ring-4 focus:outline-none'
          onClick={() => {
            onCloseChoiceInputModal();
          }}
        >
          Annuler
        </button>
      </div>
    </div>
  );
}

TextField.propTypes = {
  data: PropTypes.object,
  updateQuery: PropTypes.func,
  onCloseChoiceInputModal: PropTypes.func,
  onChange: PropTypes.func,
};

export default TextField;
