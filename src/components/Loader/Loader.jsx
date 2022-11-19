import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';

function Loader() {
  return (
    <div className={css.wrapper}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#d98516"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}

export default Loader;
