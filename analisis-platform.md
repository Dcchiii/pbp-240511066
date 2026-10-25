| Aspek | Web | Desktop | Mobile |
|-------|-----|---------|--------|
| **Bahasa utama** | HTML, CSS, JavaScript (+ framework seperti React, Vue) | C#, Java, C++, Python (+ framework seperti .NET, Electron, Qt) | Kotlin/Java (Android), Swift (iOS) |
| **Arsitektur** | Client-server — logic dibagi antara browser (client) dan server, komunikasi lewat HTTP/API | Umumnya monolitik/standalone — seluruh logic jalan di satu komputer, akses langsung ke sistem file dan hardware | Berbasis komponen (activity/fragment di Android, view controller di iOS), sering client-server juga untuk fitur online |
| **Cara distribusi** | Lewat URL, diakses langsung via browser, tidak perlu instalasi | Installer (.exe, .dmg, .deb) yang diunduh dan dipasang manual ke sistem operasi | App store (Google Play, App Store), perlu persetujuan platform sebelum publish |
| **Keunggulan** | Lintas platform otomatis (asal ada browser), update instan tanpa aksi user, tidak perlu instalasi | Performa lebih tinggi karena akses langsung ke hardware, bisa jalan offline penuh, UI lebih kaya/kompleks | Mudah dibawa, akses sensor perangkat (kamera, GPS, dll), terintegrasi notifikasi push |
| **Keterbatasan** | Tergantung koneksi internet, performa dibatasi sandbox browser, akses hardware terbatas | Perlu instalasi/update manual tiap perangkat, tidak otomatis lintas OS (butuh build terpisah per OS) | Fragmentasi perangkat/OS, proses review app store bisa lama, ukuran layar terbatas |
| **Contoh aplikasi** | Twitter(X) | Discord | Twitch |

# Referensi
MDN Web Docs — Web Architecture and Web Development Basics https://developer.mozilla.org
Android Developers Documentation — Android System Architecture and Guide to App Architecture https://developer.android.com
Microsoft Learn — Desktop Application Development Documentation https://learn.microsoft.com
