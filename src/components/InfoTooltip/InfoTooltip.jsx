import Popup from '../Popup/Popup';

import successIcon from '../../images/success-icon.png';
import failIcon from '../../images/fail-icon.png';

export default function InfoTooltip({ isOpen, onClose, success }) {
  if (!isOpen) return null;

  return (
    <Popup onClose={onClose}>
      <div className='tooltip'>
        <img src={success ? successIcon : failIcon} alt='Status' />

        <h2>
          {success
            ? 'Vitória! Agora você está registrado.'
            : 'Ops, algo deu errado. Tente novamente.'}
        </h2>
      </div>
    </Popup>
  );
}
