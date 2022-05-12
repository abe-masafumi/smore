// firebseの初期化
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
export function connect_firebase() {
    const firebaseConfig = { 
        apiKey: "AIzaSyBxcekDS5A88ia8yJNaYqf3zj-IDyZE8o4",
        authDomain: "smore-832e4.firebaseapp.com",
        projectId: "smore-832e4",
        storageBucket: "smore-832e4.appspot.com",
        messagingSenderId: "311127753115",
        appId: "1:311127753115:web:67ed1ae316ff0f8fefe13e",
        measurementId: "G-XTNRM12DGK" 
    };
    const app = initializeApp(firebaseConfig);
    return app
} 

// export function connect_petDB() {
//     const firebaseConfig = {
//         apiKey: "AIzaSyAMJ3jET_8k3FYTSS2agXWasmYvl6c6TTY",
//         authDomain: "smore-owner.firebaseapp.com",
//         projectId: "smore-owner",
//         storageBucket: "smore-owner.appspot.com",
//         messagingSenderId: "751818729777",
//         appId: "1:751818729777:web:6c65ccbd233dbadd5a6810",
//         measurementId: "G-V94XHGM76L"
//       };
//     const app = initializeApp(firebaseConfig);
//     return app
// } 

