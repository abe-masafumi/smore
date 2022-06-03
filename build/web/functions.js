import { connect_firebase } from "./firebase.config.js"
import { getAuth,signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const app = connect_firebase();
const auth = getAuth(app);

// ログアウト処理
document.getElementById('sign_out').addEventListener('click', (e) => { 
    const info = confirm("ログアウトしますか？");
    if (info) {

        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("ログインページに戻ってください");
            window.location.href = './login_form.html';
        }).catch((error) => {
            // An error happened.
            console.log("ログアウトできませんでした",error);
        });
    } else {
        return
    }

    });
    
export function make_sign_out_display() {
    const big_container = document.getElementById('big_container');
    const prompt = document.getElementById('prompt');
    prompt.classList.remove("none");
    big_container.classList.add("none");
}