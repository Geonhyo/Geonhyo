const NumberUtil = {
  numberToThreeDigits: (num: number) => {
    let display = "";
    const numString = num.toString();
    const digits = numString.length;
    const validNumDigits = num % 3;
    switch (validNumDigits) {
      case 0:
        display = numString.substring(0, 3);
      case 1:
        display = `${numString.substring(0, 1)}.${numString.substring(1, 1)}`;
      case 2:
        display = `${numString.substring(0, 2)}.${numString.substring(2, 1)}`;
    }
    const unit = NumberUtil.getUnit(digits);
    return `${display}${unit}`;
  },
  getUnit: (digits: number) => {
    if (digits > 15) {
      return "Q";
    }
    if (digits > 12) {
      return "T";
    }
    if (digits > 9) {
      return "B";
    }
    if (digits > 6) {
      return "M";
    }
    if (digits > 3) {
      return "K";
    }
    return "";
  },
};

export default NumberUtil;
