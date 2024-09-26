import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import style from './style';
const moon = require('../../assets/moon.png');
const sun = require('../../assets/sun.png');

const TimeOfDay = () => {
  const getTimeOfDay = () => {
    const now = new Date();
    const hour = now.getHours();
    if (hour >= 5 && hour < 12) {
      return 'morning';
    } else if (hour >= 12 && hour < 17) {
      return 'afternoon';
    } else if (hour >= 17 && hour < 21) {
      return 'evening';
    } else {
      return 'night';
    }
  };

  const [timeOfDay, setTimeOfDay] = useState(getTimeOfDay());

  useEffect(() => {
    setTimeOfDay(getTimeOfDay());

    const interval = setInterval(() => {
      setTimeOfDay(getTimeOfDay());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const getStyleForTimeOfDay = () => {
    switch (timeOfDay) {
      case 'morning':
        return { backgroundStyle: style.morning, textStyle: style.textDark };
      case 'afternoon':
        return { backgroundStyle: style.afternoon, textStyle: style.textDark };
      case 'evening':
        return { backgroundStyle: style.evening, textStyle: style.textLight };
      case 'night':
        return { backgroundStyle: style.night, textStyle: style.textLight };
      default:
        return { backgroundStyle: style.morning, textStyle: style.textDark };
    }
  };

  const { backgroundStyle, textStyle } = getStyleForTimeOfDay();

  return (
    <View style={[style.flexAlignment, backgroundStyle]}>
      {/* Heavenly body ABOVE the text for afternoon and night */}
      {(timeOfDay === 'afternoon' || timeOfDay === 'night') && (
        <Image
          source={timeOfDay === 'afternoon' ? sun : moon}
          style={[style.heavens, style.heavensAbove]}
        />
      )}

      <View style={style.textContainer}>
        <Text style={textStyle}>Good {timeOfDay}!</Text>
      </View>

      {/* Heavenly body BELOW the text for morning and evening */}
      {(timeOfDay === 'morning' || timeOfDay === 'evening') && (
        <Image
          source={timeOfDay === 'morning' ? sun : moon}
          style={[style.heavens, style.heavensBelow]}
        />
      )}
    </View>
  );
};

export default TimeOfDay;
