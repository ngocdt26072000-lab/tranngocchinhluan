// Hiệu ứng chào mừng
window.addEventListener('load', () => {
    console.log('Website Chính luận đã tải thành công!');

    // Hiệu ứng xuất hiện cho các thẻ thống kê
    const stats = document.querySelectorAll('.stat, .hero-card');
    stats.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';

        setTimeout(() => {
            item.style.transition = 'all 0.8s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 300 + index * 200);
    });
// Hiệu ứng đếm số
    const counters = document.querySelectorAll('.stat h3');
    counters.forEach(counter => {
        const text = counter.textContent;
        const number = parseInt(text);
        if (!isNaN(number)) {
            let current = 0;
            const increment = Math.ceil(number / 40);
            const suffix = text.replace(/[0-9]/g, '');

            const timer = setInterval(() => {
                current += increment;
                if (current >= number) {
                    current = number;
                    clearInterval(timer);
                }
                counter.textContent = current + suffix;
            }, 40);
        }
    });
}); 