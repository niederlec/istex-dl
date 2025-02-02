import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { RadioGroup } from '@headlessui/react';

import eventEmitter, { events } from '../../lib/eventEmitter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Usage ({ usageInfo }) {
  const usage = useSelector(state => state.istexApi.usage);

  const usageChangedHandler = value => {
    const newUsage = value;

    eventEmitter.emit(events.setSelectedFormats, usageInfo.selectedFormats);
    eventEmitter.emit(events.setUsage, newUsage);
  };

  return (
    <RadioGroup
      value={usage}
      onChange={usageChangedHandler}
      className='mb-2 md:mb-0 md:mr-5 cursor-pointer'
      name='usages'
    >
      <RadioGroup.Option
        value={usageInfo.name}
        className='flex relative flex-col text-xl justify-between items-center focus:outline-none h-[270px] md:w-[340px]'
      >
        {({ active, checked }) => (
          <>
            <div className={`pt-24 flex flex-col justify-start items-center w-full h-full bg-white border-[3px] border-b-0${checked ? ' border-istcolor-green-dark' : ' border-white'}`}>
              <div className='flex flex-col items-center justify-between'>
                <div className='flex flex-col items-center'>
                  <div className='flex flex-col justify-center items-center'>
                    <RadioGroup.Label
                      as='p'
                      className='text-2xl text-istcolor-black'
                    >
                      {usageInfo.label}
                    </RadioGroup.Label>
                    <RadioGroup.Description
                      as='span'
                      className='text-xs pt-3'
                    >
                      {usageInfo.description}
                    </RadioGroup.Description>
                  </div>
                </div>
              </div>
              <div className='flex flex-col absolute right-6 top-6'>
                {usageInfo.tags.map(tag => (
                  <span key={tag} className='text-xs font-bold p-2 text-center text-istcolor-grey-link bg-istcolor-white'>{tag}</span>
                ))}
              </div>
            </div>
            <div className={`flex justify-center text-white p-4 ${checked ? ' bg-istcolor-green-dark' : 'bg-istcolor-blue cta1'} w-full`}>
              {checked && (
                <FontAwesomeIcon icon='check' />
              )}
              <p>
                <span className='pl-2 text-sm font-bold'>{checked ? 'Usage sélectionné' : 'Choisir cet usage'}</span>
              </p>
            </div>
          </>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  );
}

Usage.propTypes = {
  usageInfo: PropTypes.object,
};
