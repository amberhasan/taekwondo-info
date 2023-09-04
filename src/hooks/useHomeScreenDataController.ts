import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Alert} from 'react-native';
import {menu} from '../models/homeScreenModel';
import {useDispatch} from 'react-redux';
import {increment} from '../redux/actions';

const useHomeScreenDataController = () => {
  let [isVisible, setIsVisible] = useState(false);
  let [id, setId] = useState(1);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onMenuPress = (_id: number) => {
    // setId(_id);
    dispatch(increment);
    // switch (_id) {
    //   case 1:
    //     navigation.navigate('ChildrensClassesScreen');
    //     break;
    //   case 2:
    //   case 3:
    //   case 4:
    //   case 5:
    //   case 6:
    //   case 7:
    //     setIsVisible(true);
    //     break;
    //   case 8:
    //     navigation.navigate('BeltRequirementsScreen');
    //     break;
    //   default:
    //     Alert.alert('Error', `${id} is not handled yet`);
    // }
  };

  return {menu, isVisible, setIsVisible, id, setId, onMenuPress};
};

export default useHomeScreenDataController;
