export type ServiceArticle = {
  slug: string;
  title: string;
  summary: string;
  intro: string;
  sections: Array<{
    heading: string;
    body: string;
  }>;
  highlights: string[];
};

export const serviceArticles: ServiceArticle[] = [
  {
    slug: "asilama",
    title: "Aşılama",
    summary:
      "Petinizin yaşına, yaşam alanına ve risk profiline göre koruyucu aşı planları oluşturuyoruz.",
    intro:
      "Aşılama hizmetimiz, yavruluk döneminden ileri yaş takibine kadar her evrede bağışıklık korumasını sistemli biçimde planlar. Hekimlerimiz her ziyaret öncesinde genel sağlık değerlendirmesi yapar ve yalnızca uygun klinik durumda aşı uygular.",
    sections: [
      {
        heading: "Kişiye Özel Takvim",
        body:
          "Kedi, köpek ve egzotik türlerde uygulama sıklığı aynı değildir. Bu nedenle aşı programını petinizin türüne, önceki aşı geçmişine ve yaşam rutinine göre yeniden şekillendiriyoruz.",
      },
      {
        heading: "Takip ve Hatırlatma",
        body:
          "Bir sonraki doz tarihlerini kliniğimizde kayıt altına alıyor, gecikmeleri önlemek için düzenli hatırlatma planı oluşturuyoruz. Böylece koruyucu hekimlik kesintiye uğramıyor.",
      },
    ],
    highlights: [
      "Yavru ve erişkin aşı protokolleri",
      "İç-dış parazit entegrasyonu",
      "Düzenli hatırlatma sistemi",
    ],
  },
  {
    slug: "cerrahi-operasyonlar",
    title: "Cerrahi Operasyonlar",
    summary:
      "Steril ameliyathane koşullarında planlı ve acil cerrahi operasyonlar gerçekleştiriyoruz.",
    intro:
      "Cerrahi bir müdahale yalnızca operasyon anından ibaret değildir. Muayene, preoperatif değerlendirme, anestezi güvenliği ve operasyon sonrası yoğun takip sürecini tek bir klinik standart altında yönetiyoruz.",
    sections: [
      {
        heading: "Operasyon Öncesi Değerlendirme",
        body:
          "Kan tahlilleri, görüntüleme ve kardiyak risk analizi gibi kontroller sayesinde operasyon planını petinizin genel durumuna göre hazırlıyoruz.",
      },
      {
        heading: "İyileşme Süreci",
        body:
          "Cerrahi sonrası ağrı yönetimi, pansuman takibi ve kontrol muayeneleriyle iyileşme sürecinin her adımını yakından izliyoruz.",
      },
    ],
    highlights: [
      "Yumuşak doku cerrahisi",
      "Kısırlaştırma operasyonları",
      "Acil müdahale altyapısı",
    ],
  },
  {
    slug: "ic-hastaliklari",
    title: "İç Hastalıkları",
    summary:
      "Sistemik rahatsızlıkların tanı ve tedavisinde kapsamlı klinik değerlendirme sunuyoruz.",
    intro:
      "İç hastalıkları birimimiz; sindirim sistemi, böbrek, karaciğer, endokrin ve solunum sistemi kaynaklı tabloları bütüncül biçimde değerlendirir. Belirtiyi değil, sorunun kaynağını hedefleyen bir yaklaşım benimsiyoruz.",
    sections: [
      {
        heading: "Doğru Tanı Süreci",
        body:
          "Ayrıntılı anamnez, fizik muayene ve laboratuvar destekli incelemelerle klinik tabloyu katmanlı olarak değerlendiriyoruz.",
      },
      {
        heading: "Uzun Süreli Takip",
        body:
          "Kronik vakalarda düzenli kontrol, diyet yönetimi ve ilaç planı revizyonlarıyla sürdürülebilir tedavi takibi sağlıyoruz.",
      },
    ],
    highlights: [
      "Kronik hastalık yönetimi",
      "Bireysel tedavi protokolleri",
      "Periyodik kontrol planı",
    ],
  },
  {
    slug: "dogum-ve-jinekoloji",
    title: "Doğum ve Jinekoloji",
    summary:
      "Üreme sağlığı, gebelik takibi ve doğum süreçlerini modern veteriner yaklaşımıyla yönetiyoruz.",
    intro:
      "Doğum ve jinekoloji hizmetlerimiz, üreme planlamasından gebelik izlemlerine kadar geniş bir çerçevede sunulur. Anne adayının konforu ve yavruların güvenliği her aşamada önceliğimizdir.",
    sections: [
      {
        heading: "Gebelik İzlemi",
        body:
          "Gebeliğin evresine göre ultrason kontrolleri, beslenme planlaması ve risk değerlendirmesi yapıyoruz.",
      },
      {
        heading: "Doğum Desteği",
        body:
          "Normal doğum sürecini yakından izliyor, gerekli durumlarda acil obstetrik müdahale için tam hazırlıklı ilerliyoruz.",
      },
    ],
    highlights: [
      "Gebelik doğrulama",
      "Riskli doğum yönetimi",
      "Doğum sonrası bakım",
    ],
  },
  {
    slug: "agiz-ve-dis",
    title: "Ağız ve Diş",
    summary:
      "Ağız kokusu, diş taşı, diş eti sorunları ve oral bakım süreçlerini klinik düzeyde ele alıyoruz.",
    intro:
      "Ağız ve diş sağlığı, genel sağlık durumunu doğrudan etkiler. Düzenli diş kontrolleri ile iştah kaybı, ağrı ve enfeksiyon kaynaklı ikincil sorunların önüne geçiyoruz.",
    sections: [
      {
        heading: "Profesyonel Temizlik",
        body:
          "Diş taşı temizliği ve detaylı ağız muayenesi ile görünmeyen oral problemleri erken dönemde tespit ediyoruz.",
      },
      {
        heading: "Koruyucu Yaklaşım",
        body:
          "Evde bakım önerileri, uygun çiğneme ürünleri ve kontrol sıklığı planlarıyla ağız sağlığını sürdürülebilir hale getiriyoruz.",
      },
    ],
    highlights: [
      "Diş taşı temizliği",
      "Diş eti kontrolü",
      "Ağız kokusu değerlendirmesi",
    ],
  },
  {
    slug: "laboratuar-tahlilleri",
    title: "Laboratuar Tahlilleri",
    summary:
      "Hızlı ve güvenilir laboratuvar tahlilleriyle klinik karar sürecini güçlendiriyoruz.",
    intro:
      "Laboratuvar birimimiz; kan sayımı, biyokimya, mikroskobik inceleme ve enfeksiyon odaklı testlerle tanı sürecini destekler. Sonuçları klinik bulgularla birlikte yorumlayarak tedavi planına dönüştürüyoruz.",
    sections: [
      {
        heading: "Hızlı Sonuç Akışı",
        body:
          "Kritik durumlarda karar süresini kısaltmak için temel testleri mümkün olan en kısa sürede raporluyoruz.",
      },
      {
        heading: "Klinik Yorumlama",
        body:
          "Test çıktısını tek başına değil, muayene bulguları ve görüntüleme sonuçlarıyla birlikte ele alıyoruz.",
      },
    ],
    highlights: [
      "Hemogram ve biyokimya",
      "Parazit incelemeleri",
      "Enfeksiyon taramaları",
    ],
  },
  {
    slug: "ultrasonografi",
    title: "Ultrasonografi",
    summary:
      "Yumuşak doku ve organ değerlendirmelerinde yüksek çözünürlüklü ultrasonografi kullanıyoruz.",
    intro:
      "Ultrasonografi, girişimsel olmayan ve hızlı bilgi sağlayan görüntüleme yöntemlerinden biridir. Karın içi organlar, gebelik izlemi ve sıvı birikimleri gibi birçok başlıkta güvenilir değerlendirme sunar.",
    sections: [
      {
        heading: "Ayrıntılı Organ İncelemesi",
        body:
          "Karaciğer, böbrek, dalak, mesane ve bağırsak yapıları gerçek zamanlı olarak değerlendirilir.",
      },
      {
        heading: "Yönlendirici Görüntüleme",
        body:
          "Cerrahi kararlar, biyopsi planlaması ve gebelik takibi gibi süreçlerde ultrasonografi önemli bir yol gösterici olur.",
      },
    ],
    highlights: [
      "Gebelik kontrolleri",
      "Karın içi organ taraması",
      "Hızlı non-invaziv değerlendirme",
    ],
  },
  {
    slug: "rontgen",
    title: "Röntgen",
    summary:
      "Kemik, eklem ve toraks değerlendirmelerinde dijital röntgen desteği sunuyoruz.",
    intro:
      "Röntgen ünitemiz sayesinde travma, ortopedik sorunlar ve solunum sistemi problemlerinde hızlı görüntüleme sağlıyoruz. Dijital altyapı, görüntü kalitesini artırırken değerlendirme süresini kısaltır.",
    sections: [
      {
        heading: "Ortopedik İnceleme",
        body:
          "Kırık, çıkık ve eklem bozukluklarında doğru müdahale planı için net görüntüler elde ediyoruz.",
      },
      {
        heading: "Toraks ve Abdomen Değerlendirmesi",
        body:
          "Akciğer, kalp silüeti ve abdominal yapıların genel görünümü için röntgen, hızlı tarama imkanı sağlar.",
      },
    ],
    highlights: [
      "Dijital röntgen cihazı",
      "Travma değerlendirmesi",
      "Hızlı raporlama",
    ],
  },
  {
    slug: "suni-tohumlama",
    title: "Suni Tohumlama",
    summary:
      "Üreme planlamasında kontrollü ve bilimsel suni tohumlama desteği veriyoruz.",
    intro:
      "Suni tohumlama hizmeti; doğru zamanlama, üreme sağlığı analizi ve dikkatli takip gerektirir. Süreci hem anne adayının hem de planlanan eşleşmenin biyolojik koşullarına göre yürütüyoruz.",
    sections: [
      {
        heading: "Zamanlama ve Hazırlık",
        body:
          "Hormonal döngü takibi ve muayene bulgularıyla en uygun uygulama zamanını belirliyoruz.",
      },
      {
        heading: "Takip Süreci",
        body:
          "Uygulama sonrası gebelik doğrulama ve erken dönem takip protokolleriyle süreci güvenle izliyoruz.",
      },
    ],
    highlights: [
      "Üreme sağlığı değerlendirmesi",
      "Planlı uygulama süreci",
      "Gebelik takibi",
    ],
  },
  {
    slug: "fizik-tedavi",
    title: "Fizik Tedavi",
    summary:
      "Ortopedik ve nörolojik iyileşme süreçlerinde destekleyici fizik tedavi uyguluyoruz.",
    intro:
      "Fizik tedavi, yalnızca hareket kabiliyetini artırmak için değil, ağrıyı azaltmak ve yaşam kalitesini yükseltmek için de önemlidir. Rehabilitasyon planını tanıya ve yaşa göre özelleştiriyoruz.",
    sections: [
      {
        heading: "Hareket Analizi",
        body:
          "Yürüyüş paterni, kas gücü ve eklem açıklığını değerlendirerek tedavi hedeflerini net biçimde belirliyoruz.",
      },
      {
        heading: "Rehabilitasyon Planı",
        body:
          "Seans sıklığını, ev egzersizlerini ve ilerleme kontrollerini bütüncül bir plan halinde sunuyoruz.",
      },
    ],
    highlights: [
      "Ortopedik rehabilitasyon",
      "Kas gücü desteği",
      "Kişisel seans planı",
    ],
  },
  {
    slug: "yogun-bakim",
    title: "Yoğun Bakım",
    summary:
      "Kritik hastalarda sürekli izlem ve hızlı müdahale gerektiren yoğun bakım desteği sağlıyoruz.",
    intro:
      "Yoğun bakım ünitemiz, stabil olmayan hastalar için yakın takip ve destekleyici tedaviler sunar. Solunum, dolaşım, sıvı dengesi ve ağrı yönetimi gibi hayati parametreler düzenli izlenir.",
    sections: [
      {
        heading: "Sürekli İzlem",
        body:
          "Yoğun bakım süresince temel yaşamsal bulgular belirli aralıklarla kaydedilir ve klinik tabloya göre hızlı karar alınır.",
      },
      {
        heading: "Destekleyici Tedavi",
        body:
          "Oksijen desteği, intravenöz sıvı uygulamaları ve ileri medikal bakım adımlarını kontrollü biçimde yürütüyoruz.",
      },
    ],
    highlights: [
      "Kritik vaka takibi",
      "Yakın monitörizasyon",
      "Acil müdahale hazırlığı",
    ],
  },
  {
    slug: "karantina",
    title: "Karantina",
    summary:
      "Bulaşıcı hastalık şüphesinde güvenli izolasyon ve kontrollü klinik takip sağlıyoruz.",
    intro:
      "Karantina hizmeti, hem hasta petin güvenliğini hem de diğer hayvanların korunmasını hedefler. İzolasyon alanı, enfeksiyon riskini azaltacak şekilde yapılandırılır ve bakım protokolleri ayrı yürütülür.",
    sections: [
      {
        heading: "İzolasyon Protokolü",
        body:
          "Şüpheli veya tanısı doğrulanmış vakalarda temas kontrolü, yüzey hijyeni ve personel akışı belirli kurallarla yönetilir.",
      },
      {
        heading: "Klinik Takip",
        body:
          "Karantina sürecinde yalnızca izolasyon değil, aynı zamanda yakın tedavi ve günlük klinik değerlendirme de sağlanır.",
      },
    ],
    highlights: [
      "Bulaşıcı vaka izolasyonu",
      "Kontrollü bakım alanı",
      "Günlük takip protokolü",
    ],
  },
  {
    slug: "onkoloji",
    title: "Onkoloji",
    summary:
      "Tümöral oluşumların değerlendirilmesi ve uzun dönem yönetiminde klinik destek sunuyoruz.",
    intro:
      "Onkoloji hizmetimiz; erken fark edilen kitlelerden ileri evre tümör yönetimine kadar farklı vakaları kapsar. Amacımız yalnızca tanı koymak değil, petiniz için yaşam kalitesi odaklı bir yol haritası oluşturmaktır.",
    sections: [
      {
        heading: "Tanısal Yaklaşım",
        body:
          "Muayene, görüntüleme ve gerektiğinde örnekleme yöntemleriyle kitlenin yapısını ve yayılımını değerlendiriyoruz.",
      },
      {
        heading: "Uzun Dönem Yönetim",
        body:
          "Cerrahi, medikal takip ve destekleyici bakım seçeneklerini vaka özelinde bir araya getiriyoruz.",
      },
    ],
    highlights: [
      "Kitle değerlendirmesi",
      "Tanı ve yönlendirme",
      "Yaşam kalitesi odaklı takip",
    ],
  },
  {
    slug: "deri-hastaliklari",
    title: "Deri Hastalıkları",
    summary:
      "Kaşıntı, tüy dökülmesi ve dermatolojik enfeksiyonlarda neden odaklı değerlendirme yapıyoruz.",
    intro:
      "Deri problemleri çoğu zaman yüzeysel görünse de altta yatan sistemik veya alerjik nedenlerle ilişkili olabilir. Dermatoloji yaklaşımımız bu bağlantıları göz önünde bulundurarak şekillenir.",
    sections: [
      {
        heading: "Ayrıntılı Deri Muayenesi",
        body:
          "Lezyonların dağılımı, tüy yapısı, kaşıntı şiddeti ve önceki tedavi geçmişi birlikte değerlendirilir.",
      },
      {
        heading: "Tedavi ve Kontrol",
        body:
          "Parazit, mantar, bakteri veya alerji kaynaklı tablolar için uygun tedavi planını kontrol muayeneleriyle destekliyoruz.",
      },
    ],
    highlights: [
      "Kaşıntı ve alerji yönetimi",
      "Tüy dökülmesi değerlendirmesi",
      "Deri enfeksiyonu takibi",
    ],
  },
  {
    slug: "mikrochip-uygulama",
    title: "Mikrochip Uygulama",
    summary:
      "Kimliklendirme ve yasal kayıt süreçleri için güvenli mikrochip uygulaması gerçekleştiriyoruz.",
    intro:
      "Mikrochip uygulaması, kaybolma riskine karşı en güvenilir kimliklendirme yöntemlerinden biridir. İşlem kısa sürer ve uygun kayıt süreçleriyle yasal geçerlilik kazanır.",
    sections: [
      {
        heading: "Hızlı ve Güvenli Uygulama",
        body:
          "Uygulamayı kısa sürede, uygun anatomik bölgede ve konforu ön planda tutarak gerçekleştiriyoruz.",
      },
      {
        heading: "Kayıt Süreci",
        body:
          "Mikrochip numarasının ilgili sistemlere doğru kaydedilmesi için gerekli yönlendirmeleri sağlıyoruz.",
      },
    ],
    highlights: [
      "Kalıcı kimliklendirme",
      "Hızlı uygulama süreci",
      "Kayıt yönlendirmesi",
    ],
  },
  {
    slug: "yurt-disina-cikis",
    title: "Yurt Dışına Çıkış",
    summary:
      "Yurt dışı seyahat öncesi sağlık hazırlıkları ve belge sürecinde danışmanlık veriyoruz.",
    intro:
      "Ülkelere göre değişen giriş kuralları nedeniyle yurt dışına çıkış süreci dikkatli planlama gerektirir. Aşılar, mikrochip, testler ve zamanlama gibi adımları seyahat takvimine göre düzenliyoruz.",
    sections: [
      {
        heading: "Belge ve Takvim Planlaması",
        body:
          "Gideceğiniz ülkenin gerekliliklerine göre hazırlanması gereken belgeleri ve işlem sırasını netleştiriyoruz.",
      },
      {
        heading: "Sağlık Uygunluğu",
        body:
          "Seyahat öncesinde genel sağlık muayenesi yaparak taşınma süreci için gerekli klinik değerlendirmeyi tamamlıyoruz.",
      },
    ],
    highlights: [
      "Seyahat hazırlık danışmanlığı",
      "Belge planlama desteği",
      "Aşı ve mikrochip kontrolü",
    ],
  },
  {
    slug: "muhabbet-kuslari",
    title: "Muhabbet Kuşları",
    summary:
      "Muhabbet kuşlarına özel muayene, bakım ve hastalık yönetimi hizmeti sunuyoruz.",
    intro:
      "Muhabbet kuşları küçük boyutları nedeniyle belirtileri geç fark edilen hassas canlılardır. Bu nedenle kuş hekimliğinde erken gözlem, doğru muayene tekniği ve türe uygun bakım bilgisi kritik önem taşır.",
    sections: [
      {
        heading: "Türe Özgü Değerlendirme",
        body:
          "Beslenme, dışkı yapısı, solunum ve tüy durumu gibi parametrelerle kuşunuzun genel sağlığını değerlendiriyoruz.",
      },
      {
        heading: "Bakım Rehberliği",
        body:
          "Kafes düzeni, mineral desteği, beslenme ve stres yönetimi konularında sahipleri ayrıntılı biçimde bilgilendiriyoruz.",
      },
    ],
    highlights: [
      "Egzotik tür muayenesi",
      "Beslenme ve bakım yönlendirmesi",
      "Erken belirti değerlendirmesi",
    ],
  },
];

export const homeServiceSlugs = [
  "ic-hastaliklari",
  "cerrahi-operasyonlar",
  "asilama",
  "agiz-ve-dis",
  "dogum-ve-jinekoloji",
  "muhabbet-kuslari",
] as const;

export function getHomeServices() {
  return homeServiceSlugs
    .map((slug) => serviceArticles.find((article) => article.slug === slug))
    .filter((article): article is ServiceArticle => Boolean(article));
}

export function getServiceArticle(slug: string) {
  return serviceArticles.find((article) => article.slug === slug);
}