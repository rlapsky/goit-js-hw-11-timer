let getEl = x => document.querySelector(x)
class CountdownTimer {
    constructor({selector, targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate;
    }
    time() {
        let interval = setInterval(() => {
            let time = new Date(this.targetDate) - new Date()
            if (time <= 0) {
                clearInterval(interval)
                return;
            } else {
                const days = Math.floor(time / (1000 * 60 * 60 * 24));
                const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
                const secs = Math.floor((time % (1000 * 60)) / 1000);
                days < 10 ? getEl(`${this.selector} [data-value="days"]`).textContent = '0' + days : getEl(`${this.selector} [data-value="days"]`).textContent = days;
                hours < 10 ? getEl(`${this.selector} [data-value="hours"]`).textContent = '0' + hours : getEl(`${this.selector} [data-value="hours"]`).textContent = hours;
                mins < 10 ? getEl(`${this.selector} [data-value="mins"]`).textContent = '0' + mins : getEl(`${this.selector} [data-value="mins"]`).textContent = mins;
                secs < 10 ? getEl(`${this.selector} [data-value="secs"]`).textContent = '0' + secs : getEl(`${this.selector} [data-value="secs"]`).textContent = secs;
            }
        }, 1000)
    }
}
let test = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Apr 08, 2022, 17:58'),
});
test.time()