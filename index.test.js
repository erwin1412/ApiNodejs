//panggil library supertest
const request = require('supertest');

//menggunakan script yg ada file index , module.export=app di index.js
const app = require('./index');

//method describe , untuk mengelompokkan testing, klw ada testing baru tambahkan describe baru
describe('Test route flickr', () => {
    //test ('perintah/keterangan yg hrs di test tuh apa')
    test('Harus memberikan respons dengan objek JSON yang berisi data foto', async () => {
        //request(app).get('/flickr/cats'); , melakukan request/permintaan dari app (index.js) . untuk mengambil data dari route /flickr/cats
        const response = await request(app).get('/api/cats');
        //yang diinginkan (expect) , ekspetasi stat pada body postman "OK"
        expect(response.body.stat).toBe('ok');
        // pastikan objek foto ada dan tidak tidak terdefinisi (undefined)
        // object photos bisa cek di postman 
        expect(response.body.photos).toBeDefined(); 
    });
});