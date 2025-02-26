        // // Theme toggle functionality
        // const themeToggle = document.getElementById('theme-toggle');
        // const html = document.documentElement;
        
        // themeToggle.addEventListener('click', () => {
        //     html.classList.toggle('dark');
            
        //     // Store theme preference
        //     const isDark = html.classList.contains('dark');
        //     localStorage.setItem('darkMode', isDark ? 'true' : 'false');
        // });
        
        // // Check for saved theme preference
        // const savedDarkMode = localStorage.getItem('darkMode');
        // if (savedDarkMode === 'true') {
        //     html.classList.add('dark');
        // } else if (savedDarkMode === 'false') {
        //     html.classList.remove('dark');
        // } else {
        //     // If no preference is saved, respect system preference
        //     if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        //         html.classList.add('dark');
        //     }

        
        document.addEventListener("DOMContentLoaded", async function () {
            const username = "lutfyVX"; // Perbaiki kesalahan penulisan
            const avatarImg = document.getElementById("github-avatar");
            const nameElement = document.getElementById("github-name");
        
            try {
                const response = await fetch(`https://api.github.com/users/${username}`);
                
                if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);
        
                const data = await response.json();
                avatarImg.src = data.avatar_url || "default-avatar.png"; // Gunakan default jika kosong
                nameElement.textContent = data.name || data.login || "Nama tidak tersedia";
            } catch (error) {
                console.error("Error fetching GitHub profile:", error);
                nameElement.textContent = "Gagal memuat profil";
            }
        });
        

        // Kondisi API kalo tidak memadai

        

        