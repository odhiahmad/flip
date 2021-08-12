const formatTanggalIndo = tanggal => {
  var tanggalTemp = tanggal.substring(0, 10);
  var tanggalFormat = new Date(tanggalTemp);
  var bulan = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ][tanggalFormat.getMonth()];
  var str =
    tanggalFormat.getDate() + ' ' + bulan + ' ' + tanggalFormat.getFullYear();

  return str;
};
export {formatTanggalIndo};
