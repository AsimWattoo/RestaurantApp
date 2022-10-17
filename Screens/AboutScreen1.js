import {View, Image, Text} from 'react-native';
import {s as tw} from 'react-native-wind';
import styles from '../Styles';

const About1 = ({navigation}) => {
  let mainImage = require('../assets/images/chef.png');
  return (
    <View>
      <View style={tw`p-4 bg-green-300 flex items-center`}>
        <Image source={mainImage} />
      </View>
    </View>
  );
};

export default About1;
