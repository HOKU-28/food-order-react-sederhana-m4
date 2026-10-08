# Food Order — Tugas 1 React JS

Aplikasi single-page sederhana untuk studi kasus **Menu Restoran / Keranjang Belanja Sederhana (Food Order)**.

## 1. Requirement tugas yang dipenuhi

- React JS single page.
- Functional components.
- Props antar component.
- `useState` untuk pengelolaan state.
- `useEffect` untuk efek samping.
- Pemisahan tampilan menjadi beberapa component.
- Dokumentasi cara menjalankan project.

## 2. Struktur folder

```text
food-order-react/
├── public/
├── src/
│   ├── components/
│   │   ├── Cart.jsx
│   │   ├── Header.jsx
│   │   ├── MenuItem.jsx
│   │   ├── MenuList.jsx
│   │   └── OrderSuccess.jsx
│   ├── App.jsx
│   ├── data.js
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── README.md
```

## 3. Cara menjalankan

Pastikan Node.js sudah terpasang.

```bash
npm install
npm run dev
```

Kemudian buka alamat localhost yang diberikan Vite, biasanya:

```text
http://localhost:5173
```

Untuk membuat build:

```bash
npm run build
```

## 4. Pembagian component

### App.jsx
Component utama yang mengatur state, filter, cart, dan alur aplikasi.

### Header.jsx
Menampilkan brand dan jumlah item pada keranjang.

### MenuList.jsx
Menerima data menu melalui props dan menampilkan kumpulan `MenuItem`.

### MenuItem.jsx
Menampilkan satu produk/menu. Menerima `item` dan `onAdd` melalui props.

### Cart.jsx
Menampilkan item yang dipilih, quantity, total harga, hapus item, clear cart, dan tombol pemesanan.

### OrderSuccess.jsx
Modal konfirmasi setelah pesanan dibuat.

## 5. Penggunaan useState

State utama di `App.jsx`:

- `menu` — menyimpan daftar menu.
- `cart` — menyimpan item dalam keranjang.
- `category` — kategori filter aktif.
- `search` — kata kunci pencarian.
- `orderDone` — status modal pesanan berhasil.

Contoh:

```jsx
const [cart, setCart] = useState([]);
```

State diperbarui melalui `setCart`, bukan dengan mengubah array secara langsung.

## 6. Penggunaan useEffect

### Effect data awal

```jsx
useEffect(() => {
  const timer = setTimeout(() => {
    setMenu(initialMenu);
  }, 300);

  return () => clearTimeout(timer);
}, []);
```

Dependency array kosong membuat effect dijalankan ketika component pertama kali dijalankan. `setTimeout` hanya dipakai sebagai simulasi proses pengambilan data awal.

### Effect sinkronisasi cart

```jsx
useEffect(() => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}, [cart]);
```

Effect ini berjalan ketika `cart` berubah dan menyimpan data cart ke browser.

## 7. Penggunaan props

Contoh alur props:

```text
App
 └── MenuList
      └── MenuItem
           ├── item
           └── onAdd
```

`App` mengirim data dan fungsi ke component anak melalui props.

## 8. Fitur aplikasi

- Menampilkan daftar makanan.
- Pencarian menu.
- Filter kategori.
- Tambah makanan ke cart.
- Tambah/kurangi quantity.
- Hapus item.
- Clear cart.
- Perhitungan total item dan total harga.
- Penyimpanan cart di localStorage.
- Simulasi proses pemesanan.
- Modal konfirmasi order.
- Responsive untuk desktop dan mobile.

## 9. Kaitan dengan materi

Materi `Lifecycle dan Hooks` menjelaskan lifecycle sebagai tahapan komponen ketika dibuat, digunakan, diperbarui, dan dihapus. Pada functional component, konsep lifecycle/side effect diterapkan menggunakan Hooks seperti `useEffect`. Project ini menggunakan `useState` untuk state dan `useEffect` untuk efek samping sesuai kebutuhan aplikasi.
