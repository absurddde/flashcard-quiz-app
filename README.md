#Kelime Tekrar Uygulaması

Google Sheets'teki kelime listenizi otomatik çeken, ücretsiz flashcard ve quiz uygulaması.

---

## Nasıl Kullanılır?

### 1. Şablonu indir ve doldur

[Excel şablonunu indir](./kelime-tekrar-sablon.xlsx) — dosyayı Google Drive'a yükle, Google Sheets olarak aç, kelimelerini ekle.

| Sütun | Açıklama |
|---|---|
| Yabancı Kelime | Öğrenmek istediğin kelime |
| Türkçe Anlam | Kelimenin Türkçe karşılığı |
| Kelime Türü | Fiil, İsim, Sıfat... (opsiyonel) |
| Örnek Cümle | Kelimenin geçtiği bir cümle (opsiyonel) |
| Zorluk (1-5) | 1 = Çok kolay, 5 = Çok zor (opsiyonel) |

---

### 2. Apps Script'i kur

Google Sheets'te **Uzantılar → Apps Script** aç.

Açılan editördeki kodu tamamen sil, [apps-script.gs](./apps-script.gs) dosyasındaki kodu yapıştır ve kaydet.

**Dağıt → Yeni dağıtım** tıkla:
- Türü seçin: **Web uygulaması**
- Erişim: **Herkes**
- **Dağıt** ;
- Erişim yetkisi isterse gerekli izinleri ver ve devam et.
- Açılan ekranda web uygulaması altında çıkan URL'yi kopyala

---

### 3. Uygulamayı aç ve bağlan

**[→ Uygulamayı Aç](https://absurddde.github.io/flashcard-quiz-app)**

Kopyaladığın URL'yi yapıştır → **Bağlan** — kelimeler otomatik yüklenir.

> URL kaydedilir, sonraki açılışlarda tekrar sormaz.

---

## Özellikler

- Flashcard — kartı çevir, biliyorum / tekrar çalış
- Quiz — 4 seçenekli test, yanlışlar tekrar gelir
- Cümle Tamamlama — örnek cümledeki boşluğu doldur
- Sesli okuma
- Yabancı Dil → Türkçe veya Türkçe → Yabancı Dil modu
- Skor takibi

---

## Gizlilik

Veriler yalnızca kendi Google hesabından gelir. Hiçbir sunucuya gönderilmez.

---

## Lisans

MIT
