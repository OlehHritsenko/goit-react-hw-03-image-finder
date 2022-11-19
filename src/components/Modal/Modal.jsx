import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { BsFillXCircleFill } from 'react-icons/bs';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    currentImageUrl: PropTypes.string,
    currentImageDescription: PropTypes.string,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { onClose, currentImageUrl, currentImageDescription } = this.props;

    return createPortal(
      <div className={css.backdrop} onClick={this.handleClickBackdrop}>
        <div className={css.modal}>
          <button className={css.button} type="button" onClick={onClose}>
            <BsFillXCircleFill />
          </button>
          <img
            src={currentImageUrl}
            alt={currentImageDescription}
            width="920"
            height="auto"
          />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
