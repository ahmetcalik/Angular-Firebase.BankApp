# Angular-Firebase.BankApp
Angular ile banka uygulaması geliştirmek.

Angular ve Firebase kullanarak banka için teminat işlemleri ekranlarının tasarlanması.
Uygulama web tasarımında başlangıçta "home" ekranı karşılamaktadır. Yetkili girişi ekranı seçildiğinde size giriş yada kayıt yapmanıza olanak sağlayan "toggle switch" düğmesi ile birlikte değişen "login" ve "sign up" düğmesi karşılamaktadır. Buradan giriş yapıldıktan sonra bizi "home" ekranına yönlendirmektedir ve navbar kısmında seçebileceğimiz "müşteri kayıt" ve "teminat işlemleri" düğmeleri görünür hale gelmektedir. Müşteri kaydı sonrası yada hali hazırda kayıtlı olan müşteriler için teminat işlemleri ekranına geçildikten sonra müşteri tkcn numarası ile müşteri aratılmaktadır. Arama sonrasında alt kısımda müşteriye ait kayıtlı teminatlar listelenmektedir. Eğer müşteriye ait yeni teinat oluşturulmak isteniyorsa sağ kısımda yer alan yeni teminat bilgileri doldurulduktan sonra yeni müşteri teminat kaydı yapılmaktadır. Müşteri kayıt ekranında her yeni müşteri kaydı yapıldığında ona özel müşteri numarası rasgele oluşturulmaktadır. Teminat İşlemleri ekranında müşteri tkcn ile arama yapıldıktan sonra teminatlar listelenmekte olup sadece ilgili teminat türünün aranabilmesi için bir teminat arama kısmı eklenmiştir. Listelenen teminatlar içerisinde teminat türü isimleri yazmasına rağmen firebase database içerisinde teminatlar isimleri ile değil kodları ile kaydedilmektedir. Bu sayede kullanıcı isme göre işlem yapabilirken tasarımcılar koda göre tasarım ve inceleme yapabileceklerdir. Ayrıca ekrana gerektiğinde yapılan işlemler ile ilgili uyarı veya başarılı işlem pop-up bildirimleri gelmektedir.

Çalışmamı yaparken back-end kısmı için Typescript, front-end için ise CSS ve Html programlama dillerini kullandım.

Çalışmamı yaparken aşağıda bahsetmiş olduğum sürümleri kullandım:

1- Angular cli: 14.1.1, 
2- Typescript: 4.7.2, 
3- Html: 5, 
4- Css: 3, 
5- Bootstrap: 5.2.1, 
6- Firebase: 9.9.3, 
7- alertifyjs: 1.13.1, 
8- ng2-search-filter: 0.5.1, 
9- ngx-bootstrap: 9.0.0, 
10- serializer: 0.0.3, 
11- sweetalert: 2.1.2
