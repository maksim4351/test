// SEO Meta tags for different languages
const seoMetaTags = {
    en: {
        title: "Monitor Test Tool - Free Online Display Diagnostics & GPU Performance Testing",
        description: "Free online monitor test tool. Check dead pixels, screen resolution, GPU performance, color accuracy, and display quality. Professional display diagnostics for any monitor.",
        keywords: "monitor test, dead pixel test, screen test, display test, GPU test, monitor diagnostics, screen resolution, color test, monitor quality, display checker, pixel test, color accuracy test, latency test, response time test, HDR test, touch screen test, PWM flicker test, gradient test, view angle test, image retention test"
    },
    ru: {
        title: "Тест монитора онлайн — Проверка экрана, пикселей, цвета, производительности GPU",
        description: "Бесплатный онлайн-сервис для тестирования монитора: проверка битых пикселей, разрешения, производительности GPU, цветопередачи и качества экрана. Подходит для любого дисплея и браузера.",
        keywords: "тест монитора, тест экрана, dead pixel test, проверка пикселей, тест цветопередачи, тест GPU, монитор онлайн, диагностика монитора, screen test, display test, color test, latency test, монитор, дисплей, экран, тестирование, checker, мониторинг, мониторинг экрана, тест на битые пиксели, тест на инверсию, тест на задержку, тест на отклик, тест на ШИМ, тест на засветы, тест на углы обзора, тест на градиент, тест на остаточное изображение, тест на сенсорный экран, тест на мерцание, тест на отклик, тест на задержку, тест на цвет, тест на разрешение, тест на частоту обновления, тест на HDR, тест на sRGB, тест на P3, тест на Rec.2020"
    },
    sv: {
        title: "Skärmtestverktyg - Gratis online skärmdiagnostik och GPU-prestandatestning",
        description: "Gratis online verktyg för skärmtest. Kontrollera döda pixlar, skärmupplösning, GPU-prestanda, färgnoggrannhet och skärmkvalitet. Professionell skärmdiagnostik för alla skärmar.",
        keywords: "skärmtest, död pixel test, skärmtest, display test, GPU test, skärmdiagnostik, skärmupplösning, färgtest, skärmkvalitet, display checker, pixel test, färgnoggrannhet test, latens test, svarstid test, HDR test, pekskärm test, PWM flimmer test, gradient test, betraktningsvinkel test, bildkvarhållning test"
    },
    fi: {
        title: "Näytön testityökalu - Ilmainen online-näytön diagnostikka ja GPU-suorituskykytestaus",
        description: "Ilmainen online-näytön testityökalu. Tarkista kuolleet pikselit, näytön tarkkuus, GPU-suorituskyky, värin tarkkuus ja näytön laatu. Ammattimainen näytön diagnostikka.",
        keywords: "näytön testi, kuollut pikseli testi, näytön testi, näytön testi, GPU testi, näytön diagnostikka, näytön tarkkuus, väritesti, näytön laatu, näytön tarkistin, pikseli testi, värin tarkkuus testi, viiveen testi, vastausajan testi, HDR testi, kosketusnäytön testi, PWM välkytys testi, gradientti testi, katselukulma testi, kuvan säilytys testi"
    },
    no: {
        title: "Skjermtestverktøy - Gratis online skjermdiagnostikk og GPU-ytelsestesting",
        description: "Gratis online skjermtestverktøy. Sjekk døde piksler, skjermoppløsning, GPU-ytelse, fargenøyaktighet og skjermkvalitet. Profesjonell skjermdiagnostikk.",
        keywords: "skjermtest, død piksel test, skjermtest, display test, GPU test, skjermdiagnostikk, skjermoppløsning, fargetest, skjermkvalitet, display checker, piksel test, fargenøyaktighet test, latens test, responstid test, HDR test, berøringsskjerm test, PWM flimre test, gradient test, betraktningsvinkel test, bildebevaring test"
    },
    fr: {
        title: "Outil de test d'écran - Diagnostic d'affichage en ligne gratuit et test de performance GPU",
        description: "Outil de test d'écran en ligne gratuit. Vérifiez les pixels morts, la résolution d'écran, les performances GPU, la précision des couleurs et la qualité d'affichage. Diagnostic d'affichage professionnel.",
        keywords: "test d'écran, test de pixel mort, test d'écran, test d'affichage, test GPU, diagnostic d'écran, résolution d'écran, test de couleur, qualité d'écran, vérificateur d'affichage, test de pixel, test de précision des couleurs, test de latence, test de temps de réponse, test HDR, test d'écran tactile, test PWM/flicker, test de gradient, test d'angle de vue, test de rétention d'image"
    },
    de: {
        title: "Monitor-Test-Tool - Kostenlose Online-Bildschirmdiagnose und GPU-Leistungstest",
        description: "Kostenloses Online-Monitor-Test-Tool. Überprüfen Sie tote Pixel, Bildschirmauflösung, GPU-Leistung, Farbgenauigkeit und Bildschirmqualität. Professionelle Bildschirmdiagnose.",
        keywords: "Monitor-Test, toter Pixel Test, Bildschirmtest, Display-Test, GPU-Test, Bildschirmdiagnose, Bildschirmauflösung, Farbtest, Bildschirmqualität, Display-Checker, Pixel-Test, Farbgenauigkeit-Test, Latenz-Test, Reaktionszeit-Test, HDR-Test, Touchscreen-Test, PWM-Flimmern-Test, Gradient-Test, Betrachtungswinkel-Test, Bildnachwirkung-Test"
    },
    es: {
        title: "Herramienta de prueba de monitor - Diagnóstico de pantalla en línea gratuito y prueba de rendimiento GPU",
        description: "Herramienta gratuita de prueba de monitor en línea. Verifique píxeles muertos, resolución de pantalla, rendimiento GPU, precisión de color y calidad de pantalla. Diagnóstico profesional de pantalla.",
        keywords: "prueba de monitor, prueba de píxel muerto, prueba de pantalla, prueba de display, prueba GPU, diagnóstico de monitor, resolución de pantalla, prueba de color, calidad de monitor, verificador de display, prueba de píxel, prueba de precisión de color, prueba de latencia, prueba de tiempo de respuesta, prueba HDR, prueba de pantalla táctil, prueba PWM/parpadeo, prueba de gradiente, prueba de ángulo de visión, prueba de retención de imagen"
    },
    it: {
        title: "Strumento di test monitor - Diagnostica display online gratuita e test prestazioni GPU",
        description: "Strumento gratuito di test monitor online. Verifica pixel morti, risoluzione schermo, prestazioni GPU, accuratezza colori e qualità display. Diagnostica display professionale.",
        keywords: "test monitor, test pixel morto, test schermo, test display, test GPU, diagnostica monitor, risoluzione schermo, test colore, qualità monitor, controllore display, test pixel, test accuratezza colore, test latenza, test tempo di risposta, test HDR, test schermo touch, test PWM/flicker, test gradiente, test angolo di visione, test ritenzione immagine"
    },
    pt: {
        title: "Ferramenta de teste de monitor - Diagnóstico de tela online gratuito e teste de performance GPU",
        description: "Ferramenta gratuita de teste de monitor online. Verifique pixels mortos, resolução de tela, performance GPU, precisão de cor e qualidade de tela. Diagnóstico profissional de tela.",
        keywords: "teste de monitor, teste de pixel morto, teste de tela, teste de display, teste GPU, diagnóstico de monitor, resolução de tela, teste de cor, qualidade de monitor, verificador de display, teste de pixel, teste de precisão de cor, teste de latência, teste de tempo de resposta, teste HDR, teste de tela touch, teste PWM/flicker, teste de gradiente, teste de ângulo de visão, teste de retenção de imagem"
    },
    ja: {
        title: "モニターテストツール - 無料オンラインディスプレイ診断とGPU性能テスト",
        description: "無料のオンラインモニターテストツール。デッドピクセル、画面解像度、GPU性能、色精度、ディスプレイ品質をチェック。プロフェッショナルなディスプレイ診断。",
        keywords: "モニターテスト, デッドピクセルテスト, 画面テスト, ディスプレイテスト, GPUテスト, モニター診断, 画面解像度, カラーテスト, モニター品質, ディスプレイチェッカー, ピクセルテスト, 色精度テスト, レイテンシーテスト, 応答時間テスト, HDRテスト, タッチスクリーンテスト, PWMフリッカーテスト, グラデーションテスト, 視野角テスト, 残像テスト"
    },
    ko: {
        title: "모니터 테스트 도구 - 무료 온라인 디스플레이 진단 및 GPU 성능 테스트",
        description: "무료 온라인 모니터 테스트 도구. 데드 픽셀, 화면 해상도, GPU 성능, 색상 정확도 및 디스플레이 품질을 확인하세요. 전문 디스플레이 진단.",
        keywords: "모니터 테스트, 데드 픽셀 테스트, 화면 테스트, 디스플레이 테스트, GPU 테스트, 모니터 진단, 화면 해상도, 색상 테스트, 모니터 품질, 디스플레이 체커, 픽셀 테스트, 색상 정확도 테스트, 지연 시간 테스트, 응답 시간 테스트, HDR 테스트, 터치 스크린 테스트, PWM 깜빡임 테스트, 그라데이션 테스트, 시야각 테스트, 잔상 테스트"
    },
    zh: {
        title: "显示器测试工具 - 免费在线显示诊断和GPU性能测试",
        description: "免费在线显示器测试工具。检查死像素、屏幕分辨率、GPU性能、色彩精度和显示质量。专业显示诊断。",
        keywords: "显示器测试, 死像素测试, 屏幕测试, 显示测试, GPU测试, 显示器诊断, 屏幕分辨率, 色彩测试, 显示器质量, 显示检查器, 像素测试, 色彩精度测试, 延迟测试, 响应时间测试, HDR测试, 触摸屏测试, PWM闪烁测试, 渐变测试, 视角测试, 残像测试"
    },
    ar: {
        title: "أداة اختبار الشاشة - تشخيص عرض مجاني عبر الإنترنت واختبار أداء GPU",
        description: "أداة اختبار شاشة مجانية عبر الإنترنت. تحقق من البكسل الميت ودقة الشاشة وأداء GPU ودقة الألوان وجودة العرض. تشخيص عرض احترافي.",
        keywords: "اختبار الشاشة, اختبار البكسل الميت, اختبار الشاشة, اختبار العرض, اختبار GPU, تشخيص الشاشة, دقة الشاشة, اختبار اللون, جودة الشاشة, فاحص العرض, اختبار البكسل, اختبار دقة اللون, اختبار الكمون, اختبار وقت الاستجابة, اختبار HDR, اختبار الشاشة اللمسية, اختبار PWM/الوميض, اختبار التدرج, اختبار زاوية الرؤية, اختبار استبقاء الصورة"
    },
    hi: {
        title: "मॉनिटर टेस्ट टूल - मुफ्त ऑनलाइन डिस्प्ले डायग्नोस्टिक और GPU परफॉर्मेंस टेस्टिंग",
        description: "मुफ्त ऑनलाइन मॉनिटर टेस्ट टूल। डेड पिक्सेल, स्क्रीन रेजोल्यूशन, GPU परफॉर्मेंस, कलर एक्यूरेसी और डिस्प्ले क्वालिटी की जांच करें। पेशेवर डिस्प्ले डायग्नोस्टिक।",
        keywords: "मॉनिटर टेस्ट, डेड पिक्सेल टेस्ट, स्क्रीन टेस्ट, डिस्प्ले टेस्ट, GPU टेस्ट, मॉनिटर डायग्नोस्टिक, स्क्रीन रेजोल्यूशन, कलर टेस्ट, मॉनिटर क्वालिटी, डिस्प्ले चेकर, पिक्सेल टेस्ट, कलर एक्यूरेसी टेस्ट, लेटेंसी टेस्ट, रेस्पॉन्स टाइम टेस्ट, HDR टेस्ट, टच स्क्रीन टेस्ट, PWM फ्लिकर टेस्ट, ग्रेडिएंट टेस्ट, व्यू एंगल टेस्ट, इमेज रिटेंशन टेस्ट"
    },
    tr: {
        title: "Monitör Test Aracı - Ücretsiz Çevrimiçi Ekran Tanısı ve GPU Performans Testi",
        description: "Ücretsiz çevrimiçi monitör test aracı. Ölü pikselleri, ekran çözünürlüğünü, GPU performansını, renk doğruluğunu ve ekran kalitesini kontrol edin. Profesyonel ekran tanısı.",
        keywords: "monitör testi, ölü piksel testi, ekran testi, görüntü testi, GPU testi, monitör tanısı, ekran çözünürlüğü, renk testi, monitör kalitesi, görüntü kontrolörü, piksel testi, renk doğruluğu testi, gecikme testi, yanıt süresi testi, HDR testi, dokunmatik ekran testi, PWM titreşim testi, gradyan testi, görüş açısı testi, görüntü kalıcılığı testi"
    },
    nl: {
        title: "Monitor Test Tool - Gratis online schermdiagnose en GPU-prestatietest",
        description: "Gratis online monitor test tool. Controleer dode pixels, schermresolutie, GPU-prestaties, kleurnauwkeurigheid en schermkwaliteit. Professionele schermdiagnose.",
        keywords: "monitor test, dode pixel test, scherm test, display test, GPU test, monitor diagnose, schermresolutie, kleur test, monitor kwaliteit, display checker, pixel test, kleurnauwkeurigheid test, latentie test, responstijd test, HDR test, touchscreen test, PWM flikkering test, gradient test, kijkhoek test, beeldretentie test"
    },
    pl: {
        title: "Narzędzie testowe monitora - Darmowa online diagnostyka wyświetlacza i test wydajności GPU",
        description: "Darmowe online narzędzie testowe monitora. Sprawdź martwe piksele, rozdzielczość ekranu, wydajność GPU, dokładność kolorów i jakość wyświetlacza. Profesjonalna diagnostyka wyświetlacza.",
        keywords: "test monitora, test martwego piksela, test ekranu, test wyświetlacza, test GPU, diagnostyka monitora, rozdzielczość ekranu, test koloru, jakość monitora, sprawdzacz wyświetlacza, test piksela, test dokładności koloru, test opóźnienia, test czasu odpowiedzi, test HDR, test ekranu dotykowego, test PWM/migotania, test gradientu, test kąta widzenia, test retencji obrazu"
    }
};

// Function to update SEO meta tags based on language
function updateSEOMetaTags(lang) {
    const meta = seoMetaTags[lang] || seoMetaTags.en;
    
    // Update title
    document.title = meta.title;
    
    // Update description
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
        descMeta.setAttribute('content', meta.description);
    }
    
    // Update keywords
    const keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (keywordsMeta) {
        keywordsMeta.setAttribute('content', meta.keywords);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
        ogTitle.setAttribute('content', meta.title);
    }
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
        ogDesc.setAttribute('content', meta.description);
    }
    
    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
        twitterTitle.setAttribute('content', meta.title);
    }
    
    const twitterDesc = document.querySelector('meta[property="twitter:description"]');
    if (twitterDesc) {
        twitterDesc.setAttribute('content', meta.description);
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { seoMetaTags, updateSEOMetaTags };
} 