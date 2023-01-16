// じゃんけんの手を入力してもらうプロンプト欄を生成

let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

// グー以外かつチョキ以外かつパー以外かつ空欄以外のときは、正しく入力するためのアラートが出続ける
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力して下さい');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}

// じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand, js_hand);

// 手を入力してもらえたら結果を表示する。入力がなかったら別のメッセージを表示する
if (user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。\nコンピュータの選んだ手は' + js_hand + 'です。\nあなた' + judge );
} else {
  alert("またチャレンジしてね")
}

// ランダムでじゃんけんの手を作成する関数
function getJShand(){
  let js_hand_num = Math.floor(Math.random() * 3);
  let hand;
  if (js_hand_num == 0){
    hand = "グー";
  } else if (js_hand_num == 1){
    hand = "チョキ";
  } else if (js_hand_num == 2){
    hand = "パー";
  }
  return hand;
}

// ユーザの手とJavaScriptの勝ち負けを定義する関数
function winLose(user, js){
  let winLoseStr;
  if (user == "グー"){
    if (js == "グー"){
      winLoseStr = "とあいこでした。もう一回やってみよう";
    } else if (js == "チョキ"){
      winLoseStr = "の勝ちです！やったね！";
    } else if (js == "パー"){
      winLoseStr = "の負けです。残念・・・";
    }
  } else if (user == "チョキ"){
    if (js == "グー"){
      winLoseStr = "の負けです。残念・・・";
    } else if (js == "チョキ"){
      winLoseStr = "とあいこでした。もう一回やってみよう";
    } else if (js == "パー"){
      winLoseStr = "の勝ちです！やったね！";
    }
  } else if (user == "パー"){
    if (js == "グー"){
      winLoseStr = "の勝ちです！やったね！";
    } else if (js == "チョキ"){
      winLoseStr = "の負けです。残念・・・";
    } else if (js == "パー"){
      winLoseStr = "とあいこでした。もう一回やってみよう";
    }
  }
  return winLoseStr;
}