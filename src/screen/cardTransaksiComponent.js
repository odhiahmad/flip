/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {flagColor} from '../utils/flagColor';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {formatTanggalIndo} from './../utils/tanggalIndo';
import {mataUang} from './../utils/konversiUang';
import {kapitalAwal} from './../utils/fontCase';

const CardTransaksiComponent = ({data, handleClicked}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleClicked(data)}>
      <View
        style={[
          styles.cardColor,
          {backgroundColor: flagColor(data.status)},
        ]}></View>

      <View style={styles.dataContainer}>
        <Text style={styles.textNameStyle}>
          {data.sender_bank.length < 5
            ? data.sender_bank.toUpperCase()
            : kapitalAwal(data.sender_bank)}
          <AntDesign name="arrowright" size={16} color="black" />
          {data.beneficiary_bank.length < 5
            ? data.beneficiary_bank.toUpperCase()
            : kapitalAwal(data.beneficiary_bank)}
        </Text>
        <Text style={styles.text}>{data.beneficiary_name.toUpperCase()}</Text>
        <Text style={styles.text}>
          Rp{mataUang(data.amount)}{' '}
          <FontAwesome name="circle" size={8} color="black" />{' '}
          {formatTanggalIndo(data.created_at)}
        </Text>
      </View>
      <View style={styles.dataContainerStatus}>
        <View
          style={{
            backgroundColor: flagColor(data.status),
            borderRadius: 5,
            paddingVertical: 2,
          }}>
          <Text style={styles.textWhite}>
            {data.status === 'SUCCESS' ? 'Berhasil' : 'Pending'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardTransaksiComponent;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    height: 120,
    flexDirection: 'row',
    backgroundColor: 'white',
    display: 'flex',
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  dataContainer: {
    width: '70%',
    padding: 20,
    justifyContent: 'center',
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
  },
  dataContainerStatus: {
    width: '30%',
    justifyContent: 'center',
    padding: 20,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
  },
  cardColor: {
    height: 120,
    width: 10,
    borderTopStartRadius: 8,
    borderBottomStartRadius: 8,
  },
  textNameStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
  },
  textWhite: {
    textAlign: 'center',

    fontSize: 14,
    fontWeight: '500',
    color: 'white',
  },
});
