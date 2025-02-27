document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return; // Cegah error jika tombol tidak ditemukan

    const html = document.documentElement;
    
    function setTheme(isDark) {
        if (isDark) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
        localStorage.setItem('darkMode', isDark ? 'true' : 'false');
        updateThemeIcon();
    }

    // Cek tema awal dari sistem atau localStorage
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('darkMode');
    
    setTheme(storedTheme !== null ? storedTheme === 'true' : prefersDark);

    // Toggle tema saat tombol diklik
    themeToggle.addEventListener('click', () => {
        setTheme(!html.classList.contains('dark'));
    });

    // Deteksi perubahan tema sistem
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
        if (localStorage.getItem('darkMode') === null) {
            setTheme(e.matches);
        }
    });
});

// Fungsi update icon theme
function updateThemeIcon() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    const isDark = document.documentElement.classList.contains('dark');
    themeToggle.innerHTML = isDark ? 
        `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>` :
        `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>`;
}


document.addEventListener("DOMContentLoaded", async function () {
    const username = "lutfyVX"; 
    const avatarImg = document.getElementById("github-avatar");
    const nameElement = document.getElementById("github-name");

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        
        if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);

        const data = await response.json();
        avatarImg.src = data.avatar_url || "default-avatar.png"; 
        nameElement.textContent = data.name || data.login || "Nama tidak tersedia";
    } catch (error) {
        console.error("Error fetching GitHub profile:", error);
        nameElement.textContent = "Gagal memuat profil";
    }
});


// Sakana Njir :v
const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });


// Menyesuaikan ikon hamburger di dark mode
const observer = new MutationObserver(() => {
    if (htmlElement.classList.contains('dark')) {
        menuBtn.classList.add('text-gray-300');
        menuBtn.classList.remove('text-gray-600');
    } else {
        menuBtn.classList.add('text-gray-600');
        menuBtn.classList.remove('text-gray-300');
    }
});

observer.observe(htmlElement, { attributes: true, attributeFilter: ['class'] });

//decryption text effect
document.addEventListener("DOMContentLoaded", () => {
    console.log("Script loaded"); // Cek apakah JS berjalan

    function decryptText(element, originalText, speed = 50) {
        if (!element) {
            console.error("Element not found:", element);
            return;
        }

        let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:',.<>?/";
        let iterations = 0;

        let interval = setInterval(() => {
            element.textContent = originalText
                .split("")
                .map((char, i) => (i < iterations ? originalText[i] : letters[Math.floor(Math.random() * letters.length)]))
                .join("");

            iterations++;
            if (iterations > originalText.length) clearInterval(interval);
        }, speed);
    }

    setTimeout(() => {
        decryptText(document.querySelector("#id-name .text-cyan-400"), "Naufal Lutfi");
        decryptText(document.querySelector("#jp-name .text-cyan-400"), "ナウファル・ルトフィ");
        decryptText(document.querySelector("#en-name .text-cyan-400"), "Lutfi's");
        decryptText(document.querySelector("#pronoun"), "(he/him)");
    }, 500);
});
