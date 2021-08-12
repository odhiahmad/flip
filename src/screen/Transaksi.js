/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, FlatList, Modal} from 'react-native';
import COLORS from '../varibelTemp/colors';
import LoaderModal from '../components/Loader';
import {listTransaksi} from './transaksiService';
import CardTransaksiComponent from './cardTransaksiComponent';
import CariComponent from './../components/CariComponent';
import RadioButton from './../components/RadioButton';
import {sort} from './../utils/sort';

const sortList = [
  {
    label: 'Nama A-Z',
    desc: 'asc',
    isActive: true,
  },
  {
    label: 'Nama Z-A',
    desc: 'desc',
    isActive: false,
  },
  {
    label: 'Tanggal Terbaru',
    desc: 'tanggal-asc',
    isActive: false,
  },
  {
    label: 'Tanggal Terlama',
    desc: 'tanggal-desc',
    isActive: false,
  },
];

export default function Beranda({navigation}) {
  const navigate = navigation.navigate;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [modalSort, setModalSort] = useState(false);
  const [sortBy, setSortBy] = useState(sortList);
  const [text, setText] = useState('');

  const getData = () => {
    setLoading(true);
    listTransaksi().then(resp => {
      setData(resp);
      setLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSelectedTransaksi = transaksi => {
    navigate('DetailTransaksi', transaksi);
  };

  const handleSelectedSort = dataSort => {
    const newSortOrder = sortBy.map(sort => {
      if (sort.label === dataSort.label) {
        sort.isActive = true;
      } else {
        sort.isActive = false;
      }
      return sort;
    });

    setSortBy(newSortOrder);
    console.log(dataSort.desc);
    const sortedUser = sort(data, dataSort.desc);

    setData(sortedUser);
    setModalSort(!modalSort);
  };

  const handleSortModalVisible = () => {
    setModalSort(!modalSort);
  };
  const handleSearchInput = text => {
    if (!text) {
      setText('');
    } else {
      setText(text);
      console.log(text);
    }
  };

  const newUserList =
    text === ''
      ? data
      : data.filter(dataCari => {
          const newText = text.toLowerCase();
          return (
            `${dataCari.beneficiary_name}`.toLowerCase().includes(newText) ||
            `${dataCari.sender_bank}`.toLowerCase().includes(newText) ||
            `${dataCari.beneficiary_bank}`.toLowerCase().includes(newText) ||
            `${dataCari.amount}`.toLowerCase().includes(newText)
          );
        });

  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <LoaderModal loading={loading} />
      <CariComponent
        placeholder={'Cari nama, bank, atau nominal'}
        sortTitle={'Urutkan'}
        handleSort={handleSortModalVisible}
        handleSearchInput={handleSearchInput}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{backgroundColor: COLORS.background}}
        data={newUserList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item: transaksi}) => (
          <CardTransaksiComponent
            data={transaksi}
            handleClicked={handleSelectedTransaksi}
          />
        )}
      />

      <Modal
        visible={modalSort}
        onDismiss={setModalSort}
        transparent={true}
        onRequestClose={setModalSort}
        onMagicTap={setModalSort}
        animationType={'fade'}>
        <View style={styles.centeredModal}>
          <View style={styles.modalContainer}>
            <RadioButton
              data={sortBy}
              styles={{paddingVertical: 16}}
              selectedColor="orange"
              unselectedColor="white"
              handleSelectedSort={handleSelectedSort}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredModal: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalView: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalContainer: {
    height: 260,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    backgroundColor: 'white',
    borderRadius: 4,
  },
});
