/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Clipboard,
  ToastAndroid,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../varibelTemp/colors';
import {formatTanggalIndo} from './../utils/tanggalIndo';
import {mataUang} from './../utils/konversiUang';
import {kapitalAwal} from './../utils/fontCase';

const Survey = ({navigation, route}) => {
  const item = route.params;
  console.log(item);

  const copy = valueText => {
    Clipboard.setString(valueText);
    ToastAndroid.show('Copy Text', ToastAndroid.SHORT);
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <View style={styles.header}>
        <AntDesign name="arrowleft" size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          {' '}
          Detail Transaksi
        </Text>
      </View>
      <View style={{flex: 1, backgroundColor: COLORS.background}}>
        <View style={styles.listKecil}>
          <Text style={styles.textHeader}>ID TRANSAKSI: #{item.id} </Text>
          <Ionicons
            name="copy"
            size={26}
            color="green"
            onPress={() => copy(item.id)}
          />
        </View>
        <View style={styles.listKecil}>
          <Text style={styles.textHeader}>DETAIL TRANSAKSI</Text>
        </View>
        <View style={styles.listBesar}>
          <Text style={styles.textHeader}>
            {item.sender_bank.length < 5
              ? item.sender_bank.toUpperCase()
              : kapitalAwal(item.sender_bank)}
            <AntDesign name="arrowright" size={16} color="black" />
            {item.beneficiary_bank.length < 5
              ? item.beneficiary_bank.toUpperCase()
              : kapitalAwal(item.beneficiary_bank)}
          </Text>
          <View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <View style={{width: '50%'}}>
                <Text style={styles.textHeader}>
                  {item.beneficiary_name.toUpperCase()}
                </Text>
                <Text style={styles.textAnak}>{item.account_number}</Text>
              </View>

              <View style={{width: '50%'}}>
                <Text style={styles.textHeader}>NOMINAL</Text>
                <Text style={styles.textAnak}>Rp{mataUang(item.amount)}</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <View style={{width: '50%'}}>
                <Text style={styles.textHeader}>BERITA TRANSFER</Text>
                <Text style={styles.textAnak}>{item.remark}</Text>
              </View>

              <View style={{width: '50%'}}>
                <Text style={styles.textHeader}>KODE UNIK</Text>
                <Text style={styles.textAnak}>{item.unique_code}</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <View style={{width: '50%'}}>
                <Text style={styles.textHeader}>WAKTU DIBUAT </Text>
                <Text style={styles.textAnak}>
                  {formatTanggalIndo(item.created_at)}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  textHeader: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textAnak: {
    fontSize: 16,
    marginTop: 10,
  },
  header: {
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  listKecil: {
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    marginTop: 2,
    height: 80,
  },
  listBesar: {
    padding: 20,
    backgroundColor: COLORS.white,
    marginTop: 2,
  },
});

export default Survey;
