export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <div>
          <span className="eyebrow">About Godham Trust</span>
          <h2>A home for every mother cow — and every elder.</h2>
          <div className="about-art" aria-hidden="true">
            <img
              src="https://images.pexels.com/photos/30147589/pexels-photo-30147589.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Cow resting under a tree in a village"
              style={{ width: '100%', maxWidth: 340, borderRadius: 6, boxShadow: '0 20px 40px -18px rgba(58,36,16,0.35)' }}
            />
          </div>
        </div>
        <div className="about-copy">
          <p className="deva">
            गोधाम ट्रस्ट एक पंजीकृत धर्मार्थ ट्रस्ट है, जो गायों के बचाव, आश्रय और जीवन भर की
            देखभाल के लिए समर्पित है — इनमें से कई घायल, बूढ़ी, लावारिस, या कसाईखाने ले जाने से
            बचाई गई होती हैं। हम मानते हैं कि गौ सेवा, गाय की सेवा, एक समाज द्वारा की जा सकने वाली
            सबसे सीधी करुणा है।
          </p>
          <p className="deva">
            हमारी गौशालाएँ साफ आश्रय, रोज़ का चारा, चौबीस घंटे पानी, पशु चिकित्सा और उनके बाकी
            सालों के लिए एक शांति भरा स्थान देती हैं। हम आस पास के गाँवों में गौ रक्षा और
            ऑर्गेनिक, गौ-आधारित खेती को बढ़ावा देने वाले जागरूकता कार्यक्रम भी चलाते हैं।
          </p>
          <p className="deva">
            गौ सेवा के साथ साथ, हम एक वृद्धाश्रम भी चलाते हैं — बूढ़े और ज़रूरतमंद बुज़ुर्गों के
            लिए एक घर जिनके पास जाने के लिए और कोई जगह नहीं है, जहाँ आश्रय, पौष्टिक भोजन, चिकित्सा
            देखभाल और साथी दिया जाता है। हमारे लिए, मानव सेवा और गौ सेवा एक ही करुणा के दो रूप हैं।
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="#programs" className="btn btn-outline">See Our Work →</a>
            <a href="#vridhaashram" className="btn btn-outline">Vridhaashram →</a>
          </div>
          <div className="quote-block">
            <p className="deva">
              "जो प्रतिदिन गौ माता को चारा और जल अर्पित करता है, उसे अनंत पुण्य की प्राप्ति होती है।"
            </p>
            <span className="deva">गौ सेवा पर पारंपरिक शिक्षा</span>
          </div>
        </div>
      </div>
    </section>
  );
}
