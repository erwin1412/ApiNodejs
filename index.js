
//panggil library express
const express = require('express');
const axios = require('axios');

//semua library / fungsi express di tampung ke dalam var app 
const app = express();


const API_KEY = '415f57b99d75233b51fdd554e1602255';

// app.get = rounting , dengan alamat /flickr/:tags
// async , untuk jalankan fungsi asing
// req = user request ke api
// res = api response ke user 
// kalau ada yg mengunjungi alamat flickr maka wajib mengirimkan nilai tags
// '/flickr/ , bebas di ganti
// : tanda parameter , 
app.get('/api/:photos', async (req, res) => {
    //untuk mengambil nilai pada url tags
    //misal google.com/flickr/laptop
    //maka dia akan mengambil nilai laptop sebagai tags 
    const photos = req.params.photos;

    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${photos}&format=json&nojsoncallback=1`;

    // untuk eksekusi , 
    try {
        //kalau sukses
        // axios.get(url); axios tolong ambil data dari const url diatas
        // karna async harus ada await terus setelah itu kembalikan ke response
         
        const response = await axios.get(url);
        res.send(response.data);
    } catch (error) {
        //kalau error , dia akan send errorny apa
        res.status(500).send(error);
    }
});

//cek server jalan di port berapa
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


// agar file ini dapat di pakai di file lain , klw di php Require/include
module.exports = app;