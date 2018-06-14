let totalBet = 50;

switch (totalBet) {
  case 7:
    totalBet = funds;
    break;
  case 11:
    totalBet = 0;
    break;
  case 13:
    totalBet = 0;
    break;
  case 21:
    totalBet = 21;
    break;
}

switch (totalBet) {
  case 7:
    totalBet = funds;
    break;
  case 11: //フォールスルー(11と13の時に何も賭けない)
  case 13:
    totalBet = 0;
    break;
  case 21:
    totalBet = 21;
    break;
}

switch (totalBet) {
  case 7:
    totalBet = funds;
    break;
  case 13: //チャリティに1ペニー寄付
    funds = funds - 1;
  case 13:
    totalBet = 0;
    break;
  case 21:
    totalBet = 21;
    break;
}

//breakまたはreturnをswitchと同じ行に書いて、コンパクトにまとめる
function adjustBet(totalBet, funds) { //賭け金を調整
  switch (totalBet) {
    case 7: totalBet = funds; break;
    case 11: totalBet = 0; break;
    case 13: totalBet = 0; break;
    case 21: totalBet = 21; break;
  }
}

switch (totalBet) {
  case 7:
    totalBet = funds;
    break;
  case 13: //チャリティに1ペニー寄付
    funds = funds - 1;
  case 13:
    totalBet = 0;
    break;
  case 21:
    totalBet = 21;
    break;
  default:
    console.log("縁起担ぎはなし。");
    break;
}

function adjustBet(totalBet, funds) { //賭け金を調整
  switch (totalBet) {
    case 7:
      return funds;
    case 13:
      return 0;
    default:
      return totalBet;
  }
}



