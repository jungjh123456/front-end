// import MainStyle from '../UI/organisms/ListMainSt';
// import ListStyle from '../UI/organisms/ListsSt';
import GoogleStyle from '../../UI/organisms/organisms-list/GoogleMapSt';
import HeadStyle from '../../UI/organisms/organisms-list/HeadStyle';
import ListStyle from '../../UI/organisms/organisms-list/ListsSt';

const ListTemplate = () => {
  return (
    <div style={{ display: 'flex' }}>
      {/* <MainStyle /> */}
      <div style={{ display: 'block' }}>
        <HeadStyle />
        <ListStyle />
      </div>
      <GoogleStyle style={{ flexShrink: '1' }} />
    </div>
  );
};

export default ListTemplate;
