/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CariComponent = ({
  handleSearchInput,
  handleSort,
  placeholder,
  sortTitle,
}) => {
  return (
    <View style={styles.container}>
      <AntDesign
        name="search1"
        size={24}
        color="#aaa"
        style={{alignSelf: 'center', padding: 12}}
      />
      <TextInput
        placeholder={placeholder}
        style={styles.search}
        onChangeText={text => handleSearchInput(text)}
      />
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: 12,
          backgroundColor: 'white',
          borderRadius: 4,
        }}
        onPress={handleSort}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: 'orange', fontSize: 16}}>{sortTitle}</Text>
          <AntDesign
            name="down"
            size={26}
            color="orange"
            style={{alignSelf: 'center'}}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CariComponent;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,

    marginTop: 20,
  },
  search: {
    flex: 3,
  },
});
