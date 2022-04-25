import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiNEEnnJOiwhpXoIaRagEnWpbh6J2sK0U",
  authDomain: "e-commerce-website-69.firebaseapp.com",
  projectId: "e-commerce-website-69",
  storageBucket: "e-commerce-website-69.appspot.com",
  messagingSenderId: "218673752279",
  appId: "1:218673752279:web:7be5b2e7a2c4e02bc56892"
};
function databaseProducts(){
  
}
// Initialize Firebase

export const app = initializeApp(firebaseConfig)
export const database = getFirestore(app);
databaseProducts()

addDoc(collection(database, 'products'), {
  name: "Nike Mercurial",
  image: ["/public/images/prod11.png","/public/images/prod14.png","/public/images/prod15.png","/public/images/prod20.png"],
  price: 8000,
  rating: 5,
  category: [
    "shoes", "sports", "nike"
  ],
  description: "The Nike Mercurial Dream Speed Superfly 8 Elite embodies Cristiano Ronaldo's greatest self-proclaimed strength: the power of the mind and meditation. Calming shades of green work together with energising tones of purple and yellow, creating a boot that radiates positivity."
})

addDoc(collection(database, 'products'), {
  name: "Nike Air Force 1",
  image: ["/public/images/AirForce1_1.png","/public/images/AirForce1_2.png","/public/images/AirForce1_3.png"],
  price: 9000,
  rating: 5,
  category: [
    "shoes", "casual", "nike"
  ],
  description: "The radiance lives on in the Nike Air Force 1, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold colours and the perfect amount of flash to make you shine."
})

addDoc(collection(database, 'products'), {
  name: "Nike Air Jordan",
  image: ["/public/images/Airjordan1.png","/public/images/Airjordan2.png","/public/images/Airjordan3.png"],
  price: 7500,
  rating: 4,
  category: [
    "shoes", "casual", "nike"
  ],
  description: "These shoes match Russel Westbrook's quickness with updated cushioning, data-informed traction and a full-foot fit system to keep him in control."
})

addDoc(collection(database, 'products'), {
  name: "Adidas Alphabounce+",
  image: ["/public/images/Alphabounce1.png","/public/images/Alphabounce2.png","/public/images/Alphabounce3.png"],
  price: 4000,
  rating: 3,
  category: [
    "shoes", "casual", "adidas"
  ],
  description: "The seamless and stretchable mesh upper supports every stride, bound and cut. Lightweight Bounce cushioning provides enhanced comfort and flexibility, from the first step to your final cool down."
})

addDoc(collection(database, 'products'), {
  name: "Adidas Superstar",
  image: ["/public/images/superstar1.png","/public/images/superstar2.png","/public/images/superstar3.png"],
  price: 5000,
  rating: 3.5,
  category: [
    "shoes", "casual", "adidas"
  ],
  description: "Since its '70s debut, the adidas Superstar trainer has been on a constant journey of change. It hopped off the hardwood to make a name for itself in the music scene and then spread to become a style icon around the world."
})

addDoc(collection(database, 'products'), {
  name: "Vans Old Skool Black/White",
  image: ["/public/images/vans1.png","/public/images/vans2.png","/public/images/vans3.png"],
  price: 5000,
  rating: 5,
  category: [
    "shoes", "casual", "vans"
  ],
  description: "The Vans Old Skool black shoes are trendy yet classy casual shoes that you can team up with casual as well as semi-casual attires."
})

addDoc(collection(database, 'products'), {
  name: "Puma Men Grey Lex Training Shoes",
  image: ["/public/images/puma1.png","/public/images/puma2.png","/public/images/puma3.png"],
  price: 5099,
  rating: 3,
  category: [
    "shoes", "sports", "puma"
  ],
  description: "Low boot, bold colour-blocking in the upper, premium tech mesh overlays, moulded plush collar, tooling with detailed scribe and paint lines, diamond tpu piece, lace closure for a snug fit, puma formstrip at lateral sides, puma wordmark on tongue"
})

addDoc(collection(database, 'products'), {
  name: "Under Armour Curry Flow 9",
  image: ["/public/images/underarmour1.png","/public/images/underarmour2.png","/public/images/underarmour3.png"],
  price: 8999,
  rating: 4.2,
  category: [
    "shoes", "sports", "under armour"
  ],
  description: "If the C8 was an off-the-backboard pass, the Curry Flow 9 is the subsequent alley-oop dunk. Under Armour’s design team built in even more revolutionary innovations, including the addition of a unique upper technology called UA Warp, which acts like seatbelts on the foot. Designed to be lighter and more breathable than a traditional upper, UA Warp locks the foot into the shoe’s midsole without getting in the way of natural movements."
})


addDoc(collection(database, 'products'), {
  name: "iPhone 13 Pro",
  image: ["/public/images/iPhone13Pro1.png","/public/images/iPhone13Pro2.png","/public/images/iPhone13Pro3.png"],
  price: 100000,
  rating: 5,
  category: [
    "electronics", "phones", "apple"
  ],
  description: "15 cm (6.1-inch) Super Retina XDR display with ProMotion for a faster, more responsive feel. Cinematic mode adds shallow depth of field and shifts focus automatically in your videos.Pro camera system with new 12MP Telephoto, Wide and Ultra Wide cameras; LiDAR Scanner; 6x optical zoom range; macro photography; Photographic Styles, ProRes video, Smart HDR 4, Night mode, Apple ProRAW, 4K Dolby Vision HDR recording."
})

addDoc(collection(database, 'products'), {
  name: "iPhone 12 Pro Max",
  image: ["/public/images/iPhone12Promax1.png","/public/images/iPhone12Promax2.png","/public/images/iPhone12Promax3.png"],
  price: 95000,
  rating: 4.8,
  category: [
    "electronics", "phones", "apple"
  ],
  description: "6.7-inch (17 cm diagonal) Super Retina XDR display.Ceramic Shield, tougher than any smartphone glass.Pro camera system with 12MP Ultra Wide, Wide and Telephoto cameras; 5x optical zoom range; Night mode, Deep Fusion, Smart HDR 3, Apple ProRAW, 4K Dolby Vision HDR recording"  
})

addDoc(collection(database, 'products'), {
  name: "Samsung Galaxy S21 FE 5G",
  image: ["/public/images/galaxyS21FE5G1.png","/public/images/galaxyS21FE5G2.png","/public/images/galaxyS21FE5G3.png"],
  price: 60000,
  rating: 3.9,
  category: [
    "electronics", "phones", "samsung"
  ],
  description: "Pro-grade Camera with AI Single Take, Portrait Mode, Night Mode and 30X Space zoom. Dual Recording: Film in both wide and selfie angles at the same time | 12MP F1.8 Main Camera (Dual Pixel AF & OIS) + 12MP UltraWide Camera (123° FOV) + 8MP Telephoto Camera (3x Optic Zoom, 30X Space Zoom, OIS) | 32 MP F2.2 Front Camera.Iconic Contour Cut Design with 7.9 mm thickness. Gorilla Glass Victus and IP68 Water Resistant."
})

addDoc(collection(database, 'products'), {
  name: "Samsung Galaxy A53 5G",
  image: ["/public/images/galaxyA535G1.png","/public/images/galaxyA535G2.png","/public/images/galaxyA535G3.png","/public/images/galaxyA535G4.png"],
  price: 36000,
  rating: 3.4,
  category: [
    "electronics", "phones", "samsung"
  ],
  description: "The Samsung Galaxy A53 5G is a mid-range Android-based smartphone developed and manufactured by Samsung Electronics as a part of its Galaxy A series. The phone was announced on 17 March 2022 at Samsung Galaxy Unpacked event alongside the Galaxy A33 5G and Galaxy A73 5G. Galaxy A53 5G Phone's price is $449 for a 128 GB model. The size of the screen is 6.5-inch which runs on Samsung's Exynos 5 nm processor. The phone has a quad-camera system featuring 64 MP main camera with 32 MP front camera."
})

addDoc(collection(database, 'products'), {
  name: "Redmi Note 11T 5G",
  image: ["/public/images/Redmi11.png","/public/images/Redmi12.png","/public/images/Redmi13.png"],
  price: 18000,
  rating: 3.3,
  category: [
    "electronics", "phones", "mi"
  ],
  description: "Camera: 50MP High resolution primary camera f/1.8 with 8MP Ultra-wide sensor| 16 MP Front camera.Display: 6.6 inch FHD+ (2400x1080) Dot display with 90Hz high refresh rate and adaptive refresh rate technology. 240Hz touch sampling rate."
})

addDoc(collection(database, 'products'), {
  name: "Redmi Note 10 Pro",
  image: ["/public/images/Redmi21.png","/public/images/Redmi22.png","/public/images/Redmi23.png"],
  price: 16999,
  rating: 3.8,
  category: [
    "electronics", "phones", "mi"
  ],
  description: "Processor: Qualcomm Snapdragon 732G with Kryo 470 Octa-core; 8nm process; Up to 2.3GHz clock speed.Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 5MP Telemacro and Portrait lens| 16 MP Front camera.Memory, Storage & SIM: 6GB RAM | 128GB UFS 2.2 storage expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby (4G+4G)."
})

addDoc(collection(database, 'products'), {
  name: "OnePlus 9RT 5G",
  image: ["/public/images/OnePlus11.png","/public/images/OnePlus12.png","/public/images/OnePlus13.png"],
  price: 42999,
  rating: 3.75,
  category: [
    "electronics", "phones", "onePlus"
  ],
  description: "Camera: 50MP Main Camera with Sony IMX 766 Lens (OIS enabled), 16MP Ultra-wide angle camera & 2MP Macrolens; Front (Selfie) Camera: 16MP; Flash: Dual LED.Camera Features: Night Mode, Macro Mode, Scene Enhancement, Portrait Mode, Pro Mode, Panorama, Video Portrait, Slow Motion, Dual-view, Long Exposure Mode, Movie Mode"
})

addDoc(collection(database, 'products'), {
  name: "OnePlus Nord CE 2",
  image: ["/public/images/OnePlus21.png","/public/images/OnePlus22.png","/public/images/OnePlus23.png"],
  price: 24000,
  rating: 3.6,
  category: [
    "electronics", "phones", "onePlus"
  ],
  description: "Accelerated charge velocity shall rocket the 4500mAh battery to a day's power in 15 minutes. Certified by TÜV Rheinland, one shall “Charge & Play” with absolute peace of mind.Mediatek Dimensity 900 – Powered by a 5G enabled, octa-core monster of a chipset that’s tad more powerful than previous CE, consider this the “Best in class” daily driver for entertainment with its “dragon-slaying” power efficiency, thermal control and support for Wi-Fi 6."
})

addDoc(collection(database, 'products'), {
  name: "MacBook Air",
  image: ["/public/images/macbook11.png","/public/images/macbook12.png","/public/images/macbook13.png"],
  price: 83900,
  rating: 5,
  category: [
    "electronics", "laptop", "apple"
  ],
  description: "All-Day Battery Life – Go longer than ever with up to 18 hours of battery life.Powerful Performance – Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power."
})

addDoc(collection(database, 'products'), {
  name: "Dell Inspiron",
  image: ["/public/images/inspiron1.png","/public/images/inspiron2.png","/public/images/inspiron3.png"],
  price:72000,
  rating: 4.3,
  category: [
    "electronics", "laptop", "dell"
  ],
  description: "Stay connected wherever you go with Inspiron’s easy to-use PCs. With lightweight designs and long-battery life, the laptops and 2-in-1s keep you moving."
})

addDoc(collection(database, 'products'), {
  name: "Dell Vostro 3510",
  image: ["/public/images/vostro1.png","/public/images/vostro2.png","/public/images/vostro3.png"],
  price: 54900,
  rating: 3.8,
  category: [
    "electronics", "laptop", "dell"
  ],
  description: "Camera:720p at 30 fps HD camera, single-integrated microphone,Audio and Speakers:Stereo speakers,Memory:8 GB, 1 x 8 GB, DDR4, 3200 MHz"
})

addDoc(collection(database, 'products'), {
  name: "HP Pavilion 14 11th Gen Intel Core i7 16GB/1TB SSD",
  image: ["/public/images/hp11.png","/public/images/hp12.png","/public/images/hp13.png"],
  price: 95000,
  rating: 5,
  category: [
    "electronics", "laptop", "hp"
  ],
  description: "Other Features: Camera: HP True Vision 720p HD camera with Integrated dual array digital Microphone| Keyboard: Full-size, backlit, natural silver keyboard, HP Imagepad with multi-touch gesture support| Audio: Audio by B&O, Dual speakers| Alexa Built-in| Fingerprint Reader"
})

addDoc(collection(database, 'products'), {
  name: "HP Pavilion Gaming 10th Gen Intel Core i5 Processor",
  image: ["/public/images/hp21.png","/public/images/hp22.png","/public/images/hp23.png"],
  price: 70000,
  rating: 4.5,
  category: [
    "electronics", "laptop", "hp"
  ],
  description: "Display: 15.6-Inch FHD IPS micro-edge, anti-glare Display |Brightness: 250 nits, 141ppi, 45% NTSC (1920 x 1080) | Refresh Rate: 144 Hz.Graphics: NVIDIA GeForce GTX 1650 (4 GB GDDR6 dedicated)"
})

addDoc(collection(database, 'products'), {
  name: "ASUS Zenbook Pro Duo 15 OLED",
  image: ["/public/images/asus11.png","/public/images/asus12.png","/public/images/asus13.png"],
  price: 80000,
  rating: 4.8,
  category: [
    "electronics", "laptop", "asus"
  ],
  description: "Design & battery: Up to 13.9mm thin | Metallic Chassis |Thin and Light Laptop | Laptop weight: 1.14 kg | 67WHrs, 4-cell, lithium-polymer battery | Up to 13 hours battery life ;Note: Battery life depends on conditions of usage.Graphics : Integrated Intel Iris Xe Graphics"
})

addDoc(collection(database, 'products'), {
  name: "ASUS Zenbook Duo 14",
  image: ["/public/images/asus21.png","/public/images/asus22.png","/public/images/asus23.png"],
  price: 83000,
  rating: 4.4,
  category: [
    "electronics", "laptop", "asus"
  ],
  description: "Display: Touch screen, 14.0-inch, 1W FHD (1920 x 1080) 16:9, IPS-level Panel, Anti-glare display, LED Backlit, 400nits, sRGB: 100%, Pantone Validated, Screen-to-body ratio: 93 %, With stylus support.Additional Display: ScreenPad Plus 12.65 FHD 1920 x 515, Touch screen IPS-level Panel Support Stylus"
})

addDoc(collection(database, 'products'), {
  name: "MacBook Pro",
  image: ["/public/images/macbook21.png","/public/images/macbook22.png","/public/images/macbook23.png"],
  price: 112000,
  rating: 4.5,
  category: [
    "electronics", "laptop", "apple"
  ],
  description: "Apple-designed M1 chip for a giant leap in CPU, GPU, and machine learning performance.Get more done with up to 20 hours of battery life, the longest ever in a Mac"
})

addDoc(collection(database, 'products'), {
  name: "Onida 108 cm (43 inch) FHD LED Smart TV",
  image: ["/public/images/onida1.png","/public/images/onida2.png","/public/images/onida3.png"],
  price: 24000,
  rating: 5,
  category: [
    "electronics", "tv", "onida"
  ],
  description: "Supported Apps: Netflix, Youtube, Prime Video, Foxtel, Stan, ABC iview, Kayo, Tubi, SBS ON DEMAND, Facebook Watch, NBA. Warranty: 1 Year manufacturer warranty"
})

addDoc(collection(database, 'products'), {
  name: "LG Signature 165.1cm (65 Inch) Ultra HD 4K Flat Panel Smart TV",
  image: ["/public/images/lg1.png","/public/images/lg2.png","/public/images/lg3.png"],
  price: 130000,
  rating: 4.7,
  category: [
    "electronics", "tv", "lg"
  ],
  description: "Indulge in a next-gen viewing experience with this LG 65-inch 4K Smart UHD TV. It is equipped with webOS and Quad-Core Processor 4K that deliver an excellent visual experience. It has Filmmaker Mode, HDR 10 Pro, HLG, advanced color enhancer and 4K Upscaler for exceptional picture quality. The 20W audio output with AI Sound gives a cinematic ambiance."
})

addDoc(collection(database, 'products'), {
  name: "LG 81.28cm (32 Inch) HD Ready LED Smart TV ",
  image: ["/public/images/lg21.png","/public/images/lg22.png","/public/images/lg23.png"],
  price: 62000,
  rating: 4.1,
  category: [
    "electronics", "tv", "lg"
  ],
  description: "Quad-Core Processor for smooth performance.Home Dashboard to create a unique daily routine by using your TV as a dashboard.Active HDR to enjoy video content in amazing HDR quality.Operating System is webOS with Unlimited OTT Apps.Dynamic Color Enhancer to enjoy the beauty of nature’s true colors"
})

addDoc(collection(database, 'products'), {
  name: "Samsung 1m 25cm (50 inch) AUE60 Crystal 4K UHD Smart TV",
  image: ["/public/images/samsung1.png","/public/images/samsung2.png","/public/images/samsung3.png"],
  price: 54000,
  rating: 3.1,
  category: [
    "electronics", "tv", "samsung"
  ],
  description: "PurColor makes watching films feel almost like you're there. It enables the TV to express a huge range of colors for optimal picture performance, and an immersive viewing experience.Powerful 4K upscaling ensures you get up to 4K resolution for the content you love. You'll also experience more lifelike color expressions due to its sophisticated color mapping technology."
})

addDoc(collection(database, 'products'), {
  name: "MI 5X Ultra HD (4K) Smart Certified Android LED 43 inch",
  image: ["/public/images/mi1.png","/public/images/mi2.png","/public/images/mi3.png"],
  price: 32000,
  rating: 3.8,
  category: [
    "electronics", "tv", "mi"
  ],
  description: "4K UHD Smart Android LED.3840 x 2160 Pixels.Dolby Vision | HDR10+.Operating System: Android (Google Assistant & Chromecast in-built.Vivid Picture Engine 2 with Adaptive Brightness"
})

addDoc(collection(database, 'products'), {
  name: "Redmi Smart TV 43 Full HD",
  image: ["/public/images/redmi1.png","/public/images/redmi2.png","/public/images/redmi3.png"],
  price: 25000,
  rating: 3.6,
  category: [
    "electronics", "tv", "mi"
  ],
  description: "108 cm (43), Full HD TV.Android Smart TV, Android OS.Ideal Viewing Distance: 10 - 12 Ft. 12 Months Warranty, 1 Year on Panel Provided by Brand from Date of Purchase"
})

addDoc(collection(database, 'products'), {
  name: "Pure cotton lace mandarin collar dress",
  image: ["/public/images/mns1.png","/public/images/mns2.png","/public/images/mns3.png"],
  price: 2500,
  rating: 4,
  gender: "f",
  category: [
    "clothes", "dresses", "marks and spencer"
  ],
  description: "This supremely beautiful and soothing white knee-length dress from Marks and Spencer is sure to make you the star of every party. Effortlessly stylish and classy, this mandarin collar dress with lace pattern is made with 100% cotton. "
})

addDoc(collection(database, 'products'), {
  name: "Flexifit™ Velour Lounge Sweatshirt",
  image: ["/public/images/hoodie1.png","/public/images/hoodie2.png","/public/images/hoodie3.png"],
  price: 1200,
  rating: 3.6,
  gender: "f",
  category: [
    "clothes", "sweatshirts", "marks and spencer"
  ],
  description: "The drawcord is finished with stylish metal hardware, while the zip-up front makes it easy to slip on and off. Made with our signature Flexifit™ technology, the soft and stretchy fabric moves with you for ultimate comfort."
})

addDoc(collection(database, 'products'), {
  name: "Wide Joggers",
  image: ["/public/images/joggers1.png","/public/images/joggers2.png","/public/images/joggers3.png"],
  price: 1000,
  rating: 3.7,
  gender: "f",
  category: [
    "clothes", "pants", "h and m"
  ],
  description: "Wide joggers in lightweight sweatshirt fabric. High waist with elasticated smocking, and large patch front pockets."
})

addDoc(collection(database, 'products'), {
  name: "SuperDry VL INFILL TEE",
  image: ["/public/images/superdryvl1.png","/public/images/superdryvl2.png","/public/images/superdryvl3.png"],
  price: 1700,
  rating: 4.3,
  gender: "f",
  category: [
    "clothes", "tshirts", "superdry"
  ],
  description: "Update your basics with a simple short sleeved tee that features a vintage twist with its printed graphic.Slim fit ? designed to fit closer to the body for a more tailored lookCrew necklineShort sleevesTextured graphicSignature logo tab"
})

addDoc(collection(database, 'products'), {
  name: "Pure Cotton Raglan Crew Neck Sweatshirt",
  image: ["/public/images/reglan1.png","/public/images/reglan2.png","/public/images/reglan3.png"],
  price: 990,
  rating: 3.7,
  gender: "m",
  category: [
    "clothes", "sweatshirts", "marks and spencer"
  ],
  description: "With its easy style and casual crew neckline, this pure cotton sweatshirt is made for relaxed days. Comfy regular fit, with raglan sleeves for a laidback feel."
})

addDoc(collection(database, 'products'), {
  name: "Pure Cotton Plain Button Down Collar Shirt",
  image: ["/public/images/shirt1.png","/public/images/shirt2.png","/public/images/shirt3.png"],
  price: 1290,
  rating: 3.9,
  gender: "m",
  category: [
    "clothes", "shirts", "marks and spencer"
  ],
  description: "The iconic, smart and sophisticated shirt for men. This full-sleeve, regular-fit shirt is made from 100% cotton and comes with a Marks & Spencer button-down collar."
})

addDoc(collection(database, 'products'), {
  name: "Van Heusen Sport Solid Cotton Blend Slim Fit Mens Trousers",
  image: ["/public/images/trouser1.png","/public/images/trouser2.png","/public/images/trouser3.png"],
  price: 1490,
  rating: 3.6,
  gender: "m",
  category: [
    "clothes", "pants", "van heusen"
  ],
  description: "Fabric	Cotton Blend,Pattern	Solid,Waist Rise	Mid Rise,Fit	Slim"
})

addDoc(collection(database, 'products'), {
  name: "American Style Cream & Onion",
  image: ["/public/images/laysgreen1.png","/public/images/laysgreen2.png"],
  price: 10,
  rating: 4.1,
  category: [
    "food", "dry snacks", "lays"
  ],
  description: "Relax with your friends with the irresistible flavour of American style cream and onion Lay's"
})

addDoc(collection(database, 'products'), {
  name: "India's Magic Masala",
  image: ["/public/images/laysblue1.png","/public/images/laysblue2.png"],
  price: 10,
  rating: 4.1,
  category: [
    "food", "dry snacks", "lays"
  ],
  description: "Potato masala.Delicious and Tasty.Country of Origin: India"
})

addDoc(collection(database, 'products'), {
  name: "Chilli Chatka",
  image: ["/public/images/kurkure1.png","/public/images/kurkure2.png"],
  price: 15,
  rating: 4.5,
  category: [
    "food", "dry snacks", "kurkure"
  ],
  description: "It's the perfect party snack for when your friends and family are over. So go ahead, buy this product today!"
})

addDoc(collection(database, 'products'), {
  name: "Puffcorn",
  image: ["/public/images/puffcorn1.png","/public/images/puffcorn2.png"],
  price: 20,
  rating: 4.5,
  category: [
    "food", "dry snacks", "kurkure"
  ],
  description: "Kurkure Puffcorn is a tasty, light & fluffy snack with an irresistibly yummy cheese flavour, sparking fun & playful moments "
})

addDoc(collection(database, 'products'), {
  name: "banana chips",
  image: ["/public/images/bananachips1.png","/public/images/bananachips2.png"],
  price: 200,
  rating: 4.5,
  category: [
    "food", "dry snacks", "Chheda's"
  ],
  description: "Yellow banana chips are salty thin banana chips ready to eat.100% Natural, Healthy & Rich with No Preservatives and No Artificial Colours Added"
})

addDoc(collection(database, 'products'), {
  name: "soya sticks",
  image: ["/public/images/soya1.png","/public/images/soya2.png"],
  price: 100,
  rating: 4.4,
  category: [
    "food", "dry snacks", "Chheda's"
  ],
  description: "Soya stick, soya snacks, masala chakli, snack soya stick snack it's healthy and ready to eat.Healthy & Rich in Fiber with Zero Cholesterol & Trans Fat"
})

addDoc(collection(database, 'products'), {
  name: "kachori",
  image: ["/public/images/kachori1.png","/public/images/kachori2.png"],
  price: 130,
  rating: 4.4,
  category: [
    "food", "dry snacks", "Chheda's"
  ],
  description: "It is crispy, flavourful and textured. Savoury ball stuffed with gram flour and spicy ingredients."
})


async function read(){
  const querySnapshot = await getDocs(collection(database,'products'));
  querySnapshot.forEach((obj)=>{console.log(obj.data())});
}

read()