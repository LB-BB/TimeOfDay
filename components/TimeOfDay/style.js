import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  flexAlignment: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  morning: {
    backgroundColor: '#FFDCC6', // Apricot
  },
  afternoon: {
    backgroundColor: '#FFD102', // Jonquil yellow
  },
  evening: {
    backgroundColor: '#8796DA', // Vista blue
  },
  night: {
    backgroundColor: '#222255', // Space cadet blue
  },
  textDark: {
    fontSize: 45,
    color: '#000000',
  },
  textLight: {
    fontSize: 45,
    color: '#FFFFFF',
  },
  textContainer: {
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 10,
  },
  heavens: {
    width: 100,
    height: 100,
    position: 'absolute',
  },
  heavensAbove: {
    top: 50,
  },
  heavensBelow: {
    bottom: 50,
  },
});

export default style;

