import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Success = message => {
  toast.success(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};

export const Error = error => {
  let message = null;
  if (typeof error === 'object' && error.message) {
    ({ message } = error);
  }
  if (message !== null && message !== 'undefined' && message !== '') {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
};
export const Warn = message => {
  toast.warn(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};
export const Info = message => {
  toast.info(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};
export const Custom = message => {
  toast(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    className: 'foo-bar',
  });
};
