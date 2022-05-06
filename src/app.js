const title = document.querySelectorAll("#title");
const current = document.querySelectorAll("#current");
const previous = document.querySelectorAll("#previous");

const list = document.querySelector(".list");

const till = document.querySelectorAll(".till");

const dailyBtn = document.getElementById("daily");
const weeklyBtn = document.getElementById("weekly");
const monthlyBtn = document.getElementById("monthly");

let flag = true;

const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function () {
    const data = JSON.parse(this.responseText);

    for (let i = 0; i < till.length; i++) {
        title[i].innerText = data[i].title;
        current[i].innerText = `${data[i].timeframes.daily.current}hrs`;
        previous[
            i
        ].innerText = `Yesterday - ${data[i].timeframes.daily.previous}hrs`;

        list.addEventListener("click", (e) => {
            if (e.target.textContent.trim() === "Daily") {
                current[i].innerText = `${data[i].timeframes.daily.current}hrs`;
                previous[
                    i
                ].innerText = `Yesterday - ${data[i].timeframes.daily.previous}hrs`;
            }
            if (e.target.textContent.trim() === "Weekly") {
                current[
                    i
                ].innerText = `${data[i].timeframes.weekly.current}hrs`;
                previous[
                    i
                ].innerText = `Last Week - ${data[i].timeframes.weekly.previous}hrs`;
            }
            if (e.target.textContent.trim() === "Monthly") {
                current[
                    i
                ].innerText = `${data[i].timeframes.monthly.current}hrs`;
                previous[
                    i
                ].innerText = `Last Month - ${data[i].timeframes.monthly.previous}hrs`;
            }
        });
        // if (
        //     dailyBtn.classList == "active" &&
        //     weeklyBtn.classList == "" &&
        //     monthlyBtn.classList == ""
        // ) {
        //     current[i].innerText = `${data[i].timeframes.daily.current}hrs`;
        //     previous[i].innerText = `${data[i].timeframes.daily.previous}hrs`;
        // } else if (
        //     dailyBtn.classList == "" &&
        //     weeklyBtn.classList == "active" &&
        //     monthlyBtn.classList == ""
        // ) {
        //     current[i].innerText = `${data[i].timeframes.weekly.current}hrs`;
        //     previous[i].innerText = `${data[i].timeframes.weekly.previous}hrs`;
        // } else if (
        //     dailyBtn.classList == "" &&
        //     weeklyBtn.classList == "" &&
        //     monthlyBtn.classList == "active"
        // ) {
        //     current[i].innerText = `${data[i].timeframes.monthly.current}hrs`;
        //     previous[i].innerText = `${data[i].timeframes.monthly.previous}hrs`;
        // }
    }
};
xmlhttp.open("GET", "data.json");
xmlhttp.send();

dailyBtn.addEventListener("click", () => {
    dailyBtn.classList.add("active");
    weeklyBtn.classList.remove("active");
    monthlyBtn.classList.remove("active");
});

weeklyBtn.addEventListener("click", () => {
    dailyBtn.classList.remove("active");
    weeklyBtn.classList.add("active");
    monthlyBtn.classList.remove("active");
});

monthlyBtn.addEventListener("click", () => {
    dailyBtn.classList.remove("active");
    weeklyBtn.classList.remove("active");
    monthlyBtn.classList.add("active");
});
