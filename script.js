document.addEventListener('DOMContentLoaded', () => {

    // 1. ລະບົບສະຫຼັບ Dark / Light Mode (Smooth UI)
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        themeToggle.textContent = savedTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            themeToggle.textContent = '🌙 Dark Mode';
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.textContent = '☀️ Light Mode';
            localStorage.setItem('theme', 'dark');
        }
    });

    // 2. ລະບົບປິດ-ເປີດ CV Modal
    const modal = document.getElementById('cv-modal');
    const openCvBtn = document.getElementById('open-cv');
    const closeCvBtn = document.getElementById('close-cv');

    if (openCvBtn && modal && closeCvBtn) {
        openCvBtn.addEventListener('click', () => {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; 
        });

        closeCvBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // 3. ລະບົບສັ່ງພິມ ຫຼື ບັນທຶກ CV ເປັນ PDF
    const printBtn = document.getElementById('print-cv-btn');
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }

    // 4. ລະບົບຈັດການຟອມຕິດຕໍ່ (Contact Form Validation)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = contactForm.querySelector('input[type="text"]').value.trim();
    const email = contactForm.querySelector('input[type="email"]').value.trim();
    const message = contactForm.querySelector('textarea').value.trim();

    const subject = encodeURIComponent(`ຕິດຕໍ່ຈາກ ${name}`);
    const body = encodeURIComponent(
        `ຊື່: ${name}\nEmail: ${email}\n\nຂໍ້ຄວາມ:\n${message}`
    );
        
         alert(`📧 ສົ່ງຂໍ້ມູນເຖິງພວກເຮົາ ສຳເລັດ!\n\nຂອບໃຈທ່ານ: ${name}\nພວກເຮົາໄດ້ຮັບຂໍ້ມູນແລ້ວ ແລະ ຈະຕິດຕໍ່ກັບໄປຫາທ່ານທີ່ ${email} ໂດຍໄວທີ່ສຸດ.`);
    contactForm.reset();
});

}

    // 5. ຈັດການປຸ່ມ Demo ຫວ່າງ ໃຫ້ຂຶ້ນ Alert ແບບມືອາຊີບ
    const liveDemoButtons = document.querySelectorAll('.btn-card-live');
    liveDemoButtons.forEach(btn => {
        if (btn.getAttribute('href') === '#') {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                alert(`🛠️ ຂໍອະໄພນຳ HR ຫຼາຍໆເນີ! ໂຄງການນີ້ກຳລັງອັບໂຫລດຂຶ້ນ Hosting ຕົວຈິງ, ທ່ານສາມາດກົດເບິ່ງ Source Code ໃນ GitHub ໄດ້ເລີຍຈະ!`);
            });
        }
    });
});