/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const RadioButton = ({
  data,
  handleSelectedSort,
  styles,
  selectedColor,
  unselectedColor,
}) => {
  const handleOnClick = item => {
    handleSelectedSort(item);
  };

  return (
    <View style={{...styles}}>
      {data.map(item => (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
          key={item.label}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 32,
              width: 32,
              borderRadius: 25,
              backgroundColor: 'orange',
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 24,
                width: 24,
                borderRadius: 25,
                backgroundColor: 'white',
              }}>
              <Entypo
                name="controller-record"
                size={22}
                color={item.isActive ? selectedColor : unselectedColor}
                onPress={() => handleOnClick(item)}
              />
            </View>
          </View>
          <TouchableOpacity onPress={() => handleOnClick(item)}>
            <Text style={{fontSize: 24, marginLeft: 16, marginRight: 70}}>
              {item.label}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default RadioButton;
