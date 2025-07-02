                                            // SLIDER IMG
const slider = document.querySelector(".holder-img");
const images = document.querySelectorAll(".imgs");
const nextBtn = document.getElementById("right-arrow");
const prevBtn = document.getElementById("left-arrow");

let index = 0; // المؤشر الحالي للصورة

// تحديث موضع السلايدر
function updateSlider() {
    slider.style.transform = `translateX(${-index * 100}%)`;
}

// الزر الأيمن: الانتقال للصورة التالية
nextBtn.addEventListener("click", () => {
    if (index < images.length - 1) {
        index++;
    } else {
        index = 0; // يرجع لأول صورة
    }
    updateSlider();
});

// الزر الأيسر: العودة للصورة السابقة
prevBtn.addEventListener("click", () => {
    if (index > 0) {
        index--;
    } else {
        index = images.length - 1; // يرجع لآخر صورة
    }
    updateSlider();
});

// تحريك الصور تلقائيًا كل 5 ثوانٍ
setInterval(() => {
    if (index < images.length - 1) {
        index++;
    } else {
        index = 0;
    }
    updateSlider();
}, 5000);