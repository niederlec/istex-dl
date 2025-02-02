import React from 'react';
import { Tooltip } from 'flowbite-react';

import ResetButton from '../ResetButton/ResetButton';
import FetchButton from '../FetchButton/FetchButton';
import ShareButton from '../ShareButton/ShareButton';
import HistoryButton from '../HistoryButton/HistoryButton';

export default function Navbar () {
  const defaultClassName = 'flex flex-col justify-between items-center cursor-pointer hover:bg-istcolor-white hover:rounded-md p-1.5 text-istcolor-black';
  const sizeIcon = 'text-3xl md:text-4xl';
  const fontSizeText = 'text-center text-[14px] md:text-base align-top';

  return (
    <div className='!fixed border-0 w-full bottom-0 left-0 bg-istcolor-green-dark py-1 z-50'>
      <div className='flex justify-center gap-2 md:gap-x-14 items-center'>
        <Tooltip
          content={(
            <div className='max-w-[10rem] text-center'>
              Effacez tout pour redémarrer avec un formulaire vide
            </div>
          )}
        >
          <button>
            <ResetButton className={defaultClassName} sizeIcon={sizeIcon} fontSizeText={fontSizeText} />
          </button>
        </Tooltip>
        <Tooltip
          content={(
            <div className='max-w-[8rem] text-center'>
              Récupérez l'état en cours de votre formulaire
            </div>
          )}
        >
          <button>
            <FetchButton className={defaultClassName} sizeIcon={sizeIcon} fontSizeText={fontSizeText} />
          </button>
        </Tooltip>
        <Tooltip
          content={(
            <div className='max-w-[9rem] text-center'>
              Activez cette fonctionnalité en complétant le formulaire et partagez votre corpus avant de le télécharger
            </div>
          )}
        >
          {/* We don't use button here because of bug. the button adds a focus
          to the click which prevents the tooltip from disappearing after opening the modal */}
          <div>
            <ShareButton sizeIcon={sizeIcon} fontSizeText={fontSizeText} />
          </div>
        </Tooltip>
        <Tooltip
          content={(
            <div className='max-w-[10rem] text-center'>
              Accédez à l'historique de vos 30 derniers téléchargements
            </div>
          )}
        >
          {/* We don't use button here because of bug. the button adds a focus
          to the click which prevents the tooltip from disappearing after opening the modal */}
          <div>
            <HistoryButton className={defaultClassName} sizeIcon={sizeIcon} fontSizeText={fontSizeText} />
          </div>
        </Tooltip>
      </div>
    </div>
  );
}
