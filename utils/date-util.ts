const DateUtil = {
  dateToElapsedString: (date: Date): string => {
    const data = new Date(date);
    const now = new Date();
    const elapsedSec = (now.getTime() - data.getTime()) / 1000;
    if (elapsedSec < 60) {
      return `${Math.floor(elapsedSec)}초 전`;
    } else if (elapsedSec < 60 * 60) {
      return `${Math.floor(elapsedSec / 60)}분 전`;
    } else if (elapsedSec < 60 * 60 * 24) {
      return `${Math.floor(elapsedSec / (60 * 24))}시간 전`;
    } else {
      return DateUtil.dateToYMDString(data);
    }
  },
  dateToYMDString: (date: Date): string => {
    const data = new Date(date);
    const year = data.getFullYear();
    const month = ("0" + (data.getMonth() + 1)).slice(-2);
    const day = ("0" + data.getDate()).slice(-2);
    return year + "-" + month + "-" + day;
  },
  dateToYMString: (date: Date): string => {
    const data = new Date(date);
    const year = data.getFullYear();
    const month = ("0" + (data.getMonth() + 1)).slice(-2);
    return year + "-" + month;
  },
  getYMDiff: (startedAt: Date, endedAt?: Date): string => {
    const start = new Date(startedAt);
    const end = endedAt ? new Date(endedAt) : new Date();

    if (end.getFullYear() === start.getFullYear())
      return `${end.getMonth() - start.getMonth()}개월`;

    if (end.getMonth() > start.getMonth()) {
      const monthDiff = end.getMonth() - start.getMonth();
      const yearDiff = end.getFullYear() - start.getFullYear();
      return `${yearDiff}년 ${monthDiff}개월`;
    }

    const monthDiff = end.getMonth() - start.getMonth() + 12;
    const yearDiff = end.getFullYear() - start.getFullYear() - 1;
    return `${yearDiff > 0 ? `${yearDiff}년 ` : ""}${monthDiff}개월`;
  },
};

export default DateUtil;
