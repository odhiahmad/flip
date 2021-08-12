const listTransaksi = async () => {
  let response = await fetch('https://nextar.flip.id/frontend-test');
  let dataTemp = await response.json();
  let dataGG = [];
  for (var k in dataTemp) {
    dataGG.push(dataTemp[k]);
  }

  return await dataGG;
};

export {listTransaksi};
