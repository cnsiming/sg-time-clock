const TIME_ZONE = "Asia/Singapore";

const clockEl = document.getElementById("clock");
const dateEl = document.getElementById("date");
const tznameEl = document.getElementById("tzname");
const offsetEl = document.getElementById("offset");

function pad(n) {
  return String(n).padStart(2, "0");
}

function render() {
  const now = new Date();

  // 新加坡时区的小时/分钟/秒
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(now);

  const get = (type) => parts.find((p) => p.type === type)?.value ?? "00";
  clockEl.textContent = `${get("hour")}:${get("minute")}:${get("second")}`;

  // 日期 + 星期（新加坡时区）
  dateEl.textContent = new Intl.DateTimeFormat("zh-CN", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  }).format(now);

  // 时区名与 UTC 偏移
  tznameEl.textContent =
    new Intl.DateTimeFormat("en-US", { timeZone: TIME_ZONE, timeZoneName: "long" })
      .formatToParts(now)
      .find((p) => p.type === "timeZoneName")?.value ?? TIME_ZONE;

  const offsetMin = -now.getTimezoneOffset(); // 本地，仅参考
  const sgOffset = 8 * 60; // UTC+8 固定
  offsetEl.textContent = `UTC${sgOffset >= 0 ? "+" : "-"}${pad(Math.abs(sgOffset) / 60)}:00`;
}

render();
setInterval(render, 1000);
