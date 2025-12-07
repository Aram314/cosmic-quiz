"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

// Parallax Stars Component
function ParallaxStars() {
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 3000], [0, -300]);
  const y2 = useTransform(scrollY, [0, 3000], [0, -500]);
  const y3 = useTransform(scrollY, [0, 3000], [0, -800]);

  return (
    <div className="parallax-stars">
      {/* Slow moving small stars (far away) */}
      <motion.div 
        className="stars-layer stars-small" 
        style={{ y: y1 }}
      />
      
      {/* Medium speed medium stars */}
      <motion.div 
        className="stars-layer stars-medium" 
        style={{ y: y2 }}
      />
      
      {/* Fast moving large stars (close) */}
      <motion.div 
        className="stars-layer stars-large" 
        style={{ y: y3 }}
      />
      
      {/* Shooting stars */}
      <div className="shooting-star" />
      <div className="shooting-star" />
      <div className="shooting-star" />
    </div>
  );
}

interface Question {
  id: number;
  question: string;
  answers: string[];
  correctIndex: number;
  image: string;
  info: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Որքա՞ն է աշխարհի բնակչության մոտավոր թիվը։",
    answers: ["Մինչև 1 մլրդ", "Ավելի քան 7 մլրդ", "Ավելի քան 8 մլրդ"],
    correctIndex: 2,
    image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800&q=80",
    info: "1800 թվականին աշխարհի բնակչությունը կազմում էր մոտավորապես <span class='text-purple-300'>1 միլիարդ</span>։ 1950 թվականին այն հասավ մոտ <span class='text-purple-300'>2.5 միլիարդի</span>։ 1974 թվականին աշխարհի բնակչությունը կրկնապատկվել էր մոտ <span class='text-purple-300'>4 միլիարդի</span>։ 2011 թվականին այն հասավ <span class='text-purple-300'>7 միլիարդի</span>։ 2025 թվականի դրությամբ աշխարհի բնակչությունը գնահատվում է մոտ <span class='text-purple-300'>8.22 միլիարդ։</span>",
  },
  {
    id: 2,
    question: "Ինչքա՞ն է օզոնային շերտի միջին բարձրությունը",
    answers: ["75 կմ", "25 կմ", "9 կմ"],
    correctIndex: 1,
    image: "https://images.unsplash.com/photo-1528722426525-314c597d91f2?w=800&q=80",
    info: "Վերնոլորտային օզոնը ներգործում է մթնոլորտի ջերմային ռեժիմի վրա, ակտիվացնում օքսիդացման շարժընթացները մթնոլորտում, և, ամենակարևորը, կլանում է Արեգակի վնասակար կարճալիք անդրամանուշակագույն ճառագայթների հիմնական մասը, որը վնասակար ազդեցություն է թողնում կենդանի օրգանիզմների վրա։",
  },
  {
    id: 3,
    question: "Ո՞րն է մեր արեգակնային համակարգի ամենամեծ մոլորակը։",
    answers: ["Սատուրն", "Յուպիտեր", "Նեպտուն"],
    correctIndex: 1,
    image: "https://dq0hsqwjhea1.cloudfront.net/Solar-system-NASA_S.jpg",
    info: "Յուպիտեր կամ Լուսնթագ, Արեգակից հեռավորությամբ հինգերորդ և արեգակնային համակարգի ամենամեծ մոլորակը։ Յուպիտերի տրամագիծը մոտ 11 անգամ մեծ է Երկրի տրամագծից։",
  },
  {
    id: 4,
    question: "Քանի՞ արբանյակ ունի Մարսը։",
    answers: ["2", "4", "1"],
    correctIndex: 0,
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&q=80",
    info: "Մարսը իր անունը ստացել է հռոմեական պատերազմի աստված Մարսի պատվին, հունական դիցաբանությունում՝ <span class='text-purple-300'>Արես</span>։ Մարսը ունի 2 բնական արբանյակ` <span class='text-purple-300'>Դեյմոսը</span> և <span class='text-purple-300'>Ֆոբոսը</span>, (հին հունարենից թագմանաբար - «վախ» և «սարսափ» - Արեսի երկու որդիների անունները, որոնք ուղեկցում էին նրան մարտի ժամանակ): <br> Դրանք շարժվում են տարբեր արագությամբ։ Առաջինը օրվա մեջ 2 անգամ է երևում երկնքում, երկրորդը` 1 անգամ 2 օրում։ Մարսի 1 օրը <span class='text-purple-300'>24 ժամ 37 րոպե</span> է, իսկ 1 տարին` <span class='text-purple-300'>687 օր</span>։",
  },
  {
    id: 5,
    question: "Ո՞րն է մեր արեգակնային համակարգի ամենատաք մոլորակը։",
    answers: ["Մերկուրի", "Վեներա", "Մարս"],
    correctIndex: 1,
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80",
    info: 'Սկզբում սա կարող է հակասական թվալ, քանի որ <span class="text-purple-300">Մերկուրին</span> ավելի մոտ է Արեգակին, քան <span class="text-purple-300">Վեներան</span>, սակայն Վեներան ավելի տաք է։ Հիմնական պատճառը Վեներայի խիտ մթնոլորտն ինչն հանգեցնում է ջերմոցային էֆեկտի։ Վեներան երբեմն անվանում են «Երկրի քույր», քանի որ երկու մոլորակները իրար նման են չափերով, ձգողության ուժով և կազմությամբ։ Սակայն պայմանները այս երկու մոլորակների վրա չափազանց տարբեր են։ ',
  },
  {
    id: 6,
    question: "Որքա՞ն ժամանակում է լույսը Արեգակից հասնում Երկիր։",
    answers: ["8 րոպե 19 վայրկյան", "19 րոպե 8 վայրկյան", "8 վայրկյան"],
    correctIndex: 0,
    image: "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?w=800&q=80",
    info: 'Դա պայմանավորված է նրանով, որ Երկրի և Արեգակի միջև միջին հեռավորությունը մոտ <span class="text-purple-300">149.6 միլիոն կմ</span> է, իսկ լույսը տարածվում է <span class="text-purple-300">299,792 կմ/վ</span> արագությամբ։',
  },
  {
    id: 7,
    question: "Ո՞վ էր Լուսնի վրա քայլող առաջին մարդը։",
    answers: ["Բազ Օլդրին", "Նիլ Արմսթրոնգ", "Մայքլ Քոլինզ"],
    correctIndex: 1,
    image: "https://images.unsplash.com/photo-1614726365930-627c75da663e?w=800&q=80",
    info: 'Նա ոտք դրեց Լուսնի մակերեսին <span class="text-purple-300">1969 թվականի հուլիսի 20-ին</span>՝ ՆԱՍԱ-ի «Ապոլոն 11» առաքելության ժամանակ, ասելով հայտնի խոսքերը. <br ><span class="text-purple-300">«Սա մի փոքր քայլ է մարդու և մի ամբողջ հսկա թռիչք մարդկության համար»</span>։',
  },
  {
    id: 8,
    question: "Ո՞վ է ամենաառաջին կին տիեզերագնացը։",
    answers: ["Նիկոլ Սկոթ", "Վալենտինա Տերեշկովա", "Ելենա Սերովա"],
    correctIndex: 1,
    image: "https://images.unsplash.com/photo-1494022299300-899b96e49893?w=800&q=80",
    info: 'Նա մնում է միակ կինը, որը մենակ է թռել տիեզերական առաքելության։ Նա 48 անգամ պտտվել է Երկրի շուրջը և գրեթե 3 օր անցկացրել տիեզերքում։ 1963 թվականի հունիսի 16-ին նա ընդամենը 26 տարեկան էր։',
  },
  {
    id: 9,
    question: "Որքա՞ն է տևել Յու. Գագարինի տիեզերական թռիչքը",
    answers: ["1 օր", "120 վայրկյան", "108 րոպե"],
    correctIndex: 2,
    image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=800&q=80",
    info: '1961 թվականի ապրիլի 12-ին Յուրի Գագարինը համաշխարհային պատմության մեջ առաջին մարդն է, որը թռել է տիեզերական բաց տարածություն։',
  },
  {
    id: 10,
    question: "Ո՞ր մոլորակն է հայտնի որպես «Կարմիր մոլորակ»։",
    answers: ["Յուպիտեր", "Վեներա", "Մարս"],
    correctIndex: 2,
    image: "https://images.unsplash.com/photo-1630694093867-4b947d812bf0?w=800&q=80",
    info: 'Երբեմն Մարսը անվանում են <span class="text-purple-300">«կարմիր մոլորակ»</span> մակերևույթի կարմրավուն երանգի պատճառով, որը ստացվում է երկաթի օքսիդի պատճառով։ Մարսի զանգվածը կազմում է Երկրի զանգվածի <span class="text-purple-300">10,7%</span>-ը։',
  },
  {
    id: 11,
    question: "Երկու շների անունները, որոնք առաջինը եղան տիեզերքում։",
    answers: ["Ջեկո և Չալո", "Բելկա և Ստրելկա", "Շարիկ և Լարիկ"],
    correctIndex: 1,
    image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_2/cdn/63e37262-d240-409d-81e1-0a41b0f3bca2/a2a4e22f-26d5-4f2a-8abc-a59afd28852a.jpg",
    info: 'Բելկա և Ստրելկա, խորհրդային տիեզերագնաց շներ, առաջին կենդանիները, որոնք կատարել են տիեզերական ուղեծրային թռիչք և անվնաս վերադարձել Երկիր։ Թռիչքը տեղի է ունեցել «Սպուտնիկ-5» տիեզերանավով։ Մեկնարկել է <span class="text-purple-300">1960 թվականի օգոստոսի 19-ին</span> և տևել շուրջ 25 ժամ։ Այդ ընթացքում տիեզերանավը Երկրի շուրջը 17 շրջապտույտ է կատարել։',
  },
  {
    id: 12,
    question: "Ո՞ր գալակտիկայում ենք մենք ապրում։",
    answers: ["Անդրոմեդա", "Ծիր Կաթին", "Եռանկյունի համաստեղություն"],
    correctIndex: 1,
    image: "https://images.unsplash.com/photo-1535056992305-dc3a53c22241?w=800&q=80",
    info: 'Ծիր Կաթին, այն գալակտիկան է, որը ներառում է Արեգակնային համակարգը։ Ծիր Կաթինը երկրորդ ամենամեծ գալակտիկան է Տեղական խմբում (Անդրոմեդայից հետո)։',
  },
  // {
  //   id: 13,
  //   question: "Օրական մոտ քանի՞ աստղ է ծնվում։",
  //   answers: ["275 մլրդ", "275 մլն", "275 հազար"],
  //   correctIndex: 1,
  //   image: "https://images.unsplash.com/photo-1616049997556-524fbfe276db?w=800&q=80",
  //   info: '',
  // },
  {
    id: 13,
    question: "Ո՞րն է Երկրին ամենամոտ աստղը։",
    answers: ["Կենտավրոսի Պրոքսիման", "Արևը", "Կենտավրոսի ալֆան"],
    correctIndex: 1,
    image: "https://images.unsplash.com/photo-1515705576963-95cad62945b6?w=800&q=80",
    info: 'Արևը այնքան մեծ է, որ դրա մեջ կարող է տեղավորվել մոտ 1.3 միլիոն Երկիր մոլորակ։ <br>Արևը Երկիր մոլորակից նայելիս դեղին է թվում, բայց իրականում սպիտակ է։',
  },
  {
    id: 14,
    question: "Ու՞մ անունն է կրում Յուպիտեր մոլորակը։",
    answers: ["Մոլորակը հայտնագործողի ", "Հռոմեական բարձրագույն աստծո", "Հռոմեական կայսեր"],
    correctIndex: 1,
    image: "https://images.unsplash.com/photo-1630839437035-dac17da580d0?w=800&q=80",
    info: 'Հռոմեացիները մոլորակը անվանել են իրենց Յուպիտեր, Հռոմեական դիցաբանության գլխավոր աստծո անունով։ Յուպիտերին Հունական դիցաբանությունում համապատասխանում էր <span class="text-purple-300">Զևսը</span>։',
  },
  {
    id: 15,
    question: "Մեր արեգակնային համակարգում քանի՞ մոլորակ ունի օղակներ։",
    answers: ["4", "2", "1"],
    correctIndex: 0,
    image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&q=80",
    info: 'Մեր Արեգակնային համակարգում չորս հսկա մոլորակները ունեն օղակներ․<br><ul><li>1. <span class="text-purple-300 italic">Սատուրն</span> – Ամենահայտնի օղակները<br>Սատուրնի օղակները ամենամեծն ու ամենափայլունն են։ Կազմված են սառույցից ու քարերից։ Թվում են նույնիսկ փոքր հեռադիտակով։</li><li>2. <span class="text-purple-300 italic">Յուպիտեր</span> – Բարակ ու փոշային օղակներ<br>Յուպիտերի օղակները շատ թույլ տեսանելի են։ Կազմված են հիմնականում փոշուց, որը առաջանում է նրա փոքր արբանյակների վրա մետեորների հարվածներից։</li><li>3. <span class="text-purple-300 italic">Ուրան</span> – Մուգ և նեղ օղակներ<br>Ուրանը ունի 13 հայտնի օղակ։ Դրանք շատ մուգ են՝ հիմնականում ածխածնային նյութից։</li><li>4. <span class="text-purple-300 italic">Նեպտուն</span> – «Կոտրված» և խումբ-խումբ օղակներ<br>Նեպտունի օղակները շատ բարակ ու փոշային են։</li></ul><br><br>Ինչու՞ միայն հսկա մոլորակներն ունեն օղակներ <br>Որովհետև դրանք ունեն ուժեղ գրավիտացիա, որը կարող է պահել բեկորները, ունեն բազմաթիվ արբանյակներ, որոնց բախումներն ու քայքայումը ստեղծում են օղակի նյութը։ Սառն են և հեռու են Արեգակից, որպեսզի օղակի մասնիկները չգոլորշիանան կամ չցրվեն։',
  },
  {
    id: 16,
    question: "Ո՞րն է մեր արեգակնային համակարգի ամենափոքր մոլորակը։",
    answers: ["Մարս", "Մերկուրի", "Ուրան"],
    correctIndex: 1,
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&q=80",
    info: 'Մերկուրին Արեգակի շուրջը պտտվում է <span class="text-purple-300">88 երկրային օրում</span>, որն ավելի արագ է համեմատած Երկիր մոլորակի (365 օր)։ <br>Իսկ մեկ լրիվ պտույտը իր առանցքի շուրջ (Մերկուրիի վրա մեկ օրը) տևում է <span class="text-purple-300">59 երկրային օր</span>, ինչի պատճառով ցերեկը և գիշերը շատ երկար են տևում։',
  },
  {
    id: 17,
    question: "Ինչպե՞ս է կոչվում աստղերի խումբը, որը ձևավորում է պայծառ աստղերով առանձնացվող բնորոշ պատկերներ։",
    answers: ["Գալակտիկա", "միգամածություն", "Համաստեղություն"],
    correctIndex: 2,
    image: "https://images.unsplash.com/photo-1545164027-0d5617cef5fc?w=800&q=80",
    info: 'Միջազգային աստղագիտական միության կողմից պաշտոնապես ընդունվել են <span class="text-purple-300">88 համաստեղություն</span>։ <br> Մեզ հայտնի <span class="text-purple-300">12 համաստեղությունները</span>, այն համաստեղություններն են, որոնցով անցնում է Արեգակի տարեկան ուղին` խավարածիրը (<span class="text-purple-300">Խոյ, Ցուլ, Երկվորյակներ, Խեցգետին, Առյուծ, Կույս, Կշեռք, Կարիճ, Աղեղնավոր, Այծեղջյուր, Ջրհոս, Ձկներ</span>)։',
  },
  {
    id: 18,
    question: "Ո՞ր մոլորակն ունի Մեծ Կարմիր բիծը։",
    answers: ["Յուպիտեր", "Սատուրն", "Նեպտուն"],
    correctIndex: 0,
    image: "https://images.unsplash.com/photo-1707056790571-54d8612d6368?w=800&q=80",
    info: 'Մեծ Կարմիր Կետը Յուպիտերի վրա գտնվող հսկայական, երկարատև փոթորիկ է։ <br><br><span class="text-purple-300">Չափը</span>: Այսօր մոտ 1.3 անգամ ավելի մեծ, քան Երկիրը (նախկինում գրեթե 3 անգամ էր).<br><span class="text-purple-300">Տարիքը</span>: Մարդկությունը այն դիտում է արդեն մոտ 350–400 տարի, հնարավոր է՝ ավելի երկար։<br><span class="text-purple-300">Քամու արագությունը</span>: հասնում է 430–680 կմ/ժ։<br><span class="text-purple-300">Գույնը</span>: Կարմրավուն/նարնջագույն է՝ Յուպիտերի մթնոլորտում քիմիական ռեակցիաների պատճառով (ամոնիակային միացություններ + արևի լույս).<br><br>Մեծ Կարմիր Կետը տարիների ընթացքում աստիճանաբար փոքրանում է։ Չնայած այդ ամենին՝ այն այսօր էլ այնքան մեծ է, որ նրա մեջ լրիվ կտեղավորվի ամբողջ Երկիրը։<br>Ուժեղ մթնոլորտային հոսանքները պահում են այդ փոթորիկը նույն վայրում և թույլ չեն տալիս ավարտվել։',
  },
  {
    id: 19,
    question: "Ինչպե՞ս է կոչվում Սատուրնի ամենամեծ արբանյակը։",
    answers: ["Եվրոպա", "Տիտան", "Գանեմեդ"],
    correctIndex: 1,
    image: "https://images.unsplash.com/photo-1711559652919-8b945169b37c?w=800&q=80",
    info: 'Այս պահի դրությամբ Սատուրնն ունի <span class="text-purple-300">145 հաստատված արբանյակ</span>։<br>Դրանք տատանվում են ընդամենը մի քանի հարյուր մետր լայնությամբ սառցե ապարների փոքրիկ կտորներից մինչև մոլորակներից մեծ հսկա աշխարհներ։<br><span class="text-purple-300">Տիտանը</span> Սատուրնի ամենամեծ արբանյակն է։ Ավելի մեծ է, քան <span class="text-purple-300">Մերկուրին</span>։ Ունի լճեր և գետեր, բայց կազմված է հեղուկ մեթանից, այլ ոչ թե ջրից։<br> Գիտնականները կարծում են, որ Տիտանը կարող է ունենալ ստորգետնյա օվկիանոս։',
  },
  {
    id: 20,
    question: "Մոտավորապես քանի՞ տարեկան է Տիեզերքը։",
    answers: ["13.8 միլիարդ տարի", "4.5 միլիարդ տարի", "100 միլիոն տարի"],
    correctIndex: 0,
    image: "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=800&q=80",
    info: 'Կան միլիարդավոր գալակտիկաներ, որոնցից յուրաքանչյուրը միլիարդավոր աստղերով է։ <br>Հասնելու համար մեզ տեսանելի ամենահեռավոր գալակտիկաներին պահանջվում է ավելի քան <span class="text-purple-300">13 միլիարդ լուսային տարի</span>։',
  },
];

interface AnswerState {
  [key: number]: number;
}

interface RevealedState {
  [key: number]: boolean;
}

export default function Home() {
  const [answers, setAnswers] = useState<AnswerState>({});
  const [revealed, setRevealed] = useState<RevealedState>({});
  const [showResult, setShowResult] = useState(false);
  const [showInfo, setShowInfo] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const answeredCount = Object.keys(answers).length;
  const correctCount = Object.entries(answers).filter(
    ([questionId, answerIndex]) => {
      const question = questions.find((q) => q.id === parseInt(questionId));
      return question && question.correctIndex === answerIndex;
    }
  ).length;

  const handleAnswer = (questionId: number, answerIndex: number) => {
    if (answers[questionId] !== undefined) return;
    
    const newAnswers = { ...answers, [questionId]: answerIndex };
    setAnswers(newAnswers);
    
    // Reveal correct answer after a delay
    setTimeout(() => {
      setRevealed((prev) => ({ ...prev, [questionId]: true }));
      
      // Check if all questions are answered and revealed
      if (Object.keys(newAnswers).length === questions.length) {
        setTimeout(() => setShowResult(true), 400);
      }
    }, 400);
  };

  const resetQuiz = () => {
    setAnswers({});
    setRevealed({});
    setShowResult(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getScoreMessage = () => {
    const percentage = (correctCount / questions.length) * 100;
    if (percentage >= 80) {
      return {
        title: "🚀 Աստղային ճշգրտություն!",
        message: "Դուք իսկական տիեզերական մասնագետ եք։ ՆԱՍԱ-ն կհպարտանար ձեր տիեզերական գիտելիքներով։",
        emoji: "🌟",
      };
    } else if (percentage >= 60) {
      return {
        title: "🛸 Հիանալի աշխատանք, տիեզերական կուրսանտ!",
        message: "Դուք ունեք տիեզերքի վերաբերյալ հիանալի գիտելիքներ։ Շարունակեք ուսումնասիրել տիեզերքը։",
        emoji: "✨",
      };
    } else if (percentage >= 40) {
      return {
        title: "🌙 Շարունակեք հասնել աստղերին",
        message: "Տիեզերքը անսահման է և լի հրաշքներով։ Յուրաքանչյուր տիեզերագնաց ինչ-որ տեղից է սկսել իր գործունեությունը։",
        emoji: "💫",
      };
    } else {
      return {
        title: "🌍 Ձեր տիեզերական ճանապարհորդությունը սկսվում է",
        message: "Մի անհանգստացեք։ Տիեզերքը շատ բան ունի մեզ սովորեցնելու։ Փորձեք կրկին և ավելին բացահայտեք։",
        emoji: "🔭",
      };
    }
  };

  if (!mounted) return null;

  return (
    <>
      <div className="bg-gradient" />
      <ParallaxStars />
      <main className="relative z-10 min-h-screen py-8 px-4 bg-transparent">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 
          className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          ՏԻԵԶԵՐՔԻ ԳԱՂՏՆԻՔՆԵՐԸ
        </h1>
        <p className="text-gray-400 text-lg">Փորձեք ձեր գիտելիքները տիեզերքի մասին</p>
      </motion.div>

      {/* Progress Counter */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="sticky top-4 z-20 flex justify-center mb-8"
      >
        <div className="bg-[rgba(20,20,40,0.95)] backdrop-blur-md border border-[rgba(100,100,180,0.4)] rounded-full px-6 py-3 shadow-lg shadow-purple-900/20">
          <span className="text-lg font-medium">
            <span className="text-purple-400">{answeredCount}</span>
            <span className="text-gray-500"> / </span>
            <span className="text-gray-300">{questions.length}</span>
            <span className="text-gray-500 ml-2">պատասխան</span>
            {answeredCount > 0 && (
              <span className="ml-4 text-emerald-400">
                {correctCount} ճիշտ
              </span>
            )}
          </span>
        </div>
      </motion.div>

      {/* Questions */}
      <div className="max-w-2xl mx-auto space-y-6">
        {questions.map((question, index) => {
          const isAnswered = answers[question.id] !== undefined;
          const isRevealed = revealed[question.id] === true;
          const selectedAnswer = answers[question.id];
          const isCorrect = selectedAnswer === question.correctIndex;

          return (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div
                className={`
                  relative overflow-hidden rounded-2xl 
                  bg-[rgba(20,20,40,0.7)] backdrop-blur-sm
                  border transition-all duration-500
                  ${isRevealed 
                    ? isCorrect 
                      ? "border-emerald-500/50 shadow-lg shadow-emerald-500/20" 
                      : "border-red-500/50 shadow-lg shadow-red-500/20"
                    : isAnswered
                    ? "border-purple-500/50 shadow-lg shadow-purple-500/20"
                    : "border-[rgba(100,100,180,0.3)] hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10"
                  }
                `}
              >
                {/* Question Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={question.image}
                    alt={`Question ${question.id}`}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      isAnswered ? "brightness-75" : "brightness-90 hover:brightness-100"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,26,0.95)] via-[rgba(10,10,26,0.3)] to-transparent" />
                  
                  {/* Question Number Badge */}
                  <div className="absolute top-4 left-4 bg-purple-600/90 backdrop-blur-sm text-white text-sm font-bold px-3 py-1 rounded-full">
                    {question.id}/{questions.length}
                  </div>

                  {/* Status Badge */}
                  {isRevealed && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className={`absolute top-4 right-4 text-2xl ${
                        isCorrect ? "text-emerald-400" : "text-red-400"
                      }`}
                    >
                      {isCorrect ? "✓" : "✗"}
                    </motion.div>
                  )}

                  {/* Info Icon - appears after answer is revealed */}
                  {isRevealed && question.info && (
                    <motion.button
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                      onClick={() => setShowInfo(question.id)}
                      className="absolute top-4 right-14 w-8 h-8 rounded-full bg-purple-600/80 hover:bg-purple-500 flex items-center justify-center text-white text-sm font-bold transition-all duration-200 hover:scale-110"
                      title="Info"
                    >
                      ℹ
                    </motion.button>
                  )}
                </div>

                {/* Question Content */}
                <div className="p-5 md:p-6">
                  <h2 className="text-lg md:text-xl font-semibold text-white mb-5 leading-relaxed">
                    {question.question}
                  </h2>

                  {/* Answers */}
                  <div className="space-y-3">
                    {question.answers.map((answer, answerIndex) => {
                      const isSelected = selectedAnswer === answerIndex;
                      const isCorrectAnswer = answerIndex === question.correctIndex;
                      
                      let buttonClass = `
                        w-full text-left px-5 py-4 rounded-xl
                        font-medium transition-all duration-300
                        border-2 relative overflow-hidden
                      `;

                      if (isRevealed) {
                        // After reveal: show correct/wrong colors
                        if (isCorrectAnswer) {
                          buttonClass += " bg-emerald-500/20 border-emerald-500 text-emerald-300";
                        } else if (isSelected && !isCorrectAnswer) {
                          buttonClass += " bg-red-500/20 border-red-500 text-red-300";
                        } else {
                          buttonClass += " bg-gray-800/30 border-gray-700/50 text-gray-500 opacity-60";
                        }
                      } else if (isAnswered) {
                        // Before reveal but answered: show selected state
                        if (isSelected) {
                          buttonClass += " bg-purple-600/40 border-purple-500 text-purple-200 animate-pulse";
                        } else {
                          buttonClass += " bg-gray-800/30 border-gray-700/50 text-gray-400 opacity-70";
                        }
                      } else {
                        buttonClass += ` 
                          bg-[rgba(40,40,80,0.5)] border-[rgba(100,100,180,0.3)] 
                          text-gray-200 cursor-pointer
                          hover:bg-purple-600/30 hover:border-purple-500/60 hover:text-white
                          hover:scale-[1.02] active:scale-[0.98]
                        `;
                      }

                      return (
                        <motion.button
                          key={answerIndex}
                          onClick={() => handleAnswer(question.id, answerIndex)}
                          disabled={isAnswered}
                          whileTap={!isAnswered ? { scale: 0.98 } : {}}
                          className={buttonClass}
                        >
                          <span className="flex items-center gap-3">
                            <span className={`
                              w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                              ${isRevealed && isCorrectAnswer 
                                ? "bg-emerald-500 text-white" 
                                : isRevealed && isSelected && !isCorrectAnswer
                                ? "bg-red-500 text-white"
                                : isAnswered && isSelected
                                ? "bg-purple-500 text-white"
                                : "bg-purple-600/50 text-purple-200"
                              }
                            `}>
                              {String.fromCharCode(65 + answerIndex)}
                            </span>
                            <span>{answer}</span>
                          </span>
                          
                          {isRevealed && isCorrectAnswer && (
                            <motion.span
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-400 text-lg"
                            >
                              ✓ Ճիշտ
                            </motion.span>
                          )}
                          {isRevealed && isSelected && !isCorrectAnswer && (
                            <motion.span
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="absolute right-4 top-1/2 -translate-y-1/2 text-red-400 text-lg"
                            >
                              ✗ Սխալ
                            </motion.span>
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Try Again Button - Shows when all questions are answered */}
      <AnimatePresence>
        {answeredCount === questions.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="flex flex-col items-center gap-4 mt-10"
          >
            <div className="text-center">
              <p className="text-gray-400 mb-2">Հարցաշարն ավարտված է</p>
              <p className="text-2xl font-bold">
                <span className="text-emerald-400">{correctCount}</span>
                <span className="text-gray-500"> / </span>
                <span className="text-gray-300">{questions.length}</span>
                <span className="text-gray-400 ml-2 text-lg">Ճիշտ պատասխան</span>
          </p>
        </div>
            <div className="flex gap-4">
              <button
                onClick={() => setShowResult(true)}
                className="
                  px-6 py-3 rounded-xl font-semibold text-white
                  bg-[rgba(40,40,80,0.7)] border border-purple-500/50
                  hover:bg-purple-600/30 hover:border-purple-500
                  transform hover:scale-105 active:scale-95
                  transition-all duration-300
                "
              >
                📊 Տեսնել արդյունքը
              </button>
              <button
                onClick={resetQuiz}
                className="
                  px-6 py-3 rounded-xl font-semibold text-white
                  bg-gradient-to-r from-purple-600 to-pink-600
                  hover:from-purple-500 hover:to-pink-500
                  transform hover:scale-105 active:scale-95
                  transition-all duration-300
                  shadow-lg shadow-purple-500/30
                "
              >
                🚀 Կրկին փորձել
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Info Modal */}
      <AnimatePresence>
        {showInfo !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto"
            onClick={() => setShowInfo(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative max-w-lg w-full p-6 rounded-2xl
                bg-gradient-to-br from-[rgba(30,30,60,0.98)] to-[rgba(20,20,50,0.98)]
                border border-purple-500/40
                shadow-2xl shadow-purple-500/20
                max-h-[85vh] overflow-y-auto my-auto
              "
            >
              {/* Close Button */}
              <button
                onClick={() => setShowInfo(null)}
                className="
                  absolute top-3 right-3 w-8 h-8 rounded-full
                  bg-gray-700/50 hover:bg-gray-600/70
                  flex items-center justify-center
                  text-gray-400 hover:text-white
                  transition-all duration-200
                "
              >
                ✕
              </button>

              {/* Info Icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white text-xl">
                  ℹ
                </div>
                <h3 className="text-xl font-bold text-purple-300">
                  Հետաքրքիր փաստեր
                </h3>
              </div>

              {/* Info Content */}
              <p className="text-gray-300 leading-relaxed text-base" dangerouslySetInnerHTML={{ __html: questions.find(q => q.id === showInfo)?.info || '' }} />
              {/* OK Button */}
              <button
                onClick={() => setShowInfo(null)}
                className="
                  mt-6 w-full py-3 rounded-xl font-semibold text-white
                  bg-purple-600 hover:bg-purple-500
                  transition-all duration-200
                "
              >
                Պարզ է
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Result Modal */}
      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowResult(false)}
          >
<motion.div
              initial={{ scale: 0.5, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative max-w-md w-full p-8 rounded-3xl
                bg-gradient-to-br from-[rgba(30,30,60,0.98)] to-[rgba(20,20,40,0.98)]
                border border-purple-500/30
                shadow-2xl shadow-purple-500/20
                text-center
              "
            >
              {/* Close Button */}
              <button
                onClick={() => setShowResult(false)}
                className="
                  absolute top-4 right-4 w-8 h-8 rounded-full
                  bg-gray-700/50 hover:bg-gray-600/70
                  flex items-center justify-center
                  text-gray-400 hover:text-white
                  transition-all duration-200
                "
              >
                ✕
              </button>

              {/* Decorative elements */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-6xl">
                {getScoreMessage().emoji}
              </div>

              <div className="mt-6">
                <h2 
                  className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  {getScoreMessage().title}
                </h2>

                {/* Score Circle */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <svg className="w-full h-full -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="rgba(100,100,180,0.3)"
                      strokeWidth="8"
                      fill="none"
                    />
                    <motion.circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: correctCount / questions.length }}
                      transition={{ duration: 1, delay: 0.3 }}
                      style={{ strokeDasharray: "352", strokeDashoffset: "0" }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-3xl font-bold text-white"
                    >
                      {correctCount}
                    </motion.span>
                    <span className="text-gray-400 text-sm">of {questions.length}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-8 leading-relaxed">
                  {getScoreMessage().message}
                </p>

<div className="flex gap-3 justify-center">
                  <button
                    onClick={() => setShowResult(false)}
                    className="
                      px-6 py-3 rounded-xl font-semibold text-gray-300
                      bg-gray-700/50 border border-gray-600
                      hover:bg-gray-600/70 hover:text-white
                      transform hover:scale-105 active:scale-95
                      transition-all duration-300
                    "
                  >
                    Վերանայել պատասխանները
                  </button>
                  <button
                    onClick={resetQuiz}
                    className="
                      px-6 py-3 rounded-xl font-bold text-white
                      bg-gradient-to-r from-purple-600 to-pink-600
                      hover:from-purple-500 hover:to-pink-500
                      transform hover:scale-105 active:scale-95
                      transition-all duration-300
                      shadow-lg shadow-purple-500/30
                    "
                  >
                    🚀 Կրկին փորձել
                  </button>
                </div>
        </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mt-16 pb-8 text-gray-500 text-sm"
      >
        Made with ✨ for space enthusiasts
      </motion.footer>
      </main>
    </>
  );
}
