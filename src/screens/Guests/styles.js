/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  mainText: {
    fontWeight: 'bold',
  },
  text: {
    color: '#8d8d8d',
  },
  mainButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: '#676767',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signText: {
    fontSize: 20,
    color: '#474747',
  },
  textButton: {
    marginHorizontal: 20,
    fontSize: 16,
  },
});

export default styles;
