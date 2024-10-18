let networkCode = 2;

switch (networkCode) {
  case 1:
    console.log("MTN: Call rate is UGX 10 shs per minute");
    break;
  case 2:
    console.log("Airtel: Call rate is UGX 12 shs per minute");
    break;
  case 3:
    console.log("Africell: Call rate is UGX 7 shs per minute");
    break;
  default:
    console.log("Invalid network code");
}