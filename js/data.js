/*
water,0
fish,1
sheep,2
cow,3
twin,4
crab,5
lion,6
girl,7
pair,8
scor,9
archer,10
goat,11
*/


const qnaList = [
  {
    q: '1. 지금은 월요일 아침, 날씨도 엄청 좋다.<br>나는…',
    a: [
      { answer: 'a. 자, 이번주도 열심히 살아야지!', type: [0, 2, 5, 9] },
      { answer: 'b. 조금 더 자고 싶다..', type: [1, 6, 7, 8] },
      { answer: 'c. 어떻게 벌써 월요일이야.. 제발 죽여줘..', type: [3, 4, 10, 11] },
    ]
  },
  {
    q: '2. 화창한 오후,<br>할 일은 쌓였는데 친구가 저녁에 술 마시자 한다.<br>나는…',
    a: [
      { answer: 'a. 좋아, 지금부터 버스트다! 저녁까지 일 끝낼게.', type: [0, 2, 5, 8] },
      { answer: 'b. 술 좋아! 너무 좋아!.. 할 일?.. 으응..뭐.. 내일하면ㄷ..ㅙ~..', type: [1, 4, 6, 9] },
      { answer: 'c. 어? 나 약속있는데..미안(바로 집가서 혼자 쉬어야지)', type: [3, 7, 10, 11] },
    ]
  },
  {
    q: '3. 오랜만에 만난 친구.<br>먼저 만나자 한 건 이유가 있었구나..?<br>두시간째 혼자 말하고있다.<br>나는…',
    a: [
      { answer: 'a. 헐 진짜? 대박.. 그래서 그 사람이 뭐라했는데? 엥?? 말도안돼!!(찐텐)', type: [1, 4, 5, 8, 10] },
      { answer: 'b. 흠.. 야 근데 그건 너가 잘못한것같은디?', type: [0, 2, 6] },
      { answer: 'c. 아..어어..응(괜히 나왔어)', type: [3, 7, 9, 11] }
    ]
  },
  {
    q: '4. 친구왈 오늘 이야기 들어줬으니<br>자기가 사겠다 한다.<br>나는…',
   a: [
     { answer: 'a. 헐.. 그럼 다음주에 또 마시자 그때 내가 살게!', type: [1, 2, 6, 8, 10] },
     { answer: 'b. 그런게 어딨어, 더치페이해. ', type: [0, 5, 7] },
     { answer: 'c. 엥 왜그래ㅠㅠ 나도 재밌었는데..(아싸 개이득)', type: [3, 4, 9, 11] },
   ]
  },
  {
    q: '5. 어제 너무 많이 마셨나..?<br>일어났더니 머리가 깨질 것 같다.<br>나는…',
    a: [
      { answer: 'a. 그래도..일어나서 씻고, 준비할거 다 하고, 입을 옷 까지 확인하고 나가야지..', type: [0, 1, 5, 7, 8] },
      { answer: 'b. 아 좀 힘든데.. 오늘은 모자+마스크+트레이닝복이다.', type: [2, 3, 9]},
      { answer: 'c. 나 죽어 오늘 못나가 절대 못나가', type: [4, 6, 10, 11] },
    ]
  },

  {
    q: '6. 어찌어찌 출근완료.<br>근데 회사 동기가 오늘까지 완성한다던<br>PPT를 안해왔다.<br>나는…',
    a: [
      { answer: 'a. 이건 오늘까지 해주기로 한거잖아,, 이따 1시까지 완성해줘. 나도 도와줄게.', type: [2, 4, 5, 6] },
      { answer: 'b. 음.. 그.. 혹시.. 언제까지..... 가능한지.. 알수있을까.....???', type: [0, 1, 8, 10] },
      { answer: 'c. ...(ㅁㄹ이ㅏ멀ㅇ;ㅣㅏㅇ머;ㅁㄹ)', type: [3, 7, 9, 11] },
    ]
  },
  {
    q: '7. 프로젝트 발표 1시간 전.<br>나는…',
    a: [
      { answer: 'a. 우선 들어가서 13걸음 걸어가고 그때 왼쪽 얼굴 45도로 돌려서 살짝 미소짓고 자연스럽게 인사하고…', type: [0, 5, 7, 9 ] },
      { answer: 'b. 으.. 떨려.. 긴장돼.. 무서우니까 유튜브나 보면서 기다려야겠다.', type: [1, 3, 6, 10] },
      { answer: 'c. 발표? 쉽지ㅋ', type: [2, 4, 8, 11 ] },
    ]
  },
  {
    q: '8. 이렇게 바쁘게 살았더니 벌써 금요일이다.<br>퇴근할 생각하니까 설레!<br>오늘 나는…',
    a: [
      { answer: 'a. 일단 마시고보자 애들 다불러ㅓㅓㅓ', type: [1, 2, 4, 6, 8] },
      { answer: 'b. 일주일 너무 힘들었어.. 집 가서 치킨먹으면서 넷플릭스 조져야겠다ㅎ', type: [0, 3, 10, 11] },
      { answer: 'c. 끙.. 아 놀까..? 아 근데 개피곤한데.. 아 그래도 금요일인데.. 아 아냐 힘든데..', type: [5, 7, 9] },
    ]
  },
  {
    q: '9. 갑자기 걸려 오는 전화,<br>"고객님 이번 이벤트 당첨되셔서 뮤지컬 무료로 관람하실 수 있으신데요…".<br>나는…',
    a: [
      { answer: 'a. 꺄아아악 주말에 바로 보러가야지!', type: [1, 4, 8, 9] },
      { answer: 'b. ("고객님"할 때 전화 끊어서 당첨된지도 모름)', type: [2, 6, 10, 11] },
      { answer: 'c. 흠 보이스피싱아냐..? 무서운데..', type: [0, 3, 5, 7] },
    ]
  },
  {
    q: '10. 드디어 주말이다!<br>친구랑 내일 당일치기 강릉 여행을 떠나기로 했다.<br>나는…',
    a: [
      { answer: 'a. 네이버에..들어가서..강릉 맛집..검색..', type: [0, 3, 5, 7, 10] },
      { answer: 'b. 야야 찐맛집은 강릉 존맛이라고 검색해야됨. 그리고 내가 맛있는 곳 알아, 가봤어. 거기가자!', type: [1, 4, 8, 9] },
      { answer: 'c. 강릉의 아무도 모르는 미지의 맛집을 개척하는게 이번여행 목표다.', type: [2, 6, 11] },
    ]
  },
  {
    q: '11. 즐거운 여행을 마치고 기념품 소품샵에 들어갔다.<br>나는…',
    a: [
      { answer: 'a. 일단 나 기념품 한 37개정도 사야돼서.. 후딱 보자', type: [1, 2, 4, 8, 10] },
      { answer: 'b. 우와 이거 너무 예쁜데? 내 방에 두면 딱이겠다. 난 이거 한개 사가야지!', type: [0, 5, 7, 11] },
      { answer: 'c. (들어온지 3분) 다봤지?.. 나가자.', type: [3, 6, 9] },
    ]
  },
  {
    q: '12. 벌써 주말이 끝났다.<br>침대에 누웠더니 무언가 내 머릿속을 뒤덮는데…',
    a: [
      { answer: 'a. 근데.. 그 때 걔 나한테 왜그런거지? 날 싫어하나? 아냐 오히려 좋아하나?.. 아니 그리고 걔는 또…', type: [1, 2, 4] },
      { answer: 'b. 이번주도 빡세게 살았다. 한국 최고의 인공지능 전문인재가 되어야하니까 다음주에는 강화학습 더 공부하고 또…', type: [0, 5, 7, 8, 9] },
      { answer: 'c. 아늑한 베개가 내 머리를 뒤덮었다. 쿨쿨..', type: [3, 6, 10, 11] },
    ]
  }
]
const infoList = [
  {
    name: '내가 진짜 진정한 침착맨<br><물병자리>',
    desc: '항상 정직한 인생을 살아온 당신!<br>무엇을 봐도 객관적으로 볼 줄 알고 침착하게 판단할 수 있는 안목을 갖고 계시네요.<br>물병자리가 선택한 일은 결국 물병자리의 입장에서 최선의 선택이기에 그 일에 갖는 책임감도 어마어마해요.<br>물론 그 선택이 옳다면 프라이드가 쭉쭉 올라가고, 본인도 그걸 즐겨서 명예를 중요시하지만,,<br>반면에 선택이 조금이라도 틀리고 잘못된 것 같다면, 상처도 쉽게 받는 타입이에요. 항상 침착한 모습에 다들 모르겠지만 속앓이도 많이 하는군요ㅠㅠ ',
    comp: '메이아이',
    info: '영상을 기반으로 오프라인 방문자를 분석해주는 이 곳,<br>침착하게 문제를 해결하는 당신과 닮았어요!',
    complink: 'https://may-i.io/',
  },
  {
    name: '인간 인스타그램 그 자체<br><물고기자리>',
    desc: '누구에게나 친절하고 다정한 당신은,<br>당신을 아는 사람들이라면 마음 한켠에 다들 당신을 품고살거에요..★<br>그만큼 성별 구분 없이 모두에게 인기 많은 로맨티스트인 물고기자리에요.<br>게다가 상상력도 풍부하고 예술적인 감각이 뛰어나서 인스타그램이 사람이된다면 당신이 될 것 같아요.<br>그런데 이제 하도 인기도 많고 사람을 좋아해서인지 바람둥이라는 오해를 많이받아요.<br>사실 완전 거짓말은 아니에요..(속닥)<br>모두가 본인을 좋아하는 걸 가장 즐기는 타입중 하나에요! ',
    comp: '아이디어콘서트',
    info: '웹툰을 영상으로 만들어주는 이 곳,<br>예술적인 감성을 가진 당신과 닮았어요!',
    complink: 'http://ideaconcert.com/',
  },
  {
    name: '이구역의 씹인싸<br><양자리>',
    desc: '자기주장 확고하고, 또 외향적이라 자기 의견 목소리 크게 잘 말해요.<br>게다가 혁신적인 생각과 아이디어가 넘쳐나서 이 시대의 리더와 같은 타입이에요.<br>항상 조직에서 장을 많이 맡기도하고, 주위 어른들에게 신뢰를 많이 받으며 자라왔어요.<br>때문에인지 모두가 본인을 따르길 원하고, 하나하나의 인간관계를 중요하게 생각하는 편이에요.<br>그렇게 수많은 사람에 둘러 쌓여 살아온 양자리는 쉽게 외로움을 타고 한번 우울해지면 끝도없이 우울해져요.ㅠㅠ ',
    comp: '드림에이스',
    info: '자동차 기업의 혁신을 이끄는 이 곳,<br>리더의 자질을 갖춘 당신과 닮았어요!',
    complink: 'http://drimaes.com/',
  },
  {
    name: '난 짱구고 넌 맹구야<br><황소자리>',
    desc: '듬직하고 맡은일에 최선을 다하는 성실한 모습을 보여줘요.<br>여러분의 주위 사람들은 여러분을 볼 때 항상 알 수 없는 여유로움이 느껴진다고 생각하고 있어요.<br>마치 짱구에 나오는 맹구같이 편안하고, 따뜻한 사람이에요.<br>때문에 주위에는 항상 사람들이 넘쳐나고, 여러분에게 기대고싶어하는 사람들도 많이 있어요. <br>하지만 여유로운 성격탓인지, 약간 느리다는 말을 자주 들어요. 빠른 행동을 바라는 사람이나 적극적인 사람들로부터는 부담감을 느끼고 좀 피하려는 경향이 강해요. ',
    comp: '티쓰리큐',
    info: '국내 최초, AI 통합 플랫폼을 보유한 이곳,<br>국밥같이 든든한 당신과 닮았어요!',
    complink: 'http://t3q.com/home/',
  },
  {
    name: '완전 하이틴 미드의 완벽한 여주인공<br><쌍둥이자리>',
    desc: '천성이 머리가 잘 돌아가서 영리하고 재치가 넘쳐요.<br>어떻게 해야 사람들이 좋아하는지 꿰고 있어서 항상 주위에 사람들이 넘쳐나고, 본인도 그걸 너무나도 좋아해요.<br>친구들에게 뿐 아니라 이성에게도 인기가 많은데 막상 본인은 자유로운걸 사랑해서 누군가와 진지한 만남은 최대한 피하려고해요.<br>이렇게 머리가 너무 좋은 탓일까요..? 왜인지 머리 믿고 좀 불성실한 것 같은 모습을 보일 때도 있어요. 항상 대충해도 최상의 결과물을 만들어내왔거든요.<br>뿐만아니라 감수성이 무지 풍부한데, 딱 거기까지에요. 생각과 행동은 이성이 판단해서 오히려 차갑게 느껴질 때도 있지만, 사실 마음 속으론 다 느끼고 있어요!',
    comp: '코그콤',
    info: '문서 찾는 기술의 선구자인 이곳,<br>너무나도 똑똑한 당신과 닮았어요!',
    complink: 'http://www.cogcom.kr/',
  },
  {
    name: '완전 마블식 히어로의 정석<br><게자리>',
    desc: '항상 성실한 사람들이에요.<br>꼼수같은건 별로 안좋아하고, 무조건 노력으로 밀어붙여서 승리하는 게자리랍니다.<br>재능 믿고 불성실한 모습을 가장 싫어하고 자신만큼 성실한건 아니더라도 곁에 따라올 수 있는 사람들을 좋아하는편이에요.<br>감수성도 풍부하고 동정심이 너무 깊어서 뭔가 안타까운 장면을 보면 참지못해요.<br>사람간의 의리를 정말 중요하게 생각해서 상대를 실망시키는 일이 정말 드물어요. 그치만 자신과 잘 맞는 사람을 좋아하기 때문에 모두에게 그런건 아니에요.<br>게자리의 매력을 확실하게 보려면 많~이 친해져야 볼 수 있어요!',
    comp: '큐브엔시스',
    info: '데이터를 시각화해주고 분석해주는 이곳,<br>성실함의 아이콘인 당신과 닮았어요!',
    complink: 'http://cubensys.co.kr/',
  },
  {
    name: '완전 하이틴 미드의 완벽한 남주인공<br><사자자리>',
    desc: '카리스마가 넘치는 사람들이에요.<br>아닌건 아닌거고, 싫은건 싫은거에요. 우유부단하게 말 못하고 넘어가는거? 사자자리에겐 그런거 없어요. 말할건 말해야죠.<br>대부분 몸으로 하는 분야에선 뭘해도 탑클래스에요. 운동 좋아하고 게임도 좋아해요.<br>어떤 감정이 들었을 때, 깊게 생각하며 어쩔줄 몰라하기보단 단면적인 감정을 바로 표출하기 때문에 단순해보일 수도 있지만, 그냥 호불호가 확실한거에요. 고민하지 않는거죠.<br>그렇지만 이런 성격 때문에 주위와 가끔 트러블이 발생하는 경우도 있어요. 하지만 또 시원시원한 성격 덕에 금방 해결하고 넘어가기도해요.',
    comp: '엘렉시',
    info: '딥러닝 기반 보안 시스템을 구축한 이곳,<br>강력한 당신과 닮았어요!',
    complink: 'https://www.ellexi.com/',
  },
  {
    name: '헤르미온느 그 자체<br><처녀자리>',
    desc: '지적이고 생각이 엄청 깊어요.<br>어떤 상황에서 무슨 일이 벌어질지 하나하나 다 생각하고 대비해요. 때문에 누군가 봤을 때 과묵한 편이라고 느끼기도해요.<br>실제로 조용하기도 하지만, 할말을 안하는건아니에요. 생각이 깊기 때문에 주위 사람들에게 완벽한 모습을 보여주기 위해 맡은 역할에 최선을 다하는, 책임감 강한 모습을 보여줘요.<br>모든걸 대비하는 철저히 계획적인 성격이고, 자신의 생각과 다른 결과가 나타나면 무척 당황스러워해요.<br>누군가는 조금 까칠하다고 생각하기도하지만, 사실 속이 엄청 깊고 배려 잘하는 처녀자리에요. ',
    comp: '스톤랩',
    info: 'Medical AI의 혁신 솔루션을 제공하는 이곳,<br> 꼼꼼하고 섬세한 당신과 닮았어요!',
    complink: 'https://stonelab.kr/',
  },
  {
    name: '카사노바..카사노바..야이..<br><천칭자리>',
    desc: '외향적이라 대체로 인기가 많은 다른 유형들과는 다르게, 천칭자리는 그냥 로맨틱한 사람이에요.<br>말 한마디 한마디에 넘치는 센스를 엿볼 수 있고, 깔끔하고 단아한 대화 수준에 지적인 이미지까지 갖추고있어요.<br>타인을 이해해주고 공감하는건 그냥 당연한거고, 누군가에게 작은 선물이라도 받으면 정말 기뻐하고 행복해하는 모습을 보여줘요.<br>사소하게 말하고 넘어간 것들도 전부 기억하며 전형적인 스윗함을 보여줘요.<br>그치만 이래서일까요? 주위에 이성도 많고 약간 바람둥이같은 모습으로 보여질 수도 있어요. 하지만 사실 그냥 매너가 몸에 배어있는거지 절대 찐 바람둥이는 아니에요. ',
    comp: '아스크스토리',
    info: '지능형 환경제어로 안락한 공기를 만들어주는 이곳,<br>매너가 몸에 배인 당신과 닮았어요!',
    complink: 'https://www.askstorygroup.com/',
  },
  {
    name: '그냥 소년만화 주인공 그 자체<br><전갈자리>',
    desc: '따뜻해보이고 다정해보이며 약간은 가벼워보이는 모습과는 다르게, 실제로 많은 사람들이 전갈자리에게 의지해요.<br>듬직한 스타일이라기보단 어떤 위기가 닥쳤을 때, 뛰어난 통찰력을 보여주며 상황을 해결하는 주인공은 항상 전갈자리였어요.<br>강한 승부욕을 갖고있고 지는건 너무너무 싫어해요. 마냥 노는 것처럼 보이지만 항상 자기 자신을 발전시키기 위해 뒤에서 어마어마한 노력을 펼치고있어요. 진지할 땐 진지할 줄 아는 소년만화 주인공 같은 사람이에요.<br>하지만 너무 강한 승부욕으로 인해서, 가끔 혼자 스트레스 받고 많이 힘들어 할 때도 있어요. ',
    comp: '디지로그',
    info: '농업 기술의 혁명으로 세계 농업대회에서 꾸준히 수상중인 이곳,<br>만화 속 주인공같은 당신과 닮았어요!',
    complink: 'https://www.digilog.io/',
  },
  {
    name: '달달한 딸기 케이크같은 사람<br><사수자리>',
    desc: '생기가 넘치고 재밌는 사람이에요.<br>인간 비타민이라 주위 사람들이 사수자리를 너무 사랑하고 아껴줘요. 마찬가지로 사수자리 역시 곁에 있는 사람들을 아끼고 잘 챙겨주죠.<br>같이있으면 항상 주변인들의 웃음장벽 허물어버리고 깔깔소리만 넘치게 만들어요.<br>단순하고 쉬운걸 좋아해요. 복잡하고 진지한건 딱 질색하거든요.<br>하지만 이래서일까요? 사람 사이의 관계에서도 진지한 건 싫어해요. 또 모두와 평등하게 잘 지내는걸 좋아하지 한명의 편만 들어주는건 별로 선호하지 않아요. 싸움이라도 일어나면 귀찮아서 그냥 연락을 끊어버리기도해요. ',
    comp: '블루프린트랩',
    info: 'AR을 통해 가상 피팅을 해주는 이곳,<br>단순한 방법으로 모두를 행복하게 해주는 당신과 닮았어요!',
    complink: 'https://www.blueprint-lab.com/'
  },
  {
    name: '내가 최고야<br><염소자리>',
    desc: '자기 자신을 가장 사랑하는 염소자리에요.<br>마음속의 순위에서 늘 본인이 1위이기때문에 자기 자신에게 부끄러울 짓은 절대 안해요. 비밀 보장 너무 잘해줘서 믿을 수 있고, 양심적인 사람이에요.<br>게다가 자존감이 굉장히 높아서 타인에게도 항상 친절해요. 자신의 울타리 안에 있는 사람이다 싶으면 정말 헌신적인 최고의 친구이자 가족이에요.<br>하지만 자신을 너무 아낀다는 탓에 본인이 싫어하거나 손해를 보는 상황이면 전부 피해버려서 가끔 너무 냉철해보이기도해요.<br>그만 그만큼 또 더 남들에게 잘해주려는 염소자리에요. ',
    comp: '패션에이드',
    info: 'AI를 통해 스타일을 추천해주는 이곳,<br>자신을 가꿀 줄 아는 당신과 닮았어요!',
    complink: 'https://www.fashionade.ai/posts'
  },
]
